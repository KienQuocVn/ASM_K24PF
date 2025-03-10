document.addEventListener("DOMContentLoaded", function () {
    loadComponent("../wwwroot/layouts/header.html", "#header");
    loadComponent("../wwwroot/layouts/footer.html", "#footer");
});

function loadComponent(url, target) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(target).innerHTML = data;
        })
        .catch(error => console.error(`Lỗi khi tải ${url}:`, error));
}
