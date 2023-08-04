export enum AttributeFigure {
    "icon_url" = "icon_url",
    "url" = "url",
    "value" = "value"
}

export default class Figure extends HTMLElement {
    icon_url?: string;
    url?: string;
    value?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeFigure, null> = {
            icon_url: null,
            url: null,
            value: null
        }
        return Object.keys(attrs);
    }


attributeChangedCallback(
    propName: AttributeFigure,
    _: unknown,
    newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
}

constructor(){
    super();
    this.attachShadow({mode: "open"});
}

connectedCallback(){
    this.render();
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
            <section>
            <h1>${this.icon_url}</h1>
            <img src="${this.url}">
            <h1>${this.value}</h1>
            </section>
        `
    }
}

}


customElements.define('app-figure',Figure);
    




