// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$("#enviarCorreo").click(function(){
alert("El correo fue enviado correctamente");
});


$(".subr").dblclick(function(){
  $(this).css({
  "color": "red",
  });
  });

  $("#t1h5").click(function() {
    $("#texto1").toggle(200)
      });

  $("#t2h5").click(function() {
    $("#texto2").toggle(200)
      });
  $("#t3h5").click(function() {
    $("#texto3").toggle(200)
      });
    