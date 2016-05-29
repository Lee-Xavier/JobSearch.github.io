// as3.js //
var fName_check = false;
var lName_check = false;
var phone_check = false;
var eStatus_check = false;
var password_check = false;
var rePassword_check = false;
var email_check = false;
var errMessages = " ";
var elem;
var inputValue;
var i;


// **************************************************************** 
// ** Function Name : formValidation()
// ** Called from   : assign3.html
// ****************************************************************
// ** Function Description
// ** ====================
// **
// ** This function checks and validates the required fields.
// **
// ****************************************************************

function formValidation() {
  'use strict';
  alert(fName_check);
  alert(lName_check);
  alert(phone_check);
  alert(eStatus_check);
  alert(password_check);
  alert(rePassword_check);
  alert(email_check);

  return (email_check && fName_check && lName_check && phone_check && eStatus_check && password_check && rePassword_check);
}


// ****************************************************************
// ** Function Name : validateFirstName()                        **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the First-Name field               **
// **                                                            **
// ****************************************************************

function validateFirstName() {
  'use strict';
  errMessages = " ";
  document.getElementById('errfname').innerHTML = errMessages;
  fName_check = true;
  elem = document.getElementById("fname");
  inputValue = elem.value.trim();

  if (inputValue.length < 1) {
    errMessages += "<p><span class='redCross'>X</span> Insufficent characters! This field cannot be empty or left blank.</p>";
    if (errMessages !== "") {
      document.getElementById('errfname').innerHTML = errMessages;
      fName_check = false;
      return;
    }
  }

  var check = 0;
  var inputUpperCase = inputValue.toUpperCase();

  for (i = 0; i < inputValue.length; i += 1) {

    if (!(inputUpperCase.charCodeAt(i) > 64 && inputUpperCase.charCodeAt(i) < 91) || inputValue.charCodeAt(i) === 45 || inputValue.charCodeAt(i) === 39) {
      errMessages += "<p><span class='redCross'>X</span> Only alphabetical characters, apostrophe(') and hyphen(-) are allowed!</p>";
      if (errMessages !== "") {
        document.getElementById('errfname').innerHTML = errMessages;
        fName_check = false;
        return;
      }
    }

    if (inputUpperCase.charCodeAt(i) > 64 && inputUpperCase.charCodeAt(i) < 91) {
      check += 1;
    }
  }
  if (check === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please enter atleast one alphabetical character(a-z)(A-Z)</p>";
  }

  if (errMessages !== " ") {
    document.getElementById('errfname').innerHTML = errMessages;
    fName_check = false;
    return;
  }

  fName_check = true;

  return;
}


// ****************************************************************
// ** Function Name : validateLastName()                         **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Last-Name field                **
// **                                                            **
// ****************************************************************

function validateLastName() {
  'use strict';
  errMessages = " ";
  document.getElementById('errlname').innerHTML = errMessages;
  lName_check = true;
  elem = document.getElementById("lname");
  inputValue = elem.value.trim();

  if (inputValue.length < 1) {
    errMessages += "<p><span class='redCross'>X</span> Insufficent characters! This field cannot be empty or left blank.</p>";
    if (errMessages !== "") {
      document.getElementById('errlname').innerHTML = errMessages;
      lName_check = false;
      return;
    }
  }

  var check = 0;
  var inputUpperCase = inputValue.toUpperCase();
  for (i = 0; i < inputValue.length; i += 1) {

    if (!((inputUpperCase.charCodeAt(i) > 64) && (inputUpperCase.charCodeAt(i) < 91)) || (inputValue.charCodeAt(i) === 45) || (inputValue.charCodeAt(i) === 39)) {
      errMessages += "<p><span class='redCross'>X</span> Only alphabetical characters, apostrophe(') and hyphen(-) are allowed!</p>";
      if (errMessages !== "") {
        document.getElementById('errlname').innerHTML = errMessages;
        lName_check = false;
        return;
      }
    }

    if (inputUpperCase.charCodeAt(i) > 64 && inputUpperCase.charCodeAt(i) < 91) {
      check += 1;
    }
  }

  if (check === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please enter atleast one alphabetical character(a-z)(A-Z)</p>";
    if (errMessages !== " ") {
      document.getElementById('errlname').innerHTML = errMessages;
      lName_check = false;
      return;
    }
  }

  lName_check = true;
  return;
}


