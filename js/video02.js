$(function () {
  $("#bgndVideo").YTPlayer({
    videoURL: "IPSA6wxGmdQ",
    containment: "#main_visual",
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
  });

  $("#conVideo").YTPlayer({
    videoURL: "IPSA6wxGmdQ",
    containment: "#bgm1",
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
  });
  $("#conVideo2").YTPlayer({
    videoURL: "IPSA6wxGmdQ",
    containment: "#bgm2",
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
  });

  $("#conVideo3").YTPlayer({
    videoURL: "IPSA6wxGmdQ",
    containment: "#bgm3",
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
  });

  $("#main_visual .pause").on("click", function () {
    $("#bgndVideo").YTPPause();
  });
  $("#main_visual .play").on("click", function () {
    $("#bgndVideo").YTPPlay();
  });
});
