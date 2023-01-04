//資料結構
let iphoneProMaxArray = [
    {hex: '#60576A', hex_text: '深紫色', pic: '/JSHW-ApplePurchase/iphone-14-pro-deeppurple.jfif', storage: '128GB', price: '38900'},
    {hex: '#60576A', hex_text: '深紫色', pic: '/JSHW-ApplePurchase/iphone-14-pro-deeppurple.jfif', storage: '256GB', price: '42400'},
    {hex: '#60576A', hex_text: '深紫色', pic: '/JSHW-ApplePurchase/iphone-14-pro-deeppurple.jfif', storage: '512GB', price: '49400'},
    {hex: '#60576A', hex_text: '深紫色', pic: '/JSHW-ApplePurchase/iphone-14-pro-deeppurple.jfif', storage: '1TB', price: '56400'},
    {hex: '#F4E8CE', hex_text: '金色', pic: '/JSHW-ApplePurchase/iphone-14-pro-gold.jfif', storage: '128GB', price: '38900'},
    {hex: '#F4E8CE', hex_text: '金色', pic: '/JSHW-ApplePurchase/iphone-14-pro-gold.jfif', storage: '256GB', price: '42400'},
    {hex: '#F4E8CE', hex_text: '金色', pic: '/JSHW-ApplePurchase/iphone-14-pro-gold.jfif', storage: '512GB', price: '49400'},
    {hex: '#F4E8CE', hex_text: '金色', pic: '/JSHW-ApplePurchase/iphone-14-pro-gold.jfif', storage: '1TB', price: '56400'},
    {hex: '#F1F3F2', hex_text: '銀色', pic: '/JSHW-ApplePurchase/iphone-14-pro-silver.jfif', storage: '128GB', price: '38900'},
    {hex: '#F1F3F2', hex_text: '銀色', pic: '/JSHW-ApplePurchase/iphone-14-pro-silver.jfif', storage: '256GB', price: '42400'},
    {hex: '#F1F3F2', hex_text: '銀色', pic: '/JSHW-ApplePurchase/iphone-14-pro-silver.jfif', storage: '512GB', price: '49400'},
    {hex: '#F1F3F2', hex_text: '銀色', pic: '/JSHW-ApplePurchase/iphone-14-pro-silver.jfif', storage: '1TB', price: '56400'},
    {hex: '#4F4E4C', hex_text: '太空黑色', pic: '/JSHW-ApplePurchase/iphone-14-pro-spaceblack.jfif', storage: '128GB', price: '38900'},
    {hex: '#4F4E4C', hex_text: '太空黑色', pic: '/JSHW-ApplePurchase/iphone-14-pro-spaceblack.jfif', storage: '256GB', price: '42400'},
    {hex: '#4F4E4C', hex_text: '太空黑色', pic: '/JSHW-ApplePurchase/iphone-14-pro-spaceblack.jfif', storage: '512GB', price: '49400'},
    {hex: '#4F4E4C', hex_text: '太空黑色', pic: '/JSHW-ApplePurchase/iphone-14-pro-spaceblack.jfif', storage: '1TB', price: '56400'},
];
let iPadProArray = [
    {hex: '#6F6D72', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/ipad-pro-space-gray.jfif', storage: '128GB', price: '27900'},
    {hex: '#6F6D72', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/ipad-pro-space-gray.jfif', storage: '256GB', price: '31400'},
    {hex: '#6F6D72', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/ipad-pro-space-gray.jfif', storage: '512GB', price: '38400'},
    {hex: '#6F6D72', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/ipad-pro-space-gray.jfif', storage: '1TB', price: '52400'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/ipad-pro-silver.jfif', storage: '128GB', price: '27900'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/ipad-pro-silver.jfif', storage: '256GB', price: '31400'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/ipad-pro-silver.jfif', storage: '512GB', price: '38400'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/ipad-pro-silver.jfif', storage: '1TB', price: '52400'},
];
let MacBookProArray = [
    {hex: '#AEB2B5', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/MacPro-spaceGray.jfif', storage: '256GB', price: '74900'},
    {hex: '#AEB2B5', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/MacPro-spaceGray.jfif', storage: '512GB', price: '80900'},
    {hex: '#AEB2B5', hex_text: '太空灰色', pic: '/JSHW-ApplePurchase/MacPro-spaceGray.jfif', storage: '1TB', price: '104900'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/MacPro-silver.jfif', storage: '256GB', price: '74900'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/MacPro-silver.jfif', storage: '512GB', price: '80900'},
    {hex: '#E3E4E5', hex_text: '銀色', pic: '/JSHW-ApplePurchase/MacPro-silver.jfif', storage: '1TB', price: '104900'},
];

let galleryPicArray = [
    '/JSHW-ApplePurchase/IphoneProMax-allColor.webp',
    '/JSHW-ApplePurchase/ipad-pro-allColor.jfif',
    '/JSHW-ApplePurchase/MacBookPro-allColor.jfif',
];

// ---------------------------------------------------------------------------------------

//取得iphone、ipad、MacBook 按鈕、container、content的Dom節點
const _iphone = document.querySelector('#iphone');
const _ipad = document.querySelector('#ipad');
const _MacBook = document.querySelector('#MacBook');
const _container = document.querySelector('#container');
const _content = document.querySelector('#content');


function setPrdouctZone(index,product,price,color) {
    _content.innerHTML = '';
    let _mainColLeft = document.createElement('div');
    _mainColLeft.classList.add('col-12','col-md-6','col-lg-6','col-xl-6','d-flex','justify-content-center','align-items-center');
    let _mainColRight = document.createElement('div');
    _mainColRight.classList.add('col-12','col-md-6','col-lg-6','col-xl-6','d-flex','flex-column','justify-content-center','align-items-center');
    let _productGallery = document.createElement('div');
    _productGallery.classList.add('product-pic');
    let _galleryImg = document.createElement('img');
    _galleryImg.src = galleryPicArray[index];
    _productGallery.append(_galleryImg);
    _mainColLeft.append(_productGallery);
    _content.append(_mainColLeft,_mainColRight);
    
    let _rowColor = document.createElement('div');
    _rowColor.classList.add('row','w-100');
    let _rowColorTitle = document.createElement('div');
    _rowColorTitle.classList.add('title','w-100');
    _rowColorTitle.innerHTML = '<h2>選擇顏色</h2>';
    _rowColor.append(_rowColorTitle);
    
    for (let i = 0; i < product.filter(x => x.price === price).length; i++) {
        let colorCol = document.createElement('div');
        colorCol.classList.add('col-12','col-md-3','col-lg-3','col-xl-3','d-flex','justify-content-center','mb-2');
        let colorBtn = document.createElement('button');
        colorBtn.classList.add('btn','btn-outline-dark','color-pick');
        let colorMark = document.createElement('div');
        colorMark.classList.add('color');
        colorMark.setAttribute('style',`background-color:${product.filter(x => x.price === price)[i].hex}`);
        let colorText = document.createElement('p');
        colorText.classList.add('mb-0');
        colorText.innerText = product.filter(x => x.price === price)[i].hex_text;
        colorBtn.append(colorMark,colorText);
        colorCol.append(colorBtn);
        _rowColor.append(colorCol);
    }
    _mainColRight.append(_rowColor);
    

    //--------------------------------------------------------
    let _rowNorm = document.createElement('div');
    _rowNorm.classList.add('row','w-100');
    let _rowNormTitle = document.createElement('div')
    _rowNormTitle.classList.add('title','w-100');
    _rowNormTitle.innerHTML = '<h2>選擇規格</h2>';
    _rowNorm.append(_rowNormTitle);
    
    for (let i = 0; i < product.filter(x => x.hex_text === color).length; i++) {
        let normCol = document.createElement('div');
        normCol.classList.add('col-12','col-md-3','col-lg-3','col-xl-3','d-flex','justify-content-center','mb-2');
        let normBtn = document.createElement('button');
        normBtn.classList.add('btn','btn-outline-dark');
        let normDiv = document.createElement('div');
        normDiv.classList.add('norm');
        let normP = document.createElement('p');
        normP.innerText = product.filter(x => x.hex_text === color)[i].storage;
        let normSpan = document.createElement('span');
        normSpan.innerText = `NT$${product.filter(x => x.hex_text === color)[i].price}`;
        normDiv.append(normP,normSpan);
        normBtn.append(normDiv);
        normCol.append(normBtn);
        _rowNorm.append(normCol);
    }
    _mainColRight.append(_rowNorm);

    //------------------------------------------------------------
    let _rowPrice = document.createElement('div');
    _rowPrice.classList.add('row','w-100');
    let _rowPriceTitle = document.createElement('div');
    _rowPriceTitle.classList.add('title','w-100');
        _rowPriceTitle.innerHTML = '<h2>價格試算</h2>';
    let _pPriceCount = document.createElement('p');
    _pPriceCount.classList.add('total');
        _rowPrice.append(_rowPriceTitle,_pPriceCount);
    _mainColRight.append(_rowPrice);

    let colorList = document.querySelectorAll('.color-pick');
    colorList.forEach(colors => {
        colors.addEventListener('click', () => {
            let pickedColor = product.find(x => x['hex_text'] == colors.querySelector('p').innerText)['pic'];
            _galleryImg.src = pickedColor;
        })
    })

    let normList = document.querySelectorAll('.norm');
    normList.forEach(norms => {
        norms.addEventListener('click', () => {
            _pPriceCount.innerText = norms.querySelector('span').innerText;
        })
    })
}
function initButtons() {
        _iphone.addEventListener('click', () => {
        setPrdouctZone(0,iphoneProMaxArray,'38900','深紫色');
    })

    _ipad.addEventListener('click', ()=> {
        setPrdouctZone(1,iPadProArray,'27900','太空灰色');
    })

    _MacBook.addEventListener('click', () => {
        setPrdouctZone(2,MacBookProArray,'74900','太空灰色');
    })
}

window.onload = function() {
    initButtons();
};





