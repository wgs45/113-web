function open_iframe(index) {
  const classDemo = document.getElementById('show-classdemo');
  console.log(classDemo);
}

switch (index) {
  case 1:
    classDemo.innerHTML = '<iframe src="#" frameborder="1"></iframe>';
    break;
  case 2:
    classDemo.innerHTML = '<iframe src="#" frameborder="1"></iframe>';
    break;
  case 3:
    classDemo.innerHTML = '<iframe src="#" frameborder="1"></iframe>';
    break;
  case 4:
    classDemo.innerHTML = '<iframe src="#" frameborder="1"></iframe>';
    break;
  }
  console.log(index);
}
