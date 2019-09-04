import { LightningElement, track, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/carSearchFormController.getCarTypes';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class CarSerchForm extends NavigationMixin(LightningElement) {
   @track carTypes;
   @wire(getCarTypes)
   wireCarTypes({data,error}){
       if(data){
           this.carTypes =[{value:"", label:"All Values"}];
        data.forEach(element => {
        const carType = {};
        carType.label = element.Name;
        carType.value = element.Id;
        this.carTypes.push(carType);
           });
       }
       else if(error){
           this.showToast('ERROR',error.body.message,'error');
       } 
   } 
   carChangeHandler(event) {
    const carTypeId = event.detail.value;

    const carTypeSelectionChangeEvent = new CustomEvent('cartypeselect', {detail : carTypeId});
    this.dispatchEvent(carTypeSelectionChangeEvent);
    }
    
    CreateNewCarType(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName : 'Car_Type__c',
                actionName : 'new'
            }
        });
    }
    
    showToast(title,message,varient) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            varient:varient
    
        });
        this.dispatchEvent(event);
    }
}

