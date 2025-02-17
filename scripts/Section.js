export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // Método para adicionar um item ao container
  addItem(element) {
    this._container.append(element);
  }

  // Método para renderizar os itens na página
  renderItems() {
    this._items.forEach((card) => {
      this._renderer(card);
    });
  }
}
