export class Button {
    constructor(buttonsSet,div) {
        this.buttonsSet = buttonsSet;
        this.el = div;
        this.el.addEventListener("click", (e) => { this.onClick(e); });
    }
 
    onClick(evt) {
        console.info("In onClick: this = %o", this);
        
        this.buttonsSet.display = this.buttonsSet.display + evt.target.innerText;
        
        document.getElementById('calcDisplay').innerText = this.buttonsSet.display;
        
    }
}