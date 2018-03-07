$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#newBurger").val().trim()
    }
    console.log("var newBurger =", newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New burger crafted.");
        location.reload();
      }
    )
  });

  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function() {
        console.log("Burger eaten.");
        location.reload();
      }
    )
  })

  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted burger @ id", id);
        location.reload();
      }
    )
  })

})