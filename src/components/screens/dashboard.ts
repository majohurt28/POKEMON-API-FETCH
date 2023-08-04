import {getDataCa} from "../../services/getDatacategory"
import {getDataJo} from "../../services/getDatajokes"
import {ApiType} from "../../types/typeJokes"
import {AttributeButton} from "../buton/buton"


class dashBoard extends HTMLElement{

    
constructor(){
    super();
    this.attachShadow({mode: "open"});
}

    async connectedCallback(){
        const data = await getDataCa();
        this.render(data)
    }



    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
    
        data.forEach((e: any ) => {
            const buton = this.ownerDocument.createElement('button');
            buton.setAttribute(AttributeButton.name,e);
            this.shadowRoot?.appendChild(buton);
        });


    }
    }
    
    customElements.define('app-dashboard',dashBoard);



