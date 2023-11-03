/* CONTENT HEIGHT CALCULATION */

function contentfooter() {
    var header = jQuery(".site-header").outerHeight();
    var footer = jQuery(".site-footer").outerHeight();
    if (jQuery(window).width() > 992) {
        jQuery("#content.site-content").css("min-height", "calc(100vh - " + header + "px - " + footer + "px)");
    }
}

jQuery(document).ready(function () {
    contentfooter();
});

jQuery(window).resize(function () {
    contentfooter();
});