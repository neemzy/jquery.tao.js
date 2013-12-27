/**
 * Tao - jquery.tao.js
 * Form AJAXizer
 *
 * @author neemzy <tom.panier@free.fr>
 * @see https://github.com/neemzy/jquery.tao.js
 * @see http://www.zaibatsu.fr
 */

(function($)
{
    $.fn.extend({
        tao: function(options) {
            if (this.is('form')) {
                var $this = this,
                    params = $.extend({}, options);
                
                if ((params.url === undefined) && ($this.is('[action]'))) {
                    params.url = this.attr('action');
                }
    
                if ((params.type === undefined) && ($this.is('[method]'))) {
                    params.type = this.attr('method');
                }
    
                $this.on('submit', function(e) {
                    e.preventDefault();
                    params.data = params.data || {};
    
                    $this.find('input:not(:checkbox, :radio), input:checked, select, textarea').each(function() {
                        var $that = $(this);
                        params.data[$that.attr('name')] = $that.val();
                    });

                    if (typeof params.submit === 'function') {
                        params.submit();
                    }
    
                    $.ajax(params);
                });
            }
            
            return this;
        }
    });
})
(jQuery);
