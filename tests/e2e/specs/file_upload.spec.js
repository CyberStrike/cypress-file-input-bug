// https://docs.cypress.io/api/introduction/api.html
import FileUpload from '../../../src/components/FileUpload.vue'
const mountVue = require('cypress-vue-unit-test')

describe('File Upload', () => {
  beforeEach(mountVue({
    template: `<file-upload @upload-license="debug"/>`,
    data: () => ({}),
    components: { FileUpload },
    methods: {
      debug (event) {
        console.debug('Caught In Parent', event)
      }
    }
  }))

  it('Triggers Upload Event', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
