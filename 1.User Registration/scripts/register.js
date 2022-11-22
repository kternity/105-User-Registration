//Create Constructor

function User(fname, lname,age,gender,phone, payment,color) {
  //list of attributes
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
}

function register() {
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputAge = $("#txtAge").val();
  let inputGender = $("#txtGender").val();
  let inputPhone = $("#txtPhone").val();
  let inputPayment = $("#selPayment").val();
  let inputColor = $("#selCol").val();
  
  //validations
    if(!inputFirstName || !inputLastName) {
      console.error("Invalid data");
      alert("Please enter your first and last name");
      return; //get out of the fn, do not continue
    }

  let newUser = new User(inputFirstName,inputLastName,inputAge,inputGender,inputPhone,inputPayment,inputColor);
  console.log(newUser);

  saveUser(newUser);
  console.log("User saved!");

  clearForm();
}

function clearForm() {
  $('#txtFirstName').val("");
  $('#txtLastName').val("");
  $('#txtAge').val("");
  $('#txtGender').val("");
  $('#txtPhone').val("");
  $('#txtPayment').val("");
  $('#txtColor').val("");
}


function init() {
  //html is ready
  console.log("Page ready!")

  //load data

  //assigns events
  $('#btnSave').click(register);
}

//wait for html to be rendered

window.onload = init;




/* javascript vs.jquery
----------------------
js: document.getElementById("txtAge").style.display="none";
jq: $("#txtAge").hide();
*/
