import { Store } from 'store-thing';
import { render, html } from 'uhtml';

interface CounterState {
  count: number;
}

const store = new Store<CounterState>(
  'counter',
  { count: 0 },
  { storage: 'local' }
);

const increment = () => store.update((state) => (state.count += 1));
const decrement = () => store.update((state) => (state.count -= 1));

class HelloWorld extends HTMLElement {
  connectedCallback() {
    store.subscribe((state) => render(this, this.template(state)));
  }

  template(state: CounterState) {
    return html`
      <style>
        hello-world {
          color: blue;
        }
      </style>
      <h1>Hello world!</h1>
      <div>Count: ${state.count}</div>
      <button onclick=${increment}>+</button>
      <button onclick=${decrement}>-</button>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
