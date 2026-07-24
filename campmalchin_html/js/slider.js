// 슬라이드 인디케이터
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

if (slides) {
    slides.addEventListener("scroll", () => {
        const scrollX = slides.scrollLeft;
        const width = slides.clientWidth;

        const index = Math.round(scrollX / width);

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    });
}