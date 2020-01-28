<template>
  <section>
    <label for="file1">
      <h4>Upload File 1</h4>
      <input @change="upload" id="file1" name="file1" type="file">
    </label>
    <label for="file2">
      <h4>Upload File 2</h4>
      <input @change="upload" id="file2" name="file2" type="file">
    </label>
  </section>
</template>

<script>
export default {
  name: 'FileUpload',
  methods: {
    upload (event) {
      const fileName = event.target.files[0].name
      this.$emit('upload-file', fileName)
    }
  },
  created () {
    const emit = this.$emit
    this.$emit = (...args) => {
      console.debug('Emitted', ...args)
      emit.call(this, ...args)
    }
  }
}
</script>

<!--<style scoped>-->
<!--  label {-->
<!--    position: relative;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    flex: 1 1 auto;-->
<!--    cursor: pointer;-->
<!--    min-height: 1px;-->
<!--    min-width: 0;-->
<!--    padding: 1.25rem;-->
<!--    word-wrap: break-word;-->
<!--    background-color: #fff;-->
<!--    background-clip: border-box;-->
<!--    border: 1px solid rgba(0,0,0,.125);-->
<!--    border-radius: .25rem;-->
<!--  }-->

<!--  label + label {-->
<!--    margin-top: 2rem;-->
<!--  }-->
<!--</style>-->