// ****************************************************************
// ** Function Name : validatePassword()                         **
// **                                                            **
// ** Called from   : assign3.html                               **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Password field                 **
// **                                                            **
// ****************************************************************

function validatePassword() {
  'use strict';
  errMessages = " ";
  document.getElementById('errPassword').innerHTML = errMessages;
  password_check = true;
  elem = document.getElementById("password");
  inputValue = elem.value.trim();
  var checkUpper = 0;
  var checkLower = 0;
  var checkNum = 0;

  if (inputValue.length < 8) {
    errMessages += "<p><span class='redCross'>X</span> Insufficent characters! Your password must be atleast 8 characters long.<p>";
    if (errMessages !== "") {
      document.getElementById('errPassword').innerHTML = errMessages;
      password_check = false;
      return;
    }
  }

  for (i = 0; i < inputValue.length; i += 1) {

    if (inputValue.charCodeAt(i) > 64 && inputValue.charCodeAt(i) < 91) {
      checkUpper += 1;
    }

    if (inputValue.charCodeAt(i) > 96 && inputValue.charCodeAt(i) < 123) {
      checkLower += 1;
    }

    if (inputValue.charCodeAt(i) > 47 && inputValue.charCodeAt(i) < 58) {
      checkNum += 1;
    }
  }

  if (checkUpper === 0 || checkLower === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please use both Upper and Lower case characters!</p>";
    if (errMessages !== "") {
      document.getElementById('errPassword').innerHTML = errMessages;
      password_check = false;
      return;
    }
  }

  if (checkNum === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please use atleast 1 number!</p>";
    if (errMessages !== " ") {
      document.getElementById('errPassword').innerHTML = errMessages;
      password_check = false;
      return;
    }
  }

  password_check = true;
  return;
}


// ****************************************************************
// ** Function Name : validateRePassword()                       **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Retype Password field          **
// **                                                            **
// ****************************************************************

function validateRePassword() {
  'use strict';
  errMessages = " ";
  document.getElementById('errRePassword').innerHTML = errMessages;
  rePassword_check = true;
  elem = document.getElementById("repassword");
  inputValue = elem.value.trim();
  var checkUpper = 0;
  var checkLower = 0;
  var checkNum = 0;

  var elem2 = document.getElementById("password");
  var inputValue2 = elem2.value.trim();


  if (inputValue.length < 8) {
    errMessages += "<p><span class='redCross'>X</span> Insufficent characters! Your password must be atleast 8 characters long.<p>";
    if (errMessages !== " ") {
      document.getElementById('errRePassword').innerHTML = errMessages;
      rePassword_check = false;
      return;
    }
  }

  for (i = 0; i < inputValue.length; i += 1) {

    if (inputValue.charCodeAt(i) > 64 && inputValue.charCodeAt(i) < 91) {
      checkUpper += 1;
    }

    if (inputValue.charCodeAt(i) > 96 && inputValue.charCodeAt(i) < 123) {
      checkLower += 1;
    }

    if (inputValue.charCodeAt(i) > 47 && inputValue.charCodeAt(i) < 58) {
      checkNum += 1;
    }
  }

  if (checkUpper === 0 || checkLower === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please use both Upper and Lower case characters!</p>";
    if (errMessages !== " ") {
      document.getElementById('errRePassword').innerHTML = errMessages;
      rePassword_check = false;
      return;
    }
  }

  if (checkNum === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please use atleast 1 number!</p>";
    if (errMessages !== " ") {
      document.getElementById('errRePassword').innerHTML = errMessages;
      rePassword_check = false;
      return;
    }
  }

  if (inputValue !== inputValue2) {
    errMessages += "<p><span class='redCross'>X</span> The password did not match the previous entry. Please try again!</p>";
    if (errMessages !== " ") {
      document.getElementById('errRePassword').innerHTML = errMessages;
      rePassword_check = false;
      return;
    }
  }

  rePassword_check = true;
  return;
}


