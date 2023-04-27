import { DEFAULT_DIFFICULTY, GAME_SPEED, GAME_STATUS } from "@/constants";
import { nextTick, computed } from 'vue';

export default function gameProcess(circles, gameStatus, difficulty, start, count) {

    const selectCircle = (id) => {
        const index = circles.value.findIndex((circle) => {
            return circle.id === id;
        });

        if(index > -1 && circles.value[index].isClicked !== true) {
            circles.value[index].isClicked = true;

            checkGame(count);

            circles.value[index].isColor = true;
        }
    }

    const checkGame = (count) => {
        const errorIndex = circles.value.findIndex((circle) => {
            return circle.isClicked && circle.status === 0;
        });

        if(errorIndex > -1) {
            console.log('error');
            gameOver();
            return;
        }

        console.log(count.value);

        const wrongIndex = circles.value.findIndex((circle) => {
            return circle.isClicked && circle.status !== count.value && !circle.isColor;
        });

        console.log(wrongIndex);

        if(wrongIndex > -1) {
            console.log('wrong');
            gameOver();
            return;
        }

        const notFoundIndex = circles.value.findIndex((circle) => {
            return !circle.isClicked && circle.status > 0;
        });

        if (notFoundIndex === -1) {
            gameWin();
        }

        count.value += 1;
    }

    const gameOver = () => {
        gameStatus.value = GAME_STATUS.LOSE;
        difficulty.value = DEFAULT_DIFFICULTY;
    }

    const gameWin = () => {
        gameStatus.value = GAME_STATUS.WIN;
        setTimeout(async () => {
            difficulty.value += 1;

            await nextTick();

            start();
        }, GAME_SPEED)
    }

    const isWin = computed(() => {
        return gameStatus.value === GAME_STATUS.WIN;
    });

    const isLose = computed(() => {
        return gameStatus.value === GAME_STATUS.LOSE;
    });

    return {
        selectCircle,
        isWin,
        isLose
    }
}