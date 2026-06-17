$(function(){
    gsap.registerPlugin(ScrollTrigger);
    
    // menu_list
    const menu_list = document.querySelectorAll(".qick_menu_area > .list > li .qick_menu, #footer .container .bot_area .inner_box .menu_area > .list > li .menu");
    menu_list.forEach(menu => {
        menu.addEventListener("click", function(e){
        e.preventDefault();
        let target = this.getAttribute("href");
            gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.inOut"});
        });
    });

    // light mode
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
		if(vW <= 1081){
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


    // main visual
    gsap.to(".intro_cont .container .bg_img", {
        width: "100%",
        height: "100%",
        scrollTrigger: {
            trigger: "#section1",
            start: "top top",
            pin: true,
            scrub: 1,
            onLeave: sec1ScrollOn,
            onEnterBack: sec1ScrollOff,
        },
    });

    function sec1ScrollOn() {
        $(".scroll_down").addClass("on");
        $(".intro_cont .container .intro_dese").addClass("on");
        $(".about_cont .container .title_area").addClass("fade");
    }

    function sec1ScrollOff() {
        $(".scroll_down").removeClass("on");
        $(".intro_cont .container .intro_dese").removeClass("on");
        $(".about_cont .container .title_area").removeClass("fade");
    }


    // main_title_area
    gsap.utils.toArray(".main_title_area").forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 60%",
                toggleClass: "on",
                toggleActions: "play none none reverse",
            }
        });
    });


    // about
    gsap.to("#section2", {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: "#section2",
            start: "top 20%",
            toggleClass: "on",
            toggleActions: "play none none reverse",
        },
    });

    gsap.to(".about_cont .container .title_area", {
        scrollTrigger: {
            trigger: ".about_cont .container .title_area",
            start: "top 15%",
            endTrigger: ".about_cont",
            toggleClass: "fix",
            toggleActions: "play none none reverse",
        }
    });

    gsap.utils.toArray(".about_cont .container .year_area .list li .box .top .img").forEach(years => {
        gsap.from(years, {
            yPercent: 15,
            scrollTrigger: {
                trigger: years,
                start: "top 50%",
                toggleClass: "on",
                toggleActions: "play none none reverse",
            }
        });
    });


    // project
    ScrollTrigger.matchMedia({
        // PC 환경 (1080px 이상)에서만 트리거 활성화
        "(min-width: 1080px)": function() {
            gsap.utils.toArray(".project_cont .container .project_area .list li").forEach((project) => {
                gsap.from(project, {
                    y: 50,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: project,
                        start: "top 100%",
                        toggleActions: "play none none reset",
                    }
                });
            });
        },
        // 모바일 환경일 경우
        "(max-width: 1079px)": function() {
            gsap.utils.toArray(".skill_cont .container .skill_area .list_area > .list > li").forEach((skill, i) => {
                gsap.from(skill, {
                    scrollTrigger: {
                        trigger: skill,
                        start: "top 70%",
                        toggleClass: "on",
                        toggleActions: "play none none reset",
                    }
                });
            });
        }
    });


    // publishing
    $(document).ready(function() {            
        function pubWidt(){
            var windowWidth = $(window).width();
            if (windowWidth >= 1081) {
                var pubWidth = $('.publishing_cont .container').outerWidth();
                var pubLi = $(".publishing_cont .publishing_area.hide1081 > .list > li");
                var pubTitWidth = pubLi.find(".title_area").outerWidth();
                var pubNum = pubLi.length;
                var pubConWidth = pubWidth - pubTitWidth * pubNum;
                $(".publishing_cont .publishing_area.hide1081 > .list > li .box .cont_area").css("width", pubConWidth);
            } else {
            }
        }

        pubWidt();

        $(window).resize(function() {
            pubWidt();
        });
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
        const boxs = document.querySelectorAll('.skill_cont .container .skill_area .list_area > .list > li');
        boxs.forEach(box => {
            box.addEventListener("mousemove",(e)=>{
                const brothers = Array.from(box.parentElement.children);
                brothers.forEach(brother => {
                    brother.classList.remove('hovered');
                });
                box.classList.add("hovered");
                let x = (e.clientX - 1000) ;
                let y = (e.clientY - 1000);
                gsap.to(".skill_cont .container .skill_area .list_area > .list > li .box .img",{
                    y: x,
                    x: y,
                    duration:1,
                });
            });

            box.addEventListener("mouseleave",(e)=>{
                box.classList.remove("hovered");
            });
        });
    }

    function ftOn(){
        $("#footer").addClass('on');
    };

    function ftOff(){
        $("#footer").removeClass("on");
    };

    let cards = gsap.utils.toArray(".publishing_cont .publishing_area.hide1081 > .list > li");
    let container = gsap.utils.toArray('.publishing_cont .publishing_area.hide1081');
    let spacer = $(".publishing_cont .publishing_area.hide1081 > .list > li .box .title_area").outerWidth();
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1081px)", () => {
        const Pctl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "bottom top",
                onLeave: ftOn,
                onEnterBack: ftOff,
                invalidateOnRefresh: true
            }
        });
        Pctl.fromTo(
            ".publishing_cont .publishing_area.hide1081 > .list > li:not(:first-child)",
            {x: (index) => window.innerWidth - (spacer * 3 + 4) + (spacer * index),
                stagger: 0.5,
            y:0,
            },
            {
                x: (index) => spacer * (index + 1),
                stagger: 0.5,
                y:0
            }
        );
    });
    mm.add("(max-width: 1080px)", () => {
    });

    gsap.from(".publishing_cont .publishing_area.show1081", {
        opacity: 0,
        duration: 1,
        y: "15%",
        scrollTrigger: {
            trigger: ".publishing_cont .publishing_area.show1081",
            start: "top 85%",
            end: "bottom 90%",
            onLeave: ftOn,
            onEnterBack: ftOff,
            toggleActions: "play none none reverse",
        }
    });


    // top_btn
    $("#top_btn").on("click",function(){
        var h = $("#main").offset().top;
        $("html, body").animate({scrollTop: h}, 800, "linear");
        return false;
    });     
});










