$(document).ready(function(){
    var baseUrl = window.location.hostname;
    
    var adminID = $("#userGuid").val();
    var token = getCookie('webapitoken');

    if($("body").hasClass("page-category")){

        var checkExist = setInterval(function(){
            if($(".delete-cat").length){
                console.log("Exists!");
                eventTrigger();
                clearInterval(checkExist);
            }
        }, 100);

        function eventTrigger(){
            console.log("Ready");
            $(".delete-cat").click(function(){
                var category = $(this).closest("li");
                var category_Guid = category.attr("data-guid");
                
                console.log(category_Guid);
                action(category_Guid);
            });
        }  
        
        function action(guid){
            $("input.mybtn").click(function(){
                
                //category is deleted from Arcadier first
                var settings = {
                    "url": "https://" + baseUrl + "/api/v2/admins/" + adminID + "/categories/" + guid,
                    "method": "DELETE",
                    "headers": {
                    "Authorization": "Bearer " + token
                    },
                    success: function(response){
                        console.log("Category Deleted on Arcadier Backend");
                        
                        //do what you need with the recently deleted category guid
                    },
                    error: function(response){
                        console.log(response);
                        
                        //this will happen if the category still has items in it
                    }
                };
                $.ajax(settings);
            });
        } 
    }

    function getCookie(name){
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }
});
