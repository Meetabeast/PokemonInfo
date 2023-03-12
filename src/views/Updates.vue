<template>
    <theme></theme>
    <div class="updates">
        <h2>Updates</h2>
        <hr style="width: 500px;">
        <div class="update-container">
            <div class="update">
                <div class="update-btn">
                    <p>Version: 1.1.0</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-caret-down icon" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                    </svg>
                </div>
                <div class="update-content">
                    <ul>
                        <li>
                            Add the Update Page
                        </li>
                        <li>
                            Change the Hover effect on the Homepage
                        </li>
                        <li>
                            Change The Theme.vue
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="update-container">
            <div class="update">
                <div class="update-btn">
                    <p>Version: 1.0.0</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-caret-down icon" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                    </svg>
                </div>
                <div class="update-content">
                    <ul>
                        <li>
                            Add the project to my Github account
                        </li>
                    </ul>
                </div>
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
        const update = document.querySelectorAll(".update");

        update.forEach(function (item) {
            const btn = item.querySelector(".update-btn");

            btn.addEventListener("click", () => {
                item.classList.toggle("active")
            })
        })
    }
}
</script>

<style>
    .updates {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .update-container {
        display: flex;
        justify-content: center;
        margin: 10px;
    }

    .update-btn {
        background-color: rgb(11, 11, 14);
        color: rgb(255, 255, 255);
        cursor: pointer;
        padding: 18px;
        width: 450px;
        height: 25px;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        border-radius: 5px 5px 0px 0px;
        transition: background-color 0.5s ease;
    }

    .update-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .update-content {
        padding: 0 18px;
        overflow: hidden;
        background-color: rgb(11, 11, 11);
        border-radius: 0px 0px 5px 5px;
        max-height: 0;
        transition: max-height 0.5s ease;
        text-align: start;
    }

    .active .update-btn {
        background-color: rgb(14, 14, 14);
    }

    .active .icon {
        transform: rotate(180deg);
        transition: 0.5s;
    }

    .icon {
        transition: 0.5s ease;
    }

    .active .update-content {
        max-height: 500px;
    }

    .update-container ul li {
        margin: 10px;
    }
</style>
