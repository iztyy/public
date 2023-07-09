	 function codefans(){
           window.location="//v.iztyy.com/public/static/hxmcss/js/error.php";
	   	}; //累死浏览器
	//<!--复制弹框-->
	document.body.oncopy = function() {
		layer.msg('复制成功!');
	};
	//<!--禁用F12-->
	document.onkeydown = function() {
		if (window.event && window.event.keyCode == 123) {
			layer.msg('你是好奇宝宝吗？有啥好看的呀？！', {
				icon: 3,
				shift: 6
			});
			event.keyCode = 0;
			event.returnValue = false;
			setTimeout("codefans()",500);
		}//禁用F12
		if (event.ctrlKey && window.event.keyCode==83){
		    	layer.msg('码代码不易！珍惜下劳动成果呀！', {
				icon: 2,
				shift: 6
			});
            event.keyCode = 0;
			event.returnValue = false;
			//setTimeout("codefans()",500);
    }//Ctrl+S
        if (event.ctrlKey && window.event.keyCode==85){
		    	layer.msg('不要乱按啦！没听过好奇害死猫吗？', {
				icon: 5,
				shift: 6
			}); 
            event.keyCode = 0;
			event.returnValue = false;
			setTimeout("codefans()",500);
    }//Ctrl+U
    	//禁止 F5 
        //if (window.event && window.event.keyCode == 116) {
        //  event.keyCode = 0;
        //  event.returnValue = false;
    //}
		//<!--禁止调试-->
	(function noDebuger() {
			function testDebuger() {
				var d = new Date();
				debugger;
				if (new Date() - d > 10) {
					layer.open({
					    title :'　　　　温馨提示',
						content: '纳尼？你怎么还在看啊？</br>有这时间去百度学学技术不好嘛？',
						btn: ['确认'],
						yes: function(index, layero) {
							//按钮【按钮一】的回调
							window.location = "http://www.baidu.com";
						},
						cancel: function() {
							//右上角关闭回调    
							onclick = "window.close();"
							return false //开启该代码可禁止点击该按钮关闭
						}
					});
					// window.location = "http://v.iztyy.com";
					return true;
				}
				return false;
			}
			function start() {
				while (testDebuger()) {
					testDebuger();
				}
			}
			if (!testDebuger()) {
				window.onblur = function() {
					setTimeout(function() {
						start();
					},
					500)
				}
			} else {
				start();
			}
		})();
	}
	     document.oncontextmenu = function() {
		    	layer.msg('你鼠标多少钱买的呀？我好喜欢好想要呀！', {
				icon: 3,
				shift: 6
			});
             return false;
    } //屏蔽右键
        document.body.onselectstart = function() {
        self.event.returnValue=false
        //禁止选中
};