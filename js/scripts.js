$(document).ready(function() {
  $("button#bark").click(function() {
    $("div#dog").prepend("<img src=img/woof.png>");
    $("div#dog").children("img").first().click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("div#cat").prepend("<img src=img/meow2.png>");
    $("div#cat").children("img").first().click(function() {
      $(this).remove();
    });
  });


})
