<template>
    <div id="app">
        <vueContact :options="options" @on-search="search" @on-call="makeCall"></vueContact>
    </div>
</template>

<script>
import vueContact from './components/vue-contact'
import memberList from"./mock/contactList.js"
export default {
    name: 'app',
    components: {
        vueContact
    },
    data () {
        return {
            options: {
                memberList: memberList,
                headPicUrl: "headPicUrl",
                trueName: "trueName",
                mobileNum: "mobileNum",
                canCall: true,
                callIcon: "/static/images/call.png",
            },
            memberListShow: false
        }
    },
    methods: {
        search: function(searchCond){
            console.log(searchCond);
        },
        makeCall: function(mobileNum) {
            let ele = document.createElement("a");
            ele.href="tel:" + mobileNum;
            ele.click();
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss">
html,body{
    height: 100%;
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
