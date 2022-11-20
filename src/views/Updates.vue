<template>
    <theme></theme>
    <div class="updates">
        <h2>Updates</h2>
        <hr style="width: 500px;">
        <div class="update-container">
            <div class="update">
                <span class="update-title"></span>
            </div>
        </div>
    </div>
</template>

<script>
import Theme from "../components/Theme.vue";

export default {
    name: "myUpdates",
    components: {
        Theme
    },
    mounted() {
        
    }
}
</script>

<style>
    .updates {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
</style>