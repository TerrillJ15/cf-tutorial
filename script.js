/** Button used to submit the email and message. */
let submitButton = document.querySelector("#submit-button");
/** Input for entering the email. */
let emailInput = document.querySelector("#email");
/** Input for entering the message. */
let messageInput = document.querySelector("#message");
/** Element to display success. */
let success = document.querySelector("#success");
/** Element to display an error. */
let error = document.querySelector("#error");

/**
 * Handles when the submit button is clicked.
 * Alerts the user if successful or not.
 *
 * @param {MouseEvent} event The click event on the button.
 */
function clickListener(event) {
  // prevent click being handled elsewhere
  event.preventDefault();

  // get the input
  let emailText = emailInput.value;
  let messageText = messageInput.value;

  // log what was inputted
  console.log("email:", emailText, "message:", messageText);

  // determine if the entries are valid; show success or error
  if (messageText.trim() === "") {
    // invalid message
    success.style.display = "none";
    error.style.display = "block";
    error.innerHTML = "A message must be provided.";
  } else if (!emailValidate(emailText)) {
    // invalid email
    success.style.display = "none";
    error.style.display = "block";
    error.innerHTML = "The email address is invalid.";
  } else {
    // success
    success.style.display = "block";
    error.style.display = "none";
    success.innerHTML = `Success! Thanks for your message.<br /><br />Email: "${emailText}"<br />Message: "${messageText}"`;
  }
}

/**
 * Validates an email to make sure it is correct.
 *
 * @param {String} email The email to validate.
 * @returns True if the email is valid; otherwise false.
 */
function emailValidate(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

// attach the click listener to the button
submitButton.addEventListener("click", clickListener);