// ****************************************************************
// ** Function Name : validateEdStatus()                         **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Education Status Field         **
// **                                                            **
// ****************************************************************

function validateEdStatus() {
  'use strict';
  errMessages = " ";
  document.getElementById('errEdStatus').innerHTML = errMessages;
  eStatus_check = true;
  var noOfRadio = document.formSignUp.Education_Status.length;
  var check = 0;


  for (i = 0; i < noOfRadio; i += 1) {
    if (document.formSignUp.Education_Status[i].checked === true) {
      check += 1;
    }
  }

  if (check === 0) {
    errMessages += "<p><span class='redCross'>X</span> Please select your Education Status!</p>";
    if (errMessages !== " ") {
      document.getElementById('errEdStatus').innerHTML = errMessages;
      eStatus_check = false;
      return;
    }
  }

  eStatus_check = true;
  return;

}


// ****************************************************************
// ** Function Name : addOption_list()                           **
// **                                                            **
// ** Called from   : assign3.html                               **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function adds an array of Country names to a list.    **
// **                                                            **
// ****************************************************************

function addOption_list() {
  'use strict';
  var l;
  var x;
  var option;
  for (l = 0; l < country_list.length; l += 1) {
    x = document.getElementById("countrySelect");
    option = document.createElement("option");
    option.text = country_list[l].country_name;
    option.value = country_list[l].country_code;
    x.add(option);
    if (country_list[l].country_code === "CA") {
      option.selected = true;
    }
  }

}


// ****************************************************************
// ** Function Name : clearErrors()                              **
// **                                                            **
// ** Called from   : assign3.html                               **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function clears out previous error messages           **
// **                                                            **
// ****************************************************************

function clearErrors() {
  'use strict';
  document.getElementById('errfname').innerHTML = " ";
  document.getElementById('errlname').innerHTML = " ";
  document.getElementById('errphone').innerHTML = " ";
  document.getElementById('errPassword').innerHTML = " ";
  document.getElementById('errRePassword').innerHTML = " ";
  document.getElementById('errEdStatus').innerHTML = " ";
}


// ****************************************************************
// ** Function Name : validatePhone()                            **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Phone Number Field             **
// **                                                            **
// ****************************************************************

function validatePhone() {
  'use strict';
  errMessages = " ";
  document.getElementById('errPhone').innerHTML = errMessages;
  phone_check = true;
  var check = true;
  elem = document.getElementById("phone");
  inputValue = elem.value.trim();
  var phoneNumSplit = inputValue.split('-');

  if (inputValue.length < 1) {
    errMessages += "<p>Please enter a Phone Number(999-999-9999)<p>";
    if (errMessages !== " ") {
      document.getElementById('errPhone').innerHTML = errMessages;
      phone_check = false;
      return;
    }
  }

  if (inputValue.length > 12) {
    errMessages += "<p>Please enter a valid Phone Number(999-999-9999)<p>";
    if (errMessages !== " ") {
      document.getElementById('errPhone').innerHTML = errMessages;
      phone_check = false;
      return;
    }
  }

  if (inputValue[3] !== '-' || inputValue[7] !== '-') {
    errMessages += "<p>Wrong format! Please try again. (999-999-9999)<p>";
    if (errMessages !== " ") {
      document.getElementById('errPhone').innerHTML = errMessages;
      phone_check = false;
      return;
    }
  }

  check = true;
  for (i = 0; i < 3; i += 1) {
    if (parseInt(phoneNumSplit[i], 10) != phoneNumSplit[i]) {
      alert(phoneNumSplit[i]);
      check = false;
      break;
    }
  }

  if (!check) {
    errMessages += "<p>Please enter digits only(999-999-9999)<p>";
    if (errMessages !== " ") {
      document.getElementById('errPhone').innerHTML = errMessages;
      phone_check = false;
      return;
    }
  }

  if (phoneNumSplit[0] === "000") {
    errMessages += "<p>The area code cannot be all zeros. Please try again!<p>";
    if (errMessages !== " ") {
      document.getElementById('errPhone').innerHTML = errMessages;
      phone_check = false;
      return;
    }
  }

  if (phoneNumSplit[1] === "000" && phoneNumSplit[2] === "0000") {
    errMessages += "<p>The actual phone number cannot be all zeros. Please try again!<p>";
    if (errMessages !== " ") {
      document.getElementById('errPhone').innerHTML = errMessages;
      phone_check = false;
      return;
    }
  }

  phone_check = true;
  return;

}


