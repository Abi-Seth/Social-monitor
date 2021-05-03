<template>
    <div id="entire_navbar">
        <div class="logo_side">
            <img src="../assets/logo.png" alt="">
            <h1>social<span>Bubble</span></h1>
        </div>
        <div class="search_side">
            <input type="text" placeholder="Search social app">
        </div>
        <div class="exit_side">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
    #entire_navbar {
        background-color: $darkMinor;
        height: 2.3em;
        display: flex;
        align-items: center;

        .logo_side {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;

            & img {
                width: 1.3em;
                height: 1.3em;
                margin: 0 0.2em 0 1em;
            }

            & h1 {
                color: $pureWhite;
                font-family: $poppins;
                font-size: 0.9em;
                font-weight: 500;

                span {
                    color: $orange;
                }
            }
        }

        .search_side {
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            & input {
                padding: 0.35em 12em 0.35em 1em;
                border: none;
                border-radius: 0.2em;
                background-color: $searchColor;
                color: $orange;
                font-family: $poppins;
                -webkit-app-region: no-drag;


            }
            & input:focus {
                color: $darkWhite;
            }
        }

        .exit_side {
            
        }

    }
</style>