	$(document).ready(function(){


		/* Диаграмма круговая 1 */
				var ctx = $("#diagramma-disc-1").get(0).getContext("2d");

				//pie chart data
				//sum of values = 360
				var data = [
					{
						value: 270,
						color: "#36a2eb",
						highlight: "lightskyblue",
						label: "Мужчины"
					},
					{
						value: 50,
						color: "#ff6384",
						highlight: "yellowgreen",
						label: "Женщины"
					},
					{
						value: 40,
						color: "#ffcd56",
						highlight: "darkorange",
						label: "Неопределено"
					}
				];

				/* Диаграмма круговая 2 */

				var disc2 = $("#diagramma-disc-2").get(0).getContext("2d");

				var data2 = [
					{
						value: 170,
						color: "#36a2eb",
						highlight: "lightskyblue",
						label: "Мужчины"
					},
					{
						value: 50,
						color: "#ff6384",
						highlight: "yellowgreen",
						label: "Женщины"
					},
					{
						value: 40,
						color: "#ffcd56",
						highlight: "darkorange",
						label: "Неопределено"
					}
				];

				/*Диаграмма круговая 3 */


				var disc3 = $("#diagramma-disc-3").get(0).getContext("2d");

				var data3 = [
					{
						value: 10,
						color: "#36a2eb",
						highlight: "#36a2eb",
						label: "Мужчины"
					},
					{
						value: 200,
						color: "#ff6384",
						highlight: "#ff6384",
						label: "Женщины"
					},
					{
						value: 40,
						color: "#ffcd56",
						highlight: "#ffcd56",
						label: "Неопределено"
					}
				];


				/* линейный график-1 */
			

var line1 = document.getElementById("line-diagramm-1").getContext('2d');
var barData = {
		type: "horizontalBar",
        labels : ["Январь","Февраль","Март","Апрель","Май","Июнь"],
        datasets : [
            {
                fillColor : "#48A497",
                strokeColor : "#48A4D1",
                data : [456,479,324,569,702,600],
		type: "horizontalBar"

            },
            {
                fillColor : "rgba(73,188,170,0.4)",
                strokeColor : "rgba(72,174,209,0.4)",
                data : [364,504,605,400,345,320],
		type: "horizontalBar"
            }

        ]
    }

   new Chart(line1).Bar(barData);		//рисуем графики
				var piechart = new Chart(ctx).Pie(data);
				var piechart2 = new Chart(disc2).Pie(data2);
				var piechart3 = new Chart(disc3).Pie(data3);
				var piechart4 = new Chart(line1).Bar(dataline1);

			});