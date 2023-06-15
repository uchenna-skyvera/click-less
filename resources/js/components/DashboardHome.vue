<template>
  <div>
    <app-calendar></app-calendar>
  </div>
</template>

<script>
  import calendar from '../components/CalendarComponent.vue';
  export default {
    components: {
      'app-calendar': calendar,
    },
    data(){
        return {

        }
    },
  }

</script>

<style scoped>

</style>
