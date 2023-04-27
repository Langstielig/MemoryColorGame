<template>
    <span :class="getCircleColor" @click="select(circle.id)">
    </span>
</template>
    
<script>
import { COLOR, GAME_STATUS } from '@/constants';
import { computed } from 'vue';

export default {
    name: 'CircleItem',
    props: {
        circle: {
            type: Object,
            required: true
        },
        gameStatus: {
            type: Number,
            required: false,
            default: GAME_STATUS.NONE
        }
    },

    setup(props) {
        const getCircleColor = computed(() => {
            let classStr = 'circle ';

            if(props.circle.isColor || props.circle.isClicked) {
                if(props.circle.color === COLOR.blue) {
                    classStr += ' blue';
                }
                if(props.circle.color === COLOR.red) {
                    classStr += ' red';
                }
                if(props.circle.color === COLOR.gold) {
                    classStr += ' gold';
                }
                if(props.circle.color === COLOR.darkorange) {
                    classStr += ' darkorange';
                }
                if(props.circle.color === COLOR.cornflowerblue) {
                    classStr += ' cornflowerblue';
                }
                if(props.circle.color === COLOR.blueviolet) {
                    classStr += ' blueviolet';
                }
                if(props.circle.color === COLOR.limegreen) {
                    classStr += ' limegreen';
                }
                if(props.circle.color === COLOR.hotpink) {
                    classStr += ' hotpink';
                }
                if(props.circle.color === COLOR.mediumspringgreen) {
                    classStr += ' mediumspringgreen';
                }
                if (props.gameStatus === GAME_STATUS.LOSE) {
                    classStr += ' lose'
                }
            }

            return classStr;
        });

        return {
            getCircleColor
        }
    },

    methods: {
        select(id) {
            if(this.gameStatus === GAME_STATUS.STARTED) {
                this.$emit('selectCircle', id);
            }
        }
    }
}
</script>
    
<style>
    .circle {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #ccc;
        margin: 5px;
        cursor: pointer;
        display: inline-block;
    }

    .circle.blue {
        background: blue;
    }

    .circle.red {
        background: red;
    }

    .circle.gold {
        background: gold;
    }

    .circle.darkorange {
        background: darkorange;
    }

    .circle.cornflowerblue {
        background: cornflowerblue;
    }

    .circle.blueviolet {
        background: blueviolet;
    }

    .circle.limegreen {
        background: limegreen;
    }

    .circle.hotpink {
        background: hotpink;
    }

    .circle.mediumspringgreen {
        background: mediumspringgreen;
    }

    .circle.lose {
        background: rgb(49, 48, 48);
    }

</style>