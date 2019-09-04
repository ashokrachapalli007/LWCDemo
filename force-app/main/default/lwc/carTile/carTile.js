import { LightningElement, api } from "lwc";
/* eslint-disable no-console */
 /* eslint-disable no-alert */
export default class CarTile extends LightningElement {
  @api car;
  @api carSelectedId;

  handleCarSelect(event){
    event.preventDefault();

    const carId = this.car.Id;

    const carSelect = new CustomEvent('carselect', {detail:carId});
    this.dispatchEvent(carSelect);

}
  get isCarSelected() {
    console.log('input 1'+this.car.Id);
    console.log('input 2'+this.carSelectedId);

         if (this.car.Id === this.carSelectedId) {
        
      return "tile selected";
    }
    return "tile";

  }

}
