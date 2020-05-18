Event Triggers (API triggered)
===================

* [How to access](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#how-to-access)
* [Connecting webhooks to Arcadier's event triggers](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#connecting-webhooks-to-arcadiers-event-triggers)
* Events, Triggering APIs & Payload Samples
    * Invoices
        * [invoice.created](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#invoice-is-created)
        * [invoice.paid](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#invoice-is-paid-for)
    * Orders
        * [order.created](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#order-is-created)
        * [order.updated](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#order-is-updated)
    * Carts
        * [cart.added](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#added-an-item-to-cart)
        * [cart.updated](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#edited-an-item-in-a-cart)
        * [cart.deleted](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#deleted-an-item-from-a-cart)
    * Categories
        * [category.created](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#created-a-category)
        * [category.updated](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#updated-a-category)
        * [category.deleted](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#deleted-a-category)
    * Shipping/Delivery Methods
        * [shippingmethod.updated](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#update-shippingdelivery-method)
        * [shippingmethod.deleted](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#delete-shippingdelivery-method)
    * Items
        * [item.added](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#created-an-item
        )
        * [item.updated](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#updated-an-item)
        * [item.deleted](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(API)%20Event%20Trigger%20Hooks#deleted-an-item)
    * Users
        * [user.created]()
        * [user.updated]()
        * [user.deleted]()
    * User Address
        * [user.address-created]()
        * []()

        
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

## Invoice is created
#### Trigger 
* A successful call with the following API: [Generate Invoice and Orders from Cart](https://apiv2.arcadier.com/?version=latest#4b0bc4da-201c-472e-8deb-1a2e1099f908)

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "invoice.created",
    "ID": "evt-dc9324cf-ae78-4d9c-9d0a-785ea7390349",
    "CreatedDateTime": 1589535750,
    "Data": "TANOO1589535749P9YX"
}
```
---   

## Invoice is paid for
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
---

## Order is created
#### Trigger 
* A successful call with the following API: [Generate Invoice and Orders from Cart](https://apiv2.arcadier.com/?version=latest#4b0bc4da-201c-472e-8deb-1a2e1099f908)

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.
     
```json
{
  "Action": "order.created",
  "ID": "evt-6de7c2d5-0d7e-4848-bb79-d7a56a7a9592",
  "CreatedDateTime": 1589535750,
  "Data": [
    {
      "ID": "8626cd3d-301f-4256-9e7d-2d533e2cf70b",
      "CurrencyCode": "SGD",
      "Total": 200,
      "Freight": 0,
      "Surcharge": 0,
      "Rounding": 0,
      "GrandTotal": 200,
      "DiscountAmount": 0,
      "MerchantDetail": {
        "ID": "02ec5b74-ecc2-4c9c-9048-dbfc9de419ba",
        "Email": "tanoo_joy@hotmail.com",
        "FirstName": "Tanoo",
        "LastName": "Joyekurun",
        "DisplayName": "Tanoo Seller",
        "PhoneNumber": "90854839",
        "DateJoined": 1566268209,
        "LanguageCode": "en"
      },
      "ConsumerDetail": {
        "ID": "8e14be10-cc6f-4676-9aa7-57a2cfd728f3",
        "Email": "tanoo_joy@hotmail.com",
        "FirstName": "Tanoo",
        "LastName": "Joyekurun",
        "DisplayName": "",
        "PhoneNumber": "90854839",
        "DateJoined": 1567064746,
        "LanguageCode": "en"
      },
      "CartItemDetails": [
        {
          "ID": "bde41189-31a6-4e4b-a242-562489a95b83",
          "Quantity": "1",
          "CurrencyCode": "SGD",
          "SubTotal": 200,
          "OrderID": "8626cd3d-301f-4256-9e7d-2d533e2cf70b",
          "AddOns": [],
          "ItemDetail": {
            "Variants": [],
            "ID": "15ccfbe0-d799-4e4d-baf8-5fdc6ebd4a4b",
            "SKU": "299",
            "Name": "Webhook Test Dress",
            "BuyerDescription": "Test",
            "Price": 200,
            "StockLimited": false,
            "StockQuantity": "0",
            "IsVisibleToCustomer": true,
            "Active": true,
            "IsAvailable": true,
            "CurrencyCode": "SGD",
            "HasChildItems": false
          },
          "Statuses": [
            {
              "Name": "Created",
              "Type": "Fulfilment"
            },
            {
              "Name": "Created",
              "Type": "Order"
            }
          ]
        }
      ],
      "PaymentDetails": [
        {
          "InvoiceNo": "TANOO1589535749P9YX",
          "Payer": {
            "ID": "8e14be10-cc6f-4676-9aa7-57a2cfd728f3"
          },
          "Payee": {
            "ID": "02ec5b74-ecc2-4c9c-9048-dbfc9de419ba",
            "Email": "tanoo_joy@hotmail.com",
            "FirstName": "Tanoo",
            "LastName": "Joyekurun",
            "PhoneNumber": "90854839"
          },
          "CurrencyCode": "SGD",
          "Total": 180,
          "Fee": 20,
          "Refunded": false,
          "Gateway": {},
          "DateTimeCreated": 1589535749
        },
        {
          "InvoiceNo": "TANOO1589535749P9YX",
          "Payer": {
            "ID": "8e14be10-cc6f-4676-9aa7-57a2cfd728f3"
          },
          "Payee": {
            "ID": "af6bf51d-426e-4a31-bcfc-1ecaf706b202",
            "Email": "tanoo_joy@hotmail.com",
            "FirstName": "TanooJoy",
            "LastName": "Joyekurun",
            "PhoneNumber": "11223344"
          },
          "CurrencyCode": "SGD",
          "Total": 20,
          "Fee": 0,
          "Refunded": false,
          "Gateway": {},
          "DateTimeCreated": 1589535749
        }
      ],
      "DeliveryFromAddress": {
        "ID": "3da55667-34a8-454a-b0ca-3ba903cbaa5c",
        "Name": "Christophe|Vidal",
        "Line1": "32 Braddell Road #03-25",
        "PostCode": "359967",
        "Delivery": true,
        "Pickup": false,
        "City": "Singapore",
        "Country": "Singapore",
        "CountryCode": "SG"
      },
      "DeliveryToAddress": {},
      "BillingToAddress": {},
      "FulfilmentStatus": "Created",
      "PaymentStatus": "Waiting For Payment",
      "CreatedDateTime": 1589535749
    }
  ]
}
```
---

## Order is updated
#### Trigger 
* A successful call with the following API: [Admin - Edit Several Orders](https://apiv2.arcadier.com/?version=latest#02990d95-cb5f-4040-9965-a88bcb342c1c) **or** [Merchant - Edit Order Details](https://apiv2.arcadier.com/?version=latest#5b14eb44-8967-480e-82ea-166378754b2b)

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.
     
```json
{
    "Action": "order.updated",
    "ID": "evt-7c36be72-7d81-4723-82c2-72bbe7fcc178",
    "CreatedDateTime": 1589717533,
    "Data": [
        {
            "ID": "8626cd3d-301f-4256-9e7d-2d533e2cf70b",
            "MerchantDetail": {
                "ID": "02ec5b74-ecc2-4c9c-9048-dbfc9de419ba"
            },
            "ConsumerDetail": {
                "ID": "8e14be10-cc6f-4676-9aa7-57a2cfd728f3"
            },
            "FulfilmentStatus": "Acknowledged"
        }
    ]
}
```
---

## Added an item to cart
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
---

## Edited an item in a cart
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
---

## Deleted an item from a cart
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

---

## Created a category
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

---

## Updated a category
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
---

## Deleted a category
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
---


## Update Shipping/Delivery Method
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

---


## Delete Shipping/Delivery Method
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

---

## Created an item
#### Trigger 
* A successful call with the following API: [Create Item](https://apiv2.arcadier.com/?version=latest#03d18078-0f46-4c84-b9ff-c464c7853580).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "item.added",
    "ID": "evt-ec4285ca-d59b-404c-9f14-069a1c9ac9fb",
    "CreatedDateTime": 1589732504,
    "Data": {
        "ID": "257dee35-494b-4001-8be7-8287ad4de78a",
        "MerchantDetail": {
            "ID": "02ec5b74-ecc2-4c9c-9048-dbfc9de419ba"
        },
        "HasChildItems": false
    }
}
```

---

## Updated an item
#### Trigger 
* A successful call with the following API: [Edit Item](https://apiv2.arcadier.com/?version=latest#8af9bf27-a3fb-4623-b8d0-f53a67697c47).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "item.updated",
    "ID": "evt-30f22cab-1121-49cf-b3c7-b72a999e444c",
    "CreatedDateTime": 1589732811,
    "Data": {
        "ID": "257dee35-494b-4001-8be7-8287ad4de78a",
        "MerchantDetail": {
            "ID": "02ec5b74-ecc2-4c9c-9048-dbfc9de419ba"
        },
        "HasChildItems": false
    }
}
```
---
## Deleted an item
#### Trigger 
* A successful call with the following API: [Delete Item](https://apiv2.arcadier.com/?version=latest#feb0149f-a7e8-429b-bb27-181e5e325e35).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "item.updated",
    "ID": "evt-30f22cab-1121-49cf-b3c7-b72a999e444c",
    "CreatedDateTime": 1589732811,
    "Data": {
        "ID": "257dee35-494b-4001-8be7-8287ad4de78a",
        "MerchantDetail": {
            "ID": "02ec5b74-ecc2-4c9c-9048-dbfc9de419ba"
        },
        "HasChildItems": false
    }
}
```
---

## User is created
#### Trigger 
* A successful call with the following API: [Create User Account](https://apiv2.arcadier.com/?version=latest#0c2b1f7e-275b-4d79-8b7a-949a504a5ea3).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "user.created",
    "ID": "evt-1c7e4549-2497-4d4f-be55-1dd0b2d30eec",
    "CreatedDateTime": 1589789328,
    "Data": {
        "ID": "c164aa00-b834-4a37-ab36-30ece24e477b",
        "Roles": [
            "User"
        ]
    }
}
```
---

## User is updated
#### Trigger 
* A successful call with the following API: [Upgrade User Role](https://apiv2.arcadier.com/?version=latest#0c2b1f7e-275b-4d79-8b7a-949a504a5ea3) **or** [Update User Information](https://apiv2.arcadier.com/?version=latest#cac4e985-84f9-48fd-bd76-0cbc1850fc66).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "user.updated",
    "ID": "evt-fc53c63c-822a-411d-aadb-d6d61b35fec9",
    "CreatedDateTime": 1589790591,
    "Data": {
        "ID": "c164aa00-b834-4a37-ab36-30ece24e477b"
    }
}
```
---

## User is Deleted
#### Trigger 
* A successful call with the following API: [Delete a User](https://apiv2.arcadier.com/?version=latest#688a1f91-40d6-4f52-9ecf-125630d81480).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "user.deleted",
    "ID": "evt-ff1c8618-7089-4e41-b5bd-7c1ea81c6118",
    "CreatedDateTime": 1589791074,
    "Data": {
        "ID": "c164aa00-b834-4a37-ab36-30ece24e477b"
    }
}
```

## User address is created
#### Trigger 
* A successful call with the following API: [Create a user Address](https://apiv2.arcadier.com/?version=latest#3d35d5ba-b2d6-4160-a60a-8f7d98887b99).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "user.address-created",
    "ID": "evt-382d20d3-f09e-43cc-8efc-adee0b704242",
    "CreatedDateTime": 1589792117,
    "Data": {
        "ID": "8a9621b2-1885-408d-aae6-6f681d47311c",
        "Addresses": [
            {
                "ID": "ab473f66-f89c-4e9d-956b-5520c58f066a"
            }
        ]
    }
}
```

## User address is updated
#### Trigger 
* A successful call with the following API: [Update a user Address](https://apiv2.arcadier.com/?version=latest#f6ef750d-7c57-4742-bc37-b6d93b5c8757).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "user.address-updated",
    "ID": "evt-3906eb07-4671-4976-b70b-2700ff533a25",
    "CreatedDateTime": 1589792591,
    "Data": {
        "ID": "8a9621b2-1885-408d-aae6-6f681d47311c",
        "Addresses": [
            {
                "ID": "ab473f66-f89c-4e9d-956b-5520c58f066a"
            }
        ]
    }
}
```


## User address is deleted
#### Trigger 
* A successful call with the following API: [Deleted a user Address](https://apiv2.arcadier.com/?version=latest#956999a1-92f2-4654-9583-1881ab2208ff).

#### Payload
The JSON data below is the complete structure of the basic information that will sent as a `POST` request to your webhook.

```json
{
    "Action": "user.address-deleted",
    "ID": "evt-248d593f-4bda-489d-a126-85ba25b864af",
    "CreatedDateTime": 1589792820,
    "Data": {
        "ID": "8a9621b2-1885-408d-aae6-6f681d47311c",
        "Addresses": [
            {
                "ID": "ab473f66-f89c-4e9d-956b-5520c58f066a"
            }
        ]
    }
}
```