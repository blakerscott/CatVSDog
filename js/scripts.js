$(document).ready(function() {
  $("button#bark").click(function() {

    $("div#dog").before("<img src=img/woof.png>");
    });

  $("button#meow").click(function() {
    $("div#cat").after("<img src=img/meow2.png>");

    });


})
