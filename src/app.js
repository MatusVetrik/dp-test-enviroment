const express = require("express");
const { initializeApp } = require("firebase/app");
const { getAuth, updatePassword } = require("firebase/auth");
const {firebaseConfig} = require("./firebaseConfig");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const router = express.Router();
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
