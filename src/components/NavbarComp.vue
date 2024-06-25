<template lang="">
  <div>
    <div class='container-fluid'>
      <!-- Navbar Section -->
      <div class='d-flex align-items-center navigation justify-content-between  px-4  py-5'>
        <div class=''>
          <img :src='img' class='img-fluid Logo' alt='VelLogo'>
        </div>
        <button data-bs-toggle="collapse" data-bs-target="#nav" aria-expanded="false"  class=' btn btn-black d-lg-none d-flex'>
            <i  class='text-light fs-4 fas fa-bars'></i>
        </button>
        <div   id='nav' class="navbar-collapse d-lg-block collapse ">
          <button aria-expanded="true" data-bs-toggle="collapse" data-bs-target="#nav"  class='btn  d-lg-none d-block position-absolute left-0 dash'>
              <h1 class='text-light'>—</h1>
            </button>
          <ul class='list-unstyled d-lg-flex d-block align-items-center m-0 justify-content-center gap-5 '>
            
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
<style lang="css" scoped>
  .Logo{
    width: 179.77px;
    height: 87.37px;
  }
  ul a{
    font-family: Lexend;
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
      position: absolute;
      top: 0;
      left: 0;
      background-color: #111111;
      width: 100%;
      height: 100vh;
      right: 0;
      padding-top: 100px;
      transition: 1s ease;
    }

    #nav #Link{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }

    .login{
        margin: 10px auto;
        
    }

    .dash{
      top: 20px !important;
      right: 30px;
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

  @media screen and (min-width:1200px) {
    .collapse{
      position: absolute;
      right: 50px;
    }
  }
</style>