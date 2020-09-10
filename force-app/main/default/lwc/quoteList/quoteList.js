import { LightningElement } from 'lwc';

export default class QuoteList extends LightningElement {
    quotes = [
        {
            "name": "Test Quote 1",
            "status": "Products/Price Pending",
            "number": "N200917625-01"
        },
        {
            "name": "Test Quote 2",
            "status": "Quote Complete",
            "number": "NI00917628-01"
        },
        {
            "name": "Test Quote 3",
            "status": "Products/Price Pending",
            "number": "N200917585-01"
        },
        {
            "name": "Test Quote 4",
            "status": "Escalation Price Request",
            "number": "NI00917680-01"
        }
    ];
    
}
