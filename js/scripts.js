/* global window, ga, jQuery */
/* jshint browser: true */
jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
     $('.nav .scroller').bind('click', 'ul li a', function(event) {
        $.scrollTo(event.target.hash,550, {offset:-73});
		console.log(event.target.hash);
        event.preventDefault();
    });
	$(".navbar li a").click(function(event) {
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });
	function checkInput() {
		if ($("form input").val() == "") {
			return false
		}
	}
	function setupContactForm(e, t) {
		var n = "#" + e;
		var r = n + "-message";
		var i = function (e) {
			$(n + " button[type=submit]").button('loading');
		};
		$(n).ajaxSend(function () {});
		var s = {
			dataType: "json",
			beforeSubmit: function () {
				$(r).removeClass().addClass("loading").html("Sending...").fadeIn();
				if (typeof t == "function" && !t()) {
					return false
				}
				i(true);
			},
			success: function (e) {
				$(r).hide();
				$(r).removeClass().addClass(e.type).html(e.message).fadeIn("slow");
				$("#sendemail").val();
				$(n + " button[type=submit]").button('reset');
				if (e.type == "success") {
					$(n).clearForm();
					ga('send', 'event', 'Contact form', 'click', 'message sent');
				}
			}
		};
		$(n).ajaxForm(s);
	}
	new setupContactForm("contactform");
});