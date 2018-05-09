import Chart from "chart.js";

//showChart();

var countRed = 0;

var drawBtn = document.getElementById("draw");
var updateBtnR = document.getElementById("updateRed");

var myChart;

drawBtn.addEventListener("click", function(event) {
  showChart();
});

// Here's some stuff yay. So HAWT. and phat.

updateBtnR.addEventListener("click", function(event) {
  countRed++;
  //  console.log("Count Awesome: " + countAwesome);
  changeChart(0, countRed);
});

function changeChart(loc, newCount) {
  //  myChart.data.datasets.data[0] = newCount;
  myChart.data.datasets[0].data[loc] = newCount;
  //    console.log("Change: " + dataset.data);

  //  console.log("Changed:" + myChart.data.datasets.data);
  myChart.update();
}

function showChart() {
  // build chart here

  var ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [0, 0, 0, 1, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
