<script setup>
import { computed } from 'vue';
import ComprovedSign from "../../mountCalculator/AuxiliarFunction"
const props = defineProps({
    Key:{
        type: String,
        required: true
    },
});
const changeColor = computed(()=>{
    return (ComprovedSign(props.Key)) ? "green" : "gray";
})
const emits = defineEmits(['emitKey']);

const emitKey = ()=>{
    emits('emitKey', props.Key)
}
</script>
<template>
    <div :class="['button',changeColor]" @click="emitKey">
        <h1>{{ Key }}</h1>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/main' as *;

.button{
    @include FlexDisplay(column, center, center, 100%, 100%);
    //

}
.green{
        color: white;
    }
</style>