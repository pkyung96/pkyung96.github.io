// menu
const NavMenu = document.querySelectorAll(".menu li a");
NavMenu.forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})


// overlay_nav
$('.ham_bar').click(function() {
    $('#overlay_nav').toggleClass('on');
});
$('.close_btn').click(function() {
    $('#overlay_nav').removeClass('on');
});
$('.menu li a').click(function() {
    $('#overlay_nav').removeClass('on');
});


// scroll_down
$('.scroll_down').on('click',function(){
    var h = $('#section1').offset().top;
    $("html, body").animate({scrollTop:h}, '3000');
    return false;
});


// about
let a_desc = document.querySelectorAll(".a_desc");
let section1Top = document.querySelector("#section1").offsetTop;

function scroll1(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

    a_desc.forEach(item => {
        if(scrollTop >= section1Top + item.offsetTop - window.innerHeight){
            item.classList.add("on");
        } else {
            item.classList.remove("on");
        }
    })

    requestAnimationFrame(scroll1);
}
scroll1();

// skill marqueeText
const pTag1 = document.querySelector('.first-parallel');
const pTag2 = document.querySelector('.second-parallel');
const pTag3 = document.querySelector('.third-parallel');
const pTag4 = document.querySelector('.forth-parallel');
const pTag5 = document.querySelector('.five-parallel');

const textArr1 = "HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS".split(' ');
const textArr2 = "JQUERY/JAVASCRIPT JQUERY/JAVASCRIPT JQUERY/JAVASCRIPT JQUERY/JAVASCRIPT".split(' ');
const textArr3 = "PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP".split(' ');
const textArr4 = "POTOSHOP POTOSHOP POTOSHOP POTOSHOP POTOSHOP POTOSHOP POTOSHOP".split(' ');
const textArr5 = "ILLUSTRATION ILLUSTRATION ILLUSTRATION ILLUSTRATION ILLUSTRATION".split(' ');
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)
initTexts(pTag4, textArr4)
initTexts(pTag5, textArr5)

function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`
        count = 0
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`

    return count
}

function animate() {
    count1++
    count2++
    count3++
    count4++
    count5++

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)
    count3 = marqueeText(count3, pTag3, -1)
    count4 = marqueeText(count4, pTag4, 1)
    count5 = marqueeText(count5, pTag5, -1)

    window.requestAnimationFrame(animate)
}

function scrollHandler() {
    count1 += 15
    count2 += 15
    count3 += 15
    count4 += 15
    count5 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()


// portfloio 가로모드
let section3Top = document.querySelector('#section3').offsetTop;

function scroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

    //3번째 섹션에 왔을 때 스크롤탑을 0으로 초기화해서 시작
    let offset = scrollTop - section3Top;

    if(scrollTop >= section3Top){
        gsap.to(".p_item1", {left: -offset, ease: "linear"})
    }

    requestAnimationFrame(scroll);
}
scroll();


// p_item1
let section31Top = document.querySelector('#section3').offsetTop;
const p_item1 = document.querySelectorAll(".p_item1 article");

addEventListener("scroll", e => {
    const scrollY = window.scrollY;
    p_item1.forEach(item => {
        if(scrollY >= section31Top + item.offsetLeft - 75){
            item.classList.add("on");
        } else {
            item.classList.remove("on");
        }
    })
});

// p_item2
let section32Top = document.querySelector('#section3').offsetTop;
let p_item2 = document.querySelectorAll(".p_item2 article");
let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

function scroll32(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

    p_item2.forEach(item => {
        if(scrollTop >= section32Top + item.offsetTop - window.innerHeight){
            item.classList.add("on");
        } 
    })

    requestAnimationFrame(scroll32);
}
scroll32();


// potoshop
let poto_item = document.querySelectorAll(".poto_item");
let section4Top = document.querySelector("#section4").offsetTop;

function scroll4(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

    poto_item.forEach(item => {
        if(scrollTop >= section4Top + item.offsetTop - window.innerHeight){
            item.classList.add("on");
        } else {}
    })

    requestAnimationFrame(scroll4);
}
scroll4();

// fullImg
let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}


// publishing
let pub_item = document.querySelectorAll(".pub_item");
let section5Top = document.querySelector("#section5").offsetTop;

function scroll5(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

    pub_item.forEach(item => {
        if(scrollTop >= section5Top + item.offsetTop - window.innerHeight){
            item.classList.add("on");
        } 
    })

    requestAnimationFrame(scroll5);
}
scroll5();