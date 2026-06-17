$(function(){
    // menu_list
    const menu_list = document.querySelectorAll(".qick_menu_area > .list > li .qick_menu, #footer .container .bot_area .inner_box .menu_area > .list > li .menu");
    menu_list.forEach(menu => {
        menu.addEventListener("click", function(e){
        e.preventDefault();
        let target = this.getAttribute("href");
            gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.inOut"});
        });
    });


    $(".light_mode").on("click", function(){
        alert("준비중 입니다.");
    });
    

    function ovelay_open(){
        $("body").css("overflow", "hidden");
        $("#menu_open_btn").hide();
        $("#menu_close_btn").show();
        $("#overlay_menu").addClass("on");
        $("#header .container .title").css({opacity: 0});
    }

    function ovelay_close(){
        $("body").css("overflow", "");
        $("#menu_close_btn").hide();
        $("#menu_open_btn").show();
        $("#overlay_menu").removeClass("on");
        $("#header .container .title").css({opacity: 1});
    }

    function portfloio_open(){
        $(".profile_card_area").addClass("on");
    }

    function portfloio_close(){
        $(".profile_card_area").removeClass("on");
        $("#profile_skill .list_area").removeClass("on");
        $("#profile_skill .more_btn_area .more_btn").removeClass("on");
        $("#profile_skill .more_btn_area .more_btn .txt").text("+4");
    }

    // overlay_menu_open
    $("#menu_open_btn").click(function() {
        ovelay_open();
        if($("#overlay_menu").hasClass("on")){
            const ovelay_menu_list = document.querySelectorAll("#overlay_menu .container .menu_area > .list > li a");
            ovelay_menu_list.forEach(overlay_menu => {
                overlay_menu.addEventListener("click", function(e){
                    e.preventDefault();
                    let ovelay_target = this.getAttribute("href");
                    gsap.to(window, {duration: 1, scrollTo: ovelay_target, ease: "power2.inOut"});
                    ovelay_close();
                    portfloio_close();
                });
            });
            portfloio_close();
        } else {
        }
    });

    $("#menu_close_btn").click(function() {
        ovelay_close();
        portfloio_close();
    });


    // profile_card
    $("#profile_open").on("click", function(){
        portfloio_open();
    });

    $("#profile_skill .more_btn_area .more_btn").on("click", function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).parent("div").prev(".list_area").addClass("on");
            $(this).find(".txt").text("X");
        }else {
            $(this).parent("div").prev(".list_area").removeClass("on");
            $(this).find(".txt").text("+4");
        }
    });

    $("#profile_close").on("click", function(){
        portfloio_close();
    });


	$(window).resize(function(){
        let vW = $(window).innerWidth();
		if(vW <= 1080){
			$("#header").addClass("mo");
            $(".qick_menu_area").css("visibility", "hidden").removeClass("on");
            $(".project_cont .container .project_area .list li:first-child").removeClass("on");
            $(".project_cont .container .project_area .list li:last-child").removeClass("on");
		}
		else{
            $("#header").removeClass("mo");
            $(".qick_menu_area").css("visibility", "visible");
            $(".project_cont .container .project_area .list li:first-child").addClass("on");
            $(".project_cont .container .project_area .list li:last-child").addClass("on");
        }
	});
    $(window).trigger("resize");


	$(window).scroll(function(){
		if($("#header").hasClass("mo")==false){
			let scrollTop = $(window).scrollTop();
            let htHeight = $('.h_banner_area').innerHeight();
			if(scrollTop > htHeight){
                $(".qick_menu_area").addClass("on");
			}
			else{
                $(".qick_menu_area").removeClass("on");
            }
		}
	});
    $(window).scroll();



    


    // top_btn
    $("#top_btn").on("click",function(){
        var h = $("#main").offset().top;
        $("html, body").animate({scrollTop: h}, 800, "linear");
        return false;
    }); 










    
        //-----스토리 슬라이드-----
        if (window.innerWidth <= 1080) {
    

            var storySwiper  = new Swiper ('.project_area', {
                slidesPerView: 1.5,
                spaceBetween: window.innerWidth * 0.05,
                speed: 1000,
                loop: true,
                on: {
                    resize: function () {
                        this.params.spaceBetween = window.innerWidth * 0.05;
                        this.update();
                    }
                }
            });            

            // publishing slide
            var pubSilde  = new Swiper ('.publishing_area.show1081', {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                initialSlide: 3,      
            });
        } else {
            // skill
            // $(".skill_cont .container .skill_area .list_area > .list > li").on('mouseover', function(e) {
            //     $(this).addClass('hovered');
            // }).on('mousemove', function(e) {
            //     let imgWidth = $(this).find(".box .img").outerWidth();
            //     let imgHeight = $(this).find(".box .img").outerHeight();
            //     TweenMax.to(e.currentTarget.querySelector('.img'), .5, {
            //         left: e.clientX - (imgWidth / 2),
            //         top: e.offsetY - (imgHeight / 2)
            //     });
                
            // }).on('mouseleave', function() {
            //     $(this).removeClass('hovered');
            // });

            const boxs = document.querySelectorAll('.skill_cont .container .skill_area .list_area > .list > li');

            boxs.forEach(box => {
                box.addEventListener("mousemove",(e)=>{
                        const brothers = Array.from(box.parentElement.children);
    
    // 2. 모든 형제 요소에서 'active' 클래스 제거
    brothers.forEach(brother => {
      brother.classList.remove('hovered');
    });
       
                    box.classList.add("hovered");
                    // e.currentTarget.classList.remove("hovered");
                    let x = (e.clientX - 1000) ;
                    let y = (e.clientY - 1000);
                    

                    gsap.to(".skill_cont .container .skill_area .list_area > .list > li .box .img",{
                        y:x,
                        x:y,
                        duration:1,

                    });
                });


            

        });
        }


});











