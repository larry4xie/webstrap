;(function($, app) {
    app.notify = function notify(option) {
        this.option = $.extend({}, app.notify.defaults, option)

    };

    // default options
    notify.defaults = {
        parent: undefined, //
        style: "warn",
        title : undefined,
        content: "",
        close : false
    }

    $.fn.notify = function (option) {

    }
})(jQuery, webstrap)