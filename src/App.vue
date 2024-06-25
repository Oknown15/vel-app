<template>
  <div>
    <div>
      <Preloader :loading="loading" />
    </div>
    <div v-show="!loading">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import './assets/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import Footer from '@/components/FooterComp.vue'
import Preloader from '@/components/PreloaderComp.vue'
import 'bootstrap/dist/js/bootstrap.bundle'

export default {
  name: 'App',
  components: {
    Footer,
    Preloader
  },
  data() {
    return {
      loading: true

    }
  },
  mounted() {
    this.onPageLoad();
  },
  methods: {
    onPageLoad() {
      setTimeout(() => {
        this.loading = false;
      }, 3000)
    }
  }
}
</script>
