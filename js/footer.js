function showFooter()
{
    var footer1 = ' <footer> 	\
<div class="row"> \
    	<div class="nine columns"> \
            <div class="row"> \
        		<div class="two column"> \
        <ul class="side-nav"> \
            <li class="heading"><a href="#">社区</a></li> \
			<li><a href="#">论坛</a></li> \
			<li><a href="#">开发者</a></li> \
            <li><a href="#">BUG管理</a></li> \
            <li><a href="#">博客</a> \
			</li></ul> \
        		</div> \
        		<div class="two column"> \
        <ul class="side-nav"> \
            <li class="heading"><a href="#">关于我们</a></li> \
			<li><a href="#">团队介绍</a></li> \
			<li><a href="#">加入我们</a></li> \
            <li><a href="#">网站地图</a></li> \
			</ul> \
            	</div> \
            <div class="two columns"> \
            	<ul class="side-nav"> \
                    <li class="heading"><a href="#">联系我们</a></li> \
                    <li><a href="#">邮件列表</a></li> \
                    <li><a href="#">友情链接</a></li> \
				</ul> \
            </div> \
            <div class="two column"> \
        	<ul class="side-nav"> \
            <li class="heading"><a href="#">商业合作</a></li> \
			<li><a href="#">企业系统定制</a></li> \
			<li><a href="#">软件开发</a></li> \
			<li><a href="#">商业网站开发</a></li> \
            <li><a href="#">智能家电</a></li> \
			</ul> \
        		</div> \
        	<div class="three column social"> \
                <a href="http://www.facebook.com/o2ee" class="social-icon facebook" rel="nofollow" onclick="_gaq.push([\'_trackEvent\', \'Interactions\', \'Footer\', \'Facebook\', 1, true]);"></a> \
                <a href="https://twitter.com/o2ee" class="social-icon twitter" rel="nofollow" onclick="_gaq.push([\'_trackEvent\', \'Interactions\', \'Footer\', \'Twitter\', 1, true]);"></a> \
                <a href="http://us.linkedin.com/company/o2ee" class="social-icon linkedin" rel="nofollow" onclick="_gaq.push([\'_trackEvent\', \'Interactions\', \'Footer\', \'LinkedIn\', 1, true]);"></a> \
                <a href="https://plus.google.com/" class="social-icon google" rel="nofollow" onclick="_gaq.push([\'_trackEvent\', \'Interactions\', \'Footer\', \'Googleplus\', 1, true]);"></a> \
                <a href="http://www.youtube.com/o2ee" class="social-icon youtube" rel="nofollow" onclick="_gaq.push([\'_trackEvent\', \'Interactions\', \'Footer\', \'Youtube\', 1, true]);"></a> \
        	</div> \
        	</div> \
        </div> \
            <div class="two column"> \
                <p>中国·武汉 <br> 虎泉街291号 <br>© 2011-2013 O2EE Co.Ltd <br> 鄂ICP备14013274号</p> \
        	</div> \
        </div> \
   </div> \
</footer>';
    document.getElementById("footer").innerHTML=footer1;
}
showFooter();