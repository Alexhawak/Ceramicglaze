const navmain = () => {
    gsap.to("nav", {
        backgroundColor: "black",
        height: "80px",
        duration: .2,
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            scrub: 3,
            start: "top -10%",
    }});

  
}
if (window.innerWidth > 410) {
    navmain();
}


let blackBg=()=>{
    gsap.to(".main", {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: ".main",
            scroller: "body",
            scrub: 3,
            start: "top -30%",
            end: "top -80%"
        }
    });
}
blackBg();


            /* Hamburger Menu */


let ham =() =>{

    var main =document.querySelector(".nav-wrapper")
    var link =document.querySelectorAll(".invi")
    var close =document.querySelector(".close")
    var open=document.querySelector(".clicki")
    open.addEventListener("click",function(){
        open.style.display = "none";
        close.style.display ="block"
        main.classList.toggle("click")
        
    })        
    close.addEventListener("click",function(){
        open.style.display = "block";
        close.style.display ="none"
        main.classList.toggle("click")
    })

}
ham()

let o =()=>{
    var main =document.querySelector(".nav-wrapper")
    var link =document.querySelectorAll(".invi")
    var close =document.querySelector(".close")
    var open=document.querySelector(".clicki")
    link.forEach(function(clk){
        clk.addEventListener("click",function(){
           open.style.display = "block";
       close.style.display ="none"
       main.classList.toggle("click")
   })
   })

}
if (window.innerWidth < 556) {
    o();
}
                /* Services */



let ser = () => {
    var cards = document.querySelectorAll(".card");
    var img =document.querySelectorAll(".cardimages");
    var cnts = document.querySelectorAll(".card-cnt");

    cards.forEach(function(card, index) {
        card.addEventListener("mouseover", function() {
            cnts[index].style.display = "block";
            cnts[index].style.bottom = 0;
            img[index].style.filter ="blur(3px)";


        });

        card.addEventListener("mouseleave", function() {
            cnts[index].style.display = "none";
            img[index].style.filter ="blur(0)";
        });
    });
}

ser();



                /* form */

let click = () => {
    var form = document.querySelector("form");
    var alerts = form.querySelectorAll(".alert"); 
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Loop through each input field and its corresponding alert
        form.querySelectorAll("input").forEach(function(input, index) {
            var alert = alerts[index];
            if (input.value.trim() === "") {
                alert.style.display = "block";
            } else {
                alert.style.display = "none";
            }
        });
    });
}

click();


let books=()=>{

    window.location.href="booking.html";
}


let letsgos=()=>{
    window.location.href="services.html";
}



