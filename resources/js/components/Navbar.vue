<template>
  <div class="has-margin-15">
    <nav id="navbar" class="navbar is-fixed-top" v-bind:class="selectedNavTheme">

      <!--Company Logo & Website-->
      <div class="navbar-brand">
        <a class="navbar-item" v-bind:href="companyWebsite">
          <img alt="Bulma: a modern CSS framework based on Flexbox" width="100" height="28">
        </a>
        <!--workflow on the burger menu when clicked-->
        <div v-on:click="active = !active" v-bind:class = "{'is-active': active }" class="navbar-burger burger"
             data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!--Navbar Options-->
      <div v-bind:class="{'is-active': active }" class="navbar-menu">

        <!--Left Navbar list-->
        <div class="navbar-start">

          <!--Main Options-->
          <a v-for="navLeftItem in navLeftItems" class="navbar-item" v-bind:href="navLeftItem.route">
            {{ navLeftItem.item }}
          </a>

          <!--DropDown Navbar Items-->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {{ navDropdownMenu }}
            </a>
            <div class="navbar-dropdown is-boxed">
              <a v-for="navDropdownItem in navDropdownItems" class="navbar-item" v-bind:href="navDropdownItem.website">
                <p>
                  <span class="icon">
                    <i v-bind:class="navDropdownItem.icon"></i>
                  </span>
                  {{ navDropdownItem.item }}
                </p>
              </a>
            </div>

          </div>
        </div> <!--Left NavBar ends-->

        <!--NavBar items on the right-->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">


              <p class="control">
                <a v-on:click="randomTheme" class="button">
                  <span class="icon">
                    <i class="fas fa-random"></i>
                  </span>
                  <span>
                    Randomize
                  </span>
                </a>
              </p>

            </div>
          </div>
        </div> <!--Right NavBar ends-->

      </div> <!--NavBar Items ends-->
    </nav> <!--NavBar ends-->
  </div>
</template>

<script>
  //import companyLogo from '../../assets/logo-black.png'
  export default {
    data() {
      return {
        active: false,
        //companyLogo: companyLogo,
        companyWebsite: "https://github.com/nebed/",
        navLeftItems: [{
            "item": "Home",
            "route": "/"
          },{
            "item": "Dashboard",
            "route": "/dashboard/main"
          },{
            "item": "Contact",
            "route": "/contact"
          }],
        navDropdownMenu: "Follow",
        navDropdownItems: [
          {
            "item": "Github",
            "icon": "fab fa-github",
            "website": "https://github.com"
          },{
            "item": "Linkedin",
            "icon": "fab fa-linkedin",
            "website": "https://linkedin.com"
          },{
            "item": "Facebook",
            "icon": "fab fa-facebook",
            "website": "https://facebook.com"
          },{
            "item": "Twitter",
            "icon": "fab fa-twitter",
            "website": "https://twitter.com"
          },{
            "item": "Google",
            "icon": "fab fa-google",
            "website": "https://google.com"
          },{
            "item": "Instagram",
            "icon": "fab fa-instagram",
            "website": "https://instagram.com"
          }],
        navbarRightItems: [
          {
            "item": "Tweet",
            "icon": "fab fa-twitter",
            "website": "https://twitter.com/intent/tweet?text=Just learned framework Bulma(css) and VueJS (js) and created this cool demo website",
          },
          {
            "item": "Download",
            "icon": "fas fa-download",
            "website": "https://github.com/faisaltheparttimecoder/bulma-vuejs-demo-website/archive/master.zip"
          }
        ],
        navbarThemes: [
          'is-primary',
          'is-link',
          'is-info',
          'is-success',
          'is-warning',
          'is-danger',
          'is-black',
          'is-dark',
          'is-light',
          'is-white'
        ],
        'selectedNavTheme': ""
      }
    },
    methods: {
      randomTheme: function() {
         this.selectedNavTheme = this.navbarThemes[Math.floor(Math.random() * this.navbarThemes.length)]
      }
    }
  }


</script>

<style>

.has-margin-15 {margin-bottom: 15px;}

</style>
