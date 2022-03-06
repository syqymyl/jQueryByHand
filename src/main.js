// const api = jQuery(".test"); //不返回元素们，返回api对象
// api.addClass("red").addClass("blue"); //遍历刚才所有获取的元素，添加.red和.blue，链式操作
//jQuery(".test").addClass("red").addClass("blue");

// console.log(jQuery(".test").find(".child"));
// jQuery(".test").find(".child").addClass("blue");

// const api1 = jQuery(".test");
// api1.addClass("blue");
// const api2 = api1.find(".child").addClass("green");
// api1.addClass("orange"); //若使用elements = array，此时的api1操作的elements=.child节点，不是.test节点

// const api1 = jQuery(".test");
// const api2 = api1
//   .find(".child")
//   .addClass("blue")
//   .addClass("green")
//   .addClass("orange");
// const oldApi = api2.end().addClass("yellow");
jQuery(".test")
  .find(".child")
  .addClass("blue")
  .addClass("green")
  .addClass("orange")
  .end()
  .addClass("yellow");

const x = jQuery(".test");
// x.each((div) => console.log(div));
x.parent().print(); // 打印出一个body
jQuery(".test").find(".child").parent().print(); // 打印出三个div，这三个div虽然属性相同，但不是同一个

x.children().print();

const div1 = document.querySelector(".test"); // div1是DOM构造的对象，只能调用DOM API
const div2 = $(".test"); // div2是jQuery构造的对象

$("<div>1</div>").appendTo(document.body);
