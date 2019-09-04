import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
 @track DynamicGreetings = 'Ashok'
 EventHandler(event){

this.DynamicGreetings = event.target.value;
 }
} 