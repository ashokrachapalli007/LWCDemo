import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingex extends LightningElement {
@track displaydiv = false;
@track citylist = ['hyd', 'beng', 'chennai'];

CheckboxHandler(event){
    this.displaydiv = event.target.checked;
    
}
}