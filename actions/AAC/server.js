function(properties, context) {


var textContent = btoa(unescape(encodeURIComponent(properties.text_to_convert_and_upload.textContent)))

          context.uploadContent('file' + "test.html" , btoa(unescape(encodeURIComponent(properties.text_to_convert_and_upload.textContent))) , function(err, url){
              
            console.log("failed uploading")


                  }
                      
          
                               )



}