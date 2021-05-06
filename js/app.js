let ctx0 = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx0, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','mago'],
        datasets: [{
            label: '# of Votes',
            data: [13, 8, 9, 15, 7, 12,11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                '#F958FF'
            ],
            borderWidth: 2,
            pointStyle:'circle',
            radius:3,
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                borderDash:12,
                
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes:[
                {
                    display:false,
                    circular:true,
                    
                    gridLines:[
                        {
                            display:true,
                        }
                    ]
                }
            ]
        },
        legend:{
            display: false,
            shape:"circle",
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});

let ctx1 = document.getElementById('myChart1').getContext('2d');
let myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','mago'],
        datasets: [{
            label: '# of Votes',
            data: [13, 8, 9, 15, 7, 12,11],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                '#58ACFF'
            ],
            borderWidth: 2,
            pointStyle:'circle',
            radius:3,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                borderDash:12,
                
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes:[
                {
                    display:false,
                    circular:true,
                    
                    gridLines:[
                        {
                            display:true,
                        }
                    ]
                }
            ]
        },
        legend:{
            display: false,
            shape:"circle",
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});


let ctx2 = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','mago'],
        datasets: [{
            label: '# of Votes',
            data: [13, 8, 9, 15, 7, 12,11],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                
            ],
            borderColor: [
                '#afd464'
            ],
            borderWidth: 2,
            pointStyle:'circle',
            radius:3,

            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                borderDash:12,
                
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes:[
                {
                    display:false,
                    circular:true,
                    
                    gridLines:[
                        {
                            display:true,
                        }
                    ]
                }
            ]
        },
        legend:{
            display: false,
            shape:"circle",
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});


let dateArr = [2011,2012,2013,2014,2015,2016];
let orderCountArr = [7, 1, 6, 4, 6, 4];
let orderCountArr2 = [10, 1, 5, 7, 3, 4];
let viewerCountArr = [13,12,15,14,20,17];
let ctx3 = document.getElementById('myRadarChart').getContext('2d');
let myRadarChart = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Orders ',
                data: orderCountArr,
               
                backgroundColor: [
                    '#B87AFF99',
                ],
                borderColor: [
                    '#B87AFF',
                ],
                textColor:'',
                
                borderWidth: 1,
               
                tension:0
            },
            {
                label: 'Viewer ',
                data: viewerCountArr,
                backgroundColor: [
                    '#00EFFF30',
                ],
                borderColor: [
                    '#00EFFF',
                ],
                borderWidth: 0,
                tension:0
            },
            {
                label: 'Orders ',
                data: orderCountArr2,
                backgroundColor: [
                    '#FFBD2330',
                ],
                borderColor: [
                    '#FFBD23',
                ],
                borderWidth: 1,
                spanGaps:false,
                tension:0
            }
        ]
    },
    options: {
        // layout: {
        //     padding: {
        //         left: 120,
        //         right: 0,
        //         top:0 ,
        //         bottom: 0
        //     }
        // },
        scales: {

            
            yAxes: [{
                display:false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes:[
                {
                    display:false,
                    gridLines:[
                        {
                            display:true
                        }
                    ]
                }
            ]
        },
        legend:{
            display: true,
            fullWidth: false,
            
            
            position: 'top',
            align:'center',
            labels: {
                fontSize:10,
                fontColor: '#fff',
                usePointStyle: false,
                boxWidth: 20,
                padding: 10,
            }
        }
    }
});

let orderFromPlace = [7,9,4,5,7,3];
let places = ["YGN","MDY","NPY","SHAN","MGW","Kyan"];


var value = 50;
var data = {
  labels: places,
  datasets: [
    {
      data: orderFromPlace,
      backgroundColor: [
        "#FF6384",
        "#8A00FF",
        "#00B1FF",
        "#64D600",
        "#FFBB00",
        "#F9874D"
      ],
      borderWidth:0,
      hoverBackgroundColor: [
        "#FF6384",
        "#8A00FF",
        "#00B1FF",
        "#64D600",
        "#FFBB00",
        "#F9874D"
      ],
      hoverBorderColor: [
        "#FF6384",
        "#8A00FF",
        "#00B1FF",
        "#64D600",
        "#FFBB00",
        "#F9874D"
      ],
      hoverBorderWidth:15,
      
    }]
};

