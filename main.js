class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        `
    }
}

customElements.define(`main-header`, MainHeader)