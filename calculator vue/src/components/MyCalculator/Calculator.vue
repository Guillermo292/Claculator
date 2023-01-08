<script setup>
import { computed, ref } from 'vue';
import MountCalculator from '../../mountCalculator/MountCalculator';
import Button from './Button.vue';

let myCaculator = MountCalculator();
let temporalOutput = ref('');


const showKey = (keyButton) =>{
    if(keyButton == "CE"){
        myCaculator.Screen.setContent('');
        temporalOutput.value = myCaculator.Screen.Content; 
        return;
    }
    if(keyButton == "="){
        
        if(controlSyntaxError(temporalOutput.value) != 'error'){
            myCaculator.Screen.setContent(eval(temporalOutput.value));
            temporalOutput.value = myCaculator.Screen.Content;
            return;
        }
        if(controlSyntaxError(temporalOutput.value) == "error"){
            myCaculator.Screen.setContent('syntax error');
            temporalOutput.value = myCaculator.Screen.Content;
            return;
        }
    }
    if(keyButton == "L"){
            myCaculator.Screen.setContent((eval(temporalOutput.value)*26.31).toFixed(2));
            temporalOutput.value = myCaculator.Screen.Content;
            return;
    }
    if(keyButton == "$"){
            myCaculator.Screen.setContent((eval(temporalOutput.value)*1.07).toFixed(2));
            temporalOutput.value = myCaculator.Screen.Content;
            return;
    }
    if(keyButton == "¥"){
            myCaculator.Screen.setContent((eval(temporalOutput.value)*140.85).toFixed(2));
            temporalOutput.value = myCaculator.Screen.Content;
            return;
    }
    myCaculator.Screen.setContent(keyButton);
    temporalOutput.value += myCaculator.Screen.Content;
}
function controlSyntaxError(string){
        try {
            eval(string); 
        } catch (e) {
        if(e instanceof SyntaxError){
            return "error"
            } 
        else{
            return 'no error'
            }
        }
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
        background-color: $principalcolor;
        border-bottom: 1px solid white;
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