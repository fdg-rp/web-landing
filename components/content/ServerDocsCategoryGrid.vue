<script setup lang="ts">
const { data: navigation } = await useAsyncData("server-docs-nav", () =>
  fetchContentNavigation(queryContent("/server-docs"))
);

const categories = computed(() => {
  if (!navigation.value?.[0]?.children) return [];

  return navigation.value[0].children
    .filter((item: any) => item._path !== "/server-docs")
    .map((item: any) => ({
      title: item.title,
      path: item._path,
      icon: item.icon || "noto:file-folder",
      description: item.description || "",
    }));
});
</script>

<template>
  <div class="category-grid">
    <h1 class="title">Server Documentation</h1>
    <p class="subtitle">
      Choose a category to explore guides, rules, and information about our
      server
    </p>

    <div class="grid">
      <NuxtLink
        v-for="category in categories"
        :key="category.path"
        :to="category.path"
        class="category-card"
      >
        <div class="card-content">
          <Icon :name="category.icon" class="category-icon" />
          <h3 class="category-title">{{ category.title }}</h3>
          <p v-if="category.description" class="category-description">
            {{ category.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.category-grid': {
    padding: '{space.8} 0',
    maxWidth: '1200px',
    margin: '0 auto',
    '.title': {
      fontSize: '{text.4xl.fontSize}',
      lineHeight: '{text.4xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      color: '{elements.text.primary.color.static}',
      textAlign: 'center',
      marginBottom: '{space.4}',
      '@sm': {
        fontSize: '{text.5xl.fontSize}',
        lineHeight: '{text.5xl.lineHeight}',
      }
    },
    '.subtitle': {
      fontSize: '{text.lg.fontSize}',
      lineHeight: '{text.lg.lineHeight}',
      color: '{elements.text.secondary.color.static}',
      textAlign: 'center',
      marginBottom: '{space.12}',
      maxWidth: '600px',
      margin: '0 auto {space.12}'
    },
    '.grid': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '{space.6}',
      '@sm': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      }
    },
    '.category-card': {
      backgroundColor: '{elements.surface.secondary.backgroundColor}',
      borderRadius: '{radii.lg}',
      padding: '{space.8}',
      border: '1px solid {color.gray.800}',
      transition: 'all 200ms ease-in-out',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent)',
        opacity: 0,
        transition: 'opacity 200ms ease-in-out',
      },
      '&:hover': {
        transform: 'translateY(-4px)',
        borderColor: '{color.primary.500}',
        boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
        '&::before': {
          opacity: 1
        },
        '.category-icon': {
          transform: 'scale(1.1)'
        }
      },
      '.card-content': {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '{space.4}'
      },
      '.category-icon': {
        fontSize: '{text.6xl.fontSize}',
        marginBottom: '{space.2}',
        transition: 'transform 200ms ease-in-out',
        filter: 'grayscale(0.2)'
      },
      '.category-title': {
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
        fontWeight: '{fontWeight.semibold}',
        color: '{elements.text.primary.color.static}',
        marginBottom: '{space.2}'
      },
      '.category-description': {
        fontSize: '{text.sm.fontSize}',
        lineHeight: '{text.sm.lineHeight}',
        color: '{elements.text.secondary.color.static}'
      }
    }
  }
})
</style>
