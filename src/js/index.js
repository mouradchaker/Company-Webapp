import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min";
console.log(1);

$(function () {
  $(".thumbnail2").hover(
    function () {
      $(this).find(".project-category").hide();
      $(this).find(".caption2").slideDown(250);
    },
    function () {
      $(this).find(".caption2").slideUp(250);
      $(this).find(".project-category").show();
    }
  );

  var pathname = window.location.pathname; //إحضار المسار المتواجدين فيه
  console.log(pathname);
  $('.navbar-nav > li > a[href="' + pathname + '"]')
    .parent()
    .addClass(" active");

  //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المدونة
  if (pathname == "/blog-details.html" || pathname == "/add-blog.html") {
    $('.navbar-nav > li > a[href="/blog.html"]').parent().addClass("active");
  }

  //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المشروع
  if (pathname == "/project-details.html") {
    $('.navbar-nav > li > a[href="/projects.html"]')
      .parent()
      .addClass("active");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
