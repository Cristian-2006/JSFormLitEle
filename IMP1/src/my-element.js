import { LitElement,html } from "lit-element";
import StyleSccs from "./my-elementStyle"


export class MyElement extends LitElement {

    static get styles(){
        return[
            StyleSccs
        ]
    }
    render(){
        return html`
        <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item">
                    <div class="contenedor-foto">
                        <img src="img/1.png" alt="">
                    </div>
                    <p class="descripcion">Jack Rusel</p>
                    <span class="edad">2 años</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/2.png" alt="">
                    </div>
                    <p class="descripcion" id>BullDog </p>
                    <span class="edad">4 años</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/3.png" alt="">
                    </div>
                    <p class="descripcion">Pastor Aleman
                    </p>
                    <span class="edad">3 años</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/4.png" alt="">
                    </div>
                    <p class="descripcion">Huskie</p>
                    <span class="edad">5 meses</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
            </div>
            <div class="fila">
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/5.png" alt="">
                    </div>
                    <p class="descripcion">Shar Pei</p>
                    <span class="edad">3 meses</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/6.png" alt="">
                    </div>
                    <p class="descripcion">Gato X</p>
                    <span class="edad">1 año</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/7.png" alt="">
                    </div>
                    <p class="descripcion">Donatelo</p>
                    <span class="edad">1 año</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/8.png" alt="">
                    </div>
                    <p class="descripcion">Guacamaya</p>
                    <span class="edad">2 meses creo</span>
                    <button class="button">!ADOPTAR!</button>
                </div>
            </div> 
        </div>
`
    }
}

customElements.define('my-element', MyElement);