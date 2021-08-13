// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})




const myFunction1 = (Event) =>{
    document.getElementById("card-body-1").classList.remove('bg-info');
    document.getElementById("card-body-1").classList.add('bg-primary');
}
const myFunction2 = (Event) =>{
    document.getElementById("card-body-2").classList.remove('bg-info');
    document.getElementById("card-body-2").classList.add('bg-primary');
}
const myFunction3 = (Event) =>{
    document.getElementById("card-body-3").classList.remove('bg-info');
    document.getElementById("card-body-3").classList.add('bg-primary');
}
const myFunction4 = (Event) =>{
    document.getElementById("card-body-4").classList.remove('bg-info');
    document.getElementById("card-body-4").classList.add('bg-primary');
}
const myFunction5 = (Event) =>{
    document.getElementById("card-body-5").classList.remove('bg-info');
    document.getElementById("card-body-5").classList.add('bg-primary');
}

const myImageFunction1 = (Event) =>{
    document.getElementById("visicard-1").classList.add('visibility');
}

const myMouseOutFunction1 = (Event) => {
    document.getElementById('visicard-1').classList.remove('visibility')
}



const myImageFunction2 = (Event) =>{
    document.getElementById("visicard-2").classList.add('visibility');
}

const myMouseOutFunction2 = (Event) => {
    document.getElementById('visicard-2').classList.remove('visibility')
}



const myImageFunction3 = (Event) =>{
    document.getElementById("visicard-3").classList.add('visibility');
}

const myMouseOutFunction3 = (Event) => {
    document.getElementById('visicard-3').classList.remove('visibility')
}



const myImageFunction4 = (Event) =>{
    document.getElementById("visicard-4").classList.add('visibility');
}

const myMouseOutFunction4 = (Event) => {
    document.getElementById('visicard-4').classList.remove('visibility')
}



const myImageFunction5 = (Event) =>{
    document.getElementById("visicard-5").classList.add('visibility');
}

const myMouseOutFunction5 = (Event) => {
    document.getElementById('visicard-5').classList.remove('visibility')
}



const myImageFunction6 = (Event) =>{
    document.getElementById("visicard-6").classList.add('visibility');
}

const myMouseOutFunction6 = (Event) => {
    document.getElementById('visicard-6').classList.remove('visibility')
}

const cardmouseout1 = () => {
    document.getElementById("card-body-1").classList.remove('bg-primary');
    document.getElementById("card-body-1").classList.add('bg-info');
}

const cardmouseout2 = () => {
    document.getElementById("card-body-2").classList.remove('bg-primary');
    document.getElementById("card-body-2").classList.add('bg-info');
}

const cardmouseout3 = () => {
    document.getElementById("card-body-3").classList.remove('bg-primary');
    document.getElementById("card-body-3").classList.add('bg-info');
}

const cardmouseout4 = () => {
    document.getElementById("card-body-4").classList.remove('bg-primary');
    document.getElementById("card-body-4").classList.add('bg-info');
}

const cardmouseout5 = () => {
    document.getElementById("card-body-5").classList.remove('bg-primary');
    document.getElementById("card-body-5").classList.add('bg-info');
}