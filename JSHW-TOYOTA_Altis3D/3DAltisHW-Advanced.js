//預設車體顏色
let carSrc;
let carArray = [];
for(i = 1; i < 61; i++) {
    carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_18_${i}.png`;
    carArray.push(carSrc);
}
let container = document.getElementById("container");
let counterClockWise = document.getElementById("counterClockWise");
let clockWise = document.getElementById("clockWise");
let img = document.createElement("img");
let _blueGray = document.querySelector("#colorPicker #blueGray");
let _black = document.querySelector("#colorPicker #black");
let _riverGray = document.querySelector("#colorPicker #riverGray");
let _red = document.querySelector("#colorPicker #red");
let _white = document.querySelector("#colorPicker #white");
let _silver = document.querySelector("#colorPicker #silver");
let index = 0;

//網頁初始化
window.onload = function () {
container = document.getElementById("container");
counterClockWise = document.getElementById("counterClockWise");
clockWise = document.getElementById("clockWise");
img = document.createElement("img");

img.setAttribute("src", carArray[index]);
container.appendChild(img);
}

//換色事件監聽
_blueGray.addEventListener('click', function () {
    carArray = [];
    for (i = 1; i < 61; i++) {
        carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_18_${i}.png`;
        carArray.push(carSrc);
    }
    img.setAttribute("src", carArray[index]);
})

_black.addEventListener('click', function () {
    carArray = [];
    for (i = 1; i < 61; i++) {
        carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_19_${i}.png`;
        carArray.push(carSrc);
    }
    img.setAttribute("src", carArray[index]);
})

_riverGray.addEventListener('click', function () {
    carArray = [];
    for (i = 1; i < 61; i++) {
        carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_20_${i}.png`;
        carArray.push(carSrc);
    }
    img.setAttribute("src", carArray[index]);
})

_red.addEventListener('click', function () {
    carArray = [];
    for (i = 1; i < 61; i++) {
        carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_22_${i}.png`;
        carArray.push(carSrc);
    }
    img.setAttribute("src", carArray[index]);
})

_white.addEventListener('click', function () {
    carArray = [];
    for (i = 1; i < 61; i++) {
        carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_23_${i}.png`;
        carArray.push(carSrc);
    }
    img.setAttribute("src", carArray[index]);
})

_silver.addEventListener('click', function () {
    carArray = [];
    for (i = 1; i < 61; i++) {
        carSrc = `/JSHW-TOYOTA_Altis3D/Altis/360EXT_1_21_${i}.png`;
        carArray.push(carSrc);
    }
    img.setAttribute("src", carArray[index]);
})



//順時針、逆時針事件監聽    
counterClockWise.addEventListener('click', function () {
    if (index === 0) {
        index = 59;
    }
    else
    {
        index--;
    }
    img.setAttribute("src", carArray[index]);
    // container.replaceChild(img);            
})

clockWise.addEventListener('click', function () {
    if (index === 59) {
        index = 0;
    }
    else
    {
        index++;
    }
    img.setAttribute("src", carArray[index]);
    // container.replaceChild(img);
})


//連續按壓滑鼠監聽
let tid;
counterClockWise.addEventListener('mousedown', function () {
    tid = setInterval(function(){
    if (index === 0) {
    index = 59;
    }
    else
    {
        index--;
    }
    img.setAttribute("src", carArray[index]);
    },75);
    });
    counterClockWise.addEventListener('mouseup', function () {
        clearInterval(tid);
    })
    counterClockWise.addEventListener('mouseout', function () {
        clearInterval(tid);
    }) 

clockWise.addEventListener('mousedown', function () {
    tid = setInterval(function(){
    if (index === 59) {
    index = 0;
    }
    else
    {
        index++;
    }
    img.setAttribute("src", carArray[index]);
    },75);
    });
    clockWise.addEventListener('mouseup', function () {
        clearInterval(tid);
    })
    clockWise.addEventListener('mouseout', function () {
        clearInterval(tid);
    }) 