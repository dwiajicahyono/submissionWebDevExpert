class FotDwi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        
    <p>Semua data diambil dari <a href="https://restaurant-api.dicoding.dev" target="_blank"
    rel="noreferrer" class="aboutfot">DicodingApi</a></p>
        `;
  }
}
customElements.define('fot-dwi', FotDwi);