var myPieChart = new Chart(document.getElementById('myPieChart'), {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    legend:{
        display: true,
        fullWidth: false,
            
            
        position: 'left',
        align:'start',
        labels: {
            fontSize:10,
            fontColor: '#fff',
            usePointStyle: false,
            boxWidth: 20,
            padding: 10,
        }
    },
    cutoutPercentage: 75,
    tooltips: {
        filter: function(item, data) {
        var label = data.labels[item.index];
        if (label) return item;
      }
    }
  }
});



var bar_ctx1 = document.getElementById('bar-chart').getContext('2d');

var purple_orange_gradient = bar_ctx1.createLinearGradient(50, 0, 400, 0);
purple_orange_gradient.addColorStop(0, '#00E5FF');
purple_orange_gradient.addColorStop(1, 'black');

var bar_chart = new Chart(bar_ctx1, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","aa","bb","cc"],
        datasets: [{
            label: '# of Votes',
            data: [5, 6, 7, 12, 6, 13,7,5,4],
                        backgroundColor: purple_orange_gradient,
                        hoverBackgroundColor: purple_orange_gradient,
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'purple'
        }]
    },
    options: {
                baselineColor:'#fff',
                vAxis: {
                    baselineColor:'orange',
                textPosition: 'none',
                gridlines: {
                color: 'transparent'
                }
                },
                scales: {
                    yAxes: [{
                        display:false,
                        borderDash:12,
                        
                        ticks: {
                            beginAtZero: true,
                        }
                    }],
                    xAxes:[
                        {
                            display:false,
                            circular:true,
                            baselineColor:'#fff',
                            
                            gridLines:[
                                {
                                    display:true,
                                    color:'transparent'
                                }
                            ]
                        }
                    ]
                },
                legend:{
                    display: false,
                    shape:"circle",
                    position: 'top',
                    labels: {
                        fontColor: '#333',
                        usePointStyle:true
                    }
                }
            }
        });


        var bar_ctx1 = document.getElementById('bar-chart1').getContext('2d');

        var purple_orange_gradient = bar_ctx1.createLinearGradient(110, 0, 400, 0);
        purple_orange_gradient.addColorStop(1, '#C604FF');
        purple_orange_gradient.addColorStop(0, '#BE00EB');

        var bar_chart = new Chart(bar_ctx1, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","aa","bb","cc"],
                datasets: [{
                    label: '# of Votes',
                    data: [4, 6, 7, 12, 10, 13,3,2,1],
                                backgroundColor: purple_orange_gradient,
                                hoverBackgroundColor: purple_orange_gradient,
                                hoverBorderWidth: 2,
                                hoverBorderColor: 'purple'
                }]
            },
            options: {
                        baselineColor:'#fff',
                        vAxis: {
                            baselineColor:'orange',
                        textPosition: 'none',
                        gridlines: {
                        color: 'transparent'
                        }
                        },
                        scales: {
                            yAxes: [{
                                display:false,
                                borderDash:12,
                        
                                ticks: {
                                    beginAtZero: true,
                                }
                            }],
                            xAxes:[
                                {
                                    display:false,
                                    circular:true,
                                    baselineColor:'#fff',
                            
                                    gridLines:[
                                        {
                                            display:true,
                                            color:'transparent'
                                        }
                                    ]
                                }
                            ]
                        },
                        legend:{
                            display: false,
                            shape:"circle",
                            position: 'top',
                            labels: {
                                fontColor: '#333',
                                usePointStyle:true
                            }
                        }
                    }
                });



                var bar_ctx1 = document.getElementById('bar-chart2').getContext('2d');

                var purple_orange_gradient = bar_ctx1.createLinearGradient(0, 50, 0, 200);
                purple_orange_gradient.addColorStop(0, '#00FF91');
                purple_orange_gradient.addColorStop(1, 'black');
        
                var bar_chart = new Chart(bar_ctx1, {
                    type: 'bar',
                    data: {
                        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","aa","bb","cc"],
                        datasets: [{
                            label: '# of Votes',
                            data: [5, 6, 10, 12, 10, 13,8,9,4],
                                        backgroundColor: purple_orange_gradient,
                                        hoverBackgroundColor: purple_orange_gradient,
                                        hoverBorderWidth: 2,
                                        hoverBorderColor: 'purple'
                        }]
                    },
                    options: {
                                baselineColor:'#fff',
                                vAxis: {
                                    baselineColor:'orange',
                                textPosition: 'none',
                                gridlines: {
                                color: 'transparent'
                                }
                                },
                                scales: {
                                    yAxes: [{
                                        display:false,
                                        borderDash:12,
                                
                                        ticks: {
                                            beginAtZero: true,
                                        }
                                    }],
                                    xAxes:[
                                        {
                                            display:false,
                                            circular:true,
                                            baselineColor:'#fff',
                                    
                                            gridLines:[
                                                {
                                                    display:true,
                                                    color:'transparent'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                legend:{
                                    display: false,
                                    shape:"circle",
                                    position: 'top',
                                    labels: {
                                        fontColor: '#333',
                                        usePointStyle:true
                                    }
                                }
                            }
                        });
        





        


        var ctx = document.getElementById('myBarChartForFacebook').getContext('2d');

        var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 400);
        purple_orange_gradient.addColorStop(1, 'blue');
        purple_orange_gradient.addColorStop(0, '#FFB959');
        
        var bar_chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple",],
                datasets: [{
                    label: '# of Votes',
                    data: [5, 6, 7, 12, 6,],
                                backgroundColor: purple_orange_gradient,
                                hoverBackgroundColor: purple_orange_gradient,
                                hoverBorderWidth: 2,
                                barPercentage: 0.0,
                                barThickness: 5.8,
                                hoverBorderColor: 'purple'
                                
                }]
            },
            options: {
                        baselineColor:'#fff',
                        vAxis: {
                            baselineColor:'orange',
                        textPosition: 'none',
                        gridlines: {
                        color: 'transparent'
                        }
                        },
                        scales: {
                            yAxes: [{
                                display:false,
                                borderDash:12,
                                
                                ticks: {
                                    beginAtZero: true,
                                }
                            }],
                            xAxes:[
                                {
                                    display:false,
                                    circular:true,
                                    baselineColor:'#000',
                                    
                                    gridLines:[
                                        {
                                            display:true,
                                            color:'transparent'
                                        }
                                    ]
                                }
                            ]
                        },
                        legend:{
                            display: false,
                            shape:"circle",
                            position: 'top',
                            labels: {
                                fontColor: '#333',
                                usePointStyle:true
                            }
                        }
                    }
                });


                var ctx = document.getElementById('myBarChartForFacebook1').getContext('2d');

                var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0,500);
                purple_orange_gradient.addColorStop(1, 'blue');
                purple_orange_gradient.addColorStop(0, '#ED47FF');
                        
                var bar_chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Red", "Blue", "Yellow", "Green", "Purple",],
                        datasets: [{
                            label: '# of Votes',
                            data: [5, 6, 7, 12, 6,],
                                        backgroundColor: purple_orange_gradient,
                                        hoverBackgroundColor: purple_orange_gradient,
                                        hoverBorderWidth: 2,
                                        barPercentage: 0.0,
                                        barThickness: 5.8,
                                        hoverBorderColor: 'purple'
                                                
                        }]
                    },
                    options: {
                                baselineColor:'#fff',
                                vAxis: {
                                    baselineColor:'orange',
                                textPosition: 'none',
                                gridlines: {
                                color: 'transparent'
                                }
                                },
                                scales: {
                                    yAxes: [{
                                        display:false,
                                        borderDash:12,
                                                
                                        ticks: {
                                            beginAtZero: true,
                                        }
                                    }],
                                    xAxes:[
                                        {
                                            display:false,
                                            circular:true,
                                            baselineColor:'#000',
                                                    
                                            gridLines:[
                                                {
                                                    display:true,
                                                    color:'transparent'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                legend:{
                                    display: false,
                                    shape:"circle",
                                    position: 'top',
                                    labels: {
                                        fontColor: '#333',
                                        usePointStyle:true
                                    }
                                }
                            }
                        });
                        
        



                

