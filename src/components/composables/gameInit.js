import { onBeforeMount, ref } from 'vue';
import {COLOR, DEFAULT_DIFFICULTY} from "@/constants";

export default function gameInit() {
    let difficulty = ref(DEFAULT_DIFFICULTY);
    let circles = ref([]);
    let count = ref(1);

    const init = () => {
        circles.value = [];
        count.value = 1;

        let i = 0;

        for(let key in COLOR) {
            circles.value.push({
                id: i,
                isClicked: false,
                status: 0,
                color: COLOR[key],
                isColor: false
            })
            i++;
        }
    }

    onBeforeMount(init);

    return {
        difficulty,
        circles,
        init,
        count
    }
}