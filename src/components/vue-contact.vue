<template>
    <div class="vue-contact-list">
        <div class="searchBox">
            <form id="myform" action="" onsubmit="return false;">
                <input class="serchInput" type="search" placeholder="搜索" @keyup.13="search" v-model="searchCond">
            </form>
        </div>
        <div class="listbox">
            <div class="group-item" v-for="(item,index) in keyMap" :id="'anchor-'+index">
                <div class="title" v-show="contactList[item]&&contactList[item].length>0">{{item}}</div>
                <div class="item-box">
                    <div class="item" v-for="(mItem,mIndex) in contactList[item]">
                        <img :src="mItem[options.headPicUrl]" alt="" class="avatar">
                        <p class="name">{{mItem[options.trueName]}}<br/><span>{{mItem[options.mobileNum]}}</span></p>
                        <img class="call" :src="options.callIcon||iconImg" v-if="options.canCall" @click="makeCall(mItem[options.mobileNum])"></img>
                    </div>
                </div>
            </div>
        </div>
        <div class="index">
            <div class="item-contain">
                <div class="item" @click="goAnchor('#anchor-'+index)" v-for="(item,index) in keyMap">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import * as _tool from "../util/tool"
export default {
    name: 'vue-contact',
    data () {
        return {
            contactList: {},
            searchCond: "",
            keyMap: "ABCDEFGHJKLMNOPQRSTWXYZ#",
            memberListShow: false,
            iconImg: "../assets/call.png"
        }
    },
    props: {
        options: Object
    },
    watch: {
        memberList: function(val,oldVal){
            this.contactList = _tool.parseContactList(val,this.options.trueName);
        }
    },
    methods: {
        search: function(){
            this.$emit('on-search', this.searchCond)
        },
        makeCall: function(mobileNum) {
            this.$emit('on-call', mobileNum)
        },
        goAnchor(selector) {
            var anchor = document.querySelector(selector);
            document.querySelector(".listbox").scrollTop = anchor.offsetTop;
        }
    },
    mounted(){
        this.contactList = _tool.parseContactList(this.options.memberList,this.options.trueName);
    }
}
</script>

<style lang="scss">
    .vue-contact-list{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 9999;
        .searchBox{
            height: 53px;
            overflow: hidden;
            background-color: #ddd;
            .serchInput{
                display: block;
                width: 94%;
                height: 27px;
                margin: 13px auto;
                font-size: 12px;
                text-align: center;
                border-radius: 4px;
                background: none;
                outline: none;
                box-shadow: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                -o-appearance: none;
                appearance: none;
                border: none;
                background-color: #fff;
            }
        }
        .listbox{
            position: absolute;
            top: 53px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-x: hidden;
            overflow-y: auto;
            /*scroll-behavior: smooth;*/
            -webkit-overflow-scrolling : touch;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            z-index: 1;
            .title{
                height: 25px;
                line-height: 25px;
                background-color: #eee;
                text-indent: 12px;
            }
            .item-box{
                .item{
                    position: relative;
                    height: 53px;
                    overflow: hidden;
                    &:after{
                        content: "";
                        position: absolute;
                        left: 10px;
                        bottom: 0;
                        width: 90%;
                        height: 1px;
                        background-color: #ccc;
                    }
                    &:last-child{
                        &:after{
                            background-color: #fff;
                        }
                    }
                    .avatar{
                        float: left;
                        width: 34px;
                        height: 34px;
                        margin: 10px 12px;
                        border-radius: 50%;
                    }
                    .name{
                        line-height: 18px;
                        font-size: 14px;
                        color: #202020;
                        margin: 0;
                        padding: 12px 0 0 0;
                        span{
                            font-size: 12px;
                            color: #a6a6a6;
                        }
                    }
                    .call{
                        position: absolute;
                        top: 17px;
                        right: 10%;
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
        .index{
            position: absolute;
            top: 53px;
            right: 0;
            left: 100%;
            bottom: 0;
            width: 30px;
            margin-left: -30px;
            /*background-color: #fff;*/
            z-index: 9999;
            .item-contain{
                position: absolute;
                top: 50%;
                width: 100%;
                transform: translateY(-50%);
                background-color: #fff;
                .item{
                    display: block;
                    text-align: center;
                    font-size: 12px;
                }
            }
        }
    }
</style>
