/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-25-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';
/*static resource*/
import CAR_HUB_PLACEHOLDER from '@salesforce/resourceUrl/placeholder'

export default class Placeholder extends LightningElement {
    @api message;

    placeholderUrl = CAR_HUB_PLACEHOLDER;
}