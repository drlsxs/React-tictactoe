// console.log('110')
// webpack-dev-server打包好的main.js是托管到了内存中;所以在项目根目录中看不到;
//但是，我们可以认为，在**项目根目录**中，有一个看不见的main.js

// 1.这个导入的时候，接受成员名称必须这样写
// 创建组件，虚拟DOM元素，生命周期
import React from 'react'
// 吧创建好的组件和虚拟DOM放到页面上展示
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
// 参数1:创建的元素的类型，字符串，表示元素的名称
// 参数2:是一个对象或null，表示当前这个DOM元素的属性
// 参数3:子节点（包括其它虚拟DoM 获取文本子节点)
// 参数n:其它子节点

/* <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>  */
// const myh1 = React.createElement('h1', {id: 'myh1', title: 'this is a h1'}, '这是一个大大的H1')

const mydiv = <div id="mydiv" title="div aaa">
    这是一个div元素
    <h1>这是一个大大的H1</h1>
</div>

//  使用ReactDOM 把虚拟DoM 渲染到页面上 
//  参数1:要渲染的那个虚拟DOM元素 
// 参数2:指定页面上一个DOM 元素对象当做容器 
ReactDOM.render(mydiv, document.getElementById('app'))

