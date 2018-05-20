/**
 * Created by wuyakun on 2017/2/28.
 */

function initSwipe(arg) {
	console.log(arg)
    //提供参数用来修改position
    var banner = '';
    //设置默认参数
    const _auto = 5000;
    const _continuous = true;
    const _disableScroll = false;

    arg.auto = arg.auto || _auto;
    if (arg.continuous == 'undefined') arg.continuous = _continuous;
    if (arg.disableScroll == 'undefined') arg.disableScroll = _disableScroll;
    if (arg.url == 'undefined') return;

    //添加图片
    var _div = "";
    var addDiv = function (i) {
        _div +=
            "<div>" +
                "<a onclick='onImgClick(" + i + "," + arg.callback + ")' href='javascript:void(0);'>" +
                    "<img class='img-responsive' src='" + arg.url[i] + "' />" +
                "</a>" +
            "</div>";
    };
    for (var i = 0; i < arg.url.length; i++) {
        addDiv(i);
    }

    //添加下方 点点
    var _li = "";
    var addLi = function (j) {
        var cls =  j == 0 ? 'cur' : '' ;
        _li +=
            "<a class='positionA' href='javascript:void(0);'>" +
                "<li class='" + cls + "'></li>" +
            "</a>";
    };
    for (var j = 0; j < arg.url.length; j++) {
        addLi(j);
    }

    //组合
    document.getElementById('swipeView').innerHTML =
        "<div class='addWrap'> " +
            "<div class='swipe' id='mySwipe'> " +
                "<div class='swipe-wrap'>" +
                    _div +
                "</div> " +
            "</div> " +
            "<ul id='position'>" +
            _li +
            "</ul> " +
        "</div>";

    var bullets = document.getElementById('position').getElementsByTagName('li');
    banner = Swipe(document.getElementById('mySwipe'), {
        auto: arg.auto,
        continuous: arg.continuous,
        disableScroll: arg.disableScroll,
        callback: function (pos) {
            var i = bullets.length;
            while (i--) {
                bullets[i].className = '';
            }
            bullets[pos].className = 'cur';
        }
    });

    //给下方的点点加上点击事件
    var allPosition = $(".positionA");
    var attrAllPosition = function (n) {
        $(allPosition[n]).click(function () {
            onPositionClick(n, banner)
        });
    };
    for (var n = 0; n < allPosition.length; n++) {
        attrAllPosition(n);
    }
}

/**
 * 当图片点击时
 * @param index
 * @param callback
 */

function onImgClick(index, callback) {
    callback(index);
}

/**
 * 当下方点点被点击时
 * @param index
 * @param banner
 */

function onPositionClick(index, banner) {
    banner.slide(index);
}