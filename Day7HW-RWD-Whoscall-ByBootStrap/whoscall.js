//取得IOS/Android按鈕DOM節點
const iosBtn = document.querySelector("#ios-btn");
const andBtn = document.querySelector("#and-btn");


//用變數picList接取.function-pic img 集合(型別NodeList)
let picList = document.querySelectorAll(".function-pic img");

//建立 空陣列picArray 預備盛裝轉陣列之集合(此處指picList)
let picArray = [];

//使用Array.from() 方法將picList轉成陣列並塞給picArray
picArray = Array.from(picList);

// ------------------------------------

//對IOS/Android按鈕掛上事件監聽，點擊後，執行for迴圈更換指定圖片
iosBtn.addEventListener("click", function (){
    for (let index = 0; index < picArray.length; index++) {
        picArray[index].src = `/Day7HW-RWD-Whoscall-ByBootStrap/whoscall/IOS${index}.png`
    };
})

andBtn.addEventListener("click", function (){
    for (let index = 0; index < picArray.length; index++) {
    picArray[index].src = `/Day7HW-RWD-Whoscall-ByBootStrap/whoscall/And${index}.png`
    };
})

$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 10, // 外距 10px
  nav: true, // 顯示點點
  responsive: {
    0: {
      items: 1 // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
    }
  }
});







// let width = window.matchMedia("(max-width: 768px)");
// let _resize;

// window.addEventListener("resize", function() {
//     clearTimeout(_resize);
//     _resize = setTimeout(function() {
//         $(window).resize(function() {
//         location.reload
//         console.log("reload!!!");
//     });
//     }, 500);
// })

//         if (width.matches) {
  
//       }
$(document).ready(() => {
    $('.drop-list').click(function(event){
      event.preventDefault();
      $(this).parent().find('.link-list').slideToggle(500);
      $(this).parent().siblings().find('.link-list').slideUp();
          });
        });






    








  
    


