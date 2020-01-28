<template>
  <section class="container">
    <div class="col col-md-5 mx-auto">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label class="card card-body" for="file1">
              <p>
                Upload File 1
              </p>
              <input @change="upload" id="file1" name="file1" type="file">
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label class="card card-body" for="file2">
              <p>
                Upload File 2
              </p>
              <input id="file2" name="file2" type="file">
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FileUpload',
  methods: {
    upload (event) {
      const fileName = event.target.files[0].name
      this.$emit('upload', fileName)
    }
  },
  created () {
    const emit = this.$emit
    this.$emit = (...args) => {
      console.debug('emit!', ...args)
      emit.call(this, ...args)
    }
  }
}
</script>

<style scoped>
  label {
    cursor: pointer;
  }
</style>
