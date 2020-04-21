Event Trigger Hooks
===================

* [How to access](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#how-to-access)
* [Connecting webhooks to Arcadier's event triggers](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#how-to-access)
* [Payload Samples](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#payload-samples)
    * [invoice.paid](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#payload-samples)

# How to access
To access the Event Trigger Hooks Tool:
1. Login to your marketplace's admin portal
2. Navigate to `https://{your-marketplace}/admin/event-triggers/index`

# Connecting webhooks to Arcadier's event triggers
## 1. Click on `Add new Event`.

<p align="center"><img src="https://bootstrap.arcadier.com/github/add_new_event.png"></p>

## 2. Choose the event which will trigger **your** webhook.
    * Click on "Select Event"
    * Choose the event
    
<p align="center"><img src="https://bootstrap.arcadier.com/github/select%20event.png"></p>

## 3. Copy & Paste your webhook URL in the `URI` input field.

<p align="center"><img src="https://bootstrap.arcadier.com/github/ADD_HOOK%20URI.png"></p>

## 4. Save

<p align="center" style="font-size: 1.5em; color:green;"> Note: Mulitple events <strong>can</strong> be connected to a single webhook URI.</p>

==================
# Payload Samples

## 1. Invoice - invoice.paid
#### Trigger 
* A successful checkout made using a payment gateway that has been set up using a generic payment method.

Or

* The merchant setting their Delivery Status to "Delivered" on the merchant portal.

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.
     
```json
{
    "Action": "invoice.paid",
    "ID": "evt-81303e42-e259-4752-8b37-7db8f36d52c6",
    "CreatedDateTime": 1587448975,
    "Data": {
        "InvoiceNo": "SAMPLE1587448949BHBI",
        "CurrencyCode": "SGD",
        "Total": 1000,
        "Fee": 0,
        "Orders": [
            {
                "ID": "941a823c-5368-4f22-92fc-43548fc4f2da",
                "CurrencyCode": "SGD",
                "Total": 1000,
                "Freight": 0,
                "GrandTotal": 1000,
                "Balance": 0,
                "DiscountAmount": 0,
                "MerchantDetail": {
                    "ID": "9091f4f7-ce53-4e1f-8d82-ec39b5d12c71",
                    "Email": "johnsmith@arcadier.com",
                    "FirstName": "John",
                    "LastName": "Smith",
                    "DisplayName": "Johnny",
                    "PhoneNumber": "11223344",
                    "DateJoined": 1586847238,
                    "LanguageCode": "en"
                },
                "ConsumerDetail": {
                    "ID": "1d6cabad-08de-4450-aac2-60e93b49d0b9",
                    "Email": "alice@arcadier.com",
                    "FirstName": "Alice",
                    "LastName": "Smith",
                    "DisplayName": "",
                    "PhoneNumber": "22334455",
                    "DateJoined": 1586848955,
                    "LanguageCode": "en"
                },
                "PaymentDetails": [
                    {
                        "InvoiceNo": "SAMPLE1587448949BHBI",
                        "Payer": {
                            "ID": "1d6cabad-08de-4450-aac2-60e93b49d0b9"
                        },
                        "Payee": {
                            "ID": "9091f4f7-ce53-4e1f-8d82-ec39b5d12c71",
                            "Email": "johnsmith@arcadier.com",
                            "FirstName": "John",
                            "LastName": "Smith",
                            "PhoneNumber": "11223344"
                        },
                        "Order": {
                            "ID": "941a823c-5368-4f22-92fc-43548fc4f2da"
                        },
                        "CurrencyCode": "SGD",
                        "Total": 1000,
                        "Fee": 0,
                        "Status": "Success",
                        "Refunded": false,
                        "GatewayPayKey": "ch_test_key",
                        "GatewayTransactionID": "ch_test_transaction_ID",
                        "GatewayStatus": "succeeded",
                        "GatewayTimeStamp": 1587448971,
                        "GatewayRef": "ch_test_ref",
                        "GatewaySenderId": "cus_test_sender_ID",
                        "GatewayReceiverId": "acct_test_account",
                        "Gateway": {
                            "Code": "stripe",
                            "Gateway": "Stripe"
                        },
                        "DateTimeCreated": 1587448949,
                        "DateTimePaid": 1587448974
                    }
                ],
                "DeliveryFromAddress": {
                    "ID": "bc0d5b75-3ebe-49ef-afbf-942d8774af8e",
                    "Name": "John Smith",
                    "Line1": "34 Boon Leat Terrace",
                    "Line2": "Singapore",
                    "PostCode": "119866",
                    "Latitude": 0,
                    "Longitude": 0,
                    "Delivery": true,
                    "Pickup": false,
                    "State": "Singapore",
                    "City": "Singapore",
                    "Country": "Singapore",
                    "CountryCode": "SG"
                },
                "DeliveryToAddress": {
                    "ID": "11232227-ffeb-4cdf-b2c9-f4392c309916",
                    "Name": "Alice Smith",
                    "Line1": "34 Boon Leat Terrace",
                    "PostCode": "119866",
                    "Latitude": 0,
                    "Longitude": 0,
                    "Delivery": true,
                    "Pickup": false,
                    "State": "Singapore",
                    "City": "Singapore",
                    "Country": "Singapore",
                    "CountryCode": "SG"
                },
                "FulfilmentStatus": "Acknowledged",
                "PaymentStatus": "Paid",
                "CreatedDateTime": 1587448919
            }
        ]
    }
}

```
