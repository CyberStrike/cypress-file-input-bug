// https://docs.cypress.io/api/introduction/api.html
import FileUpload from '../../../src/components/FileUpload.vue'
const mountVue = require('cypress-vue-unit-test')

const testComponent = {
  template: `<file-upload @upload="debug"/>`,
  data: () => ({}),
  components: { FileUpload },
  methods: {
    debug (event) {
      console.debug('Caught In Parent', event)
    }
  }
}

describe('File Upload', () => {
  beforeEach(mountVue(testComponent))

  it('Triggers Upload Event', () => {
    cy.contains('Upload File')
  })
})
