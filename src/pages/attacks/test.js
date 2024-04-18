const request = window.indexedDB.open("firebaseLocalStorageDb");
request.onsuccess = (event) => {
    const db = event.target.result;

    const transaction = db.transaction(["firebaseLocalStorage"], "readwrite");
    const objectStore = transaction.objectStore("firebaseLocalStorage");

    const data = {
        fbase_key:
            "firebase:authUser:AIzaSyCx_Vvo5GYYtbjFgSm0GtQv7TWb6mrAZWg:[DEFAULT]",
        value: {
            uid: "RTejhfCWw0OAlHcoAj41Fy93ZJJ3",
            email: "mate@gmail.com",
            emailVerified: false,
            isAnonymous: false,
            providerData: [
                {
                    providerId: "password",
                    uid: "mate@gmail.com",
                    displayName: null,
                    email: "mate@gmail.com",
                    phoneNumber: null,
                    photoURL: null,
                },
            ],
            stsTokenManager: {
                refreshToken: "",
                accessToken:
                "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNjI1OTZmNTJmNTJlZDQ0MDQ5Mzk2YmU3ZGYzNGQyYzY0ZjQ1M2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGlwbG9tb3ZrYS10ZXN0LWFwcCIsImF1ZCI6ImRpcGxvbW92a2EtdGVzdC1hcHAiLCJhdXRoX3RpbWUiOjE3MTE3OTA0OTYsInVzZXJfaWQiOiJSVGVqaGZDV3cwT0FsSGNvQWo0MUZ5OTNaSkozIiwic3ViIjoiUlRlamhmQ1d3ME9BbEhjb0FqNDFGeTkzWkpKMyIsImlhdCI6MTcxMTc5MDQ5NiwiZXhwIjoxNzExNzk0MDk2LCJlbWFpbCI6Im1hdGVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1hdGVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.0Mp-T84dmzTpiAdVyhl68WV2qDvTZ78IHGYca5YpBgBx4A_m_YXoJ-IYBaTl-Yp-fXYzuKN3Vff0iqkNA5nVtUcOFfG1X157DrkE80gxp6e7ELg2jn_N6mF1Xw-jTSaJoAAsG8f3e_wHp-cfVqWyBNrcUTABrP8Hy_bv-iyUII60PZtjiu_oo7ObVFhoPEim82rlPJDLiwpPMos7qGEBsvw4-fKQvLPkRwkGbCf8bKt6Pn_jThtR9JPuhU_G2SlgppA0PuuLSyO8KViFoH4XgFMi9kyX3YU8vmg7O5bDwCYemLLpvQt4KY900_qQgxS2GnX89h_V-hNu_bGqQpL9Zg",
                expirationTime: 1711794096425,
            },
            createdAt: "1711388904315",
            lastLoginAt: "1711790496471",
            apiKey: "AIzaSyCx_Vvo5GYYtbjFgSm0GtQv7TWb6mrAZWg",
            appName: "[DEFAULT]",
        },
    };

    objectStore.clear();

    const addDataRequest = objectStore.add(data);

    addDataRequest.onsuccess = (event) => alert("Success!");
};