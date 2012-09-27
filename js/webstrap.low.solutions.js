/**
 * User: xiegang
 * Date: 12-9-11
 */
$(document).ready(function() {
    /**
     *  base/table
     */
    // table-hover
    $('.table-hover tr').live({
        mouseenter : function() {
            if($(this).hasClass("success")) {
                $(this).addClass("success-hover");
            } else if($(this).hasClass("error")) {
                $(this).addClass("error-hover");
            } else if($(this).hasClass("warn")) {
                $(this).addClass("warn-hover");
            } else if($(this).hasClass("info")) {
                $(this).addClass("info-hover");
            } else {
                $(this).addClass("hover");
            }
        },
        mouseleave : function() {
            if($(this).hasClass("success")) {
                $(this).removeClass("success-hover");
            } else if($(this).hasClass("error")) {
                $(this).removeClass("error-hover");
            } else if($(this).hasClass("warn")) {
                $(this).removeClass("warn-hover");
            } else if($(this).hasClass("info")) {
                $(this).removeClass("info-hover");
            } else {
                $(this).removeClass("hover");
            }
        }
    });
});
