// grab data
d3.json("https://leagueofavengers.herokuapp.com/api/imdb").then(json => {
    var json_data = json
    console.log(json_data)

    // CHART 1 (SCATTER: GROSS REVENUE FOR ALL SUPERHERO FILMS)
    // structure data
    var gross_revs = []
    var titles = []

    json_data.forEach(item => {
        titles.push(item.title)
        var point = {
            x: item.year,
            y: item.imdb_gross/1000000
        }
        gross_revs.push(point)
    })

    console.log(gross_revs)
    
    //  chart setup
    const data1 = {
        labels:titles,
        datasets: [{
            label: "Films",
            data: gross_revs,
            backgroundColor: 'rgb(0,0,0)'
        }],
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
                    },
                    ticks: {
                        minRotation: 50,
                        callback: function(value, index, values) {
                            return ' ' + value
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Millions (USD)'
                    }                    
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Gross Revenue of All Superhero Films"
                },
                tooltip: {
                    displayColors: false,
                    backgroundColor: 'rgb(0,0,0)',
                    callbacks: {
                        title: function(item, object) {
                            return data1.labels[item[0].dataIndex]                           
                        },
                        label: function(item, object) {                            
                            let year = item.element.parsed.x
                            
                            let label = "Release Year: " + year
                            return label
                        },
                        afterLabel: function(item, object) {
                            let revenue = item.element.parsed.y

                            let afterLabel = "Gross Revenue: $" + revenue + " million"
                            return afterLabel
                        }
                    }                    
                }
            }
        }
    };

    //  render chart
    Chart.defaults.font.size = 20;
    var Chart1 = new Chart(
        document.getElementById('Chart1'),
        config1
    );

    // CHART 2 (BUBBLE: FILM SERIES RATINGS W/ GROSS REVENUE)
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
    
    var mcu_title_list = []
    var dceu_title_list = []
    var xmen_title_list = []
    var supe_title_list = []
    var batman_title_list = []
    

    mcu_films.forEach(item => {
        mcu_title_list.push(item.title)
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        mcu_bubbles.push(bubble)        
    })

    dceu_films.forEach(item => {
        dceu_title_list.push(item.title)
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        dceu_bubbles.push(bubble)        
    })

    xmen_films.forEach(item => {
        xmen_title_list.push(item.title)
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        xmen_bubbles.push(bubble)        
    })

    supe_films.forEach(item => {
        supe_title_list.push(item.title)
        var bubble = {
            x: item.tom_aud_score,
            y: item.tomato_meter,
            r: item.imdb_gross/50000000
        }
        batman_bubbles.push(bubble)        
    })

    batman_films.forEach(item => {
        batman_title_list.push(item.title)
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
            backgroundColor: 'rgb(255,215,0)'
            },
            {label: 'Superman',
            data: batman_bubbles,
            backgroundColor: 'rgb(0,128,0)'
            },
            {label: 'Batman',
            data: supe_bubbles,
            backgroundColor: 'rgb(105,105,105)'
            }
        ]
      };

    // chart config
    const config2 = {
        type: 'bubble',
        data: data2,
        options: {
            datasets: {
                bubble: {
                    borderColor: "rgb(0,0,0)",
                    borderWidth: 3
                }
            },
            scales: {
                x: {
                    min: 0,
                    title: {
                        display: true,
                        text: 'Tomato Audience Score'
                    },
                    ticks: {
                        minRotation: 50
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Tomatometer Score'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Audience Rating Vs Critic Rating with Gross Revenue"
                },
                tooltip: {
                    displayColors: false,
                    backgroundColor: 'rgb(0,0,0)',
                    callbacks: {
                        label: function(item,object) {

                            let index = item.dataIndex
                            let revenue = item.raw.r*50
                            
                            if (item.datasetIndex === 0) {
                                let label = mcu_title_list[index] + ": $" + revenue.toFixed(2) + " million"
                                return label
                            }
                            else if (item.datasetIndex === 1) {
                                let label = dceu_title_list[index] + ": $" + revenue.toFixed(2) + " million"
                                return label
                            }
                            else if (item.datasetIndex === 2) {
                                let label = xmen_title_list[index] + ": $" + revenue.toFixed(2) + " million"
                                return label
                            }
                            else if (item.datasetIndex === 3) {
                                let label = supe_title_list[index] + ": $" + revenue.toFixed(2) + " million"
                                return label
                            }
                            else if (item.datasetIndex === 4) {
                                let label = batman_title_list[index] + ": $" + revenue.toFixed(2) + " million"
                                return label
                            }

                            
                            
                        }                                                 
                    }                    
                }
            }
        }
    };

    // render chart
    Chart.defaults.font.size = 20;
    var Chart2 = new Chart(
        document.getElementById('Chart2'),
        config2
    )

    // CHART 3 (PIE: FRANCHISE GROSS REVENUE)
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
          backgroundColor: ['rgb(255,0,0)','rgb(0,0,255)','rgb(255,215,0)','rgb(105,105,105)','rgb(0,128,0)'],
        }
      ]
    };

    // chart config
    const config3 = {
        type: 'pie',
        data: data3,
        options: {
            datasets: {
                pie: {
                    borderColor: "rgb(0,0,0)"
                }
            },
            borderWidth: 3,
            responsive: true,
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        label: function(item,object) {

                            let title = item.label
                            let revenue = item.formattedValue

                            let label = title + ": $" + revenue
                            return label
                        }
                    }
                },
                legend: {
                    display: false
            },
            title: {
                display: true,
                text: 'Gross Revenue (USD) of Superhero Film Franchises'
            }
          }
        },
      };

    // render chart
    Chart.defaults.font.size = 20;
    var Chart3 = new Chart(
        document.getElementById('Chart3'),
        config3
    )

    // CHART 4 (SCATTER: MCU GROSS REVENUE)
    // structure data
    mcu_gross_revs = []
    mcu_titles = []


    var mcu_films = json_data.filter(film => film.universe_code === 1000)
    
    mcu_films.forEach(item => {
        mcu_titles.push(item.title)
        var point = {
            x: item.year,
            y: item.imdb_gross/1000000
        }
        mcu_gross_revs.push(point)
    })

    // chart setup
    const data4 = {
        datasets: [{
            label: "Films",
            data: mcu_gross_revs,
            backgroundColor: 'rgb(255,0,0)'
        }],
    };
    // chart config
    const config4 = {
        type: 'scatter',
        data: data4,
        options: {
            datasets: {
                scatter: {
                    borderColor: "rgb(0,0,0)",
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Release Year'
                    },
                    ticks: {
                        minRotation: 50,
                        callback: function(value, index, values) {
                            return ' ' + value
                        }
                    }  
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Millions (USD)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Gross Revenue of MCU Films"
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return mcu_titles[tooltipItems[0].dataIndex]                           
                        },
                        label: function(item, object) {                            
                            let year = item.element.parsed.x
                            
                            let label = "Release Year: " + year
                            return label
                        },
                        afterLabel: function(item, object) {
                            let revenue = item.element.parsed.y

                            let afterLabel = "Gross Revenue: $" + revenue + " million"
                            return afterLabel
                        }
                    }
                }
            }
        }
    };
    // render chart
    Chart.defaults.font.size = 20;
    var Chart4 = new Chart(
        document.getElementById('Chart4'),
        config4
    )

    // CHART 5 (SCATTER: DCEU GROSS REVENUE)
    // structure data
    dceu_gross_revs = []
    dceu_titles = []

    var dceu_films = json_data.filter(film => film.universe_code === 2000)
    
    dceu_films.forEach(item => {
        dceu_titles.push(item.title)
        var point = {
            x: item.year,
            y: item.imdb_gross/1000000
        }
        dceu_gross_revs.push(point)
    })

    // chart setup
    const data5 = {
        datasets: [{
            label: "Films",
            data: dceu_gross_revs,
            backgroundColor: 'rgb(0,0,255)'
        }],
    };
    // chart config
    const config5 = {
        type: 'scatter',
        data: data5,
        options: {
            datasets: {
                scatter: {
                    borderColor: "rgb(0,0,0)",
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Release Year'
                    },
                    ticks: {
                        minRotation: 50,
                        callback: function(value, index, values) {
                            return ' ' + value
                        }
                    }   
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Millions (USD)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Gross Revenue of DCEU Films"
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return dceu_titles[tooltipItems[0].dataIndex]                           
                        },
                        label: function(item, object) {                            
                            let year = item.element.parsed.x
                            
                            let label = "Release Year: " + year
                            return label
                        },
                        afterLabel: function(item, object) {
                            let revenue = item.element.parsed.y

                            let afterLabel = "Gross Revenue: $" + revenue + " million"
                            return afterLabel
                        }
                    }
                }
            }
        }
    };
    // render chart
    Chart.defaults.font.size = 20;
    var Chart5 = new Chart(
        document.getElementById('Chart5'),
        config5
    )

    // CHART 6 ((SCATTER: X-MEN GROSS REVENUE))
    // structure data
    xmen_gross_revs = []
    xmen_titles = []

    var xmen_films = json_data.filter(film => film.universe_code === 3000)
    
    xmen_films.forEach(item => {
        xmen_titles.push(item.title)
        var point = {
            x: item.year,
            y: item.imdb_gross/1000000
        }
        xmen_gross_revs.push(point)
    })

    // chart setup
    const data6 = {
        datasets: [{
            label: "Films",
            data: xmen_gross_revs,
            backgroundColor: 'rgb(255,215,0)'
        }],
    };
    // chart config
    const config6 = {
        type: 'scatter',
        data: data6,
        options: {
            datasets: {
                scatter: {
                    borderColor: "rgb(0,0,0)",
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Release Year'
                    },
                    ticks: {
                        minRotation: 50,
                        callback: function(value, index, values) {
                            return ' ' + value
                        }
                    }   
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Millions (USD)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Gross Revenue of X-Men Films"
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return xmen_titles[tooltipItems[0].dataIndex]                           
                        },
                        label: function(item, object) {                            
                            let year = item.element.parsed.x
                            
                            let label = "Release Year: " + year
                            return label
                        },
                        afterLabel: function(item, object) {
                            let revenue = item.element.parsed.y

                            let afterLabel = "Gross Revenue: $" + revenue + " million"
                            return afterLabel
                        }
                    }
                }
            }
        }
    };
    // render chart
    Chart.defaults.font.size = 20;
    var Chart6 = new Chart(
        document.getElementById('Chart6'),
        config6
    )

    // CHART 7 (SCATTER: SUPERMAN GROSS REVENUE)
    // structure data
    supe_gross_revs = []
    supe_titles = []

    var supe_films = json_data.filter(film => film.universe_code === 4000)
    
    supe_films.forEach(item => {
        supe_titles.push(item.title)
        var point = {
            x: item.year,
            y: item.imdb_gross/1000000
        }
        supe_gross_revs.push(point)
    })

    // chart setup
    const data7 = {
        datasets: [{
            label: "Films",
            data: supe_gross_revs,
            backgroundColor: 'rgb(0,255,0)'
        }],
    };
    // chart config
    const config7 = {
        type: 'scatter',
        data: data7,
        options: {
            datasets: {
                scatter: {
                    borderColor: "rgb(0,0,0)",
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Release Year'
                    },
                    ticks: {
                        minRotation: 50,
                        callback: function(value, index, values) {
                            return ' ' + value
                        }
                    } 
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Millions (USD)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Gross Revenue of Superman Films"
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return supe_titles[tooltipItems[0].dataIndex]                           
                        },
                        label: function(item, object) {                            
                            let year = item.element.parsed.x
                            
                            let label = "Release Year: " + year
                            return label
                        },
                        afterLabel: function(item, object) {
                            let revenue = item.element.parsed.y

                            let afterLabel = "Gross Revenue: $" + revenue + " million"
                            return afterLabel
                        }
                    }
                }
            }
        }
    };
    // render chart
    Chart.defaults.font.size = 20;
    var Chart7 = new Chart(
        document.getElementById('Chart7'),
        config7
    )

    // CHART 8 (SCATTER: BATMAN GROSS REVENUE)
    // structure data
    batman_gross_revs = []
    batman_titles = []

    var batman_films = json_data.filter(film => film.universe_code === 5000)
    
    batman_films.forEach(item => {
        batman_titles.push(item.title)
        var point = {
            x: item.year,
            y: item.imdb_gross/1000000
        }
        batman_gross_revs.push(point)
    })

    // chart setup
    const data8 = {
        datasets: [{
            label: "Films",
            data: batman_gross_revs,
            backgroundColor: 'rgb(105,105,105)'
        }],
    };
    // chart config
    const config8 = {
        type: 'scatter',
        data: data8,
        options: {
            datasets: {
                scatter: {
                    borderColor: "rgb(0,0,0)",
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Release Year'
                    },
                    ticks: {
                        minRotation: 50,
                        callback: function(value, index, values) {
                            return ' ' + value
                        }
                    }   
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Millions (USD)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Gross Revenue of Batman Films"
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return batman_titles[tooltipItems[0].dataIndex]                           
                        },
                        label: function(item, object) {                            
                            let year = item.element.parsed.x
                            
                            let label = "Release Year: " + year
                            return label
                        },
                        afterLabel: function(item, object) {
                            let revenue = item.element.parsed.y

                            let afterLabel = "Gross Revenue: $" + revenue + " million"
                            return afterLabel
                        }
                    }
                }
            }
        }
    };
    // render chart
    Chart.defaults.font.size = 20;
    var Chart8 = new Chart(
        document.getElementById('Chart8'),
        config8
    )

    // CHART 9 (BAR: TOTAL FILMS PER FRANCHISE)
    // structure data
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

    var total_films = []

    function film_counter(array) {
        var count = array.length
        total_films.push(count)
    }

    film_counter(mcu_films)
    film_counter(dceu_films)
    film_counter(xmen_films)
    film_counter(supe_films)
    film_counter(batman_films)

    // chart setup
    const labels = ["MCU","DCEU","X-Men","Superman", "Batman"];
    const data9 = {
      labels: labels,
      datasets: [{
        label: 'Films',
        data: total_films,
        backgroundColor: ["rgb(255,0,0)","rgb(0,0,255)","rgb(255,215,0)","rgb(0,128,0)","rgb(105,105,105)"],
        borderColor: ["rgb(0,0,0)"],
        borderWidth: 3,
        borderRadius: 100,
        borderSkipped: false
      }]
    };
    // chart config
    const config9 = {
        type: 'bar',
        data: data9,
        options: {
            indexAxis: "y",
            scales: {
                y: {
                beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function(item,object) {
                            return ""
                        }
                    }
                },
                title: {
                    display: true,
                    text: "Film Count by Superhero Film Franchise"
                },
                legend: {
                    display: false
                },
            }
        },
    };
    // render chart
    Chart.defaults.font.size = 20;
    var Chart9 = new Chart(
        document.getElementById('Chart9'),
        config9
    )
})