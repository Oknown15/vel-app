<template lang="">
  <div>
    <div class='container-fluid'>
      <!-- Navbar Section -->
      <div class='d-flex align-items-center navigation justify-content-between  px-4  py-5'>
        <div class=''>
          <img :src='img' class='img-fluid Logo' alt='VelLogo'>
        </div>
        <div id='nav'>
          <ul class='list-unstyled d-lg-flex align-items-center m-0 justify-content-center gap-5 '>
            <div>
              <router-link id='Link' class='text-light' to="/">Home</router-link>
            </div>
            <div>
              <router-link id='Link' class='text-light' to="">Services</router-link>
            </div>
            <div>
              <router-link id='Link' class='text-light' to="">About Us</router-link>
            </div>
            <div class='border-2 border login d-flex align-items-center justify-content-center'>
              <router-link to='' class='text-uppercase text-light'>Login in</router-link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { ref } from 'vue';
const Logo = require('@/assets/images/VEL LOGO.svg');
export default {
  data() {
    return {
      img: Logo
      }
      
    }
}
</script>
<style scoped>
  .Logo{
    width: 179.77px;
    height: 87.37px;
  }
  ul a{
    text-decoration: none !important;
  }
  ul #Link:hover{
    border-bottom: 2px solid #fff;
  }
  .login{  
    width: 115px;
    border-radius: 10px;
    height: 39px;
  }

  @media screen and (max-width: 992px) {
    #nav{
      display: none;
    }

    .Logo{
      width: 150px;
    }
  }

  @media screen and (max-width: 768px) {
    .Logo{
      width: 100px;
    }

    .navigation {
      padding: 10px !important;
    }
  }
</style>