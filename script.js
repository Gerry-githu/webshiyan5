// JavaScript 添加事件处理器（onclick、onchange、onmousedown、onmouseout、onmouseover、onmouseup）

document.addEventListener("DOMContentLoaded", function() {
  var employeeCards = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  employeeCards.forEach(function(item) {
    item.onclick = function() {
      alert("你点击了： " + this.textContent);
    };
  });

  // 添加更改事件（onchange）（对于 div 元素不常用，通常用于 input 元素）
var specialemployee = document.getElementById("special-employee");
if (specialemployee) {
  specialemployee.addEventListener("change", function() {
    // eslint-disable-next-line no-console
    console.log("特殊已更改");
  });
}
  // 添加鼠标按下事件（onmousedown）
 employeeCards.forEach(function(item) {
    item.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    };
  });

  // 添加鼠标移出事件（onmouseout）
  employeeCards.forEach(function(item) {
    item.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });

  // 添加鼠标悬停事件（onmouseover）
employeeCards.forEach(function(item) {
    item.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 添加鼠标松开事件（onmouseup）
employeeCards.forEach(function(item) {
    item.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    };
  });
});
