import $ from "./lib/lib";

$("button").on("click", function () {
  $(".test").toggleAttr("test", "true");
});
