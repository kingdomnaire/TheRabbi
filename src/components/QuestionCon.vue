<template>
    <div class="container h-[80vh] drop-shadow-md rounded-md mt-8 mr-20 pt-14 
  px-8 bg-blue-600 md:w-3/4 flex-wrap flex flex-col justify-center items-center">
  
    <div class="-mt-20 w-3/5 max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950
      max-md:float-none max-md:mt-14 max-md:ml-8">
      <!--question box-->
        <div class="col-span-full mb-4 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
          <div class="mt-1 h-2/4">
            <textarea
            class="w-4/5 h-20 drop-shadow-2xl rounded-xl border-0 py-1.5 text-center item-center
            text-blue-800 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 max-md:text-sm sm:leading-6 
             max-sm:w-full"> Who killed Goliath of Gath?</textarea>
          </div>
        </div>
        <!--ans btn-->
        <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4 ">
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input 
              class="pl-3 w-4/5 h-20 -ml-4 rounded-full border-0 py-1.5 hover:bg-blue-200 
              hover:text-blue-700 hover:ring-blue-800 text-blue-800 shadow-sm ring-1 ring-inset 
              ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
              max-md:w-full max-md:ml-0 max-md:h-14 focus:bg-Indigo-700 focus:ring-inset"/>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input
              class="pl-3 w-4/5 h-20 -ml-14 max-sm:ml-0 rounded-full border-0 py-1.5 text-blue-800 shadow-sm 
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800
              ring-1 ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold
              max-sm:h-16 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0 focus:bg-Indigo-700"
              />
            </div>
          </div>
  
          <div class="sm:col-span-3 ">
            <div class="mt-1">
              <input
              class="pl-3 w-4/5 h-20 -ml-4 rounded-full border-0 py-1.5 text-blue-800 shadow-sm ring-1
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6  font-bold max-sm:h-16
              max-sm:ml-0 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0 focus:bg-Indigo-700"
              />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input
              class="pl-3 w-4/5 h-20 -ml-14 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
              max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0"/>
            </div>
          </div>
        </div>

        <div class="w-full max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-ful
              max-md:float-none max-md:mt-14 max-md:ml-8 justify-center items-center">
                <h3 class="text-center -ml-28 mt-5">Enter Question Category and Tag</h3>
            <div>
                <div class="mt-1 items-center justify-center">
                    <input
                    class="pl-3 w-4/5 h-20  max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
                    hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
                    ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
                    max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0 placeholder:text-blue-600" 
                    placeholder="Enter question Category"/>
                </div>
          </div>
          <div >
                <div class="mt-1">
                    <input
                    class="pl-3 w-4/5 h-20  max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
                    hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
                    ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
                    max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0 placeholder:text-blue-600"
                    placeholder="Enter question Tab"/>
                </div>
          </div>
          
        </div>
    </div>
      <div class="bg-green-900 h-10 w-24 text-center text-lg font-bold hover:bg-green-700 hover:text-gray-50
     ml-40 cursor-pointer rounded-lg mt-5 pt-1">Send</div>
  </div>
</template>

<script>
export default{
    name:'MessageCon'
}
</script>