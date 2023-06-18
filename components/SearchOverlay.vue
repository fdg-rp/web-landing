<template>
  <Overlay>
    <div class="card">
      <header class="search_header">
        <form class="search_form">
          <input class="search_input" type="text" placeholder="Search FDG docs" v-model="searchTerm" />
        </form>
      </header>
      <main class="search_main" v-if="resultDocs.length > 0">
        <div class="search_subheader">Matching Documents</div>
        <ul class="search_results">
          <li v-for="(doc, i) in resultDocs" :key="i">
            <a :href=doc._path>
              <div>
                <div class="search_results_icon">
                  <svg fill="#bec3c9" width="20" height="20" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353Zm-338.823-1670.74 315.443 315.447h-315.443V136.32Zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83ZM576.823 1242.353h790.589v-112.94H576.823v112.94Zm0-451.765h903.53V677.647h-903.53v112.941Zm0 677.647h451.765v-112.941H576.823v112.941Zm0-451.764h677.648V903.53H576.823v112.941Zm0-451.765h451.765V451.765H576.823v112.941Z"
                      fill-rule="evenodd" />
                  </svg>
                </div>
                <div class="search_results_content">
                  <div class="highlight_dynamic">{{ doc.title }}</div>
                  <div class="highlight_dynamic">{{ doc.description }}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </main>
      <main class="search_main" v-else>
        <div class="search_instruct">
          <span v-if="!searchTerm || searchTerm.length < 1">Start typing to search FDG Docs</span>
          <span v-else>No results</span>
        </div>
      </main>
    </div>
  </Overlay>
</template>

<script setup>
import { watchDebounced } from '@vueuse/core'

const searchTerm = ref('')
const resultDocs = reactive([])

// Search
async function searchDocs() {
  if (!searchTerm.value || searchTerm.value.length < 1) return
  const { data } = await useAsyncData('home', () => queryContent('/').where({ _partial: false, _draft: false }).only(['title', 'description', '_path']).find())
  const st = searchTerm.value.toLowerCase()
  const filtered = data.value.filter(d => (d.title && d.title.toLowerCase().includes(st)) || (d.description && d.description.toLowerCase().includes(st))).slice(0, 4)
  resultDocs.splice(0, resultDocs.length)
  resultDocs.push(...filtered)
  nextTick(() => {
    highlightText(st)
  })
  return
}
watchDebounced(
  searchTerm,
  async () => {
    await searchDocs()
  },
  { debounce: 400, maxWait: 800 },
)

// Highlighting
function highlightText(text) {
  if (!text || text.length < 1) return
  const elements = document.getElementsByClassName('highlight_dynamic');
  const regExpPattern = new RegExp(text, 'gi')
  for (const element of elements) {
    let text = element.innerHTML
    text = text.replace(/(<mark style="background-color:#1aafff;">|<\/mark>)/gim, '');
    const newText = text.replace(regExpPattern, '<mark style="background-color:#1aafff;">$&</mark>');
    element.innerHTML = newText
  }
}
</script>

<style scoped>
.card {
  background-color: #201e1b;
  border-radius: 6px;
  padding: 12px;
  max-width: 568px;
  width: 568px;
  margin: 64px auto auto;
  z-index: 11;
  position: relative;
}

.search_header {
  width: 100%;
}

.search_main {
  max-height: 488px;
  overflow-y: overlay;
  margin-top: 12px;

}

.search_form {
  border-radius: 4px;
  background-color: black;
  width: 100%;
  position: relative;
  display: flex;
  height: 56px;
  border: 2px solid #1aadff;
  padding: 0 12px;
}

.search_input {
  width: 100%;
  background-color: transparent;
  height: 100%;
  appearance: none;
  border: 0;
  color: #f5f6f7;
  font: inherit;
  font-size: 1.2em;
  outline: none;
}

.search_subheader {
  padding-top: 8px;
  font-size: 0.85em;
  font-weight: 600;
  line-height: 23px;
  color: #1aadff;
}

.search_results {
  list-style: none;
  margin: 0;
  padding: 0;
}

.search_results>li {
  border-radius: 4px;
  display: flex;
  padding-bottom: 4px;
  position: relative;
}

.search_results>li>a {
  background-color: #090a11;
  border-radius: 4px;
  border: 2px solid transparent;
  display: block;
  padding-left: 12px;
  width: 100%;
}

.search_results>li>a:hover {
  background-color: #1aafff6e;
  border-color: #1aafff;

}

.search_results>li>a>div {
  align-items: center;
  color: #bec3c9;
  display: flex;
  flex-direction: row;
  height: 56px;
  padding: 0 12px 0 0;
}

.search_results_icon {
  stroke-width: 1.4;
  height: 20px;
  width: 20px;
}

.search_results_content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-weight: 500;
  justify-content: center;
  line-height: 1.2em;
  margin: 0 8px;
  overflow-x: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}

.search_results_content>div:first-of-type {
  font-size: 0.9em;
}

.search_results_content>div:last-of-type {
  font-size: 0.75em;
}

.search_instruct {
  font-size: 1em;
  text-align: center;
  padding: 25px 0;
  color: #bec3c9;
}
</style>
