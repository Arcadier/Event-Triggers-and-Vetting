(function(){
    $(document).ready(function(){
        if($("body").hasClass("page-category")){
            var date = Math.floor(Date.now() / 1000); //time in seconds
            console.log(date);

            var baseUrl = window.location.hostname;
        
            if($("body").hasClass("page-category")){
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://"+baseUrl+"/api/v2/categories/hierarchy",
                    "method": "GET"
                };
                
                $.ajax(settings).done(function (response) {
                    findNewCategory(response, date)
                });
            }
            
            forceSyncButton();
            $("#force").click(function(){
                forceSync();
            });

            toastr.info("Right after creating each category, click on the force sync button.");
            function findNewCategory(json, time){
                var found = false;
                for(var i=0;i<json.length;i++){
                    var difference = time - json[i].CreatedDateTime;
                    var lag = Math.abs(difference);
                    
                    //check parent categories
                    if(json[i].CreatedDateTime == json[i].ModifiedDateTime && lag < 70){ 
                        console.log(json[i])
                        found = true;
                        
                        //new category found, details of the new category are in json[i].
                        //do what you want with json[i]
                    }
                    if(json[i].ChildCategories.length){
                        for(var j=0;j<json[i].ChildCategories.length;j++){
                            var child_difference = time - json[i].ChildCategories[j].CreatedDateTime;
                            var child_lag = Math.abs(child_difference);
                            if(json[i].ChildCategories[j].CreatedDateTime == json[i].ChildCategories[j].CreatedDateTime && child_lag < 70){
                                console.log(json[i])
                                found = true;
                                
                                //new child category found, details of the child category are in json[i]
                                //do what you need with json[i]
                            }
                        }
                    }
                }
                if(found == false){
                    console.log("No new categories detected in the last 70 sec");
                }
                else{
                    console.log("New categories found");
                }
            }

            function forceSync(){
                window.location.reload(true);
            }

            function forceSyncButton(){
                var x = document.createElement("button");
                x.id = "force";
                x.innerHTML = "Force Sync";
                // var z = document.createTextNode("After creating each category, click the button below to sync it with the CMS");
                
                var y = document.querySelector(".category-content-top");
                if(y!==null){
                    y.appendChild(x);
                }
            }
        }
    });
})();
