document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (name.value.trim().length < 10) {
                alert("A névnek legalább 10 karakternek kell lennie!");
                isValid = false;
            }

            if (!email.value.includes("@") || !email.value.includes(".")) {
                alert("Érvényes email címet adj meg!");
                isValid = false;
            }

            if (message.value.trim().length < 10) {
                alert("Az üzenet legalább 10 karakter legyen!");
                isValid = false;
            }

            if (isValid) {
                alert("Sikeres beküldés!");
                form.submit();
            }
        });
    }
});
