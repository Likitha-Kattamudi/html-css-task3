$(document).ready(function () {
  $("#btn").click(function () {
    $("form:myform")[0].reset();
  });
  $("input:radio[name=Gender]").click(function () {
    if ($("input:radio[name=Gender]:checked").val() == "female") {
      alert("Hello Lady");
    } else {
      alert("Hello Sir");
    }
  });
  $("#myState").change(function () {
    var selectedOption = $("#myState option:selected").val();
    var addPromoCode = selectedOption.concat("-PROMO");
    $("#myPromoCode").val(addPromoCode);
  });
  $("input:button[Name=sendMessage]").click(function () {
    var name = $("#myName").val();
    var email = $("#myEmail").val();
    var organisation = $("#myOrganization").val();
    if (name == "") {
      $("#validationMessage").html("Please fill all the required fields below");
      $("#labelText1").html("Name is Required");
      $("#labelText1").css("visibility", "visible");
      $("#labelText1").css("color", "red");
    }
    if (organisation == "") {
      $("#validationMessage").html("Please fill all the required fields below");
    }

    if (email == "") {
      $("#validationMessage").html("Please fill all the required fields below");
      $("#labelText2").html("Email is Required");
      $("#labelText2").css("visibility", "visible");
      $("#labelText2").css("color", "red");
    } else {
      var regx =
        /^([a-z]+)\.([0-9]+)_([a-z]+)@([a-z]+)-([a-z]+)\.([a-z]+)\.([a-z]+)$/;
      if (!regx.test(email)) {
        $("#labelText2").html("Email is InValid");
        $("#labelText2").css("visibility", "visible");
        $("#labelText2").css("color", "red");
      }
    }
  });
});
