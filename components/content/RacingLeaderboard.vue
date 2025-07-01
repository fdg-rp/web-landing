<!-- filepath: d:\FDG\DevWeb\sites\landing\components\content\RacingLeaderboard.vue -->
<template>
  <div class="leaderboard-header-row">
    <h3 class="leaderboard-title">Ranked Leaderboard</h3>
    <div class="search-box" @click="focusSearchInput">
      <span class="material-icons-outlined search-icon">search</span>
      <input type="text" v-model="searchQuery" class="search-input" placeholder="Search" @input="onSearch" ref="searchInputRef" />
    </div>
  </div>
  <div class="leaderboard-container">
    <!-- Material Icons font link -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet" />
    <table class="leaderboard-table">
      <thead>
        <tr>
          <th @click="toggleSort('position')" class="sortable-th ranking-th" @mouseenter="hoveredHeader = 'position'" @mouseleave="hoveredHeader = null">
            <span class="th-content">
              <span>#</span>
              <span class="sort-arrow" :class="{ 'arrow-force-visible': sortKey === 'position' }" v-if="sortKey === 'position' || hoveredHeader === 'position'">
                <span v-if="sortKey === 'position'" class="material-icons-outlined arrow-visible">{{
                  sortOrder === 'asc' ? 'arrow_upward' : 'arrow_downward'
                }}</span>
                <span v-else class="material-icons-outlined arrow-faded">arrow_downward</span>
              </span>
            </span>
          </th>
          <th @click="toggleSort('name')" class="sortable-th name-th" @mouseenter="hoveredHeader = 'name'" @mouseleave="hoveredHeader = null">
            <span class="th-content">
              <span>Name</span>
              <span class="sort-arrow" :class="{ 'arrow-force-visible': sortKey === 'name' }" v-if="sortKey === 'name' || hoveredHeader === 'name'">
                <span v-if="sortKey === 'name'" class="material-icons-outlined arrow-visible">{{
                  sortOrder === 'asc' ? 'arrow_upward' : 'arrow_downward'
                }}</span>
                <span v-else class="material-icons-outlined arrow-faded">arrow_downward</span>
              </span>
            </span>
          </th>
          <th @click="toggleSort('wins')" class="sortable-th wins-th" @mouseenter="hoveredHeader = 'wins'" @mouseleave="hoveredHeader = null">
            <span class="th-content">
              <span>Wins</span>
              <span class="sort-arrow" :class="{ 'arrow-force-visible': sortKey === 'wins' }" v-if="sortKey === 'wins' || hoveredHeader === 'wins'">
                <span v-if="sortKey === 'wins'" class="material-icons-outlined arrow-visible">{{
                  sortOrder === 'asc' ? 'arrow_upward' : 'arrow_downward'
                }}</span>
                <span v-else class="material-icons-outlined arrow-faded">arrow_downward</span>
              </span>
            </span>
          </th>
          <th @click="toggleSort('placements')" class="sortable-th placements-th" @mouseenter="hoveredHeader = 'placements'" @mouseleave="hoveredHeader = null">
            <span class="th-content">
              <span>Placements</span>
              <span
                class="sort-arrow"
                :class="{ 'arrow-force-visible': sortKey === 'placements' }"
                v-if="sortKey === 'placements' || hoveredHeader === 'placements'"
              >
                <span v-if="sortKey === 'placements'" class="material-icons-outlined arrow-visible">{{
                  sortOrder === 'asc' ? 'arrow_upward' : 'arrow_downward'
                }}</span>
                <span v-else class="material-icons-outlined arrow-faded">arrow_downward</span>
              </span>
            </span>
          </th>
          <th @click="toggleSort('mmr')" class="sortable-th mmr-th" @mouseenter="hoveredHeader = 'mmr'" @mouseleave="hoveredHeader = null">
            <span class="th-content">
              <span>MMR</span>
              <span class="sort-arrow" :class="{ 'arrow-force-visible': sortKey === 'mmr' }" v-if="sortKey === 'mmr' || hoveredHeader === 'mmr'">
                <span v-if="sortKey === 'mmr'" class="material-icons-outlined arrow-visible">{{
                  sortOrder === 'asc' ? 'arrow_upward' : 'arrow_downward'
                }}</span>
                <span v-else class="material-icons-outlined arrow-faded">arrow_downward</span>
              </span>
            </span>
          </th>
          <th class="awards-th">Awards</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(racer, idx) in sortedRacers" :key="racer.name" :class="{ 'alt-row': idx % 2 === 1 }">
          <td>{{ mmrRanking.indexOf(racer.name) + 1 }}</td>
          <td>{{ racer.name }}</td>
          <td>{{ racer.wins }}</td>
          <td>{{ racer.placements }}</td>
          <td>
            <span :class="'mmr-badge'" :style="mmrStyle(racer.mmr)">
              {{ racer.mmr }}
            </span>
          </td>
          <td class="awards-cell">
            <span v-for="award in racer.awards" :key="award.icon" class="award-icon-wrapper">
              <img :src="award.icon" :alt="award.text" class="award-icon" />
              <span class="award-tooltip">
                <span class="award-tooltip-dot"></span>
                {{ award.text }}
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';

