/**
 * Created by wuyakun on 2017/4/19.
 */

/**
 * 头部显示哪一个
 * @param index 如果传错了。就没有
 */

function headShowIndex(index) {

    var lis = "";

    var titleList = ['首页', '格物学堂创客', '格物学堂阅读', '关于我们'];

    var linkUrl = ['./index.htm',
        './migoabc/index.htm',
        './reading/index.htm',
        './about.html-news=true.htm'];

    for (var i = 0; i < titleList.length; i++) {
        var url = index == i ? '' : linkUrl[i];
        if (i == 0) {
            if (index == i) {
                lis += "<li class='hover'><a href='" + url + "'>" + titleList[i] + "</a></li> ";
            } else {
                lis += "<li><a href='" + url + "' target='_blank'>" + titleList[i] + "</a></li> ";
            }
        } else {
            if (index == i) {
                lis += "<li><img src='images/home/header/line.png'/*tpa=http://www.migoedu.com/js/images/home/header/line.png*/ alt=''></li> ";
                lis += "<li class='hover'><a href='" + url + "'>" + titleList[i] + "</a></li> ";
            } else {
                lis += "<li><img src='images/home/header/line.png'/*tpa=http://www.migoedu.com/js/images/home/header/line.png*/ alt=''></li> ";
                lis += "<li><a href='" + url + "' target='_blank'>" + titleList[i] + "</a></li> ";
            }
        }
    }

    var headHtml =
        "<div id='head' class='head'> " +
        "<div class='head_top'> " +
        "<div class='logo' style='position: relative;'> " +
        "<img style='position: absolute;top: -35px;width: 285px; height: 140px;' src='images/home/gewulogo.png'> " +
        "<div class='other'> " +
        "<ul> " +
        lis +
        "</ul> " +
        "</div> " +
        "</div> " +
        "</div> " +
        "</div>";

    $('#head').html(headHtml);

    //监听滚动高度，来显示隐藏头部
    var fixNav = function () {
        var Height = $(".top").height();
        var top = document.body.scrollTop;
        if (top > Height) {
            $(".head").addClass('fixed');
        } else {
            $(".head").removeClass('fixed');
        }
    };

    $(window).scroll(function () {
        fixNav();
    })
}

/**
 * 显示页脚
 */

function footerShowIndex() {
    var footerHtml =
        "<div class='left'> " +
        "<div class='text_center'> " +
        "<img class='logo' src='images/home/footer/logo.png'/*tpa=http://www.migoedu.com/js/images/home/footer/logo.png*/ alt=''> " +
        "</div> " +
        "<div class='copyright'> " +
        "<img src='images/home/footer/copyright.png'/*tpa=http://www.migoedu.com/js/images/home/footer/copyright.png*/ alt=''> " +
        "</div> " +
        "</div> " +
        "<div class='right'> " +
        "<img src='images/home/footer/attention.png'/*tpa=http://www.migoedu.com/js/images/home/footer/attention.png*/ alt=''> " +
        "</div>";
    $('#footer').html(footerHtml);
}

