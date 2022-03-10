class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <header class="red">This is the header.</header>
        `
    }
}

customElements.define(`main-header`, MainHeader)