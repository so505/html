//헤더 스크롤
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("header");
    const changePoint = 80; // 변경되는 스크롤 높이(px)
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > changePoint) {
            container.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            container.style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
    });

    const swipeItem = new Swiper('.swiper', {
        slidesPerView: 1,       // 한 화면에 1개 표시
        slidesPerGroup: 1,      // 한 번에 1개씩 이동
        loop: true,             // 무한 반복
        speed: 600,             // 전환 속도 (0.6초)
        navigation: {           // 네비게이션 버튼 활성화
            nextEl: ".next_btn",
            prevEl: ".prev_btn",
        },
        autoplay: {             // 자동 이동 (필요 시 사용)
            delay: 3000,       // 3초마다 이동
            disableOnInteraction: false
        },
    });

    // const swipeBanner= new Swiper('.slides_wrap', {
    //     loop: false,                // 무한 루프
    //     autoplay: {
    //         delay: 3000,           // 3초마다 슬라이드 변경
    //         disableOnInteraction: false
    //     },
    //     speed: 1000,               // 슬라이드 전환 속도 (기본값: 300ms → 1000ms로 변경)
    //     effect: "slide",           // 'fade', 'cube', 'coverflow' 등 다양한 효과 가능
    //     grabCursor: true,          // 마우스를 올리면 손모양 커서
    // });

    const topButton = document.getElementById("topBtn");

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // 300px 이상 스크롤 시 버튼 보이기
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    // 버튼 클릭 시 부드럽게 위로 이동
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    //상단 메뉴 클릭시 이벤트
    const menuItem = document.querySelector(".menu"); // CLAYMORE 메뉴
    const subMenu = document.querySelector(".sub_bg"); // 서브메뉴 배경

    let menuTimeout; // 타이머 변수

    // 마우스를 올리면 서브메뉴 열기
    menuItem.addEventListener("mouseenter", function () {
        clearTimeout(menuTimeout); // 기존 타이머 삭제
        subMenu.style.display = "block"; // 먼저 보이게 설정
        setTimeout(() => {
            subMenu.classList.add("active");
        }, 10); // 약간의 지연 추가 (부드러운 효과)
    });

    // 마우스를 떠나면 서브메뉴 닫기 (천천히 사라지도록)
    subMenu.addEventListener("mouseleave", function () {
        menuTimeout = setTimeout(() => {
            subMenu.classList.remove("active");
            setTimeout(() => {
                subMenu.style.display = "none"; // 애니메이션 후 숨김 처리
            }, 600); // CSS transition 시간과 맞춤
        }, 200); // 빠르게 닫히지 않도록 0.2초 지연
    });

    // 다른 곳을 클릭하면 서브메뉴 닫기
    document.addEventListener("click", function (event) {
        if (!menuItem.contains(event.target) && !subMenu.contains(event.target)) {
            subMenu.classList.remove("active");
            setTimeout(() => {
                subMenu.style.display = "none";
            }, 600); // 애니메이션 시간 후 완전히 숨김
        }
    });

    // const links = document.querySelectorAll("a"); // 모든 a 태그 선택

    // links.forEach(link => {
    //     link.addEventListener("click", function (event) {
    //         event.preventDefault(); // 기본 동작(상단 이동) 방지
    //     });
    // });
    //a 태그 새창으로 
    // document.querySelectorAll('a').forEach(link => {
    //     link.setAttribute('target', '_blank');
    // });
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener("click", function(event) {
            const href = this.getAttribute("href"); // href 속성 가져오기
            
            if (!href || href === "#") {
                event.preventDefault(); // 빈 링크일 경우 기본 동작(상단 이동) 방지
            } else {
                event.preventDefault(); // 기본 동작 방지 (새 창에서 열리도록 설정)
                window.open(href, '_blank'); // 새 창에서 열기
            }
        });
    });



});

// document.addEventListener("DOMContentLoaded", function () {
//     const targetElement = document.querySelector(".target-element"); // 숨길 요소 선택

//     // 마우스를 올리면 요소 숨기기
//     targetElement.addEventListener("mouseenter", function () {
//         this.style.display = "none"; // 요소를 완전히 숨김
//     });
// });


$("li").click(function(){
    $("li").removeClass("active"); 
    $(this).addClass("active"); 
});