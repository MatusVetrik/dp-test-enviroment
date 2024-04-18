const express = require("express");
const { initializeApp } = require("firebase/app");
const { getAuth, updatePassword } = require("firebase/auth");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const router = express.Router();

const firebaseConfig = {
  apiKey: "AIzaSyCx_Vvo5GYYtbjFgSm0GtQv7TWb6mrAZWg",
  authDomain: "diplomovka-test-app.firebaseapp.com",
  projectId: "diplomovka-test-app",
  storageBucket: "diplomovka-test-app.appspot.com",
  messagingSenderId: "548553603020",
  appId: "1:548553603020:web:6628aba4fcd24cbf19cf69",
};

const authApp = initializeApp(firebaseConfig);
const auth = getAuth(authApp);

router.get('/change-password', (req, res) => {
  const newPassword = req.query.newPassword; // Assuming the new password is sent as a query parameter

  if (!newPassword) {
    return res.status(400).send('New password not provided');
  }

  // Update the password
  updatePassword(auth.currentUser, newPassword)
      .then(() => {
        res.send('Password changed successfully');
      })
      .catch(error => {
        console.error('Error updating password:', error.message);
        res.status(500).send('Error updating password');
      });
});
