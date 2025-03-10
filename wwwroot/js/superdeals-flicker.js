document.addEventListener("DOMContentLoaded", function () {
    const superdeals = document.querySelector(".superdeals");

    function flicker() {
      const randomOpacity = Math.random() * 0.2 + 0.8; // Độ mờ ngẫu nhiên (0.8-1)
      superdeals.style.opacity = randomOpacity;
      setTimeout(flicker, Math.random() * 500 + 500); // Nhấp nháy ngẫu nhiên (0.5-1s)
    }

    flicker(); // Bắt đầu hiệu ứng
  });