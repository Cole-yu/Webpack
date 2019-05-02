function change(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self ? dpr : 1,         // 判断是否是顶层窗口
        dpr = 1,                                            // 首页引用IFRAME，强制为1
        scale = 1 / dpr,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';     // 移动端翻转设备（即方向发生变化）时触发的事件 和 PC 端网页大小调整
    docEl.dataset.dpr = win.devicePixelRatio;
    if (navigator.userAgent.match(/iphone/gi) && screen.width == 375 && win.devicePixelRatio == 2) {
        docEl.classList.add('iphone6')
    }
    if (navigator.userAgent.match(/iphone/gi) && screen.width == 414 && win.devicePixelRatio == 3) {
        docEl.classList.add('iphone6p')
    }
    //添加一条元数据标签
    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';    
    metaEl.content = 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ", shrink-to-fit=no";
    docEl.firstElementChild.appendChild(metaEl);
    function recalc() {
        var width = docEl.clientWidth;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
        docEl.style.fontSize = 100 * (width / 750) + 'px';
    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
}

function wap(){
    change(document, window);
}

export default wap;