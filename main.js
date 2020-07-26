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

var vue3 = new Vue({
    el: '#vue3',
    data: {
      seen: true,   //繼續在控制台輸入seen = false，之前顯示的消息會消失。
      activity: false
    }
  });

  var vue4 = new Vue({
      el: '#vue4',
      data: {
          products: [
              {name: "奶茶", price: 45},
              {name: "紅茶", price: 20},
              {name: "綠茶", price: 20},
              {name: "烏龍茶", price: 25},
          ]
      }
  });

  var vue5 = new Vue({
        el: '#vue5',
        data: {
            text: '',
            count: 0,
            msg: '',
        },
        methods: {
            show: function () {
                this.text = '點到了!'
            },
            add: function () {
                this.count++;
            },
            sub: function () {
                this.count--;
            },
            change: function () {
                this.msg = '點到了~~!!!'
            }
        }
  });

  var vue6 = new Vue({
    el: '#vue6',
    data: {
        name: "",
    }
  });