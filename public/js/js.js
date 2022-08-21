	function toDouble(num) {
								    num >= 10 ? num = '' + num : num = '0' + num;
								    return num;
								  }
								  var main = $$('main'),
								  span = $$('main').getElementsByTagName('span')[0];
								
								  function timer(year, month, day, hour, minute, seconds, elem) {
								      var hour = hour || 0,
								      minute = minute || 0,
								      seconds = seconds || 0;
								      var endTime = new Date();
								
								      endTime.setFullYear(parseInt(year)),
								      endTime.setMonth(parseInt(month) - 1),
								      endTime.setDate(parseInt(day)),
								      endTime.setHours(parseInt(hour)),
								      endTime.setMinutes(parseInt(minute)),
								      endTime.setSeconds(parseInt(seconds));
								      setTime();
								      setInterval(function() {
								          setTime()
								        }, 1000);
								        function setTime() {
								            var startTime = new Date();
								            var lengthTime = parseInt((startTime.getTime() - endTime.getTime()) / 1000);
								            var lSeconds = parseInt(lengthTime % 60),
								            lMinute = parseInt((lengthTime / 60) % 60),
								            lHour = Math.floor((lengthTime / 3600) % 24),
								            lDay = Math.floor(lengthTime / (24 * 3600));
								            span.innerHTML=" <span id=\"sty\"> "+lDay+"</span> 天 <span id=\"sty\">"+lHour+"</span> 小时 <span id=\"sty\">"+lMinute+"</span> 分钟 <span id=\"sty\">"+lSeconds+"</span> 秒 ";
								          }
								
								        }
								        function $$(id) {
								            return document.getElementById(id);
								          }
								          timer(2019, 08, 23, 20, 07, 00, span);//这个是设置的开始时间
										  