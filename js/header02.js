$(function () {
  $("#header .gnb > ul > li").on("click", function (e) {
    if ($("#header .gnb").hasClass("on")) {
      e.preventDefault();
      $(this).addClass("on").siblings().removeClass("on");
    }
    // on 붙인 상태에서 pc화면으로 돌리면 링크 작동이 안함 어케 해결?
  });

  $(".mopen").on("click", function () {
    $("#header .gnb").toggleClass("on");
    $("#header").toggleClass("on");
  });

  //   $(window).on('resize', function() {
  //     $('#header .gnb').removeClass('on');
  //   })
});
