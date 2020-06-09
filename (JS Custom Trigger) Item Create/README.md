Unlike [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit), this plug-in does not include sending an email to the admin when a new item is created. But you can implement it here in a very similar fashion to [Item Edit](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(JS%20Custom%20Trigger)%20Item%20Edit), in its [user](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(JS%20Custom%20Trigger)%20Item%20Edit/user) folder.

If this Plug-In is installed with [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit) Plug-In, then an email will automatically be sent to the merchant when the item is approved by the admin.

If you don't want to use [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit) with this Plug-In, but still want the email from admin to merchant, then you can copy the [admin/scripts/scripts.js](https://github.com/Arcadier/Event-Triggers-and-Vetting/blob/master/Item%20Edit/admin/scripts/scripts.js) of [Item Edit](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Item%20Edit) to this Plug-In's `admin/scripts/scripts.js` folder

When installing this plug-in, please create a custom table on the developer dashboard with the following properties:

Custom Table name: cache

* "item" - string
* "status" - Integer
* "merchant" - string

You can add names, or change these names, but you'll have to edit the scripts accordingly.