// ****************************************************************
// ** Function Name : validateEmail()                            **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Phone Number Field             **
// **                                                            **
// ****************************************************************

function validateEmail() {
  'use strict';
  errMessages = " ";
  document.getElementById('errEmail').innerHTML = errMessages;
  email_check = true;
  elem = document.getElementById("email");
  inputValue = elem.value.trim();
  var j;
  var k;
  var len = inputValue.length;
  var domain;
  var validDomain = false;
  for (j = len - 1; j > 0; j -= 1) {
    if (inputValue[j] === '.') {
      break;
    }
  }
  domain = inputValue.substr(j + 1).toUpperCase();

  for (k = 0; k < domain_list.length; k += 1) {
    if (domain_list[k].domain_name === domain) {
      validDomain = true;
      break;
    }
  }
  if (!validDomain) {
    errMessages += "<p>Invalid Email address. Please try again!<p>";
    if (errMessages !== " ") {
      document.getElementById('errEmail').innerHTML = errMessages;
      email_check = false;
      return;
    }
  }
  email_check = true;
  return;
}


// ****************************************************************
// ** Function Name : createWorkExp()                            **
// **                                                            **
// ** Called from   :  assign3.html                              **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function create a section for Work Experience         **
// **                                                            **
// ****************************************************************

var instance = 2;
var employer_instance = 2;
var jobtitle_instance = 2;
var jobduty_instance = 2;
var workedyear_instance = 2;
var history_instance = 1;

function createWorkExp() {
  'use strict';
  var headBar = document.createElement("h3");
  headBar.innerHTML = "Work Experience";
  headBar.innerHTML += "(" + instance + ")";

  createButton(headBar);
  document.getElementById("workExp").appendChild(headBar);

  var tableDiv = document.createElement("div");
  tableDiv.setAttribute("class", "tableContainer");
  document.getElementById("workExp").appendChild(tableDiv);

  var newDiv = document.createElement("div");
  createEmployer(newDiv);
  tableDiv.appendChild(newDiv);

  newDiv = document.createElement("div");
  createJobTitle(newDiv);
  tableDiv.appendChild(newDiv);

  newDiv = document.createElement("div");
  createJobDuty(newDiv);
  tableDiv.appendChild(newDiv);

  newDiv = document.createElement("div");
  createWorkedYear(newDiv);
  tableDiv.appendChild(newDiv);

  newDiv = document.createElement("div");
  createWorkHistory(newDiv);
  tableDiv.appendChild(newDiv);

  instance += 1;

  return;
}


// ****************************************************************
// ** Function Name : createButton()                             **
// **                                                            **
// ** Called from   : createWorkExp()                            **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function creates a button for Work Experience         **
// **                                                            **
// ****************************************************************

function createButton(headBar) {
  'use strict';
  var newButton = document.createElement("button");
  newButton.type = "button";
  newButton.id = "addWorkExperience";
  newButton.setAttribute("onclick", "createWorkExp()");
  newButton.innerHTML = "+";
  headBar.appendChild(newButton);
  return;
}


// ****************************************************************
// ** Function Name : createEmployer()                           **
// **                                                            **
// ** Called from   : createWorkExp()                            **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function creates a Employer input field               **
// **                                                            **
// ****************************************************************

function createEmployer(newDiv) {
  'use strict';
  var newLabel = document.createElement("Label");
  newLabel.for = "employer" + instance;
  newLabel.innerHTML = "Employer:";
  newLabel.setAttribute("class", "apply");

  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "employer" + employer_instance;
  newInput.name = "Employer" + employer_instance;
  employer_instance += 1;

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  return;
}


