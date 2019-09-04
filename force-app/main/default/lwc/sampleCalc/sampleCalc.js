import { LightningElement, track } from 'lwc';

export default class SampleCalc extends LightningElement {
    firstnumber;
    secondnumber;
    @track currentresult;
    @track PreviousResults = [];
    @track DisplayPreviousresult = false;
    Numberchangehandler(event){
const inputboxname = event.target.name;
    if(inputboxname === "firstnumber"){
    this.firstnumber = event.target.value;

    }else if(inputboxname === "secondnumber"){
        this.secondnumber = event.target.value;
    }
    }
    AddHandler() {
        const FirstN = parseInt(this.firstnumber);
        const SecondN = parseInt(this.secondnumber);

       // this.currentresult = 'Result of '+FirstN+' + '+SecondN+' is ' +(FirstN+SecondN);
        this.currentresult = `Result of ${FirstN}+${SecondN} is  ${FirstN+SecondN}`;
        this.PreviousResults.push(this.currentresult);
    }
    SubHandler() {
        const FirstN = parseInt(this.firstnumber);
        const SecondN = parseInt(this.secondnumber);

       // this.currentresult = 'Result of '+FirstN+' + '+SecondN+' is ' +(FirstN+SecondN);
        this.currentresult = `Result of ${FirstN}-${SecondN} is  ${FirstN-SecondN}`;
        this.PreviousResults.push(this.currentresult);
  
    }
    MultiplyHandler() {
        const FirstN = parseInt(this.firstnumber);
        const SecondN = parseInt(this.secondnumber);

       // this.currentresult = 'Result of '+FirstN+' + '+SecondN+' is ' +(FirstN+SecondN);
        this.currentresult = `Result of ${FirstN}X${SecondN} is  ${FirstN*SecondN}`;
        this.PreviousResults.push(this.currentresult);

    }
    DevisionHandler() {
        const FirstN = parseInt(this.firstnumber);
        const SecondN = parseInt(this.secondnumber);

       // this.currentresult = 'Result of '+FirstN+' + '+SecondN+' is ' +(FirstN+SecondN);
        this.currentresult = `Result of ${FirstN}/${SecondN} is  ${FirstN/SecondN}`;
        this.PreviousResults.push(this.currentresult);

    }
    showPreviousResultstoggle(event){
     this.DisplayPreviousresult = event.target.checked;

    }
    
    

    
}