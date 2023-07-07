<template>
    <div class="h-52 -ml-40 mt-40 flex justify-center items-center ">
        <div class="bg-gray-200 h-full w-3/5 rounded-lg shadow-xl">
            <div class="">
                <div class="text-center font-bold text-blue-950">Player Game Meter</div>
                <!--Game meter-->
                <div class="grid  grid-cols-2 text-center gap-2 mt-2 mx-2  ">
                    <div class="bg-blue-900 text-gray-100 w-30 rounded-lg py-2">
                        current Question
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold ">12</div>
                    </div>
                    <div class="bg-blue-900 text-gray-100 w-30 rounded-lg py-2 justify-center item-center">
                        current Level
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold item-center">11</div>

                    </div>
                    <div class="bg-blue-900 text-gray-100 w-30 rounded-lg py-2 justify-center item-center">
                        correct Answer
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold">11</div>

                    </div>
                    <div class="bg-blue-900 text-gray-100 w-30 rounded-lg py-2 justify-center item-center">
                        wrong Answer
                        <div class="ml-6 bg-gray-300 w-20 h-8 text-blue-800 font-bold">1</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>