// about
// let a_desc = document.querySelectorAll(".a_desc");
// let section1Top = document.querySelector("#section1").offsetTop;

// function scroll1(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

//     a_desc.forEach(item => {
//         if(scrollTop >= section1Top + item.offsetTop - window.innerHeight){
//             item.classList.add("on");
//         } else {
//             item.classList.remove("on");
//         }
//     })

//     requestAnimationFrame(scroll1);
// }
// scroll1();

// skill marqueeText
// const pTag1 = document.querySelector('.first-parallel');
// const pTag2 = document.querySelector('.second-parallel');
// const pTag3 = document.querySelector('.third-parallel');
// const pTag4 = document.querySelector('.forth-parallel');
// const pTag5 = document.querySelector('.five-parallel');

// const textArr1 = "HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS".split(' ');
// const textArr2 = "JQUERY/JAVASCRIPT JQUERY/JAVASCRIPT JQUERY/JAVASCRIPT JQUERY/JAVASCRIPT".split(' ');
// const textArr3 = "PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP".split(' ');
// const textArr4 = "POTOSHOP POTOSHOP POTOSHOP POTOSHOP POTOSHOP POTOSHOP POTOSHOP".split(' ');
// const textArr5 = "ILLUSTRATION ILLUSTRATION ILLUSTRATION ILLUSTRATION ILLUSTRATION".split(' ');
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;
// let count5 = 0;

// initTexts(pTag1, textArr1)
// initTexts(pTag2, textArr2)
// initTexts(pTag3, textArr3)
// initTexts(pTag4, textArr4)
// initTexts(pTag5, textArr5)

// function initTexts(element, textArray) {
//     textArray.push(...textArray)
//     for (let i = 0; i < textArray.length; i++) {
//         element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
//     }
// }

// function marqueeText(count, element, direction) {
//     if (count > element.scrollWidth / 2) {
//         element.style.transform = `translate3d(0, 0, 0)`
//         count = 0
//     }
//     element.style.transform = `translate3d(${direction * count}px, 0, 0)`

//     return count
// }

// function animate() {
//     count1++
//     count2++
//     count3++
//     count4++
//     count5++

//     count1 = marqueeText(count1, pTag1, -1)
//     count2 = marqueeText(count2, pTag2, 1)
//     count3 = marqueeText(count3, pTag3, -1)
//     count4 = marqueeText(count4, pTag4, 1)
//     count5 = marqueeText(count5, pTag5, -1)

//     window.requestAnimationFrame(animate)
// }

// function scrollHandler() {
//     count1 += 15
//     count2 += 15
//     count3 += 15
//     count4 += 15
//     count5 += 15
// }

// window.addEventListener('scroll', scrollHandler)
// animate()


// // portfloio 가로모드
// let section3Top = document.querySelector('#section3').offsetTop;

// function scroll(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

//     //3번째 섹션에 왔을 때 스크롤탑을 0으로 초기화해서 시작
//     let offset = scrollTop - section3Top;

//     if(scrollTop >= section3Top){
//         gsap.to(".p_item1", {left: -offset, ease: "linear"})
//     }

//     requestAnimationFrame(scroll);
// }
// scroll();


// // p_item1
// let section31Top = document.querySelector('#section3').offsetTop;
// const p_item1 = document.querySelectorAll(".p_item1 article");

// addEventListener("scroll", e => {
//     const scrollY = window.scrollY;
//     p_item1.forEach(item => {
//         if(scrollY >= section31Top + item.offsetLeft - 75){
//             item.classList.add("on");
//         } else {
//             item.classList.remove("on");
//         }
//     })
// });

// // p_item2
// let section32Top = document.querySelector('#section3').offsetTop;
// let p_item2 = document.querySelectorAll(".p_item2 article");
// let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

// function scroll32(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

//     p_item2.forEach(item => {
//         if(scrollTop >= section32Top + item.offsetTop - window.innerHeight){
//             item.classList.add("on");
//         } 
//     })

//     requestAnimationFrame(scroll32);
// }
// scroll32();


// // potoshop
// let poto_item = document.querySelectorAll(".poto_item");
// let section4Top = document.querySelector("#section4").offsetTop;

// function scroll4(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

//     poto_item.forEach(item => {
//         if(scrollTop >= section4Top + item.offsetTop - (window.innerHeight/1.5)){
//             item.classList.add("on");
//         } else {
//             item.classList.remove("on");
//         }
//     })

//     requestAnimationFrame(scroll4);
// }
// scroll4();

// // fullImg
// let fullImgBox = document.getElementById("fullImgBox");
// let fullImg = document.getElementById("fullImg");

// function openFullImg(pic) {
//     fullImgBox.style.display = "flex";
//     fullImg.src = pic;
// }

// function closeFullImg() {
//     fullImgBox.style.display = "none";
// }


// // publishing
// let pub_item = document.querySelectorAll(".pub_item");
// let section5Top = document.querySelector("#section5").offsetTop;

// function scroll5(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY

//     pub_item.forEach(item => {
//         if(scrollTop >= section5Top + item.offsetTop - (window.innerHeight/2)){
//             item.classList.add("on");
//         }
//     })

//     requestAnimationFrame(scroll5);
// }
// scroll5();