<template>
  
  <div id="app">

    <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">DTA</a>
      

      
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons"></i></a>
    </div>
  </nav>
 


  <div class="container">
    <div class="section">

      <!-- HERE -->
      <router-view/>

    </div>
    <br><br>
  </div>

  <footer class="page-footer orange">
    <div class="container">
      
    </div>
    <div class="footer-copyright">
      <div class="container">
      Developer Test Assessment. All Rights Reserved.
      </div>
    </div>
  </footer>


  



    
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let materializeJs = document.createElement('script');
    let initJs = document.createElement('script');
    let jquery = document.createElement('script');

    materializeJs.setAttribute('src', './assets/js/materialize.min.js');
    initJs.setAttribute('src', './assets/js/init.js');
    jquery.setAttribute('src', './assets/js/jquery-slim.min.js');

    document.head.appendChild(materializeJs);
    document.head.appendChild(initJs);
    document.head.appendChild(jquery);
  }
}
</script>

<style>

@import './assets/css/materialize.min.css';
@import './assets/css/style.css';

</style>
