<script setup>
import { ref } from 'vue';
import MountCalculator from '../../mountCalculator/MountCalculator';
import Button from './Button.vue';

let myCaculator = MountCalculator();
let temporalOutput = ref('');

const showKey = (keyButton) =>{
    myCaculator.Screen.setContent(keyButton);
    temporalOutput.value += myCaculator.Screen.Content;
}
</script>
<template>
    <div class="calculator">
        <div class="screen">
            <h1>{{ temporalOutput }}</h1>
        </div>
        <div class="keyboard-space">
            <div class="button-space" v-for="button of myCaculator.buttons">
                <Button
                    :Key="button.Key"
                    @emitKey="showKey(button.Key)"
                 ></Button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/main' as *;
.calculator{
    @include FlexDisplay(column, center, normal, 60%, 100%);
    background-color: $principalcolor;
    .screen{
        @include FlexDisplay(row, center, flex-end, 100%, 20%);
        background-color: $screencolor;
    }
    .keyboard-space{
        /* @include FlexDisplay(row, normal, normal, 100%, 80%);
        flex-wrap: wrap; */
        @include gridDisplay(5,4,100%,80%);
        .button-space{
            @include FlexDisplay(row, center, center, 100%, 100%);
            
        }
    }
}
</style>