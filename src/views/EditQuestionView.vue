<template>
    <div>
        <DashBoardNav>
            <div>
                    <EditQuestions/>
            </div>
        </DashBoardNav>
    </div>
</template>

<script>
import DashBoardNav from '@/components/DashBoardNav.vue'
import EditQuestions from '@/components/EditQuestions.vue'
    export default {
        name:'EditQuestionView',
        components:{
            DashBoardNav,
            EditQuestions
        }
    }
</script>