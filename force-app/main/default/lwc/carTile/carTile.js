/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-25-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {

    @api car = {};

    handleClick() {
        this.dispatchEvent(new CustomEvent('selected', {
            detail: this.car.Id
        }))
    }
}