<style lang="scss" scoped>
  @import "../assets/scss/reset.scss";
  @import '../assets/scss/common.scss';

  .add_pop_box {
    .pop_inner {
      position: absolute;
      top: 40px;
      left: 60px;
      z-index: 55;
      width: 500px;
      margin-top: 20px;
      padding: 10px 20px;
      border: solid 2px #333;
      @include border-radius(5px);
      background-color: #e0edd3;
      @include transition(top, 0.5s);
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 50px;
        width: 0;
        height: 0;
        border-width: 16px;
        border-style: dashed dashed solid dashed;
      }
      &:before {
        top: -32px;
        border-color: transparent transparent #333 transparent;
      }
      &:after {
        top: -29px;
        border-color: transparent transparent #e0edd3 transparent;
      }
    }
    .tips {
      color: #333;
      line-height: 30px;
    }
    .ipt {
      width: 100%;
      height: 26px;
      text-indent: 5px;
      border: solid 1px #333;
      background-color: #fff;
      line-height: 26px;
    }
    .btn_box {
      margin-top: 10px;
    }
    .btn {
      float: left;
      height: 30px;
      margin-right: 10px;
      padding: 0 15px;
      border: solid 2px #444;
      @include border-radius(15px);
      background: -webkit-linear-gradient(#f8f8f8, #cecece);
      background: -moz-linear-gradient(#f8f8f8 0%, #cecece 100%);
      background: linear-gradient(#f8f8f8, #cecece);
      background-color: #f5f5f5;
      color: #333;
      font-size: 14px;
      line-height: 28px;
    }
  }

  @media (max-width: 640px) {
    .add_pop_box {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 55;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      .pop_inner {
        top: 50%;
        left: 10px;
        right: 10px;
        width: auto;
        transform: translateY(-50%);
        &:before,
        &:after {
          display: none;
        }
      }
    }
  }
</style>
<template>
  <section>
    <div class="add_pop_box" v-if="isShow">
      <div class="pop_inner" :style="{top:topValue+'px'}">
        <div class="tips">(separate multiple resources name with commas)</div>
        <input type="text" id="resourcesIpt" class=" ipt"/>
        <div class="btn_box clearfix">
          <a href="javascript:" class="btn" @click="confirm">Add resources</a>
          <a href="javascript:" class="btn" @click="close">Close</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      isShow: false,
      topValue: 0,
      confirmAdd: Function,
      closePop: Function,
      newResource: Array
    },
    methods: {
      confirm() {
        let value = document.getElementById('resourcesIpt').value;
        let valueArr = [];
        let result;
        result = value.split(",");
        for (let i = 0; i < result.length; i++) {
          valueArr.push(result[i]);
        }
        valueArr = valueArr.filter(function (el) {
          return el
        });
        this.$emit('update:newResource', valueArr);
        this.confirmAdd();
        this.closePop();
      },
      close() {
        this.closePop();
      }
    }
  }
</script>
