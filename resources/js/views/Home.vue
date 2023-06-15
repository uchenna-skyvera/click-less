<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-2 is-hidden-mobile">
          <app-menu v-bind:menuActive="menuItem"> </app-menu>
        </div>
        <div class="container">
          <app-dashboard v-if="routename === 'Home'"> </app-dashboard>
          <app-contractors v-if="routename === 'Contractors'"> </app-contractors>
          <app-projects v-if="routename === 'Projects'"> </app-projects>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import menu from '../components/Menu.vue';
  import dashboardHome from '../components/DashboardHome.vue';
  import dashboardContractors from '../components/DashboardContractors.vue';
  import dashboardProjects from '../components/DashboardProjects.vue';


  export default {
    name: 'Home',
    components: {
      'app-menu': menu,
      'app-dashboard': dashboardHome,
      'app-contractors': dashboardContractors,
      'app-projects': dashboardProjects,
    },
    data() {
      return {
        menuItem: this.$route.name,
        routename: this.$route.name,
        metricHeading: [{
          title: 'Action on Page',
          icon: 'fas fa-fighter-jet fa-4x'
        },{
          title: 'Page Views',
          icon: 'fas fa-eye fa-4x'
        },{
          title: 'Post Engagement',
          icon: 'fas fa-pencil-alt fa-4x'
        },{
          title: 'Reach',
          icon: 'fas fa-shopping-cart fa-4x'
        }]
      }
    },
    mounted()
    {
    }
  }

</script>

<style>

</style>
