(function(){
    var scriptSrc = document.currentScript.src;
    var packagePath = scriptSrc.replace('/scripts/scripts.js', '').trim();
    var re = /([a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})/i;
    var packageId = re.exec(scriptSrc.toLowerCase())[1];

    $(document).ready(function(){
        var baseUrl = window.location.hostname;
        var token = getCookie('webapitoken');
        var merchantID = $("#userGuid").val();
        var state = false;
        

        if($("body").hasClass("seller-upload-page")){
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                if (options.type.toLowerCase() === "post" && options.url.toLowerCase().indexOf('/user/item/createitems') >= 0) {
                    let success = options.success;
                    
                    options.success = function(data, textStatus, jqXHR) {
                        if (data.Success) {
                            let itemId = data.Guid;
                            state = saveItem(itemId, merchantID);
                        }
                        if (typeof(success) === "function" && state) return success(data, textStatus, jqXHR);
                    };
                }
            });
        }

        if($("body").hasClass("seller-items")){
            var settings = {
                "url": "https://"+baseUrl+"/api/v2/plugins/"+packageId+"/custom-tables/cache/",
                "method": "GET"
            };
              
            $.ajax(settings).done(function (response) {
                var item_list = response.Records;
                item_list.forEach(element => {
                    if(element.status == 0 && element.merchant == merchantID){
                        var sync_item_id = element.item;
                        var row_id = element.Id;
                        action(sync_item_id, row_id);
                    }
                });
            });
        }

        function saveItem(id, merchant){
            var status = false;

            var settings = {
                "url": "https://"+baseUrl+"/api/v2/merchants/"+merchantID+"/items/"+id,
                "method": "PUT",
                "async": false,
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                "data": JSON.stringify({"IsAvailable": false, "IsVisibleToCustomer": false}),
                success: function(){
                    status = true;
                }
            };
                
            $.ajax(settings);

            var cache_settings = {
                "url": "https://"+baseUrl+"/api/v2/plugins/"+packageId+"/custom-tables/cache/rows",
                "method": "POST",
                "async": false,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({"item":id, "status": 0, "merchant": merchant}),
            };

            $.ajax(cache_settings);

            return status;
        }

        function action(item, row) {
            update_cache_entry(row);
        }

        function update_cache_entry(row){
            var data = {
                "status": 1
            };
            var settings = {
                "url": "https://"+baseUrl+"/api/v2/plugins/"+packageId+"/custom-tables/cache/rows/"+row,
                "method": "PUT",
                "headers": {
                  "Content-Type": "application/json"
                },
                "data": JSON.stringify(data),
                success: function(){
                    toastr.success("Item submitted for approval", "Success");
                }
            };
            $.ajax(settings);
        }

        function getCookie(name){
            var value = '; ' + document.cookie;
            var parts = value.split('; ' + name + '=');
            if (parts.length === 2) {
                return parts.pop().split(';').shift();
            }
        }
    });
})();
