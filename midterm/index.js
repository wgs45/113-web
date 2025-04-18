document.addEventListener("DOMContentLoaded", function () {
  window.openiframe = function (index) {
    const classDemo = document.querySelector(".show-classdemo");
    let src = "";
    switch (index) {
      case 1:
        src = "blog/index.html";
        break;
      case 2:
        src = "card/index.html";
        break;
      default:
        src = "404.html";
    }
    classDemo.innerHTML = `<iframe src="${src}" frameborder="1" width="100%" height="500px"></iframe>`;
  };
});
