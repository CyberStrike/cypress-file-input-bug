<template>
  <div id="app">
    <file-upload/>
  </div>
</template>

<script>

import FileUpload from './components/FileUpload'

export default {
  name: 'app',
  components: {
    FileUpload
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
