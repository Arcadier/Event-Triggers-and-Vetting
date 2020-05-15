(Core) Event Trigger Hooks
===================

* [How to access](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#how-to-access)
* [Connecting webhooks to Arcadier's event triggers](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#how-to-access)
* [Payload Samples](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#payload-samples)
    * [invoice.paid](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Event%20Trigger%20Hooks/README.md#payload-samples)
    * cart.added

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
## 2. Added an item to cart
#### Trigger 
* A successful call with the following API: [Add Item to Cart](https://apiv2.arcadier.com/?version=latest#687e81a0-6580-4db9-9885-516ec887b500).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "cart.added",
    "ID": "evt-e8016c8b-5b32-4eff-80e2-703e2bb383c6",
    "CreatedDateTime": 1589530150,
    "Data": {
        "ID": "bca2530c-7416-4722-bbf2-d76ae5fdcc8f",
        "Quantity": "1",
        "CurrencyCode": "SGD",
        "SubTotal": 23,
        "AddOns": [],
        "ItemDetail": {
            "Variants": [],
            "ID": "4c255671-9a58-43e2-8231-638ba5d2f346",
            "SKU": "233",
            "Name": "Dress",
            "BuyerDescription": "Test",
            "Price": 23,
            "StockLimited": false,
            "StockQuantity": "0",
            "IsVisibleToCustomer": true,
            "Active": true,
            "IsAvailable": true,
            "CurrencyCode": "SGD",
            "Media": [
                {
                "MediaUrl": "/item-19574-637243540711785723-mN9KML.jpg"
                }
            ],
            "HasChildItems": false
        },
        "Statuses": []
    }
}
```

## 3. Edited an item in a cart
#### Trigger 
* A successful call with the following API: [Update item in Cart](https://apiv2.arcadier.com/?version=latest#0f0df34b-2ec6-402a-8106-20092f3a7932).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "cart.updated",
    "ID": "evt-e8016c8b-5b32-4eff-80e2-703e2bb383c6",
    "CreatedDateTime": 1589530150,
    "Data": {
        "ID": "bca2530c-7416-4722-bbf2-d76ae5fdcc8f",
        "Quantity": "3",
        "CurrencyCode": "SGD",
        "SubTotal": 23,
        "AddOns": [],
        "ItemDetail": {
            "Variants": [],
            "ID": "4c255671-9a58-43e2-8231-638ba5d2f346",
            "SKU": "233",
            "Name": "Dress",
            "BuyerDescription": "Test",
            "Price": 23,
            "StockLimited": false,
            "StockQuantity": "0",
            "IsVisibleToCustomer": true,
            "Active": true,
            "IsAvailable": true,
            "CurrencyCode": "SGD",
            "Media": [
                {
                "MediaUrl": "/item-19574-637243540711785723-mN9KML.jpg"
                }
            ],
            "HasChildItems": false
        },
        "Statuses": []
    }
}
```

## 4. Deleted an item from a cart
#### Trigger 
* A successful call with the following API: [Delete item in Cart](https://apiv2.arcadier.com/?version=latest#f7fc984c-b492-4622-85ce-5646d1dc756d).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "cart.deleted",
    "ID": "evt-e8016c8b-5b32-4eff-80e2-703e2bb383c6",
    "CreatedDateTime": 1589530150,
    "Data": {
        "ID": "bca2530c-7416-4722-bbf2-d76ae5fdcc8f",
        "Quantity": "3",
        "CurrencyCode": "SGD",
        "SubTotal": 23,
        "AddOns": [],
        "ItemDetail": {
            "Variants": [],
            "ID": "4c255671-9a58-43e2-8231-638ba5d2f346",
            "SKU": "233",
            "Name": "Dress",
            "BuyerDescription": "Test",
            "Price": 23,
            "StockLimited": false,
            "StockQuantity": "0",
            "IsVisibleToCustomer": true,
            "Active": true,
            "IsAvailable": true,
            "CurrencyCode": "SGD",
            "Media": [
                {
                "MediaUrl": "/item-19574-637243540711785723-mN9KML.jpg"
                }
            ],
            "HasChildItems": false
        },
        "Statuses": []
    }
}
```
## 5. Created a category
#### Trigger 
* A successful call with the following API: [Create category](https://apiv2.arcadier.com/?version=latest#be380e46-ec4b-4d2d-8a5f-ba2715ba1173).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "category.created",
    "ID": "evt-10b00701-7f90-463f-88c7-cf7ad4421946",
    "CreatedDateTime": 1589531575,
    "Data": {
        "ID": 8339,
        "Guid": "5569dad9-906a-4d8f-bd76-9ce744262c14",
        "UserID": 19521,
        "Name": "Bass Guitars",
        "Description": "4 string Guitars",
        "SortOrder": 0,
        "Media": [
            {
            "MediaUrl": "https://cdn.pixabay.com/photo/2016/12/14/12/09/violin-1906127_960_720.jpg"
            }
        ],
        "CreatedDateTime": 1589531575,
        "ModifiedDateTime": 1589531575,
        "Active": true
    }
}
```
## 6. Updated a category
#### Trigger 
* A successful call with the following API: [Update category](https://apiv2.arcadier.com/?version=latest#8b562c45-5d49-4c49-b24f-64becb20fe9c).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "category.updated",
    "ID": "evt-c633c86f-35a3-4856-94b5-1bb43d6c6fa2",
    "CreatedDateTime": 1589531575,
    "Data": {
        "ID": 8339,
        "Guid": "5569dad9-906a-4d8f-bd76-9ce744262c14",
        "UserID": 19521,
        "Name": "Bass Guitars",
        "Description": "4 string Guitars",
        "SortOrder": 0,
        "Media": [
            {
            "MediaUrl": "https://cdn.pixabay.com/photo/2016/12/14/12/09/violin-1906127_960_720.jpg"
            }
        ],
        "CreatedDateTime": 1589531575,
        "ModifiedDateTime": 1589531575,
        "Active": true
    }
}
```

## 6. Deleted a category
#### Trigger 
* A successful call with the following API: [Delete category](https://apiv2.arcadier.com/?version=latest#1b018490-9fd3-4a5c-a0c0-cdc8cf4e3a26).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "category.deleted",
    "ID": "evt-5f9c14c7-8f7d-4ca2-8532-c4e9f9af6893",
    "CreatedDateTime": 1589531575,
    "Data": {
        "ID": 8339,
        "Guid": "5569dad9-906a-4d8f-bd76-9ce744262c14",
        "UserID": 19521,
        "Name": "Bass Guitars",
        "Description": "4 string Guitars",
        "SortOrder": 0,
        "Media": [
            {
            "MediaUrl": "https://cdn.pixabay.com/photo/2016/12/14/12/09/violin-1906127_960_720.jpg"
            }
        ],
        "CreatedDateTime": 1589531575,
        "ModifiedDateTime": 1589531575,
        "Active": true
    }
}
```

## 7. Update Shipping/Delivery Method
#### Trigger 
* A successful call with the following API: [Upadate a shipping method](https://apiv2.arcadier.com/?version=latest#7d84b771-82cb-408c-9022-f64d82f9727c).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
  "Action": "shippingmethod.updated",
  "ID": "evt-78a86abe-a651-4edd-bf2f-573857a2e140",
  "CreatedDateTime": 1589534087,
  "Data": {
    "ID": "e3dfab89-da09-4a6a-9528-c2be5c18192b",
    "Courier": "Tanoo",
    "Method": "Anything",
    "Price": 5,
    "CombinedPrice": 7,
    "CurrencyCode": "SGD",
    "Description": "I dare you, I double dare you"
  }
}
```

## 7. Delete Shipping/Delivery Method
#### Trigger 
* A successful call with the following API: [Delete a shipping method](https://apiv2.arcadier.com/?version=latest#4605142d-4f7b-4eea-91b1-223c3d8c1d90).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "shippingmethod.deleted",
    "ID": "evt-b81ad7cb-9e87-49a2-9067-7c444ce45bd0",
    "CreatedDateTime": 1589533463,
    "Data": {
        "ID": "3dbf842b-bc5e-496c-a456-c95bb434e47a",
        "Courier": "Demo Shipping",
        "Method": "Anything",
        "Price": 3,
        "CombinedPrice": 2,
        "CurrencyCode": "SGD"
    }
}
```