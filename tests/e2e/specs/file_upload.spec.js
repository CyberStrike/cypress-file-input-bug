// https://docs.cypress.io/api/introduction/api.html
import FileUpload from '../../../src/components/FileUpload.vue'
const mountVue = require('cypress-vue-unit-test')

const testComponent = {
  template: `<file-upload @upload-file="debug"/>`,
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

  it('Can Trigger Upload File 1', () => {
    const spy = cy.spy()
    Cypress.vue.$children[0].$on('upload', spy)

    cy.fixture('files/cypress.png').as('image')
    cy.get('input[name="file1"]').then(function ($input) {
      attachTestFile($input, this.image, 'image/png').then(function () {
        expect(false).to.be.true
        // expect(spy).to.be
        //   .calledOnce
        //   .calledWithMatch(Cypress.sinon.match.string)
      })
    })
  })

  it('Can Trigger Upload File 2', () => {
    const spy = cy.spy()
    Cypress.vue.$children[0].$on('upload', spy)

    cy.fixture('files/cypress.png').as('image')
    cy.get('input[name="file2"]').then(function ($input) {
      attachTestFile($input, this.image, 'image/png').then(function () {
        expect(false).to.be.true
        // expect(spy).to.be
        //   .calledOnce
        //   .calledWithMatch(Cypress.sinon.match.string)
      })
    })
  })
})

const attachTestFile = ($el, fixture, MIMEType) => {
  return Cypress.Blob.base64StringToBlob(fixture, MIMEType)
    .then((blob) => {
      const testFile = new File([blob], 'test_file', { type: MIMEType })
      const dataTransfer = new DataTransfer()
      const event = new Event('change', { bubbles: true })

      dataTransfer.items.add(testFile)
      $el[0].files = dataTransfer.files
      $el[0].dispatchEvent(event)
    })
}
