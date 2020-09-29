function updateProgress(num1, num2){
  var percent = Math.ceil( num1 / num2 * 99 ) + '%';
  document.getElementById('progress').style.width = percent;
}

window.addEventListener('scroll', function(){
  var top = window.scrollY;
  var height = document.body.getBoundingClientRect().height - window.innerHeight;
  updateProgress(top, height);
});