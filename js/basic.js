$(function () {
  // 스크롤 효과
  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
