import { ObservableElement } from 'observable-element';
import { Store } from 'store-thing';
import { render, html } from 'uhtml';

const store = new Store('counter', { count: 0 }, { storage: 'local' });

const increment = () => store.update((state) => (state.count += 1));
const decrement = () => store.update((state) => (state.count -= 1));

class HelloWorld extends ObservableElement {
  count: number;

  constructor() {
    super();
    store.subscribe((state) => {
      render(this, this.template(state.count));
    });
  }

  template(count: number) {
    return html`
      <style>
        hello-world {
          color: blue;
        }
      </style>
      <h1>Hello world!</h1>
      <div>Count: ${count}</div>
      <button onclick=${increment}>+</button>
      <button onclick=${decrement}>-</button>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