// Configurable MMR ranges and colors (darker + teal for 1300+)
const mmrConfig = [
  { min: 1900, color: '#E03F3F', border: '#F2556A' }, // darker red
  { min: 1700, color: '#EF6E26', border: '#F9A825' }, // darker orange
  { min: 1500, color: '#BA34D6', border: '#E089F5' }, // darker pink
  { min: 1300, color: '#14958C', border: '#38B2AC' }, // teal tones
  { min: 1100, color: '#2F6FE0', border: '#4C87F2' }, // darker blue
  { min: 0, color: '#5F5F68', border: '#8D8D98' } // darker grey
];

// Configurable awards icons and tooltips
const awardIcons = {
  first: { icon: 'https://cdn-icons-png.flaticon.com/512/8348/8348232.png', text: '1st Place' }
};

const racers = ref([
  { name: 'Deveraux', mmr: 1950, wins: 12, placements: 20, awards: [awardIcons.first] }, // red
  { name: 'TestOrange', mmr: 1750, wins: 9, placements: 16, awards: [] }, // orange
  { name: 'TestPink', mmr: 1550, wins: 7, placements: 12, awards: [] }, // pink
  { name: 'TestTurquoise', mmr: 1350, wins: 5, placements: 10, awards: [] }, // turquoise
  { name: 'TestBlue', mmr: 1150, wins: 3, placements: 7, awards: [] }, // blue
  { name: 'TestGrey', mmr: 900, wins: 1, placements: 2, awards: [] }, // grey
  { name: 'METRITIS', mmr: 1700, wins: 8, placements: 15, awards: [awardIcons.first] },
  { name: 'brainlesstay', mmr: 1620, wins: 5, placements: 10, awards: [awardIcons.first] },
  { name: 'MartiboRS', mmr: 1590, wins: 2, placements: 7, awards: [] },
  { name: 'OzNat1', mmr: 1500, wins: 1, placements: 5, awards: [] },
  { name: 'Kaiium_', mmr: 1800, wins: 10, placements: 18, awards: [awardIcons.first] },
  { name: 'PureRiffery900', mmr: 1400, wins: 0, placements: 2, awards: [] },
  { name: 'f1zzydrinks', mmr: 1650, wins: 3, placements: 6, awards: [] },
  { name: 'SoCRiiSPY', mmr: 1750, wins: 7, placements: 13, awards: [awardIcons.first] },
  { name: 'Denzlle', mmr: 1200, wins: 0, placements: 1, awards: [] },
  { name: 'suttoGT', mmr: 1100, wins: 0, placements: 0, awards: [] }
]);

const sortKey = ref('position');
const sortOrder = ref('desc'); // default for position and mmr
const hoverKey = ref(null);
const hoveredHeader = ref(null);
const searchQuery = ref('');
const searchInputRef = ref(null);

function toggleSort(key) {
  if (sortKey.value !== key) {
    sortKey.value = key;
    // Always reset to default order for new column
    // All columns default to 'desc' except 'name', which should also default to 'desc' for consistency
    sortOrder.value = 'desc';
  } else {
    // Only toggle if clicking the same column
    sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc';
  }
  // No need to reset other columns, as only sortKey is tracked
}

function onSearch() {
  // No-op, v-model triggers computed
}

