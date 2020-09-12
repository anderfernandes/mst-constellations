<template>
  <div id="app" class="relative bg-white h-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="lg:w-0 lg:flex-1">
          <router-link to="/" class="flex">
            <!--<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">-->
            Mayborn Science Theater | Constellations App
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10"></nav>
        <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <span class="inline-flex rounded-md shadow-sm">
            <router-link to="/create" class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
              New Constellation
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>
