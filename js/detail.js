// URL에서 id 가져오기
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 상품 데이터
const products = {
  1: {
    title: "몽골 초원 캠프",
    desc: "대자연 속에서 힐링하는 3박 4일 여행",
    price: "₩890,000",
    img: "images/DSC03824.jpg",
    points: ["초원 캠핑", "별보기", "현지 체험"]
  },
  2: {
    title: "고비 사막 투어",
    desc: "사막에서 만나는 특별한 하루",
    price: "₩1,290,000",
    img: "images/banner2.jpg",
    points: ["사막 체험", "낙타 체험", "별밤"]
  }
};

// 데이터 적용
const product = products[id];

document.getElementById("detail-img").src = product.img;
document.getElementById("detail-title").innerText = product.title;
document.getElementById("detail-desc").innerText = product.desc;
document.getElementById("detail-price").innerText = product.price;

// 포인트 리스트
const ul = document.getElementById("detail-points");
product.points.forEach(p => {
  const li = document.createElement("li");
  li.innerText = p;
  ul.appendChild(li);
});