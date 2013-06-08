/*
Author: Robert Hashemian
http://www.hashemian.com/
Revised to jQuery June 8, 2013 by Daniel T Sasser II
http://www.s2-designs.com
*/
$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
});
document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#page-home')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        navigator.app.backHistory()
    }
}, false);
