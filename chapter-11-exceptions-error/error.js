
// const err = new Error('invalid email');

function validateEmail(email) {
  return email.match(/@/) ?
    email :
    new Error(`invalid email: ${email}`);
}

const email = "jane@doe.com";

const validatedEmail = validateEmail(email);

if(validatedEmail instanceof Error) {
  console.error(`Error: ${validatedEmail.message}`);
} else {
  console.log(`Valid email: ${validatedEmail}`);
}
// Valid email: jane@doe.com


const email2 = "janedoe.com";

const validatedEmail2 = validateEmail(email2);

if(validatedEmail2 instanceof Error) {
  console.error(`Error: ${validatedEmail2.message}`);
} else {
  console.log(`Valid email: ${validatedEmail2}`);
}
// Error: invalid email: janedoe.com