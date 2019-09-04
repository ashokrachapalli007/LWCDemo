import { LightningElement, track } from 'lwc';

export default class CarSearch extends LightningElement {
    @track carTypeId ='';

    carTypeChangeHandler(event){
this.carTypeId = event.detail;
    }
}