function clearForm() {
  localStorage.setItem("name", "");
  localStorage.setItem("email", "");
  localStorage.setItem("organization", "");
  localStorage.setItem("telephoneNo", "");
  localStorage.setItem("city", "");
  localStorage.setItem("state", "");
  localStorage.setItem("promoCode", "");
  localStorage.setItem("webSiteAddress", "");
  localStorage.setItem("aboutOrganisation", "");
  localStorage.setItem("myLikings", "");
  document.getElementsByName("gender").value == "female"
    ? (document.querySelector(
        'input[name="gender"][value="female"]'
      ).checked = false)
    : (document.querySelector(
        'input[name="gender"][value="male"]'
      ).checked = false);
  document.getElementsByName("mode").value == "mode_email"
    ? (document.querySelector(
        'input[name="mode"][value="mode_email"]'
      ).checked = false)
    : document.getElementsByName("mode").value == "phone"
    ? (document.querySelector(
        'input[name="mode"][value="phone"]'
      ).checked = false)
    : (document.querySelector(
        'input[name="mode"][value="both"]'
      ).checked = false);
  localStorage.setItem("gender", "");
  localStorage.setItem("mode", "");
  document.getElementsByName("clear").reset();
}
function getPromoCode() {
  var selectedOption1 = document.getElementById("myState");
  var selectedOption2 =
    selectedOption1.options[selectedOption1.selectedIndex].value;
  var addPromoCode = "-PROMO";
  addPromoCode = selectedOption2.concat(addPromoCode);
  document.getElementById("myPromoCode").value = addPromoCode;
}
function validate() {
  var name = document.getElementById("myName").value;
  var email = document.getElementById("myEmail").value;
  var organization = document.getElementById("myOrganization").value;

  var telephoneNo = document.getElementById("myTelephoneNo").value;

  var city = document.getElementById("myCity").value;

  var promoCode = document.getElementById("myPromoCode").value;

  var webSiteAddress = document.getElementById("myWebSiteAddress").value;

  var myLikings = document.getElementById("myLikings").value;

  var aboutOrganisation = document.getElementById("aboutOrganisation").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var mode = document.querySelector('input[name="mode"]:checked').value;
  var selectedOption1 = document.getElementById("myState");
  var state = selectedOption1.options[selectedOption1.selectedIndex].value;
  if (name == "") {
    document.getElementById("validationMessage").innerHTML =
      "Please fill all the required fields below";
    document.getElementById("labelText1").innerHTML = "Name is Required";
    document.getElementById("labelText1").style.visibility = "visible";
    document.getElementById("labelText1").style.color = "red";
  }
  if (organization == "") {
    document.getElementById("validationMessage").innerHTML =
      "Please fill all the required fields below";
  }

  if (email == "") {
    document.getElementById("validationMessage").innerHTML =
      "Please fill all the required fields below";
    document.getElementById("labelText2").innerHTML = "Email is Required";
    document.getElementById("labelText2").style.visibility = "visible";
    document.getElementById("labelText2").style.color = "red";
  } else {
    var regx =
      /^([a-z]+)\.([0-9]+)_([a-z]+)@([a-z]+)-([a-z]+)\.([a-z]+)\.([a-z]+)$/;
    if (!regx.test(email)) {
      document.getElementById("labelText2").innerHTML = "Email is InValid";
      document.getElementById("labelText2").style.visibility = "visible";
      document.getElementById("labelText2").style.color = "red";
    }
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("organization", organization);
  localStorage.setItem("telephoneNo", telephoneNo);
  localStorage.setItem("city", city);
  localStorage.setItem("state", state);
  localStorage.setItem("promoCode", promoCode);
  localStorage.setItem("webSiteAddress", webSiteAddress);
  localStorage.setItem("aboutOrganisation", aboutOrganisation);
  localStorage.setItem("myLikings", myLikings);
  localStorage.setItem("gender", gender);
  localStorage.setItem("mode", mode);
}
function genderChange(value) {
  var gender = value;

  if (gender == "female") {
    alert("Hello Lady");
  } else {
    alert("Hello Sir");
  }
}
function loadData() {
  document.getElementById("myName").value = localStorage.getItem("name");
  document.getElementById("myEmail").value = localStorage.getItem("email");
  document.getElementById("myOrganization").value =
    localStorage.getItem("organization");
  document.getElementById("myTelephoneNo").value =
    localStorage.getItem("telephoneNo");
  document.getElementById("myCity").value = localStorage.getItem("city");
  document.getElementById("myPromoCode").value =
    localStorage.getItem("promoCode");
  document.getElementById("myWebSiteAddress").value =
    localStorage.getItem("webSiteAddress");
  document.getElementById("myLikings").value =
    localStorage.getItem("myLikings");
  document.getElementById("aboutOrganisation").value =
    localStorage.getItem("aboutOrganisation");
  document.getElementById("myState").value = localStorage.getItem("state");
  document.getElementsByName("gender").value = localStorage.getItem("gender");
  document.getElementsByName("mode").value = localStorage.getItem("mode");
  if (document.getElementsByName("gender").value != "") {
    document.getElementsByName("gender").value == "female"
      ? (document.querySelector(
          'input[name="gender"][value="female"]'
        ).checked = true)
      : (document.querySelector(
          'input[name="gender"][value="male"]'
        ).checked = true);
  }
  if (document.getElementsByName("mode").value != "") {
    document.getElementsByName("mode").value == "mode_email"
      ? (document.querySelector(
          'input[name="mode"][value="mode_email"]'
        ).checked = true)
      : document.getElementsByName("mode").value == "phone"
      ? (document.querySelector(
          'input[name="mode"][value="phone"]'
        ).checked = true)
      : (document.querySelector(
          'input[name="mode"][value="both"]'
        ).checked = true);
  }
}
