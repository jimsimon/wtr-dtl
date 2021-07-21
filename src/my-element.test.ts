// import {expect} from '@esm-bundle/chai'
// import {fixture, html} from '@open-wc/testing'
import './my-element'
import {getByRole, getByText } from "@testing-library/dom";

describe('my-element', () => {
    it('works using testing-library', async () => {
        document.body.innerHTML = '<my-element></my-element>'
        // const el = await fixture(html`<my-element></my-element>`)
        const el = document.querySelector('my-element')
        const heading = getByText(el.shadowRoot as unknown as HTMLElement, 'Hello World')
        const heading2 = getByRole(el.shadowRoot as unknown as HTMLElement, 'heading')
        // expect(heading).to.exist;
    })
})