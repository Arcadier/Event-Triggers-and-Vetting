Unlike [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit), this plug-in does not include sending an email to the admin when a new item is created. But you can implement it here in a very similar fashion to [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit).

If this Plug-In is installed with [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit) Plug-In, then an email will automatically be sent to the merchant when the item is approved.

If you don't want to use [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit) with this Plug-In, then you can copy the [admin/script](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Item%20Edit/admin/scripts/scripts.js) of [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit) to this Plug-In's admin/script

When installing this plug-in, please create a custom table on the developer dashboard with the following properties:

Custom Table name: cache

* "item" - string
* "status" - Integer
* "merchant" - string

You can add, change these names, but you'll have to edit the scripts accordingly.
