import{$ as e}from"./jquery-b1a81d34.js";function n(n){var t=function(e,n){if(!e.length||!n.length)return!1;return e===n}(e("input#username").val(),e("input#password").val());return t||(e(".alert#message").toggleClass("d-none").text("Invalid username or password."),setTimeout((function(){e(".alert#message").toggleClass("d-none")}),3e3)),t}e((function(){e("form#login").submit(n)}));