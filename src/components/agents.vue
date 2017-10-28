<style lang="scss" scoped>
  @import "../assets/scss/reset.scss";
  @import '../assets/scss/common.scss';

  .head_box {
    height: 60px;
  }

  .logo {
    float: left;
    width: 125px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .nav_box {
    float: right;
    margin-top: 28px;
    text-align: right;
    font-size: 0;
    a {
      position: relative;
      display: inline-block;
      margin: 0 2px;
      padding: 5px 10px;
      border: solid 2px #333;
      border-bottom: none;
      -webkit-border-radius: 5px 5px 0 0;
      -moz-border-radius: 5px 5px 0 0;
      border-radius: 5px 5px 0 0;
      color: #333;
      font-weight: bold;
      font-size: 14px;
      &.cur {
        background-color: #606060;
        color: #fff;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: #606060;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .content_box {
    .inner {
      border: solid 2px #333;
    }
  }

  .sub_nav_box {
    padding: 10px 20px;
    background-color: #606060;
    dl {
      font-size: 12px;
      line-height: 26px;
      dt,
      dd {
        float: left;
      }
      dt {
        margin-right: 10px;
        color: #fff;
        font-size: 16px;
      }
      dd {
        margin: 0 5px;
        padding: 0 15px;
        border: solid 1px #333;
        @include border-radius(15px);
        background-color: #999;
        color: #333;
        line-height: 24px;
        cursor: pointer;
        -webkit-transition: background-color 0.25s;
        -moz-transition: background-color 0.25s;
        transition: background-color 0.25s;
        &:hover,
        &.cur {
          background-color: #ddd;
        }
      }
    }
  }

  .main {
    position: relative;
    line-height: 30px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 76%;
      width: 2px;
      height: 100%;
      background-color: #333;
    }
  }

  .main_left {
    position: relative;
    float: left;
    width: 76%;
    padding: 0 20px 20px 20px;
    .item {
      position: relative;
      min-height: 70px;
      margin-top: 20px;
      padding: 12px 80px 0 80px;
      border: solid 2px #555;
      @include border-radius(5px);
      background-color: #cde6b9;
      &.other_status {
        background-color: #fff9bf;
      }
    }
    .img_box {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      overflow: hidden;
      @include border-radius(50%);
      background-color: #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info_box {
      line-height: 18px;
    }
    .info_up {
      position: relative;
      padding-left: 220px;
      .name {
        position: absolute;
        top: 0;
        left: 0;
        width: 215px;
        color: #000;
        font-weight: bold;
      }
      ul {
        li {
          display: inline-block;
          padding: 0 8px;
          border-left: solid 1px #666;
          color: #333;
        }
      }
    }
    .info_down {
      position: relative;
      margin-top: 6px;
      padding-left: 178px;
      color: #666;
      .btn_add {
        position: absolute;
        left: 0;
        top: 0;
        width: 168px;
        padding: 0 10px 0 18px;
        border-right: solid 1px #666;
        text-decoration: underline;
        cursor: pointer;
        &:before {
          content: '+';
          position: absolute;
          left: 0;
          top: 1px;
          width: 14px;
          height: 14px;
          font-size: 18px;
          line-height: 14px;
        }
      }
      .resource_list {
        overflow-x: scroll;
        white-space: nowrap;
      }
      .resource_item + .resource_item {
        margin-left: 20px;
      }
      .resource_item {
        position: relative;
        display: inline-block;
        margin-bottom: 12px;
        padding-right: 24px;
        a {
          position: absolute;
          top: 0;
          right: 0;
          width: 18px;
          height: 18px;
          border: solid 1px #444;
          @include border-radius(3px);
          font-size: 16px;
          text-align: center;
          line-height: 14px;
          vertical-align: middle;
          &:hover {
            border-color: #c81623;
            color: #c81623;
          }
        }
      }
    }
    .btn_deny {
      position: absolute;
      right: 15px;
      bottom: 10px;
      height: 20px;
      padding-left: 20px;
      line-height: 20px;
      &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 16px;
        height: 16px;
        background-color: #ccc;
      }
    }
  }

  .main_right {
    float: left;
    width: 24%;
    padding: 20px 5px 20px 20px;
    .md_box + .md_box {
      margin-top: 20px;
    }
    .md_title {
      border-bottom: solid 2px #ccc;
      font-size: 16px;
    }
    .item {
      overflow: hidden;
      padding-right: 10px;
      li {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .type,
    .amount {
      float: left;
      width: 50%;
    }
  }

  @media (max-width: 1024px) {
    .main {
      &:before {
        display: none;
      }
    }
    .main_left,
    .main_right {
      float: none;
      width: 100%;
    }
    .main_right {
      padding: 20px;
      .md_box {
        float: left;
        width: 50%;
        margin-top: 20px;
        padding: 0 10px;
        @include box-sizing();
      }
    }
  }

  @media (max-width: 640px) {
    .w {
      margin: 0;
    }
    .head_box {
      height: auto;
    }
    .logo,
    .nav_box {
      float: none;
      overflow-x: auto;
      white-space: nowrap;
      text-align: left;
      a {
        border: none;
        &.cur {
          @include border-radius(5px);
        }
      }
    }
    .logo {
      display: block;
    }
    .content_box {
      margin-top: 10px;
    }
    .sub_nav_box {
      dl {
        overflow-x: scroll;
        white-space: nowrap;
        dt {
          display: none;
        }
        dd {
          float: none;
          display: inline-block;
        }
      }
    }
    .main_left {
      padding: 10px;
      .item {
        padding-right: 10px;
      }
      .info_up {
        padding-left: 0;
        .name {
          position: static;
          width: auto;
          margin-bottom: 5px;
        }
        ul {
          display: block;
          li {
            margin-bottom: 5px;
          }
        }
      }
      .info_down {
        padding-left: 0;
        .btn_add {
          position: relative;
          display: block;
          width: auto;
          margin: 5px 10px;
          padding: 5px 10px;
          border: solid 1px #333;
          @include border-radius(20px);
          background-color: #fff;
          text-decoration: none;
          text-align: center;
          &:before {
            position: static;
          }
        }
        .resource_list {
          overflow: auto;
          margin-top: 5px;
          white-space: normal;
        }
      }
      .btn_deny {
        left: 10px;
        right: auto;
      }
    }

    .main_right {
      .md_box {
        float: none;
        width: 100%;
        margin-top: 20px;
        padding: 0 10px;
        @include box-sizing();
      }
    }
  }

</style>
<template>
  <div class="layout">
    <!--topBar-->
    <topBar :userName="userName"></topBar>
    <!--/topBar-->

    <!--head-->
    <div class="head_box">
      <div class="w clearfix">
        <a href="#" class="logo"><img src="http://placeholder.qiniudn.com/125x60" alt="logo"></a>
        <div class="nav_box">
          <a v-for="item in mainNav" :href="item.url" :class="{cur:item.isCur}">{{item.value}}</a>
        </div>
      </div>
    </div>
    <!--/head-->

    <!--content-->
    <div class="content_box">
      <div class="inner w">
        <!--sub_nav-->
        <div class="sub_nav_box">
          <dl class="clearfix">
            <dt>{{subNav.name}}</dt>
            <dd v-for="item in subNav.list" :class="{cur:item.isCur}">{{item.value}}</dd>
          </dl>
        </div>
        <!--/sub_nav-->

        <!--main-->
        <div class="main clearfix">
          <div class="main_left">
            <addPop :isShow="isShow" :topValue="topValue" :leftValue="leftValue" :confirmAdd="confirmAdd" :closePop="closePop" :newResource.sync="newResource"></addPop>

            <div class="list">
              <div class="item resources_item_box" :class="{other_status:item.status}" v-for="item,index in itemList" :key="index">
                <div class="img_box"><img :src="[item.image]" alt=""></div>
                <div class="info_box">
                  <div class="info_up clearfix">
                    <div class="name">{{item.title}}</div>
                    <ul class="clearfix">
                      <li v-for="info in itemList[index].otherInfos">{{info.key}}</li>
                    </ul>
                  </div>
                  <div class="info_down clearfix">
                    <div class="btn_add" @click="addResource(index,$event)">Specify Resources</div>
                    <div class="resource_list">Resources:
                      <div class="resource_item" v-for="resource,index2 in itemList[index].resourceList">{{resource}}<a href="javascript:" :key="index2" @click="deleteResource(index,index2)">&times;</a></div>
                    </div>
                  </div>
                </div>
                <a href="javascript:" class="btn_deny" v-if="!item.status">Deny</a>
              </div>
            </div>
          </div>

          <!--main right-->
          <div class="main_right clearfix">
            <!--summary-->
            <div class="md_box summary">
              <div class="md_title">Summary</div>
              <div class="md_content">
                <div class="item" v-for="item in summaryList">
                  <div class="type">{{item.type}}</div>
                  <div class="amount">{{item.amount}}</div>
                </div>
              </div>
            </div>
            <!--summary-->

            <!--history-->
            <div class="md_box history">
              <div class="md_title">History</div>
              <div class="md_content">
                <ul class="item">
                  <li v-for="item in historyList">{{item.key1}}/{{item.key2}}</li>
                </ul>
              </div>
            </div>
            <!--/history-->
          </div>
          <!--/main right-->

        </div>
        <!--/main-->
      </div>
    </div>
    <!--/content-->

  </div>
</template>
<script>
  import topBar from '../components/topBar';
  import addPop from '../components/addPop';

  export default {
    data() {
      return {
        userName: "alice",
        //主菜单
        mainNav: [{
          value: "DASHBOARO",
          url: "#",
          isCur: false
        }, {
          value: "MY CRUISE",
          url: "#",
          isCur: false
        }, {
          value: "AGENTS",
          url: "#",
          isCur: true
        }, {
          value: "HELP",
          url: "#",
          isCur: false
        }],
        //子页面菜单
        subNav: {
          name: "Agents",
          list: [{
            value: "All",
            isCur: false
          }, {
            value: "Physical",
            isCur: true
          }, {
            value: "Virtual",
            isCur: false
          }]
        },
        //item list
        itemList: [{
          status: false,
          image: "http://placeholder.qiniudn.com/50x50",
          title: "iutooifvnjg.ikvjudcn.com",
          otherInfos: [{
            key: "idle111",
          }, {
            key: "192.168.1.2",
          }, {
            key: "/var/lib/cruise-agent"
          }],
          resourceList: ["other11"]
        }, {
          status: true,
          image: "http://placeholder.qiniudn.com/50x50",
          title: "djaiei.kfjjvi.com",
          otherInfos: [{
            key: "idle222",
          }, {
            key: "192.168.1.2",
          }, {
            key: "/var/lib/cruise-agent"
          }],
          resourceList: ["ubuntu", "other22"]
        }, {
          status: true,
          image: "http://placeholder.qiniudn.com/50x50",
          title: "jauejfdl.idnfj.com",
          otherInfos: [{
            key: "idle333",
          }, {
            key: "192.168.1.2",
          }, {
            key: "/var/lib/cruise-agent"
          }],
          resourceList: ["ubuntu", "firefox", "other33"]
        }, {
          status: false,
          image: "http://placeholder.qiniudn.com/50x50",
          title: "hajhdiek.tiandnjdfjd.com",
          otherInfos: [{
            key: "idle444",
          }, {
            key: "192.168.1.2",
          }, {
            key: "/var/lib/cruise-agent"
          }],
          resourceList: ["ubuntu", "firefox", "other44", "ubuntu", "firefox", "other44", "ubuntu", "firefox", "other44"]
        }],
        //总计
        summaryList: [{
          type: "building",
          amount: 2
        }, {
          type: "idle",
          amount: 3
        }],
        //历史
        historyList: [{
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }, {
          key1: "yyeihfklan02",
          key2: "Acceptance_test"
        }],
        isShow: false,
        topValue: 0,
        leftValue: 0,
        newResource: [],
        curIndex: 0
      }
    },
    components: {
      topBar,
      addPop
    },
    methods: {
      addResource(index,ele) {
        this.isShow = true;
        this.curIndex = index;

        let item = ele.target.parentElement.parentElement.parentElement;
        let itemHeight = item.offsetHeight;
        let itemTop = item.offsetTop;
        console.log(ele,ele.target.parentElement.parentElement.parentElement.offsetTop);


        let browser = {
          versions: function () {
            let u = navigator.userAgent, app = navigator.appVersion;
            //移动终端浏览器版本信息
            return {
              trident: u.indexOf('Trident') > -1,
              presto: u.indexOf('Presto') > -1,
              webKit: u.indexOf('AppleWebKit') > -1,
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
              mobile: !!u.match(/AppleWebKit.*Mobile.*/),
              ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
              iPhone: u.indexOf('iPhone') > -1,
              iPad: u.indexOf('iPad') > -1,
              webApp: u.indexOf('Safari') === -1
            };
          }(),
          language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };

        if (browser.versions.mobile || browser.versions.ios || browser.versions.android ||
          browser.versions.iPhone || browser.versions.iPad) {
          this.topValue = '50%';
        } else {
          this.topValue = itemTop+ele.target.parentElement.parentElement.offsetHeight;
          console.log(this.topValue);
        }

      },
      deleteResource(index, index2) {
        let me = this;
        me.itemList[index].resourceList.splice(index2, 1);
      },
      confirmAdd() {
        this.itemList[this.curIndex].resourceList = this.itemList[this.curIndex].resourceList.concat(this.newResource);
      },
      closePop() {
        this.isShow = false;
      }
    }
  }
</script>
