// jquery wrapper
$(function(){
    $.fn.zebrado = function(){
        // console.log(this);
        $(this).find("tr:even td").css("background", "cyan").end().find("tr:odd td")
                .css("background", "silver");
        return this;
    };
});