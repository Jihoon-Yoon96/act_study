<template>
    <div id="app">
        <h2>hello {{userName}}</h2>
    </div>
</template>

<script>
export default {
    name: 'ActStudyJeon',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};

const app = new Vue({
    el : "#app",
    data : {
        userName : "jeon"
    }
})
</script>

<style lang="scss" scoped>

</style>