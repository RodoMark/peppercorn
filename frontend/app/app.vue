<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-indigo-600">🌶️ Peppercorn</h1>
          <div class="flex gap-4">
            <NuxtLink to="/" class="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </NuxtLink>
            <NuxtLink to="/demo" class="text-gray-700 hover:text-indigo-600 transition-colors">
              Demo
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <NuxtPage />
    </main>

    <footer class="mt-auto py-6 bg-white border-t border-gray-200">
      <div class="container mx-auto px-4 text-center text-gray-600">
        <p>Built with Nuxt 4, Vite, Tailwind CSS, SCSS, and Radix Vue</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
nav {
  h1 {
    font-weight: 700;
  }
}
</style>

