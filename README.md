# vue-contact

> vue联系人列表组件
> 按首字母自动分类
# Install
```
npm install --save-dev vue-contact
```
# Import
```
    import vueContact from 'vue-contact'
    components: {
        vueContact
    }
```
# Usage
```
<vueContact :options="options" @on-search="search" @on-call="makeCall"></vueContact>
```
# Options
| Option           |  Default  | Description          |
| ---------------- |:---------:|:--------------------:|
| options          |    --     |base options          |

## options:
```
  options: {
      memberList: memberList,//your list
      headPicUrl: "headPicUrl",//your keyword of headPicture
      trueName: "trueName",//your keyword of name
      mobileNum: "mobileNum",//your keyword of mobileNum
      canCall: true,//do you need call icon
      callIcon: "/static/images/call.png",//call icon image
  }
```

# Events
| Option           |   param   | Description                           |
| ---------------- |:---------:|:-------------------------------------:|
| on-search        |searchCond | called after enter(search) pressed    |
| on-call          | phoneNum  | called after call icon tapped         |


## demo Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8091
npm run dev

