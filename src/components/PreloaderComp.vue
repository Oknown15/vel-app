<script>
export default {
    data() {
            
    },
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
    }
</script>

<template>
    <div class="mainSpinners">
        <div v-if="loading">
            <div class="spinner-grow" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .mainSpinners{
        display: flex !important;
        align-items: center;
        justify-content: center !important;
    }
</style>