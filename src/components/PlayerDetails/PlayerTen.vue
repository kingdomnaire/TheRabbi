<template>
    <div class="flex gap-5 text-gray-100 mb-1">
        <div class="bg-blue-900 hover:bg-blue-600 text-gray-100 w-20 rounded cursor-pointer py-2">Player 10</div>
        <div class="bg-blue-900 rounded px-1">
             Question
            <div class="bg-gr">{{ question }}</div>
        </div>
        <div class="bg-blue-900 rounded px-1">
            Level
            <div>{{ level }}</div>
        </div>
        <div class="bg-blue-900 rounded px-1">
            Wrong number
            <div>{{ wrong }}</div>
        </div>
        <PhoneIcon class=" text-blue-900" />
        <AskAudienceIcon class=" text-blue-900" />
        <div class="font-bold text-xl flex items-center text-blue-900" >50:50</div>
    </div>
</template>

<script>
import PhoneIcon from '../icon/PhoneIcon.vue';
import AskAudienceIcon from '../icon/AskAudienceIcon.vue';
export default{
    name:'PlayerTen',
    data(){
        return{
            question:1,
            level: 5,
            wrong: 0,
        }
    },
    components: { PhoneIcon, AskAudienceIcon }
}
</script>