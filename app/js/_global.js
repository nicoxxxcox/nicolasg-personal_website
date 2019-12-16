 // // Instantiating the global app object
 var app = {
};
 
 // Global
 app.global = {
     init: function(){ // Load all global functions here
         console.log("load global functions");
         app.global.loadHeader();
         window.onload = app.global.displayBlogBtn();
     },
     loadHeader: function(){ // Some specific function
       console.log("loadHeader()");
     },
     displayBlogBtn : function(){ // display blog button with delai
        var btnBlog = document.getElementsByClassName('blogButton')[0];
        btnBlog.classList.add('invisible');
        window.setTimeout(function(){
            btnBlog.classList.remove('invisible');
            btnBlog.classList.add('fadeIn');
           
        },6000);

     }
 }

 // Run the global stuff
 app.global.init();

// //scripts


