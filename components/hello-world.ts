class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
      <style>
        hello-world {
          color: blue;
        }
      </style>
      <h1>Hello world!</h1>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
