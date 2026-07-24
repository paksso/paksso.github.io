// 스크롤 헤더 효과
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// 맨 위로 이동
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}