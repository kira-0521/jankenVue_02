import Vue from "vue";
import Router from "vue-router";

// 動的インポート
//コンポーネントの情報が欲しい時だけ持って来るための処理
// cli3のprefetch機能によって高速になる
const Game = () => import(/* webpackChunkName: "Game"*/ "./components/Game.vue");
const Score = () => import(/* webpackChunkName: "Score"*/ "./components/Score.vue");


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/game', 
      components: {
        default: Game,
      },
    },
    {
      path: '/score', 
      components: {
        default: Score,
      },
    },
    {
      path: '*',
      redirect: '/game',
    },
  ],
});
