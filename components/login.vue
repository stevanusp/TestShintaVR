<template>
    <div id="firebaseui-auth-container">

    </div>
</template>
<script>
export default {
    name: 'LogIN',
    mounted() {
        const firebaseui = require("firebaseui");
        require("firebaseui/dist/firebaseui.css");
        const ui =
            firebaseui.auth.AuthUI.getInstance() ||
            new firebaseui.auth.AuthUI(this.$fire.auth);
        const config = {
            signInOptions: [
                this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
                this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            signInSuccessUrl: "/Dashboard",
            callbacks: {
                signInSuccessWithAuthResult() {
                    console.log("Successfully signed in");
                    window.location = "/Dashboard";
                },
            },
        };
        ui.start("#firebaseui-auth-container", config);
    },
};
</script>