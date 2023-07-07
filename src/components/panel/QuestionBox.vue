<template>
    <div>
      <div class="col-span-full mb-4">
        <label for="about" class="block font-medium leading-6 text-gray-100">Question Box</label>
        <div class="mt-1">
          <textarea rows="3" class="block w-full drop-shadow-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"></textarea>
        </div>
      </div>
      <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-50">A</label>
          <div class="mt-1">
            <input type="text"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>
        </div>
  
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-50">B</label>
          <div class="mt-1">
            <input type="text"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>
        </div>
  
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-50">C</label>
          <div class="mt-1">
            <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>
        </div>
  
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-50">D</label>
          <div class="mt-1">
            <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default{
    name: 'QuestionBox',
}
</script>

<style>

</style>