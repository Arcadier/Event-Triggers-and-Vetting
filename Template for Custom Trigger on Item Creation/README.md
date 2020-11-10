This Plug-In is a template for you to use if you wish to trigger your own action when an item is created. The source code is found in the `{root}/user/scripts/scripts.js` folder.

You can write the customization you want in the function "customAction(id, merchant)":
```javascript
function customAction(id, merchant){
    var status = false;

    //if your custom action is successful, set status to true

    return status;
}
```

Arguments:
* `id` - The item GUID (already taken care of by the template)
* `merchant`- the merchant GUID (already taken care of by the template)
You can add more arguments - just remember to update line 25 where the function is implemented:

For example, if you want to make sure the item is made non-purchasable right after creation, use the following snippet:
```javascript
var itemName;

//Arcadier API call to turn item non-purchasable
var settings = {
    "url": "/api/v2/merchants/"+merchantID+"/items/"+id,
    "method": "PUT",
    "async": false,
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    "data": JSON.stringify({"IsAvailable": false, "IsVisibleToCustomer": false}),
    success: function(response){
        status = true; //set status to true
        itemName = response.Name;
    }
};
    
$.ajax(settings);

//make sure that this item is recorded in the custom table to track the progress of this item's visibility
var cache_settings = {
    "url": "/api/v2/plugins/"+packageId+"/custom-tables/cache/rows",
    "method": "POST",
    "async": false,
    "headers": {
        "Content-Type": "application/json"
    },
    "data": JSON.stringify({"item":id, "status": 0, "name": itemName, "merchant": merchant}),
};

$.ajax(cache_settings);

return status;
```


When installing this plug-in, please create a custom table on the developer dashboard with the following properties:

Custom Table name: cache

* "item" - string
* "status" - Integer
* "merchant" - string
* "name" - string

You can add names, or change these names, but you'll have to edit the scripts accordingly.
