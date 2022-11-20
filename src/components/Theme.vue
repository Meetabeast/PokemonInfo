<template>
    <div class="toggle" id="colorTheme">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: "myTheme",
    mounted() {
        let getSite = document.querySelector('body');
        let getColorThemeToggle = document.getElementById('colorTheme');
        let currentColor = localStorage.getItem('colorTheme');

        if(currentColor === "ThemeLight") {
            colorLight();
        } else if(currentColor === "ThemeDark") {
            colorDark()
        }

        getColorThemeToggle.addEventListener("click", () => {
            if(getSite.classList.contains('ThemeLight')) {
                colorDark();
            } else {
                colorLight();
            }
        });

        function colorLight() {
            getSite.classList.add("ThemeLight");
            getColorThemeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                            </svg>`
            localStorage.setItem("colorTheme", "ThemeLight");
        }

        function colorDark() {
            getSite.classList.remove("ThemeLight");
            getColorThemeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                                            </svg>`
            localStorage.setItem("colorTheme", "ThemeDark")
        }
    }
}
</script>

<style>
    .toggle {
        cursor: pointer;
        display: flex;
        position: fixed;
        transition: all .3s;
        z-index: 3;    
    }
    #colorTheme {
        right: 2rem;
        top: 2rem;
    }

    body.ThemeLight {
        background-color: var(--background2);
        color: var(--textColor2);
    }

    body.ThemeLight .input-field {
        background-color: var(--cardColor2);
        color: var(--textColor2);
        border: 1px solid black;
    }

    body.ThemeLight .pokemon {
        background-color: var(--cardColor2);
        border: 1px solid rgb(0, 0, 0);;
    }

    body.ThemeLight .pokemon-footer a {
        color: var(--textColor2)
    }

    body.ThemeLight .column {
        background-color: var(--cardColor2);
        border: 1px solid rgb(0, 0, 0);;
        color: var(--textColor2);
    }

    body.ThemeLight .stats {
        background-color: var(--cardColor2);
        border: 1px solid rgb(0, 0, 0);
        color: var(--textColor2);
    }

    :root {
        --background1: rgb(18, 18, 22);
        --background2: rgb(255, 255, 255);
        --cardColor: rgb(11, 11, 14);
        --cardColor2: rgba(255, 255, 255, 0.4);
        --statsColor: rgb(0, 0, 0);
        --textColor1: rgb(255, 255, 255);
        --textColor2: rgb(0, 0, 0);
    }
</style>