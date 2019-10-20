function(properties, context) {


var textContent = btoa(unescape(encodeURIComponent(properties.text_to_convert_and_upload)))


          context.uploadContent('file' + "amp.html" , btoa(unescape(encodeURIComponent(properties.text_to_convert_and_upload))) , function(err, url){
              console.log(url)

$.ajax({
    	url: url,
    	success: download.bind(true, "text/html", "dlAjaxCallback.html")
    });
              


                  }
                      
          
                               )


}