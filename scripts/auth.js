// sign up
const signupform = document.querySelector('signup-form');

signupform addEventListener('submit', (e) => {
    e.preventDefault();

    // get user email
    const email = signupform['signup-email'].value;


    //get user password
    const password = signupform['signup-password'].value;

})