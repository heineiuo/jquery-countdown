/**
 * Created by Hansel on 2015-7-15 18:16:53
 */

;(function($){

  $.fn.countdown = function(options) {

    var settings = {
      time: 5000,
      template: "{{timer}}",
      callback: null
    }

    return this.each(function(){

      if (options) {$.extend(settings, options)}

        var $this = $(this)
        var time = settings.time
        var template = settings.template

        loop()
        function loop(){
          if (time <= 0) {
            if (settings.callback) {
              settings.callback()
            }
          } else {
            var d = template.replace('{{timer}}', Math.floor(time/1000))
            $this.html(d)
            time -= 1000
            setTimeout(loop, 1000)
          }
          
        }

    })

  }

})(jQuery);