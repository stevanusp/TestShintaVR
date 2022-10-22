<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-md py-3">
            <div class="container"><NuxtLink to="/" class="navbar-brand d-flex align-items-center"><span class="text-uppercase">Schola</span></NuxtLink><button
                    class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span
                        class="visually-hidden">Toggle navigation</span><span
                        class="navbar-toggler-icon"></span></button>
                <div id="navcol-2" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto" style="margin-right: 1em;">
                        <li class="nav-item"><a class="nav-link active" href="#">Schedule</a></li>
                        <li class="nav-item"><a class="nav-link active" href="#">Grade</a></li>
                        <li class="nav-item"><a class="nav-link active" href="#">Third</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Forth</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Fifth</a></li>
                    </ul>
                    <div class="d-none d-md-block">
                        <NuxtLink to="/signin" class="btn btn-light me-2 shadow" type="button">Login</NuxtLink>
                        <NuxtLink to="/Signup" class="btn btn-primary" role="button" href="#">Sign-up</NuxtLink>
                    </div>
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