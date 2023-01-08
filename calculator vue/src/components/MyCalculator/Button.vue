<script setup>
const props = defineProps({
    Key:{
        type: String,
        required: true
    },
    TypeKey:{
        type: String,
        default: $principalcolor
    }
});

const emits = defineEmits(['emitKey']);

const emitKey = ()=>{
    emits('emitKey', props.Key)
}

</script>
<template>
    <div class="button" @click="emitKey">
        <h1>{{ Key }}</h1>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/main' as *;

.button{
    @include FlexDisplay(column, center, center, 100%, 100%)
}
</style>