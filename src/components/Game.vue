<template>
  <div class="main">
    <div v-if="impossible" class="comment-area">
      <h2>{{ result }}</h2>
      <button
        @click="riset()"
        class="result-button">
      もう一度
      </button>
    </div>

    <div class="img-area">
      <img :src="img" alt="">
    </div>

    <ul class="button-area">

      <li v-for="clickObject in clickObjectArray"
        :key="clickObject.key">

        <button
        class="button"
        :disabled="impossible"
        @click="onClicked(clickObject)"
        :class="{ selected: clickObject.isClicked }">
        {{ clickObject.key }}
        </button>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  props: {
    scores: Array,
  },
  data() {
    return {
      img: '',
      result: '',
      random: '',
      impossible: false,
      imgList: [
        // 静的指定だとエラーが出るためモジュールとして扱う
        require('@/assets/images/gu.png'),
        require('@/assets/images/choki.png'),
        require('@/assets/images/par.png'),
      ],
      clickObjectArray: [
        {
          key: 'グー',
          isClicked: false
        },
        {
          key: 'チョキ',
          isClicked: false
        },
        {
          key: 'パー',
          isClicked: false
        }
      ]
    }
  },
  created() {
    this.randomImg();
  },
  watch: {
    result: function() {
      // scoresにpush
      this.scores.push(this.result);
    }
  },
  methods: {
    // button選択時
    onClicked(clickObject) {
      // buttonにdisable付与
      this.changeDisabled();
      // ランダム画像ストップ
      clearInterval(this.random);
      // 勝利判定
      this.decision(clickObject);
      // buttonにisClicked付与
      clickObject.isClicked = !clickObject.isClicked;
    },
    // リセット
    riset() {
      this.result = "";
      // 画像表示
      this.randomImg();
      // disabled除去
      this.changeDisabled();
      // isClicked除去
      this.clickObjectArray.forEach(function(value) {
        value.isClicked = false;
      });
    },
    // 画像ランダム表示
    randomImg() {
      this.random = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * this.imgList.length);
        this.img = this.imgList[randomIndex];
      }, 1000 / 12);
    },
    changeDisabled() {
      this.impossible = !this.impossible;
    },
    // じゃんけんの判定
    decision(clickObject) {
      let hand = clickObject.key;
      const gu = this.imgList[0];
      const choki = this.imgList[1];

      switch (hand) {
        case 'グー':
          if(this.img == gu) {
            this.result = 'アイコ';
          }else if(this.img == choki) {
            this.result = '勝ち!';
          }else {
            this.result = '負け...';
          }
          break;
        case 'チョキ':
          if(this.img == gu) {
            this.result = '負け...';
          }else if(this.img == choki) {
            this.result = 'アイコ';
          }else {
            this.result = '勝ち!';
          }
          break;
        case 'パー':
          if(this.img == gu) {
            this.result = '勝ち!';
          }else if(this.img == choki) {
            this.result = '負け...';
          }else {
            this.result = 'アイコ';
          }
          break;
      }
    },
  }

}
</script>

<style scoped lang="scss">
img {
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
}
.button-area {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;
  width: 300px;
  margin: 0 auto;

  & > li {
    margin: 0 15px;

    & .button {
      &:hover {
        cursor: pointer;
      }
    }

    & .selected {
      color: black;
      background-color: white;
      border: solid 3px black;
    }
  }
}
</style>