const filteredRacers = computed(() => {
  if (!searchQuery.value.trim()) return racers.value;
  return racers.value.filter((r) => r.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase()));
});

const sortedRacers = computed(() => {
  let arr = [...filteredRacers.value];
  if (!sortKey.value) {
    arr.sort((a, b) => b.mmr - a.mmr);
    return arr;
  }
  if (sortKey.value === 'mmr') {
    arr.sort((a, b) => (sortOrder.value === 'asc' ? a.mmr - b.mmr : b.mmr - a.mmr));
  } else if (sortKey.value === 'name') {
    arr.sort((a, b) => (sortOrder.value === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  } else if (sortKey.value === 'wins') {
    arr.sort((a, b) => (sortOrder.value === 'asc' ? a.wins - b.wins : b.wins - a.wins));
  } else if (sortKey.value === 'placements') {
    arr.sort((a, b) => (sortOrder.value === 'asc' ? a.placements - b.placements : b.placements - a.placements));
  } else if (sortKey.value === 'position') {
    arr.sort((a, b) => (sortOrder.value === 'asc' ? a.mmr - b.mmr : b.mmr - a.mmr));
  }
  return arr;
});

// Compute the global MMR ranking for each racer
const mmrRanking = computed(() => {
  return [...racers.value].sort((a, b) => b.mmr - a.mmr).map((r) => r.name);
});

function mmrStyle(mmr) {
  for (const cfg of mmrConfig) {
    if (mmr >= cfg.min) {
      return {
        background: cfg.color,
        borderLeft: `6px solid ${cfg.border}`,
        color: cfg.text || (cfg.color === '#fff' ? '#23232b' : '#fff')
      };
    }
  }
  return {
    background: '#fff',
    borderLeft: '6px solid #e5e7eb',
    color: '#23232b'
  };
}

function focusSearchInput() {
  nextTick(() => {
    if (searchInputRef.value) searchInputRef.value.focus();
  });
}
</script>

<style scoped>
.leaderboard-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7em;
  margin-top: 1.2em;
}
.leaderboard-title {
  font: ui-sans-serif;
  line-height: 1.375;
  font-size: 30px;
  font-weight: 600;
  color: #e4e4e7;
  margin: 0;
  letter-spacing: -0.025em;
}
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #141416;
  border: 2px solid #18181b;
  border-radius: 0.7em;
  padding: 0.2em 0.8em 0.2em 0.5em;
  min-width: 210px;
  max-width: 270px;
  box-sizing: border-box;
  transition: border-color 0.18s, box-shadow 0.18s;
  cursor: text;
}
.search-icon {
  color: #bbb;
  font-size: 1.3em;
  margin-right: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.18s;
  pointer-events: none;
}
.search-input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.08em;
  width: 100%;
  padding: 0.2em 0;
  font-family: inherit;
  text-align: left;
}
.search-input::placeholder {
  color: #888;
  text-align: left;
  transition: color 0.18s;
}
.search-box:hover .search-input,
.search-input:focus {
  color: #bbb;
}
.search-box:hover .search-input::placeholder,
.search-input:focus::placeholder {
  color: #555;
}
.search-box:hover .search-icon,
.search-input:focus ~ .search-icon,
.search-box:focus-within .search-icon {
  color: #555;
}
.leaderboard-container {
  margin: 2rem 0 0 0;
  border-radius: 1rem;
  box-shadow: none;
}
.leaderboard-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: transparent;
  border: 2px solid #18181b;
  border-radius: 1rem;
  overflow: hidden;
  table-layout: fixed;
}
.leaderboard-table th,
.leaderboard-table td {
  padding: 0.75rem 1rem;
  text-align: left;
}
.leaderboard-table th {
  cursor: pointer;
  background: #141416;
  color: #fff;
  font-weight: 600;
  user-select: none;
  position: relative;
}
.sortable-th {
  padding-right: 0.5em !important;
}
.ranking-th {
  width: 6%;
  max-width: 6%;
  min-width: 6%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name-th,
.leaderboard-table td:nth-child(2) {
  width: 50%;
  max-width: 55%;
  min-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mmr-th {
  width: 10%;
  max-width: 10%;
  min-width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wins-th {
  width: 10%;
  max-width: 10%;
  min-width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.placements-th {
  width: 10%;
  max-width: 10%;
  min-width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.awards-th {
  width: 10%;
  max-width: 10%;
  min-width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Zebra striping */
.leaderboard-table tbody tr.alt-row {
  background: #141416;
}
.leaderboard-table tbody tr:not(.alt-row) {
  background: #0c0c0d;
}
/* Parallelogram MMR badge styles */
.mmr-badge {
  display: inline-block;
  min-width: 48px;
  padding: 0.15em 0.9em 0.15em 0.7em;
  font-size: 0.95em;
  font-weight: bold;
  transform: skew(-20deg);
  margin: 0.1em 0;
  border-radius: 0.2em;
  box-sizing: border-box;
}
.award-icon-wrapper {
  display: inline-block;
  margin-right: 0.2em;
  vertical-align: middle;
  position: relative;
}
.award-icon-wrapper:hover .award-tooltip {
  opacity: 1;
  pointer-events: auto;
}
.award-tooltip {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 50%;
  bottom: 135%; /* Increased from 120% for more height above icon */
  transform: translateX(-50%);
  background: #23232b;
  color: #fff;
  padding: 0.3em 0.7em;
  border-radius: 0.4em;
  font-size: 0.95em;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 2px 8px #0006;
  transition: opacity 0.15s;
}
/* Remove the small white circle from tooltip */
.award-tooltip-dot {
  display: none;
}
.award-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  vertical-align: middle;
  border-radius: 0.2em;
  background: transparent;
  border: none;
  margin-bottom: -3px;
}
.material-icons-outlined {
  font-family: 'Material Icons Outlined';
  font-size: 1.1em;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
  transition: color 0.2s;
}
.sort-arrow {
  min-width: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
}
.arrow-force-visible {
  opacity: 1 !important;
}
th.sortable-th:hover .sort-arrow {
  opacity: 1 !important;
}
.arrow-visible {
  opacity: 1 !important;
}
.arrow-icon {
  color: #888;
  opacity: 1;
  transition: color 0.2s;
}
.arrow-active {
  color: #bbb !important;
}
.arrow-placeholder {
  color: #444 !important;
  opacity: 1;
}
.arrow-faded {
  color: #555;
  opacity: 0.4;
}
th.sortable-th:hover .sort-arrow {
  opacity: 1 !important;
}
.leaderboard-table th.mmr-th,
.leaderboard-table td:nth-child(3),
.leaderboard-table th.wins-th,
.leaderboard-table td:nth-child(4),
.leaderboard-table th.placements-th,
.leaderboard-table td:nth-child(5),
.leaderboard-table th.awards-th,
.leaderboard-table td.awards-cell {
  text-align: center;
}
.leaderboard-table th.ranking-th,
.leaderboard-table td:nth-child(1) {
  text-align: left;
}
.th-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
}
/* Left align header and cell text for Ranking and Name columns */
.leaderboard-table th.ranking-th,
.leaderboard-table td:nth-child(1),
.leaderboard-table th.name-th,
.leaderboard-table td:nth-child(2) {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* .th-content for left-aligned columns */
.leaderboard-table th.ranking-th .th-content,
.leaderboard-table th.name-th .th-content {
  justify-content: flex-start;
}
/* Remove gap for left-aligned th-content */
.leaderboard-table th.ranking-th .th-content,
.leaderboard-table th.name-th .th-content {
  gap: 0;
}
/* For centered columns, make .th-content relative, add padding-right to reserve space for the arrow, and absolutely position the sort arrow to the right */
.leaderboard-table th.mmr-th .th-content,
.leaderboard-table th.wins-th .th-content,
.leaderboard-table th.placements-th .th-content {
  position: relative;
  justify-content: center;
  gap: 0;
}
.leaderboard-table th.mmr-th .sort-arrow,
.leaderboard-table th.wins-th .sort-arrow,
.leaderboard-table th.placements-th .sort-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  min-width: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leaderboard-table th.wins-th .sort-arrow {
  right: 0.9em;
}

.leaderboard-table th.mmr-th .sort-arrow {
  right: 0.8em;
}

.leaderboard-table th.placements-th .sort-arrow {
  right: -0.6em;
}
</style>
