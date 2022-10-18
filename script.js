const btns = document.getElementsByClassName("btn");

for(var i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(e) {
    var current = document.getElementsByClassName("active");

    if(current.length > 0){
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
    let content = e.target.textContent
  });
}