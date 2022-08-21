function tick() {
				var today = new Date();
				var month = today.getMonth() + 1; <!--getMonth显示当前月份-1，所以要+1才能显示当前月份-->
				var year, date, hours, minutes, seconds;
				var intHours, intMinutes, intSeconds;
				var week = new Array() <!--显示几天为星期几-->
				week[0] = "<span id=\"a6\">星期天</span>";
				week[1] = "<span id=\"a6\">星期一</span>";
				week[2] = "<span id=\"a6\">星期二</span>";
				week[3] = "<span id=\"a6\">星期三</span>";
				week[4] = "<span id=\"a6\">星期四</span>";
				week[5] = "<span id=\"a6\">星期五</span>";
				week[6] = "<span id=\"a6\">星期六</span>";
				intHours = today.getHours();
				intMinutes = today.getMinutes();
				intSeconds = today.getSeconds();
				year = today.getFullYear();
				date = today.getDate();
				var time;
				if (intHours == 0) {
					hours = "00:";
				} else if (intHours < 10) {
					hours = "0" + intHours + ":";
				} else {
					hours = intHours + ":";
				}
				if (intMinutes < 10) {
					minutes = "0" + intMinutes + ":";
				} else {
					minutes = intMinutes + ":";
				}
				if (intSeconds < 10) {
					seconds = "0" + intSeconds + "";
				} else {
					seconds = intSeconds + "";
				}
				//根据不同的时间显示不同的问候。
				//下面采用自己总结的测试纠正法对time进行赋值
				time = "";
				/* 					if (today.getHours() <= 22) time = "<span id=\"a\">晚上好</span>";
									if (today.getHours() <= 19) time = "<span id=\"a\">傍晚好</span>";
									if (today.getHours() <= 14) time = "<span id=\"a\">下午好</span>";
									if (today.getHours() <= 13) time = "<span id=\"a\">中午好</span>";
									if (today.getHours() <= 11) time = "<span id=\"a\">上午好</span>";
									if (today.getHours() <= 8) time = "<span id=\"a\">早上好</span>";
									if (today.getHours() <= 5) time = "<span id=\"a\">凌晨好</span>"; */
				timeString = time + "<span id=\"a\"></span><span id=\"a2\">" + year +
					"</span><span id=\"a1\">年</span><span id=\"a2\">" + month + "</span><span id=\"a1\">月</span><span id=\"a2\">" +
					date + "</span><span id=\"a1\">日</span><span id=\"a3\">" + hours + minutes + seconds; <!--hours是小时，minutes是分钟，seconds是秒--><!--这里的br是换行-->
				tt = week[today.getDay()];
				Clock.innerHTML = timeString;
				Cloc.innerHTML = tt;
				window.setTimeout("tick();", 1000);
			}
			window.onload = tick;