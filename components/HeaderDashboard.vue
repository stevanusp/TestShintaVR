<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-md py-3">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand d-flex align-items-center" href="#">
                    <span>SCOLA</span>
                </NuxtLink>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2">
                        <span class="visually-hidden">Toggle navigation</span>
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navcol-2" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><NuxtLink to="/DashBoard" class="nav-link active">Dashboard</NuxtLink></li>
                        <li class="nav-item"><a class="nav-link">Second Item</a></li>
                        <li class="nav-item"><a class="nav-link">Third Item</a></li>
                    </ul>
                        <button class="btn btn-light ms-md-2" role="button" v-on:click="SignOut()">Sign Out</button>
                        <NuxtLink to="/signup" class="btn btn-primary ms-md-2" role="button">Sign Up</NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderDashboard',
    methods: {
        SignOut(){
        this.$fire.auth.signOut();
        window.location="/signin"
        }
    },
}
</script>