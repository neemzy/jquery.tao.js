/**
 * Tao - jquery.tao.js
 * Form AJAXizer
 *
 * @author Tom Panier <tom.panier@free.fr>
 * @see https://github.com/neemzy/jquery.tao.js
 * @see http://www.zaibatsu.fr
 *
 * @require jQuery >= 1.9.1 (untested with previous versions)
 */

;(function($)
{
    $.fn.extend({
        tao: function(options) {
            if (this.is(':not(form)')) {
                return;
            }

            var params = $.extend({}, options);
            params.data = {};
            
            if ((params.url === undefined) && (this.is('[action]'))) {
                params.url = this.attr('action');
            }

            if ((params.type === undefined) && (this.is('[method]'))) {
                params.type = this.attr('method');
            }

            this.find('input:not(:checkbox, :radio), input:checked, select, textarea').each(function() {
                var $this = $(this);
                params.data[$this.attr('name')] = $this.val();
            });

            this.on('submit', function(e) {
                e.preventDefault();
                $.ajax(params);
            });
        }
    });
})
(jQuery);