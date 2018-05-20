/**
 * Created by wuyakun on 2017/4/18.
 */

// banner ajax 请求

var bannerData = null;
//var url_head = 'http://vishowtest.b0.upaiyun.com/';
var url_head = 'http://migostorage.b0.upaiyun.com/';

$.ajax({
    type: 'GET',
   // url: "http://omtest.vishow.com.cn/banner/list",
    url: "http://wwwapi.migoedu.com/website/banner/list",
    dataType: 'json',
    success: function (data) {
        bannerData = data;
        //TODO 测试的地址头
        var url = [];
        for (var i = 0; i < data.data.length; i++) {
            var p = [];
            p[0] = url_head + data.data[i].picture;
            url = url.concat(p);
        }

        var callback = function (position) {
            var mUrl = bannerData.data[position].url;
            if (mUrl) {
                //window.open(mUrl);
            }
        };

        initSwipe({
            url: ["http://migostorage.b0.upaiyun.com//pictures/1/oitafoktg4wgljic.jpg","http://migostorage.b0.upaiyun.com//pictures/1/kapbwracrwfqycki.jpg","http://migostorage.b0.upaiyun.com//pictures/1/4zqrmd2wgmih9ijr.jpg"],//url,
            callback: callback
        });

    }
});

/**
 * 获取新闻
 */

$.ajax({
    type: 'GET',
    //url: "http://omtest.vishow.com.cn/article/list?page=1&pageSize=6",
    url: "http://wwwapi.migoedu.com/website/article/list?page=1&pageSize=6",
    dataType: 'json',
    success: function (data) {
        var dynamic = '';
        var content = data.data.content;
        for (var i = 0; i < content.length; i++) {
            dynamic += getTemplate(content[i].id, content[i].title, content[i].content);
        }
        $('#dynamic').html(dynamic);
    }
});

/**
 * 获取 html 模板
 */

function getTemplate(id, title, content) {
    content = common.cutString(common.removeAllHtml(content), 100);
    if (content == '') content = '...';
    return "<div class='dynamic_other'> <div class='circle'></div> " +
        "<a class='dynamic_title' onclick='linkOther(\"" + id + "\")' href='javascript:void(0)'>" + title + "</a> " +
        "<p class='dynamic_content' >" + content + "</p> </div>";
}

/**
 * 跳转链接
 * @param id
 */

function linkOther(id) {
    window.location.href = "http://www.migoedu.com/js/about.html?news=true&newsId=" + id;
}
