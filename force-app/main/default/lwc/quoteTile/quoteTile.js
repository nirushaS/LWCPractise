import { LightningElement, api } from 'lwc';

export default class QuoteTile extends LightningElement {

    @api quote;
    @api object

    connectedCallBack() {
    }

    get icon() {
        return 'doctype:image';
    }

    get alttext() {
        return 'image';
    }
}