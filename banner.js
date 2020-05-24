
/**
 * 
 * <script src="http://www.xxx.com/banner.js"></script>
 * 
 */
(function() {
    var config = {
        // 是否在滚动页面时也位于顶部 (0:否, 1:是)
        fixed: 1,

        //背景颜色
        background:"#000",  

        // 高度
        height: 90,
        
        // 图片地址
        src: 'https://wx4.sinaimg.cn/large/007BLhMBgy1gf3lt51ciwj30ny0dhnce.jpg',               
        
        // 打开链接
        link: 'https://baidu.com',
    };

    function docReady(fn) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }
    function insertBanner(){
        var banner = document.createElement('a');
        banner.target = '_blank';
        banner.href = config.link;
        var style = banner.style;
        if (config.fixed) {
            style.position = 'fixed';
        }
        style.display = 'block';
        style.left = 0;
        style.top = 0;
        style.textAlign = 'center';
        style.background = config.background;
        style.zIndex = 9999;
        style.width = '100%';
        style.lineHeight = 0;
        var img = document.createElement('img');
        img.src = config.src;
        img.style.height = config.height + 'px';
        banner.appendChild(img);
        document.body.prepend(banner)
    }
    docReady(insertBanner)
})() 