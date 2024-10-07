document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }

        link.addEventListener("click", function () {
            navLinks.forEach((nav) => nav.classList.remove("active"));
            this.classList.add("active");

            // Nếu menu dropdown đang mở, đóng nó
            if (this.classList.contains('dropdown-toggle')) {
                const dropdownMenu = this.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.classList.toggle('show');
                }
            }
        });
    });

    const toggler = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".navbar");

    toggler.addEventListener("click", function (e) {
        navbar.classList.toggle("open");
        this.classList.toggle("open");
        e.stopPropagation(); // Ngăn chặn sự kiện click truyền đến document
    });

    // Ngăn chặn sự kiện click truyền đến document khi click vào navbar
    navbar.addEventListener("click", function (e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click truyền đến document
    });

    // Thêm sự kiện click cho document để đóng menu khi nhấn bên ngoài
    document.addEventListener("click", function () {
        if (navbar.classList.contains("open")) {
            navbar.classList.remove("open");
            toggler.classList.remove("open");
        }
    });
});

window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
