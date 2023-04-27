import { GAME_SPEED, GAME_STATUS } from '@/constants';
import { computed } from 'vue';

export default function gameStart(init, circles, difficulty, size, gameStatus) {
    const start = () => {
        init();
        prepareGame(0);
    };

    const prepareGame = (i) => {
        const index = getRandom(0, size);
        gameStatus.value = GAME_STATUS.PREPARE;

        if(circles.value[index].status === 0) {
            circles.value[index].status = i + 1;
            circles.value[index].isColor = true;
            setTimeout(() => {

                circles.value[index].isColor = false;
                i++;
                if(i < difficulty.value) prepareGame(i);
                else {gameStatus.value = GAME_STATUS.STARTED;}

            }, GAME_SPEED);
        } 
        else { prepareGame(i); }
    };

    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const isDisabled = computed(() => {
        return gameStatus.value === GAME_STATUS.PREPARE || gameStatus.value === GAME_STATUS.WIN;
    });

    return {
        start,
        isDisabled
    }
}