$(function () {
  $(window).on("scroll", function () {
    // 변수에 스크롤한 양을 담는다.
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $("#header, .to_top").addClass("on");
    } else {
      $("#header, .to_top").removeClass("on");
    }
  });
});
