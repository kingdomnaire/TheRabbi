<template>
    <div class="h-[30%] ml-10 mt-40 flex justify-center items-center">
        <div class="bg-gray-300 h-full w-full rounded-lg shadow-xl">
            <div class="mt-2">
                <div class="text-center font-bold text-gray-800">Player Game Meter</div>
                <!--Game meter-->
                <div class="grid  grid-cols-2 text-center gap-2 mt-2 mx-2  ">
                    <div class="bg-blue-900 text-gray-100 w-32 rounded-lg py-2">
                        current Question
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold rounded">12</div>
                    </div>
                    <div class="bg-blue-900 text-gray-100 w-32 rounded-lg py-2 justify-center item-center">
                        current Level
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold item-center rounded">11</div>

                    </div>
                    <div class="bg-blue-900 text-gray-100 w-32 rounded-lg py-2 justify-center item-center">
                        correct Answer
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold rounded">11</div>

                    </div>
                    <div class="bg-blue-900 text-gray-100 w-32 rounded-lg py-2 justify-center item-center">
                        wrong Answer
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold rounded">1</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>