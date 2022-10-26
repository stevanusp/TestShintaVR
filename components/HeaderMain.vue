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
                        <li class="nav-item"><NuxtLink to="/DashBoard" class="nav-link active" href="#">Dashboard</NuxtLink></li>
                        <li class="nav-item"><a class="nav-link" href="#">Second Item</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Third Item</a></li>
                    </ul>
                        <NuxtLink to="/Signin" class="btn btn-light ms-md-2" role="button" href="#">Sign in</NuxtLink>
                        <NuxtLink to="/signup" class="btn btn-primary ms-md-2" role="button" href="#">Sign Up</NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderMain'
}
</script>