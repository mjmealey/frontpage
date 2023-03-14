let blogButton = document.getElementById("blogButton")
let aboutButton = document.getElementById("aboutButton")
let contactButton = document.getElementById("contactButton")
let rpsProject =  document.getElementById("rpsProject")
let githubRepoOne = document.getElementById("githubRepoOne")
let etchasketchProject = document.getElementById("etchasketchProject")
let githubRepoTwo = document.getElementById("githubRepoTwo")
let calculatorProject = document.getElementById("calculatorProject")
let githubRepoThree = document.getElementById("githubRepoThree")


calculatorProject.addEventListener("click", (e) => {
    if(e.target.id === "calculatorProject"){
        window.location.href = "https://mjmealey.github.io/calulator.app/"
    }
})

rpsProject.addEventListener("click", (e) => {
    if(e.target.id === "rpsProject"){
        window.location.href="https://mjmealey.github.io/rockpaperscissors/"
    }
})

etchasketchProject.addEventListener("click", (e) =>{
    if(e.target.id === "etchasketchProject"){
        window.location.href="https://mjmealey.github.io/etch-a-sketch/"
    }
})



blogButton.addEventListener("click", (e) => {
    if(e.target.id === "blogButton"){
        window.location.href = "https://mjmealey.github.io/blog/"
    }
})

aboutButton.addEventListener("click", (e) => {
    if(e.target.id === "aboutButton"){
        window.location.href = "https://mjmealey.github.io/aboutme/index.html"
    }
})