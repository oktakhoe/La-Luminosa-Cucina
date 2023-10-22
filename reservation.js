function showAlert() {
  if ($("#myAlert").find("div#myAlert2").length == 0) {
    $("#myAlert").append(
      "<div class='alert alert-success alert-dismissable' id='myAlert2'>Your reservation has been saved successfully.<button type='button' class='btn-close close' data-dismiss='alert'  aria-hidden='close'></button></div>"
    );
  }
  $("#myAlert").css("display", "");
}
