// sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user email
	const email = signupForm["signup-email"].value;

	//get user password
	const password = signupForm["signup-password"].value;

	// sign up user
	auth.createUserWithEmailAndPassword(email, password).then((cred) => {
		console.log(cred);
		const modal = document.querySelector("#modal-signup");
		M.Modal.getInstance(modal).close();
		signupForm.reset();
	});
});

// log out

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
	e.preventDefault();
	auth.signOut().then(() => {
		console.log("User signed out");
	});
});

//Log in
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user email
	const email = loginForm["login-email"].value;

	//get user password
	const password = loginForm["login-password"].value;

	auth.signInWithEmailAndPassword(email, password).then((cred) => {
		console.log("User signed in");
		console.log(cred);
		const modal = document.querySelector("#modal-login");
		M.Modal.getInstance(modal).close();
		loginForm.reset();
	});
});
