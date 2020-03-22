
function invalidMsg(textbox, message) {
  var name = textbox.value;
  var letters = /^[A-Za-z]*$/;
  if (name === '') {
      textbox.setCustomValidity(message);
  } else if (!letters.test(name)) {
    textbox.setCustomValidity('Please enter a valid name.');
  } else {
     textbox.setCustomValidity('');
  }
  return true;
}

function validateEmail(emailbox, message) {
  var emailAdress = emailbox.value;
  var emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress === '') {
    emailbox.setCustomValidity(message);
  } else if (!emailValid.test(emailAdress)) {
    emailbox.setCustomValidity('Please enter a correct format for the email.');
  } else {
    emailbox.setCustomValidity('');
  }
  return true;
}

function validateMessage(textarea, message) {
  var textmessage = textarea.value;

  if (textarea === '') {
    textarea.setCustomValidity(message);
  } else {
    textarea.setCustomValidity('');
  }
  return true;
}