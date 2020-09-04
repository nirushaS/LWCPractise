import { LightningElement, api} from 'lwc';

export default class QuotationDetail extends LightningElement {

    @api customer;
    @api object;

    connectedCallBack() {

    }

    get icon() {
        return 'doctype:image';
    }

    get alttext() {
        return 'image';
    }
}