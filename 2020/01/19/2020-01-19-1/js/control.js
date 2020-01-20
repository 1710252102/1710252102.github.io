window.onload = function () {
	layer.open({ // 信息框
		content: '该游戏支持移动版触屏操作和PC版键盘操作',
		btn: '我知道了',

		shadeClose: false,

		yes: function() {
			layer.open({ // 提示框
				content: 'START',
				time: 2,
				skin: 'msg'
			});









			/* 游戏程序 START */
			var _canvas = document.getElementById('_canvas');

			_canvas.width = 240;
			_canvas.height = 420;

			var _context = _canvas.getContext('2d');

			var _img = new Image();
				_img.src = "img/bgp.png";
				_img.onload = function() {
					_context.drawImage(_img, 0, 0);
				};

			var _A = 10; // 设置方块大小

			function _Rect(_x, _y, _w, _h, _color) { // 构造对象方块
				this.x = _x;
				this.y = _y;
				this.w = _w;
				this.h = _h;
				this.color = _color;
			}

			_Rect.prototype.draw = function() { // 画方块的方法
				_context.beginPath();

				_context.rect(this.x, this.y, this.w, this.h);
				_context.fillStyle = this.color;
				_context.fill();

				_context.stroke();
			};



			function _Snake() { // 构造对象蛇
				var _snakeArray = []; // 定义一个空数组存放组成整蛇的方块对象

				for (var i = 0; i < 4; i++) { // 画出四个方块 设置成灰色
					var _rect = new _Rect(i * _A, 0, _A, _A, "gray");
					_snakeArray.splice(0, 0, _rect); // 之所以用 splice(往前加) 而不是用 push(往后加) 是为了让蛇头出现在数组第一个位置
				}

				var _head = _snakeArray[0];
					_head.color = "red"; // 把数组第一个作为蛇头 蛇头设成红色

				/* 此处将两个后面常用的东西定为属性 方便后面调用 */
				this.head = _snakeArray[0]; // 蛇头
				this.snakeArray = _snakeArray; // 整蛇数组

				this.direction = 39; // 给定初始位置向右(同 keyCode 右箭头)
			}

			_Snake.prototype.draw = function() { // 画蛇的方法
				for (var i = 0; i < this.snakeArray.length; i++) {
					this.snakeArray[i].draw();
				}
			};

			_Snake.prototype.move = function() { // 蛇移动的方法
				var _rect = new _Rect(this.head.x, this.head.y, this.head.w, this.head.h, "gray"); // 画一个灰色的方块 位置与蛇头重叠

				this.snakeArray.splice(1, 0, _rect); // 将这个方块插到数组中蛇头后面一个的位置 砍去末尾的方块 将蛇头向设定方向移动一格

				if (_isEat()) { // 判断是否吃到食物 _isEat 判定函数写在最后
					_food = new _getRandomFood(); // 吃到则食物重新给位置 不砍去最后一节 即蛇变长
				}
				else{
					this.snakeArray.pop(); // 没吃到则末尾砍掉一节 即蛇长度不变
				}

				/* 设置蛇头的运动方向 键值 37 左 38 上 39 右 40 下 */
				switch (this.direction) {
					case 37:
						this.head.x -= this.head.w;
						break;

					case 38:
						this.head.y -= this.head.h;
						break;

					case 39:
						this.head.x += this.head.w;
						break;

					case 40:
						this.head.y += this.head.h;
						break;

					default:
						break;
				}

				/* 游戏失败判定 */
				if (this.head.x >= _canvas.width || this.head.x < 0 || this.head.y >= _canvas.height || this.head.y < 0) { // 撞墙
					clearInterval(_timer);






					var _audio = document.getElementById('_audio');
						_audio.pause();
					alert("GAME OVER");
					layer.open({ // 询问框
								anim: 'up',

								content: '您要重新开始吗？',
								btn: ['再来一把', '残忍离开'],

								yes: function(index) {
									location.reload();
									layer.close(index);
								},
								no: function () {
									window.close();
								}

							});
				}
				for (var i = 1; i < this.snakeArray.length; i++) { // 撞自己 循环从一开始 避开蛇头与蛇头比较的情况
					if (this.snakeArray[i].x == this.head.x && this.snakeArray[i].y == this.head.y) {
						clearInterval(_timer);






						var _audio = document.getElementById('_audio');
							_audio.pause();
						alert("GAME OVER");
						layer.open({ // 询问框
									anim: 'up',

									content: '您要重新开始吗？',
									btn: ['再来一把', '残忍离开'],

									yes: function(index) {
										location.reload();
										layer.close(index);
									},
									no: function () {
										window.close();
									}

								});
					}
				}
			};

			var _snake = new _Snake();// 画出初始的蛇
			_snake.draw();

			var _food = new _getRandomFood(); // 画出初始的食物

			var _timer = setInterval(function() {
				_context.clearRect(0, 0, _canvas.width, _canvas.height);

				_context.drawImage(_img, 0, 0);

				_food.draw();

				_snake.move();

				_snake.draw();
			}, 100);









			document.onkeydown = function(event) { // 键盘事件 其中的 if判定 是为了让蛇不能直接掉头
				var event = event || window.event;

				switch (event.keyCode) {
					case 37:{
						if (_snake.direction !== 39) {
							_snake.direction = 37;
						}
						break;
					}

					case 38:{
						if (_snake.direction !== 40) {
							_snake.direction = 38;
						}
						break;
					}

					case 39:{
						if (_snake.direction !== 37) {
							_snake.direction = 39;
						}
						break;
					}

					case 40:{
						if (_snake.direction !== 38) {
							_snake.direction = 40;
						}
						break;
					}
				}

				event.preventDefault();
			};


			/* 为游戏添加触屏操作 */
			var _m;
			var _n;
			var _x;
			var _y;
			document.addEventListener('touchstart', _touch, false);
			document.addEventListener('touchmove', _touch, false);
			document.addEventListener('touchend', _touch, false);

			function _touch (event) {
				var event = event || window.event;

				switch(event.type) {
					case "touchstart":
						_m = event.touches[0].clientX;
						_n = event.touches[0].clientY;
						break;
					case "touchmove":
						event.preventDefault();
						break;
					case "touchend":
						_x = event.changedTouches[0].clientX;
						_y = event.changedTouches[0].clientY;

						if(_x-_m<-25) {
							if (_snake.direction !== 39) {
								_snake.direction = 37;
							}
						}
						else if(_y-_n<-25) {
							if (_snake.direction !== 40) {
								_snake.direction = 38;
							}
						}
						else if(_x-_m>25) {
							if (_snake.direction !== 37) {
								_snake.direction = 39;
							}
						}
						else if(_y-_n>25) {
							if (_snake.direction !== 38) {
								_snake.direction = 40;
							}
						}
						
						break;
				}
			}

			/* 为按钮添加事件 */
			document.getElementById("_left").addEventListener("touchstart", function() {
				if (_snake.direction !== 39) {
					_snake.direction = 37;
				}
			});
			document.getElementById("_up").addEventListener("touchstart", function() {
				if (_snake.direction !== 40) {
					_snake.direction = 38;
				}
			});
			document.getElementById("_right").addEventListener("touchstart", function() {
				if (_snake.direction !== 37) {
					_snake.direction = 39;
				}
			});
			document.getElementById("_down").addEventListener("touchstart", function() {
				if (_snake.direction !== 38) {
					_snake.direction = 40;
				}
			});

			function _getNumberInRange(_min, _max) { // 随机函数 获得 [_min,_max] 范围的值
				var _range = _max - _min;
				var _r = Math.random();

				return Math.round(_r * _range + _min);
			}

			function _getRandomFood() { // 构建食物对象
				/* 判定食物是否出现在蛇身上 如果是重合 则重新生成一遍 */
				var _isOnSnake = true;

				while (_isOnSnake) { // 设置食物出现的随机位置
					_isOnSnake = false; // 执行后先将判定条件设置为 false 如果判定不重合 则不会再执行下列语句

					var _indexX = _getNumberInRange(0, _canvas.width / _A - 1);
					var _indexY = _getNumberInRange(0, _canvas.height / _A - 1);

					var _rect = new _Rect(_indexX * _A, _indexY * _A, _A, _A, "green");

					for (var i = 0; i < _snake.snakeArray.length; i++) {
						if (_snake.snakeArray[i].x == _rect.x && _snake.snakeArray[i].y == _rect.y) {
						// 如果判定重合 将其设置为 true 使随机数重给
						_isOnSnake = true;
						break;
						}
					}
				}

				return _rect; // 返回 _rect 使得实例化对象 _food 有 draw 的方法
			}

			function _isEat() { // 判定吃到食物 即蛇头坐标与食物坐标重合
				if (_snake.head.x == _food.x && _snake.head.y == _food.y) {
					return true;
				}
				else {
					return false;
				}
			}
			/* 游戏程序 END */
		}
	});
};