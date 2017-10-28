<style lang="scss" scoped>
  @import "../assets/scss/reset.scss";
  @import '../assets/scss/common.scss';

  .top_bar_box {
    padding: 20px 0;
    color: #333;
  }

  .login_box {
    float: right;
  }

  .user_box {
    float: right;
    color: #666;
    a{
      color: #333;
      text-decoration: underline;
    }
  }

  .btn_login_out {
    position: relative;
    float: right;
    height: 100%;
    margin-left: 20px;
    padding-left: 15px;
    color: #333;
    text-decoration: underline;
    &:before {
      content: '';
      position: absolute;
      top: 4px;
      left: 0;
      width: 0;
      height: 0;
      border-width: 7px;
      border-style: dashed dotted dashed solid;
      border-color: transparent transparent transparent #ccc;
    }
  }
</style>
<template>
  <section>
    <div class="w">
      <div class="top_bar_box clearfix">
        <div class="login_box">
          <a href="#" class="btn_login_out">Sign out</a>
          <div class="user_box">Signed in as <a href="#">{{userName}}</a></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      userName: ''
    },
    methods: {
    },
    created() {
    }
  }
</script>
