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
        <router-view></router-view>
    </div>
</template>
 
<script>
    export default {
        data () {
            return {
                // scores: storage.getData('scores') || []
            };
        },
        watch: {
            scores : 'saveData'
        },
        methods: {
            // saveData() {
            //     storage.setData('scores', this.scores);
            // }
        }
    };
</script>
<style lang="scss">
ul {
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