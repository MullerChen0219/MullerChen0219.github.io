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

