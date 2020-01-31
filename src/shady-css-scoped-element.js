/*
Wrapper over <style> elements to co-operate with ShadyCSS

Example:
<shady-css-scoped>
  <style>
  ...
  </style>
</shady-css-scoped>
*/
const CustomStyleInterface = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
export default class ShadyCssScoped extends HTMLElement {

  constructor() {
    super();
    /** @type {HTMLStyleElement} */
    this._style = null;
    if (CustomStyleInterface) {
     CustomStyleInterface.addCustomStyle(this);
    }
  }

  /** @return {HTMLStyleElement} */
  getStyle() {
    if (!this._style) {
      this._style = /** @type {HTMLStyleElement} */ (this.querySelector('style'));
    }
    return this._style;
  }
}

ShadyCssScoped.prototype['getStyle'] = ShadyCssScoped.prototype.getStyle;// eslint-disable-line no-self-assign
window.customElements.define('shady-css-scoped', ShadyCssScoped);

