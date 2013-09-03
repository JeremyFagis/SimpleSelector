/**
Selector 1.0
Skinning select type
Copyright (c) 2013 Jeremy FAGIS (http://fagis.fr)

*/

(function($) { 
    $.fn.simpleSelector = function(params) {
        params = $.extend( {selector: 'selector', id: null}, params);

        this.each(function() {
            $defaultText = $(this).data('default-text') || '---'
            $wrapperId = $(this).data('wrapper-id') || ''

            $val = $(this).find('option:selected').text();
            $val = ($val)? $val : $defaultText ;

            $(this).wrap('<div class="' + params.selector + '-wrapper" id="' + $wrapperId + '" />').removeClass(params.selector);
            $('<span/>').text($val).prependTo($(this).parent());

            // Add event
            $(this).on('change', function() {
                $val = $(this).find('option:selected').text();
                $val = ($val)? $val : $defaultText ;
                $(this).prev('span').text($val);
            });
        });

        return this;
    };
})(jQuery);

