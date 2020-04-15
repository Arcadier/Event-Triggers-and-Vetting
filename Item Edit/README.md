When an item is edited, this plug-in will:
* make the item non-purchasable and invisible to buyers
* send an email to the admin that this item has been edited
* if the admin approves of this item from the item list (admin portal), the item will become visible to buyer, and purchasable.
* an email is sent to the merchant that their item has been approved.

When installing this plug-in, please create a custom table on the developer dashboard with the following properties:

Custom Table name: edit_cache

* "item" - string
* "status" - Integer
* "merchant" - string

You can add names and change these names, but you'll have to edit the scripts accordingly.
