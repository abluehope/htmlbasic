$(function () {
  $(".tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".tab_content .con").eq(idx).addClass("on").siblings().removeClass("on");
  });

  $(".tab_map_link li").on("click", function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $(".tab_map_location li")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });
});
