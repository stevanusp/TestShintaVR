<template>
  <div> 
    <HeaderMain />
    <HeroMain />
    </div>

</template>

<script>
import HeaderMain from '~/components/HeaderMain.vue';
import HeroMain from '~/components/HeroMain.vue'
export default {
    name: "IndexPage",
    components: { HeaderMain, HeroMain }
}
</script>
