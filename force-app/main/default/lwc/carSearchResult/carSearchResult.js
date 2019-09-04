import { LightningElement, api, wire, track } from "lwc";
import getCars from "@salesforce/apex/carsSearch.getCars";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
/* eslint-disable no-console */
 /* eslint-disable no-alert */
export default class CarSearchResult extends LightningElement {
  @api ctcarTypeId;
  @track selectedCarId;

  @track cars;
  @wire(getCars, { carTypeId: "$ctcarTypeId" })
  wiredCars({ data, error }) {
    if (data) {
      this.cars = data;
    } else if (error) {
      this.showToast("ERROR", error.body.message, "error");
    }
  }
  showToast(title, message, varient) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      varient: varient
    });
    this.dispatchEvent(event);
  }
  get carsFound() {
    if (this.cars) {
      return true;
    }
    return false;
  }
  carSelectHandler(event){
    const carId = event.detail;
    this.selectedCarId = carId;

  }
}
