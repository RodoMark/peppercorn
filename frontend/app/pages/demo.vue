<script setup lang="ts">
import { ref } from 'vue';
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'radix-vue';
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverArrow,
} from 'radix-vue';
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from 'radix-vue';
import { Cross2Icon, InfoCircledIcon } from '@radix-icons/vue';

const apiData = ref<any[]>([]);
const loading = ref(false);
const error = ref('');

const fetchData = async () => {
  loading.value = true;
  error.value = '';
  try {
    const response = await fetch('http://localhost:3001/api/items');
    if (!response.ok) throw new Error('Failed to fetch data');
    apiData.value = await response.json();
  } catch (e: any) {
    error.value = e.message || 'Failed to fetch data from backend';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">
        Radix Vue Components Demo
      </h1>

      <!-- Dialog Component -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 class="text-2xl font-semibold mb-4">Dialog Component</h2>
        <p class="text-gray-600 mb-4">
          Click the button to open a dialog modal using Radix Vue
        </p>
        
        <DialogRoot>
          <DialogTrigger class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Open Dialog
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay class="fixed inset-0 bg-black/50" />
            <DialogContent class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <DialogTitle class="text-2xl font-bold mb-2">
                Welcome to Radix Vue!
              </DialogTitle>
              <DialogDescription class="text-gray-600 mb-4">
                This is a dialog component built with Radix Vue. It provides accessible, 
                unstyled UI primitives that you can customize with Tailwind CSS.
              </DialogDescription>
              
              <div class="flex justify-end gap-3">
                <DialogClose class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                  Close
                </DialogClose>
                <DialogClose class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Confirm
                </DialogClose>
              </div>

              <DialogClose class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <Cross2Icon class="w-5 h-5" />
              </DialogClose>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      </div>

      <!-- Popover Component -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 class="text-2xl font-semibold mb-4">Popover Component</h2>
        <p class="text-gray-600 mb-4">
          Hover or click to see a popover with additional information
        </p>
        
        <PopoverRoot>
          <PopoverTrigger class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Show Popover
          </PopoverTrigger>

          <PopoverPortal>
            <PopoverContent 
              class="bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-200"
              :side-offset="5"
            >
              <div class="space-y-2">
                <h3 class="font-semibold text-gray-900">Popover Content</h3>
                <p class="text-sm text-gray-600">
                  This is a popover component. You can put any content here, 
                  including forms, lists, or rich media.
                </p>
              </div>
              <PopoverArrow class="fill-white" />
            </PopoverContent>
          </PopoverPortal>
        </PopoverRoot>
      </div>

      <!-- Tooltip Component -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 class="text-2xl font-semibold mb-4">Tooltip Component</h2>
        <p class="text-gray-600 mb-4">
          Hover over the icon to see a tooltip
        </p>
        
        <TooltipProvider>
          <TooltipRoot>
            <TooltipTrigger class="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              <InfoCircledIcon class="w-5 h-5" />
            </TooltipTrigger>

            <TooltipPortal>
              <TooltipContent 
                class="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg"
                :side-offset="5"
              >
                This is a helpful tooltip!
                <TooltipArrow class="fill-gray-900" />
              </TooltipContent>
            </TooltipPortal>
          </TooltipRoot>
        </TooltipProvider>
      </div>

      <!-- Backend Integration Demo -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Backend Integration</h2>
        <p class="text-gray-600 mb-4">
          Test the connection to the Express.js backend
        </p>
        
        <button 
          @click="fetchData"
          :disabled="loading"
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Loading...' : 'Fetch Data from API' }}
        </button>

        <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <p class="font-semibold">Error:</p>
          <p class="text-sm">{{ error }}</p>
          <p class="text-sm mt-2">Make sure the backend is running on port 3001</p>
        </div>

        <div v-if="apiData.length > 0" class="mt-4 space-y-2">
          <p class="font-semibold text-gray-900">Response from backend:</p>
          <div 
            v-for="item in apiData" 
            :key="item.id"
            class="p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Custom SCSS styling
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

// Animation for dialog
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
