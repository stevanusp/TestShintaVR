<template>
    <div>
        <HeaderDashboard />
        <p>This is a dashboard that require Login</p>
    </div>
</template>
<script>
import HeaderDashboard from '~/components/HeaderDashboard.vue';

export default{
    name: "DashBoard",
    middleware: "auth",
    components: { HeaderDashboard }
}
</script>
