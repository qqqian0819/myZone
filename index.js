$(function(){
			// 页面初始样式
			(function(){
				$('#header').css('height', $(window).height());
				$('#info').css('height', $(window).height() * 0.6);
				$('#projects').css('height', $(window).width() / 2);
				$('#header-li').css('background-color', '#fff');
			})();


			/**
		    * @class    [打字类]
		    * @tag      [obj]     文字需要显示的位置
		    * @msg      [string]  具体的文字
		    * @type     [string]  文字后面跟着打字的类型
		    * @speed	[number]  打字的速度
		    */
		   	class Type {
			   	constructor(tag, msg, type, speed){
			   		this.tag = tag; 
			   		this.msg = msg;
			   		this.underline = type; 	
			   		this.speed = speed;  
			   		this.timer = null;    // 定时
			   		this.index = '';	// 索引
			   		
			   	};
			   	typeWord(){
			   		this.timer = setTimeout(this.typeWord.bind(this), 200); // class的指向类的实例
			   		this.tag.text(this.msg.substr(0, this.index) + this.underline);
			   		if(this.index == this.msg.length-1){this.underline = ''};

			   		if(this.inedx == this.msg.length){clearTimeout(this.timer)}
			   		this.index ++;
			   		// console.log(length);
			   	}


		   	}
		   	var typing = new Type($('#welcome-world'), '嘿,故事和酒我都有,就差你来!', '_', '200');
		   	typing.typeWord();
			


			//  点击导航或者右侧小圆圈锚点跳转
			$('.links').on('click', function(){

				// 导航样式切换
				$(this).addClass("onHover");
				$(this).parent().siblings('').children('span').removeClass('onHover');
				
				// 小圆圈样式切换
				let links = '#' + $(this).attr('linkTo'); // 构造跳转锚点
				$(links + '-li').css('background-color', '#fff');
				$(links + '-li').siblings('li').css('background-color', '#6C6262');
				
				// 锚点滚动到响应位置
				// let bodys = $('html') || $('body') ; // 兼容 google body ; firfox html 
				$('html, body').animate({scrollTop:($(links).offset().top-50)}, 1000, function(){
				});
			});

			// 小屏的导航
			$('#little-screen').on("click", function(){
				$('nav>p').toggle("slow");
			});

			// 鼠标移到项目上的动作
			$('.project-item').on('mouseover', function(){
				$('.project-name').animate({
					color: '#f00'
				}, 1000)
			});

			// 屏幕滚动锚点跳转
			$(window).scroll(function () {
				let header = document.getElementById("header").offsetTop;
				let info = document.getElementById("info").offsetTop;
				let projects = document.getElementById("projects").offsetTop;
				let footer = document.getElementById("footer").offsetTop;
				let top = $(window).scrollTop()-$(window).height()-60;
				let bottom = $(window).scrollTop()+300;
				
				if( header > top && header < bottom ){
					switchCircle('#header');
				}

				if( info > top && info < bottom ){
					switchCircle('#info');
					
				}
				
				if( projects > top && projects < bottom){	
					switchCircle('#projects');
					// my projects 字样
					$("#project-title").animate({'font-size': '1.5em', 'opacity':'1'}, 5000);
					//  每一个项目整体的样式
					// $(".project-item").css('animation', 'project-animate 10s forwards ');
					// 样式
					

				}
				if($(window).scrollTop() > (footer*0.7 ) ){
					switchCircle('#footer');
				}
				// 滚动 滚动条 切换样式
				function switchCircle(item){
					$( item +'-span').addClass("onHover");
					$( item +'-span').parent().siblings('').children('span').removeClass('onHover');
					$( item +'-li').css('background-color', '#fff');
					$( item +'-li').siblings('li').css('background-color', '#6C6262');
				}
		
			});
			
		

	});