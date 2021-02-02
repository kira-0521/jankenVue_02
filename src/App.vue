<template>
    <div class="main">
        <h1>じゃんけんゲーム</h1>
        <div class="router">
          <router-link
            to="/game"
            class="router"
            active-class="link">
          ゲーム
          </router-link>
          <router-link
            to="/score"
            class="router"
            active-class="link">
          スコアー
          </router-link>
        </div>
        <router-view :scores="scores" v-on:riset-scores="scores = []"></router-view>
    </div>
</template>
 
<script>
    export default {
        data () {
            return {
                scores: [],
            };
        },
    };
</script>
<style lang="scss">
ul,
ol {
    list-style: none;
    padding-left: 0;
}
.main {
    margin: 0 auto;
    text-align: center;
}
.router {
    display: flex;
    align-items: center;
    justify-content: center;
    & .router {
        margin: 15px;
    }
    // active
    & .link {
        font-weight: bold;
        font-size: 22px;
    }
}

</style>