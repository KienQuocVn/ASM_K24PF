document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product-item");
    const pageLinks = document.querySelectorAll(".page-link[data-page]");
    const productList = document.getElementById("product-list");
    let currentPage = 1;
    let isInitialLoad = true; // Flag để kiểm tra lần tải đầu tiên

    // Kiểm tra xem các phần tử có tồn tại không
    if (!products.length)
      console.error("Không tìm thấy sản phẩm nào với class .product-item");
    if (!pageLinks.length)
      console.error(
        "Không tìm thấy liên kết phân trang nào với class .page-link"
      );
    if (!productList) console.error("Không tìm thấy #product-list");

    function showPage(page) {
      products.forEach((product) => {
        const productPage =
          parseInt(product.getAttribute("data-page")) || 0;
        product.style.display = productPage === page ? "block" : "none";
      });
      pageLinks.forEach((link) => {
        const linkPage = parseInt(link.getAttribute("data-page"));
        link.parentElement.classList.toggle("active", linkPage === page);
      });

      // Cuộn khi không phải lần tải đầu tiên
      if (!isInitialLoad && productList) {
        productList.scrollIntoView({ behavior: "smooth" });
        console.log(`Đã cuộn đến trang ${page}`);
      }

      currentPage = page;
      isInitialLoad = false; // Sau lần đầu tiên, đặt lại flag
    }

    pageLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute("data-page"));
        console.log(`Nhấp vào trang ${page}`);
        showPage(page);
      });
    });

    // Hiển thị trang 1 khi tải mà không cuộn
    showPage(1);
  });