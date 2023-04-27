<template>
    <div class="board">
        <CircleItem :game-status="gameStatus" v-for="circle in circles" :circle="circle" :key="'circle-' + circle.id"
            @selectCircle="selectCircle($event)"/>
    </div>

    <p class="difficulty">Сложность: <strong>{{ difficulty }}</strong></p>
    <button class="button" @click="start" :disabled="isDisabled">Старт</button>
    <p class="win" v-if="isWin">Ты молодец! Продолжай в том же духе</p>
    <p class="lose" v-if="isLose">Ты проиграл( Попробуй еще раз.</p>
</template>
    
<script>
    import CircleItem from "./CircleItem.vue";
    import gameInit from "@/components/composables/gameInit";
    import gameStart from "@/components/composables/gameStart";
    import gameProcess from "@/components/composables/gameProcess";
    import { GAME_STATUS } from "@/constants";
    import { ref } from 'vue';
    
    export default {
        name: 'GameBoard',
        components: {
            CircleItem
        },
        setup() {
            const size = 9;

            const gameStatus = ref(GAME_STATUS.NONE);

            const { difficulty, circles, init, count } = gameInit();

            const { start, isDisabled } = gameStart(init, circles, difficulty, size, gameStatus);

            const { selectCircle, isWin, isLose } = gameProcess(circles, gameStatus, difficulty, start, count);

            return {
                difficulty,
                circles,
                size,
                init,
                count,
                start,
                gameStatus,
                isDisabled,
                selectCircle,
                isWin,
                isLose
            }
        },

        methods: {
            
        }
    }
    
</script>
    
<style scoped>
    .board {
        width: 330px;
        background: #eee;
        margin: 0 auto;
    }
    .button {
        background: #1d85e6;
        color: white;
        border: none;
        border-radius: 2px;
        padding: 10px 30px;
        margin: 10px 0;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        background: #1dade6;
    }

    button:disabled {
        opacity: .5;
    }

    .win {
        color: #1d85e6;
    }

    .lose {
        color: rgb(235, 134, 134);
    }
</style>