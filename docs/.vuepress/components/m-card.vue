<template>
    <div class="m-card" :style="width?{width:width+'px'}:{}">
        <div class="m-card-img" :style="imgHeight?{height:imgHeight+'px'}:{}">
            <img :src="imgSrc" alt="image">
        </div>
        <div v-if="summary" class="m-card-summary">
            {{summary}}
        </div>
        <div v-else class="m-card-summary">
            <slot></slot>
        </div>
        <!-- footer可有可无，所以用插槽 -->
        <slot name="footer"></slot>
    </div>
</template>

<script>

export default {
    name: 'm-card',
    props: {
        width: {
            type:Number,
            default: 0
        },
        imgSrc: {
            type: String,
            default: ''
        },
        imgHeight: {
            type: Number,
            default: 0
        },
        summary: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import './m-card.scss';
</style>
