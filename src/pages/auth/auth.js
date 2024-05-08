import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updatePassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {firebaseConfig} from "../../firebaseConfig.js";

const userEmail = document.querySelector("#userEmail");
const userEmailReg = document.querySelector("#userEmailReg");
const userPassword = document.querySelector("#userPassword");
const userPasswordReg = document.querySelector("#userPasswordReg");
const signUpButton = document.querySelector("#signUpButton");
const signUpRedirectButton = document.querySelector("#signUpRedirectButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userSignUp = async () => {
    const signUpEmail = userEmailReg.value;
    const signUpPassword = userPasswordReg.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then(() => {
            location.assign("/dp-test-enviroment/index.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
        });
};

const userSignIn = async () => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("cart", JSON.stringify([]));

            const cookieUser = {
                email: user.email,
                roles: ['user'],
                 token: user.stsTokenManager.accessToken,
            }
            const encodedUser = btoa(JSON.stringify(cookieUser));
            document.cookie = `user=${encodedUser}`;

            location.assign("/dp-test-enviroment/index.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
        });
};

const userSignUpRedirect = () => location.assign("register.html");

const logOutButton = document.querySelector(".log-out__button");
const logOutLink = document.querySelector("#log-out__link");
const userName = document.querySelector(".user-name");
const changePasswordBtn = document.querySelector(".change-password");
const newPassword = document.querySelector(".new-password");

const checkAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            logOutLink.innerHTML = "Log out";
            userName.innerHTML = user.email;
        } else {
            if (logOutLink) logOutLink.innerHTML = "Log in";
        }
    });
};

userName?.addEventListener('click', () => {
    location.assign("/dp-test-enviroment/profile.html");
})

checkAuthState();

const userSignOut = async () => {
    await signOut(auth);
    document.cookie = "user=";
};

const onClickChangePassword = (e) => {
    e.target.preventDefault();
    updatePassword(auth.currentUser, newPassword.value).then(() => {
        console.log('Password updated successfully');
    })
        .catch(error => {
            console.error('Error updating password:', error.message);
        });
}

newPassword?.addEventListener('change', (event) => {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("newPassword", event.target.value);
    window.location.search = searchParams.toString();
})

signUpButton?.addEventListener("click", userSignUp);
signInButton?.addEventListener("click", userSignIn);
signOutButton?.addEventListener("click", userSignOut);
signUpRedirectButton?.addEventListener("click", userSignUpRedirect);
changePasswordBtn?.addEventListener('click', onClickChangePassword);

export const changePassword = (passw) => {
    updatePassword(auth.currentUser, passw).then(() => {
        console.log('Password updated successfully');
    })
        .catch(error => {
            console.error('Error updating password:', error.message);
        });
}

// const router = express.Router();
// router.get('/change-password', (req, res) => {
//   // Handle change password logic here
//   res.send('Password changed successfully');
// });
//
// module.exports = router;