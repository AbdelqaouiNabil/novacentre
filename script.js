const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

const lines = document.querySelectorAll(".line");


burger.addEventListener('click',()=>{
    navlinks.classList.toggle("open");
    lines.forEach(line =>{
        line.classList.toggle("changeColor");
    });
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})


// show hide form start
function showForm(){

    var form = document.getElementById("inscr");
        form.style.display= 'block';
       
}
function hideForm(){

    var form = document.getElementById("inscr");
    form.style.display= 'none';
}


// scroll up animation

$("#button").click(function() {
    $("html").animate({ scrollTop: 5 }, "slow");
    });