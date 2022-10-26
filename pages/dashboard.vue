<template>
    <div>
        <p>This is a dashboard that require Login</p>
    </div>
</template>
<script>
export default{
    name: "DashBoard",
    middleware: 'auth'
}
</script>
