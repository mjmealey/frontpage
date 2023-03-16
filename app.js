let blogButton = document.getElementById("blogButton");
let aboutButton = document.getElementById("aboutButton");
let contactButton = document.getElementById("contactButton");
let rpsProject = document.getElementById("rpsProject");
let code = document.getElementById("code");
let etchasketchProject = document.getElementById("etchasketchProject");
let codeTwo = document.getElementById("codeTwo");
let calculatorProject = document.getElementById("calculatorProject");
let codeThree = document.getElementById("codeThree");
let linkedIn = document.getElementById("linkedIn")


rpsProject.addEventListener("click", (e) => {
  if (e.target.id === "rpsProject") {
    window.location.href = "https://mjmealey.github.io/rockpaperscissors/";
  }
});
code.addEventListener("click", (e) => {
  if (e.target.id === "code") {
    window.location.href = "https://github.com/mjmealey/rock-paper-scissors";
  }
});

etchasketchProject.addEventListener("click", (e) => {
  if (e.target.id === "etchasketchProject") {
    window.location.href = "https://mjmealey.github.io/etch-a-sketch/";
  }
});

codeTwo.addEventListener("click", (e) => {
    if(e.target.id === "codeTwo"){
        window.location.href = "https://github.com/mjmealey/etch-a-sketch"
    }
})

calculatorProject.addEventListener("click", (e) => {
    if (e.target.id === "calculatorProject") {
      window.location.href = "https://mjmealey.github.io/calulator.app/";
    }
  });

  codeThree.addEventListener("click", (e) => {
    if(e.target.id === "codeThree"){
        window.location.href = "https://github.com/mjmealey/calulator.app"
    }
  })

blogButton.addEventListener("click", (e) => {
  if (e.target.id === "blogButton") {
    window.location.href = "https://mjmealey.github.io/blog/";
  }
});

aboutButton.addEventListener("click", (e) => {
  if (e.target.id === "aboutButton") {
    window.location.href = "https://mjmealey.github.io/aboutme/";
  }
});

linkedIn.addEventListener("click", (e) => {
if(e.target.id === "linkedIn"){
    window.location.href = "https://www.linkedin.com/in/mark-mealey-24613726a/"
}
})
