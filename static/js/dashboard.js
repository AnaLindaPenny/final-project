// grab data
d3.json("../Resources/final_MvDC.json").then(json => {
    var json_data = json
    console.log(json_data)

    // CHART 1
    // structure data
    gross_revs = []

    json_data.forEach(item => {
        var point = {
            x: item.year,
            y: item.imdb_gross
        }
        gross_revs.push(point)
    })

    console.log(gross_revs)
    // var mcu_values = []
    // var dceu_values = []
    // var xmen_values = []
    // var supe_values = []
    // var batman_values = []
    
    // var mcu_films = json_data.filter(film => film.universe_code === 1000)
    // console.log(mcu_films)

    // var dceu_films = json_data.filter(film => film.universe_code === 2000)
    // console.log(dceu_films)

    // var xmen_films = json_data.filter(film => film.universe_code === 3000)
    // console.log(xmen_films)

    // var supe_films = json_data.filter(film => film.universe_code === 4000)
    // console.log(supe_films)

    // var batman_films = json_data.filter(film => film.universe_code === 5000)
    // console.log(batman_films)

    // mcu_films.forEach(item => {
    //     mcu_values.push(item)        
    // })

    // dceu_films.forEach(item => {
    //     dceu_values.push(item)        
    // })

    // xmen_films.forEach(item => {
    //     xmen_values.push(item)        
    // })

    // supe_films.forEach(item => {
    //     supe_values.push(item)        
    // })

    // batman_films.forEach(item => {
    //     batman_values.push(item)        
    // })

    // var mcu_points = []
    // var dceu_points = []
    // var xmen_points = []
    // var batman_points = []
    // var supe_points = []

    // mcu_values.forEach(item => {
    //     var point = {
    //         x: item.year,
    //         y: item.imdb_gross
    //     }
    //     mcu_points.push(point)
    // })

    // dceu_values.forEach(item => {
    //     var point = {
    //         x: item.year,
    //         y: item.imdb_gross
    //     }
    //     dceu_points.push(point)
    // })

    // xmen_values.forEach(item => {
    //     var point = {
    //         x: item.year,
    //         y: item.imdb_gross
    //     }
    //     xmen_points.push(point)
    // })

    // batman_values.forEach(item => {
    //     var point = {
    //         x: item.year,
    //         y: item.imdb_gross
    //     }
    //     batman_points.push(point)
    // })

    // supe_values.forEach(item => {
    //     var point = {
    //         x: item.year,
    //         y: item.imdb_gross
    //     }
    //     supe_points.push(point)
    // })
    
    //  chart setup
    const data1 = {
        datasets: [{
            lable: "Films",
            data: gross_revs,
            backgroundColor: 'rgb(0,0,0)'
        }]
            // [{label: 'MCU',
            // data: mcu_points,
            // backgroundColor: 'rgb(255,0,0)'
            // },
            // {label: 'DCEU',
            // data: dceu_points,
            // backgroundColor: 'rgb(0,0,255)'
            // },
            // {label: 'X-Men',
            // data: xmen_points,
            // backgroundColor: 'rgb(255,255,0)'
            // },
            // {label: 'Batman',
            // data: batman_points,
            // backgroundColor: 'rgb(0,0,0)'
            // },
            // {label: 'Superman',
            // data: supe_points,
            // backgroundColor: 'rgb(0,128,0)'
            // }]
        ,
    };

    // chart config
    const config1 = {
        type: 'scatter',
        data: data1,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Release Year'
                    }   
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Gross Revenue ($)'
                    }
                }
            },
            layout: {
                padding: 100
            },
            plugins: {
                title: {
                    display: true,
                    text: "Gross Revenue of Superhero Films"
                }
            }
        }
    };

    //  render chart
    Chart.defaults.font.size = 20;
    Chart.defaults.font.family = "Tahoma";
    var Chart1 = new Chart(
        document.getElementById('Chart1'),
        config1
    );

    // CHART 2
    // structure data
    var mcu_bubbles = []
    var dceu_bubbles = []
    var xmen_bubbles = []
    var supe_bubbles = []
    var batman_bubbles = []
    
    var mcu_films = json_data.filter(film => film.universe_code === 1000)
    console.log(mcu_films)

    var dceu_films = json_data.filter(film => film.universe_code === 2000)
    console.log(dceu_films)

    var xmen_films = json_data.filter(film => film.universe_code === 3000)
    console.log(xmen_films)

    var supe_films = json_data.filter(film => film.universe_code === 4000)
    console.log(supe_films)

    var batman_films = json_data.filter(film => film.universe_code === 5000)
    console.log(batman_films)
    


    mcu_films.forEach(item => {
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        mcu_bubbles.push(bubble)        
    })

    dceu_films.forEach(item => {
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        dceu_bubbles.push(bubble)        
    })

    xmen_films.forEach(item => {
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        xmen_bubbles.push(bubble)        
    })

    supe_films.forEach(item => {
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        batman_bubbles.push(bubble)        
    })

    batman_films.forEach(item => {
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        supe_bubbles.push(bubble)        
    })

    // chart setup
    const data2 = {
        datasets: [
            {label: 'MCU',
            data: mcu_bubbles,
            backgroundColor: 'rgb(255,0,0)'
            },
            {label: 'DCEU',
            data: dceu_bubbles,
            backgroundColor: 'rgb(0,0,255)'
            },
            {label: 'X-Men',
            data: xmen_bubbles,
            backgroundColor: 'rgb(255,255,0)'
            },
            {label: 'Batman',
            data: batman_bubbles,
            backgroundColor: 'rgb(0,0,0)'
            },
            {label: 'Superman',
            data: supe_bubbles,
            backgroundColor: 'rgb(0,128,0)'
            }
        ]
      };

    // chart config
    const config2 = {
        type: 'bubble',
        data: data2,
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tomato Audience Score'
                    }  
                },
                y: {
                    title: {
                        display: true,
                        text: 'Tomatometer Score'
                    }
                }
            },
            layout: {
                padding: 100
            },
            plugins: {
                title: {
                    display: true,
                    text: "Audience Rating Vs Critic Rating with Gross Revenue"
                }
            }
        }
      };

    // render chart
    Chart.defaults.font.size = 20;
    Chart.defaults.font.family = "Tahoma";
    var Chart2 = new Chart(
        document.getElementById('Chart2'),
        config2
    )

    // CHART 3
    // structure data
    var slices = []

    var mcu_grosses = []
    var dceu_grosses = []
    var xmen_grosses = []
    var supe_grosses = []
    var batman_grosses = []
    
    var mcu_films = json_data.filter(film => film.universe_code === 1000)
    console.log(mcu_films)

    var dceu_films = json_data.filter(film => film.universe_code === 2000)
    console.log(dceu_films)

    var xmen_films = json_data.filter(film => film.universe_code === 3000)
    console.log(xmen_films)

    var supe_films = json_data.filter(film => film.universe_code === 4000)
    console.log(supe_films)

    var batman_films = json_data.filter(film => film.universe_code === 5000)
    console.log(batman_films)

    mcu_films.forEach(item => {
        mcu_grosses.push(item.imdb_gross)        
    })

    dceu_films.forEach(item => {
        dceu_grosses.push(item.imdb_gross)        
    })

    xmen_films.forEach(item => {
        xmen_grosses.push(item.imdb_gross)        
    })

    supe_films.forEach(item => {
        supe_grosses.push(item.imdb_gross)        
    })

    batman_films.forEach(item => {
        batman_grosses.push(item.imdb_gross)        
    })

    function adder(values) {
        let total = 0
        values.forEach(item => {
            total += item
        })
        slices.push(total)
        console.log(total)
    }

    console.log(slices)

    adder(mcu_grosses)
    adder(dceu_grosses)
    adder(xmen_grosses)
    adder(batman_grosses)
    adder(supe_grosses)    

    // chart setup
    const data3 = {
      labels: ['MCU', 'DCEU', 'X-Men', 'Batman', 'Superman'],
      datasets: [
        {
          label: 'Franchise',
          data: slices,
          backgroundColor: ['rgb(255,0,0)','rgb(0,0,255)','rgb(255,255,0)','rgb(0,0,0)','rgb(0,128,0)'],
        }
      ]
    };

    // chart config
    const config3 = {
        type: 'pie',
        data: data3,
        options: {
            layout: {
                padding: 100
            }, 
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gross Revenue ($) of Superhero Film Franchises'
            }
          }
        },
      };

    // render chart
    Chart.defaults.font.size = 20;
    Chart.defaults.font.family = "Tahoma";
    var Chart3 = new Chart(
        document.getElementById('Chart3'),
        config3
    )

    // CHART 4
    // structure data

    // chart setup

    // chart config

    // render chart
})
