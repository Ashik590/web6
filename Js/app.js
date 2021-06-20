const frame = document.querySelectorAll(".frame");
const anchor = document.querySelectorAll(".cap a");
const hero_h1 = document.querySelectorAll("#hero .cap h1");
const hero_p = document.querySelectorAll("#hero .cap p");

var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function() {
    for (const f of frame) {
        f.classList.add("fadeUpFrame");
    }
    for (const a of anchor) {
        a.classList.add("a_fadeEnd");
    }
    for(const h of hero_h1){
        h.classList.remove("aniH1")
    }
    for(const p of hero_p){
        p.classList.remove("aniH1")
    }
})
myCarousel.addEventListener('slid.bs.carousel', function() {
    setTimeout(() => {
        for (const f of frame) {
            f.classList.remove("fadeUpFrame");
        }
        for (const a of anchor) {
            a.classList.remove("a_fadeEnd");
        }
    }, 400);
    for(const h of hero_h1){
        h.classList.add("aniH1")
    }
    for(const p of hero_p){
        p.classList.add("aniH1")
    }
})
window.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        for (const y of frame) {
            y.classList.remove("fadeUpFrame");
        }
        for (const b of anchor) {
            b.classList.remove("a_fadeLoad");
        }
    }, 500);
})

//Search div logic

const seaBtn = document.querySelectorAll(".seaBtn");
const crossBtn = document.querySelector(".crossBtn");
const searchDiv = document.querySelector(".search");

seaBtn.forEach(function(sbtn){
    sbtn.addEventListener("click", function() {
        searchDiv.style.display = "flex";
    })
})
crossBtn.addEventListener("click", function() {
    searchDiv.style.display = "none";
})


// detail div logic

const detailBtn = document.querySelectorAll(".detailBtn");
const detailDiv = document.querySelector(".detail");
const detailCross = document.querySelector(".detail>i");

detailBtn.forEach(function(dbtn){
    dbtn.addEventListener("click", function() {
        detailDiv.classList.add("detailShow")
    })
})
detailCross.addEventListener("click", function() {
    detailDiv.classList.remove("detailShow")
})

//project section logic

const proItems = document.querySelectorAll("#project .item"),
    boxes = document.querySelectorAll("#project .box"),
    lines1 = document.querySelectorAll("#project .line1"),
    lines2 = document.querySelectorAll("#project .line2");

proItems.forEach(function(proItem) {
    proItem.addEventListener("mouseenter", function() {
        for (const box of boxes) {
            box.style.transitionDelay = "0.3s";
        }
        for (const line1 of lines1) {
            line1.style.transitionDelay = "0.5s";
        }
        for (const line2 of lines2) {
            line2.style.transitionDelay = "0.5s";
        }
    })
    proItem.addEventListener("mouseleave", function() {
        for (const box of boxes) {
            box.style.transitionDelay = "0s";
        }
        for (const line1 of lines1) {
            line1.style.transitionDelay = "0s";
        }
        for (const line2 of lines2) {
            line2.style.transitionDelay = "0s";
        }
    })
})

// mission section form label animation

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const textarea = document.getElementById("text");

label1.addEventListener("click", function(){
    names.focus()
    label1.classList.add("aflabel");
})
names.addEventListener("blur", function(){
    label1.classList.remove("aflabel")
})
names.addEventListener("focus", function(){
    label1.classList.add("aflabel");
})

label2.addEventListener("click", function(){
    email.focus()
    label2.classList.add("aflabel");
})
email.addEventListener("blur", function(){
    label2.classList.remove("aflabel")
})
email.addEventListener("focus", function(){
    label2.classList.add("aflabel");
})

label3.addEventListener("click", function(){
    phone.focus()
    label3.classList.add("aflabel");
})
phone.addEventListener("blur", function(){
    label3.classList.remove("aflabel")
})
phone.addEventListener("focus", function(){
    label3.classList.add("aflabel");
})

label4.addEventListener("click", function(){
    textarea.focus()
    label4.classList.add("aflabel");
})
textarea.addEventListener("blur", function(){
    label4.classList.remove("aflabel")
})
textarea.addEventListener("focus", function(){
    label4.classList.add("aflabel");
})

// progressbar animation 

const progbar1 = document.querySelectorAll(".skill .progress-bar")[0];
const progbar2 = document.querySelectorAll(".skill .progress-bar")[1];
const progbar3 = document.querySelectorAll(".skill .progress-bar")[2];
const progbar4 = document.querySelectorAll(".skill .progress-bar")[3];
const progbar5 = document.querySelectorAll(".skill .progress-bar")[4];

window.addEventListener("scroll", function(){
    let rect = progbar1.getBoundingClientRect().top * 1.2;
    if(rect <= innerHeight){
        progbar1.classList.add("proAni1")
        progbar2.classList.add("proAni2")
        progbar3.classList.add("proAni3")
        progbar4.classList.add("proAni4")
        progbar5.classList.add("proAni5")
    }
})

//

const resLi = document.querySelectorAll("#navbarRes .collapsings");

resLi.forEach(function(value){
    value.addEventListener("click", function(){
        if(this.classList.contains("collapsed")){
            this.lastElementChild.style.transform = "rotate(0deg)";
        } 
        else{
            this.lastElementChild.style.transform = "rotate(90deg)";
        } 
    })
})

const resDiv = document.querySelector(".resDiv");

function maxHeight(){
    const heightNav = document.querySelector("nav").clientHeight;
    let sum = innerHeight - heightNav ;
    resDiv.style.maxHeight = `${sum}px`;
}
maxHeight()
window.addEventListener("DOMContentLoaded", maxHeight)
window.addEventListener("resize", maxHeight)

//

const video = document.querySelector(".video");

function videoHeight(){
    let heigt = video.clientWidth;
    video.style.height = `${heigt * 0.64}px`;
}
videoHeight()
window.addEventListener("DOMContentLoaded", videoHeight);
window.addEventListener("resize", videoHeight);
