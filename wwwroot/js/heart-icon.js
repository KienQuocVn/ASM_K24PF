document.addEventListener("DOMContentLoaded", function () {
    const productItems = document.querySelectorAll(".product-item");
    // Duyệt qua từng sản phẩm
    productItems.forEach((productItem) => {
      // Tạo phần tử heart-icon
      const heartDiv = document.createElement("div");
      heartDiv.className = "heart-icon";
      heartDiv.innerHTML = '<i class="fas fa-heart"></i>';

      // Tìm thẻ <h2> trong sản phẩm
      const productTitle = productItem.querySelector("h2");

      if (productTitle) {
        // Chèn heart-icon ngay sau thẻ <h2>
        productTitle.insertAdjacentElement("afterend", heartDiv);
      }
    });
    const heartIcons = document.querySelectorAll(".heart-icon");

    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener("click", function () {
        this.classList.toggle("red"); // Thêm hoặc xóa lớp red để đổi màu
        this.classList.remove("beat"); // Xóa lớp beat trước
        // Buộc trình duyệt làm mới hiệu ứng bằng cách thêm lại sau một khoảng thời gian ngắn
        setTimeout(() => {
          this.classList.add("beat");
        }, 10); // 10ms là đủ để reset
      });
    });
  });
  