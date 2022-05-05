export class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this.renderer = renderer;

    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
