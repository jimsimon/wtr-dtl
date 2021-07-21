import {html, LitElement} from "lit";
import { customElement } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
    render() {
        return html`<h1>Hello World</h1>`
    }
}