// ****************************************************************
// ** Function Name : createJobTitle()                           **
// **                                                            **
// ** Called from   : createWorkExp()                            **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function creates a Job Title input field              **
// **                                                            **
// ****************************************************************

function createJobTitle(newDiv) {
  'use strict';
  var newLabel = document.createElement("Label");
  newLabel.for = "jtitle" + instance;
  newLabel.innerHTML = "Job Title:";
  newLabel.setAttribute("class", "apply");

  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "jtitle" + jobtitle_instance;
  newInput.name = "Job Title" + jobtitle_instance;
  jobtitle_instance += 1;

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  return;
}


// ****************************************************************
// ** Function Name : createJobDuty()                            **
// **                                                            **
// ** Called from   : createWorkExp()                            **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function creates a Job Duty textarea field            **
// **                                                            **
// ****************************************************************

function createJobDuty(newDiv) {
  'use strict';
  var newLabel = document.createElement("Label");
  newLabel.for = "textArea" + instance;
  newLabel.innerHTML = "Job Duty:";
  newLabel.setAttribute("class", "apply");

  var newInput = document.createElement("textarea");
  newInput.id = "textArea" + jobduty_instance;
  newInput.name = "Job Duty" + jobduty_instance;
  jobduty_instance += 1;

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  return;
}


// ****************************************************************
// ** Function Name : createWorkedYear()                         **
// **                                                            **
// ** Called from   : createWorkExp()                            **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function creates a Worked Yearinput field             **
// **                                                            **
// ****************************************************************

function createWorkedYear(newDiv) {
  'use strict';
  var newLabel = document.createElement("Label");
  newLabel.for = "gdate" + instance;
  newLabel.innerHTML = "Worked Year:";
  newLabel.setAttribute("class", "apply");

  var newInput = document.createElement("input");
  newInput.type = "number";
  newInput.id = "gdate" + workedyear_instance;
  newInput.name = "Worked Year" + workedyear_instance;
  workedyear_instance += 1;

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  return;
}


// ****************************************************************
// ** Function Name : createWorkHistory()                        **
// **                                                            **
// ** Called from   : createWorkExp()                            **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function creates a Work Hisstory input field          **
// **                                                            **
// ****************************************************************

function createWorkHistory(newDiv) {
  'use strict';
  var Unique = history_instance.toString();

  var newLabel = document.createElement("Label");
  newLabel.for = "wHistory" + instance;
  newLabel.innerHTML = "Work History:";
  newLabel.setAttribute("class", "apply");

  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "wHistory";
  newInput.name = "Work History" + Unique;

  var newButton = document.createElement("button");
  newButton.type = "button";
  newButton.id = "addWorkHistory";
  newButton.setAttribute("onclick", "addHistory(addHistoryHere)");
  newButton.innerHTML = "+";

  history_instance += 1;

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  newDiv.appendChild(newButton);

  return;
}


// ****************************************************************
// ** Function Name : addHistory()                               **
// **                                                            **
// ** Called from   : assign3.html / createWorkHistory()         **
// **                                                            **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function adds a field for Work History                **
// **                                                            **
// ****************************************************************


function addHistory(addHistoryHere) {
  'use strict';
  var Unique = history_instance.toString();

  var newLabel = document.createElement("Label");
  newLabel.for = "wHistory" + instance;
  newLabel.innerHTML = "Work History:";
  newLabel.setAttribute("class", "apply");

  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "wHistory";
  newInput.name = "Work History" + Unique;

  var newButton = document.createElement("button");
  newButton.type = "button";
  newButton.id = "addWorkHistory";
  newButton.setAttribute("onclick", "addHistory(addHistoryHere)");
  newButton.innerHTML = "+";

  history_instance += 1;

  addHistoryHere.appendChild(newLabel);
  addHistoryHere.appendChild(newInput);
  addHistoryHere.appendChild(newButton);

  return;

}
