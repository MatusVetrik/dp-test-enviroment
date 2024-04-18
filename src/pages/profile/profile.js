import {getCookiesMap} from "../../functions/getCookies.js";

const profileName = document.querySelector(".profile-name");
const isAdmin = document.querySelector(".is-admin")

const cookieMap = getCookiesMap(document.cookie);
const decodedUser = atob(cookieMap["user"]);
const parsedUser = JSON.parse(decodedUser);

const token = parsedUser.token;

const validCookieStructure = {
    tester: 'tester',
    user: "",
}

    console.log(validCookieStructure[token])
//
// if(invalidToken[token] && token){
// }

profileName.innerHTML = parsedUser.email;
isAdmin.innerHTML = "Roles: " + parsedUser.roles.join(", ");
// isAdmin.innerHTML = parsedUser.isAdmin ? "Admin" : "User"