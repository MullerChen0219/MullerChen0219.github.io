//開起子選單
$(document).ready(() => {
$('.arrow-down').click(function(event){
    event.preventDefault();
    $(this).parent().find('.drop-list').slideToggle(500);
    $(this).parent().siblings().find('.drop-list').slideUp();
});
});

//開啟孫選單
$(document).ready(() => {
$('.sub-arrow-down').click(function(event){
    event.preventDefault();
    $(this).parent().find('.sub-drop-list').slideToggle(500);
    $(this).parent().siblings().find('.sub-drop-list').slideUp();
});
});

