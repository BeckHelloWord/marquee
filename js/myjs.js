/**
 * Created by yuwei on 2016/5/13.
 */
(function ($) {
    //默认参数
    var defaults = {
        runeml: ".ad-list",
        btn: '.btn',
        timer: 'timer',
        gap: 1000,
        sum: 0,
        flg: true
    };
    $.fn.roll = function (options) {
        var options = $.extend(defaults, options);
        $(options.runeml).html($(options.runeml).html() + $(options.runeml).html());    //复制一份

        //滚动
        var run = function () {
            $(options.runeml).stop().animate({
                'margin-left': -$(options.runeml).find('li').outerWidth(true)
            }, 500, function () {
                $(options.runeml).append($(options.runeml).find('li').first());
                $(options.runeml).css({'margin-left': 0});
            });

        };
        clearInterval(options.timer);
        //定时器
        options.timer = setInterval(run, options.gap);

        $(options.runeml).on('mouseover', function () {
            clearInterval(options.timer);
        });
        $(options.runeml).on('mouseout', function () {
            options.timer = setInterval(run, options.gap);
        });
        $(options.btn).on('mouseover', function () {
            clearInterval(options.timer);
        });
        $(options.btn).on('mouseout', function () {
            options.timer = setInterval(run, options.gap);
        });
    }
})(jQuery)