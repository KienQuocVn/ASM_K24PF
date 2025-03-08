document.querySelectorAll(".read-more").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const reviewContent = this.previousElementSibling;

    if (
      reviewContent.style.maxHeight === "200px" ||
      !reviewContent.style.maxHeight
    ) {
      // Mở rộng toàn bộ nội dung khi bấm "Read More"
      reviewContent.style.maxHeight = reviewContent.scrollHeight + "px";
      this.textContent = "Read Less";
    } else {
      // Thu gọn lại khi bấm "Read Less"
      reviewContent.style.maxHeight = "200px";
      this.textContent = "Read More";
    }
  });

  // Khởi tạo trạng thái ban đầu: thu gọn
  const reviewContent = link.previousElementSibling;
  reviewContent.style.maxHeight = "200px";
  reviewContent.style.overflow = "hidden"; // Ẩn phần nội dung dư khi thu gọn
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonial-slider");
  const container = slider.querySelector(".slider-container");
  const items = slider.querySelectorAll(".item");
  const prevBtn = document.querySelector("#testimonial-nav .prev");
  const nextBtn = document.querySelector("#testimonial-nav .next");
  const dotsContainer = document.querySelector(".slider-dots"); // Lấy container dots
  let currentIndex = 0;
  const totalItems = items.length;

  // Tạo các chấm động
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentIndex = i; // Chuyển đến item tương ứng khi nhấp
      updateSlider();
      updateDots();
    });
    dotsContainer.appendChild(dot);
  }

  // Hàm cập nhật vị trí carousel
  function updateSlider() {
    const offset = -currentIndex * 100; // Dịch chuyển theo phần trăm
    container.style.transform = `translateX(${offset}%)`;
    updateDots(); // Cập nhật dots mỗi khi slider thay đổi
  }

  // Hàm cập nhật trạng thái dots
  function updateDots() {
    const dots = dotsContainer.querySelectorAll("span");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex); // Active chấm tương ứng
    });
  }

  // Chuyển đến item tiếp theo
  function showNext() {
    currentIndex = (currentIndex + 1) % totalItems; // Quay lại đầu nếu đến cuối
    updateSlider();
  }

  // Chuyển đến item trước đó
  function showPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Quay lại cuối nếu ở đầu
    updateSlider();
  }

  // Gắn sự kiện cho nút
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Tự động chuyển (tùy chọn)
  let autoSlide = setInterval(showNext, 5000); // Chuyển mỗi 5 giây

  // Dừng tự động khi hover (tùy chọn)
  slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slider.addEventListener(
    "mouseleave",
    () => (autoSlide = setInterval(showNext, 5000))
  );
  updateSlider();
});
