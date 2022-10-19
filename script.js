let btns = document.getElementsByClassName("btn");
let rate = document.querySelector(".rate")
let firstContainer = document.querySelector(".container")
let secondContainer = document.querySelector(".thank-you")
let submitBtn = document.querySelector(".submit")

for(var i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(e) {
    var current = document.getElementsByClassName("active");

    if(current.length > 0){
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
    let content = e.target.textContent;
    rate.textContent = content

    submitBtn.addEventListener("click", function(e) {
      firstContainer.classList.add('hidden')
      secondContainer.classList.remove('hidden')

    })

  });
}