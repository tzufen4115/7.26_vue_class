console.log('JS!');

// 定義渲染區域
// 整數 vue = new Vue();  >>>要新增一個Vue物件
// el >>>指定元素"選取器"
var vue1 = new Vue({
    el: '#vue1',
    data: {
        message: 'HIHIHI~!',
        a: 999,
        b: 9,
    }
});

var vue2 = new Vue({
    el: '#vue2',
    data: {
        aligment: 'center',
        vuejs: "https://vuejs.org/",
    }
});