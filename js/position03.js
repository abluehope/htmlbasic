$(function () {
  $(".top_banner .btn").on("click", function () {
    // 버튼누르면 열렸다 닫혔다하게 해주는거
    $(".top_banner").toggleClass("on");
  });

  $(".right_banner .btn").on("click", function () {
    $(".right_banner").toggleClass("on");
  });
  $(".left_banner .btn").on("click", function () {
    $(".left_banner").toggleClass("on");
  });
});
