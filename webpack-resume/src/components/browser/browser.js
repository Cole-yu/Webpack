export default{
    isMobile:isMobile
}    

function isMobile(){
    //json格式
    var browser={
        versions:function(){
            var u = window.navigator.userAgent;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone
                iPad: u.indexOf('iPad') > -1, //是否为iPad
                webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') == -1, //是否为微信浏览器
                qq: u.match(/\sQQ/i) == " qq" //是否为QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase() 
    }
    console.log(browser.versions);

    if(browser.versions.mobile){
        window.location.href = "https://cole-yu.github.io/mobile_resume/";          // 移动端网址
    } 
}    