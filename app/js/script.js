
// console.log("Load script.js");

// // Instantiating the global app object
// var app = {
// };

var btnBlog = document.getElementsByClassName('blogButton')[0];
btnBlog.classList.add('invisible');
function displayBlogBtn(){
    window.setTimeout(function(){
        btnBlog.classList.remove('invisible');
        btnBlog.classList.add('fadeIn');
       
    },6000)
}
window.onload = displayBlogBtn();