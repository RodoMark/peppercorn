<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Peppercorn
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          A lightweight rules & conditions engine
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink 
            to="/demo" 
            class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Demo
          </NuxtLink>
          <a 
            href="https://github.com/RodoMark/peppercorn" 
            target="_blank"
            class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="text-xl font-semibold mb-2">Fast & Modern</h3>
          <p class="text-gray-600">Built with Nuxt 4 and Vite for blazing fast development</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">🎨</div>
          <h3 class="text-xl font-semibold mb-2">Beautiful UI</h3>
          <p class="text-gray-600">Styled with Tailwind CSS and Radix Vue components</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">🔧</div>
          <h3 class="text-xl font-semibold mb-2">Full Stack</h3>
          <p class="text-gray-600">Frontend and backend in the same repository</p>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Technology Stack</h2>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="inline-block w-32 font-semibold">Frontend:</span>
            <span class="text-gray-600">Nuxt 4, Vue 3, Vite</span>
          </li>
          <li class="flex items-center">
            <span class="inline-block w-32 font-semibold">Styling:</span>
            <span class="text-gray-600">Tailwind CSS, SCSS</span>
          </li>
          <li class="flex items-center">
            <span class="inline-block w-32 font-semibold">Components:</span>
            <span class="text-gray-600">Radix Vue</span>
          </li>
          <li class="flex items-center">
            <span class="inline-block w-32 font-semibold">Backend:</span>
            <span class="text-gray-600">Express.js</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

.shadow-md {
  box-shadow: $card-shadow;
}
</style>
