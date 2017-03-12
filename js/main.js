
$('.navbar-toggle').unbind('click');
$('.collapse').unbind('click');

$('.menu-icon').click(function() {
    $('.overlay').addClass('visible');
    $('.menu-wrapper').addClass('transform');
});

$('.closed').click(function() {
    $('.overlay').removeClass('visible');
    $('.menu-wrapper').removeClass('transform');
});

$('.overlay').click(function() {
    $('.overlay').removeClass('visible');
    $('.menu-wrapper').removeClass('transform');
});

$('.dropdown-submenu a').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 1000);
            return false;
        }
    }
});

function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}

$(document).ready(function() {

    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22BTCUSD,BTCRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(d) {
        //console.log(d);
        $.each(d.query.results.rate, function(key, val) {
            // console.log(val);
            if (val.id == "BTCUSD") {
                $("#usdbtc").html(Math.round(val.Rate));
            }
            if (val.id == "BTCRUB") {
                $("#rubbtc").html(Math.round(val.Rate));
            }

        });
    });

    //investment

    if ($('body').hasClass('investment')) {
        // expand - collapse inv-grid-item-descr
        $('.inv-grid-item-header').on('click', function() {
            $(this).next().slideToggle('fast');
        });

        // Build the chart
        Highcharts.chart('mypie', {
            chart: {
                backgroundColor: null,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                itemStyle: {
                    "color": "#474747",
                    "cursor": "pointer",
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    'margin-bottom': "10px"
                },
                itemMarginBottom: 10,
                itemHoverStyle: {
                    "color": "#474747"
                },
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'vertical'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [
                {
                    name: 'Доля',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Косервативные инструменты',
                            y: 90,
                            color: '#00b300 '
                        }, {
                            name: 'Сбалансированные инструменты',
                            y: 8,
                            color: '#55caf5'
                        }, {
                            name: 'Агрессивные инструменты',
                            y: 2,
                            color: '#fa3b5a'

                        }
                    ]
                }
            ]
        });

        Highcharts.chart('mypie2', {
            chart: {
                backgroundColor: null,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                itemStyle: {
                    "color": "#474747",
                    "cursor": "pointer",
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    'margin-bottom': "10px"
                },
                itemMarginBottom: 10,
                itemHoverStyle: {
                    "color": "#474747"
                },
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'vertical'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [
                {
                    name: 'Доля',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Косервативные инструменты',
                            y: 70,
                            color: '#00b300'
                        }, {
                            name: 'Сбалансированные инструменты',
                            y: 20,
                            color: '#55caf5'

                        }, {
                            name: 'Агрессивные инструменты',
                            y: 10,
                            color: '#fa3b5a'

                        }
                    ]
                }
            ]
        });

        Highcharts.chart('mypie3', {
            chart: {
                backgroundColor: null,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                itemStyle: {
                    "color": "#474747",
                    "cursor": "pointer",
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    'margin-bottom': "10px"
                },
                itemMarginBottom: 10,
                itemHoverStyle: {
                    "color": "#474747"
                },
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'vertical'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [
                {
                    name: 'Доля',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Косервативные инструменты',
                            y: 40,
                            color: '#00b300'
                        }, {
                            name: 'Сбалансированные инструменты',
                            y: 30,
                            color: '#55caf5'

                        }, {
                            name: 'Агрессивные инструменты',
                            y: 30,
                            color: '#fa3b5a'

                        }
                    ]
                }
            ]
        });

        //грузим все
        $.get("//reg.bigtime.fund/exp.php", function(d) {

            jQuery.each(d, function(i, item) {
                // console.log(item);
                // console.log(item.title);

                //add_token(item.inteval,item.tip,item.start,item.price,item.lastprice,item.startprice,item.ticker,item.rel,item.title);
                var line;
                line += "<tr class='pie firstline' data-tid='" + item.id + "' data-tokensold='" + item.mint + "' data-interval='" + item.interv + "' data-tip='" + item.tip + "' data-start='" + item.start + "' data-price='" + item.price + "' data-lastprice='" + item.price + "' data-startprice='" + item.lastprice + "' data-ticker='" + item.ticker + "' rel='" + item.rel + "'>";
                line += "<td>" + item.title + "</td>";
                line += "<td class='tip'>" + item.tip + "</td>";
                line += "<td class='number'><span class='currentprice'>" + item.startprice + "</span> р</td>";
                line += "<td class='number mytokenbalance'>" + item.price + "</td>";
                <!-- не менять! считается само-->
                line += "<td class='number rost'>" + item.start + "</td>";
                line += "<td class=pie-link><a href=# onclick='$(\"#moreinfo\").show();return false'>Подробнее <i class='fa fa-hand-o-right' aria-hidden='true'></i></a></td>";

                line += '</tr>';
                // console.log(line);
                $("#tokenstable").append(line);

                //
            });
            // fill_table();
        }, "json");

        var getCockieIndex = getCockie();

        if (getCockieIndex === "") {
            setTimeout(function() {
                typeJs();
            }, 2000)
        } else {
            typeJs();
        }

        function typeJs() {

            $("#typed").typed({

                strings: ["Финансовые инструменты будущего уже сейчас используют открытые блокчейн-сети,<br> собственность имеет надежное цифровое воплощение, а все операции полностью<br> прозрачны для инвестора."],
                // stringsElement: $('#typed-strings'),
                typeSpeed: 3,
                backDelay: 0,
                loop: false,
                // contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false
                // callback: function(){ foo(); },
                // resetCallback: function() { newTyped(); }
            });

        }

    }

    if ($('body').hasClass('industry')) {
      // init Masonry
      // var $grid = $('.masonry-wrap').masonry({itemSelector: '.masonry-item', percentPosition: true});
      // // layout Isotope after each image loads
      // $grid.imagesLoaded().progress(function() {
      //     $grid.masonry();
      //     $(window).resize();
      // });


      // $.ajax({
      //   url: 'https://noxonfund.com/btnews.php',
      //   dataType: 'xml'
      // }).done(function(xmlDoc) {
      //
      //   console.log(xmlDoc);
      //
      //   $(xmlDoc).find('item').each(function(index) {
      //
      //     console.log($(this).find('thumbnail'));
      //
      //     $(".news:first .news_title").html($(this).find('title').text());
      //     $(".news:first .news_image").attr("src", $(this).find('thumbnail').attr("url"));
      //     //v$(".news:first .news_title").html($(this).find('title').text());ar channel = $(this).find('encoded').html();
      //     //var hd = $(this).find('FeedIsHD').text();
      //     //$('.box ul').append('<li>'+channel+'</li>');
      //   });
      //   // do stuff
      // });

    }

    if ($('body').hasClass('home-page')) {
        now = new Date();
        $.when($.getJSON('https://noxonfund.com/btcchart.php')).done(function(btc) {
            //console.log(btc);

            $('.chart2').highcharts({
                chart: {
                    type: 'spline',
                    //										width: 1140,
                    height: 500
                },
                title: {
                    text: '111111',
                    style: {
                        "color": "transparent"
                    }
                },
                legend: {
                    enabled: true
                },

                credits: {
                    enabled: false
                },
                subtitle: {
                    text: false
                },
                xAxis: {
                    type: 'datetime',

                    labels: {
                        enabled: true
                    },
                    color: 'red'
                },

                tooltip: {

                    formatter: function() {
                        var date = new Date(new Date().setTime(this.x));
                        return date.toLocaleDateString() + " - " + this.y / 1000000000 + " млрд. долл."; // this.series.name ;//+'</b>';'<br/>' + this.y + ' ETH <br/>' + //(~$'+Math.round(this.y*1300)/100+')
                        date.toLocaleDateString(); //+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()

                    },
                    shared: true
                },
                yAxis: [
                    {
                        //maxPadding: 0.07,
                        title: {
                            text: '24h volume',
                            style: {
                                color: Highcharts.getOptions().colors[1]
                            }
                        },
                        labels: {

                            formatter: function() {
                                return Math.round(this.value / 1000000).toString() + "m. USD";
                            }
                        }
                    }, {
                        //max: 0.01,
                        title: {
                            text: 'Market Cap',
                            style: {
                                color: Highcharts.getOptions().colors[0]
                            }
                        },
                        labels: {

                            formatter: function() {
                                return Math.round(this.value / 1000000000).toString() + "B. USD";
                            }
                        },
                        plotLines: [
                            {
                                value: 0,
                                width: 1,
                                color: 'rgba(255,255,255,0)'
                            }
                        ],
                        opposite: true
                    }

                ],
                plotOptions: {
                    spline: {
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 2
                            }
                        }
                    }
                },
                series: [
                    {
                        name: 'Market CAP, USD',
                        yAxis: 1,
                        data: btc.market_cap_by_available_supply
                    }, {
                        name: '24h trade volume, USD',
                        data: btc.volume_usd,
                        yAxis: 0,
                        type: 'column'
                    }
                ]
            }, function(chart) {});
        });

        var dateNow = new Date();

        Highcharts.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Lato:400,700',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);

        Highcharts.theme = {
            colors: [
                '#fa3b5a',
                '#55caf5',
                '#f45b5b',
                '#7798BF',
                '#aaeeee',
                '#ff0066',
                '#eeaaee',
                '#55BF3B',
                '#DF5353',
                '#7798BF',
                '#aaeeee'
            ],
            chart: {
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 1
                    },
                    stops: [
                        [
                            0, '#2a2a2b'
                        ],
                        [1, '#3e3e40']
                    ]
                },
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                type: 'datetime',
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },

            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },

            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };

        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);

        $.get("http://bigtime.fund/blockchain/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%B8%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D0%B8-2/", function(d) {
            $("#xnews").html(d);
        });

        var getCockieIndex = getCockie();

        if (getCockieIndex === "") {
            setTimeout(function() {
                typeJs();
            }, 2000)
        } else {
            typeJs();
        }

        //грузим все
        $.get("//reg.bigtime.fund/exp.php", function(d) {

            jQuery.each(d, function(i, item) {
                // console.log(item);
                // console.log(item.title);

                //add_token(item.inteval,item.tip,item.start,item.price,item.lastprice,item.startprice,item.ticker,item.rel,item.title);
                var line;
                line += "<tr class='pie firstline' data-tid='" + item.id + "' data-tokensold='" + item.mint + "' data-interval='" + item.interv + "' data-tip='" + item.tip + "' data-start='" + item.start + "' data-price='" + item.price + "' data-lastprice='" + item.price + "' data-startprice='" + item.lastprice + "' data-ticker='" + item.ticker + "' rel='" + item.rel + "'>";
                line += "<td>" + item.title + "</td>";
                line += "<td class='tip'>" + item.tip + "</td>";
                line += "<td class='number'><span class='currentprice'>" + item.startprice + "</span> р</td>";
                line += "<td class='number mytokenbalance'>" + item.price + "</td>";
                <!-- не менять! считается само-->
                line += "<td class='number rost'>" + item.start + "</td>";
                line += "<td class=pie-link><a href=# onclick='$(\"#moreinfo\").show();return false'>Подробнее <i class='fa fa-hand-o-right' aria-hidden='true'></i></a></td>";

                line += '</tr>';
                // console.log(line);
                $("#tokenstable").append(line);

                //
            });
            // fill_table();
        }, "json");

        function typeJs() {

            $("#typed").typed({

                strings: ["Мы - команда блокчейн-энтузиастов из России которая прямо сейчас создает инвестиционный фонд в высокотехнологичные проекты на основе<br> цифровой собственности и прозрачности всех операций."],
                // stringsElement: $('#typed-strings'),
                typeSpeed: 5,
                backDelay: 0,
                loop: false,
                // contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false
                // callback: function(){ foo(); },
                // resetCallback: function() { newTyped(); }
            });
        }

    }

    if ($('body').hasClass('blockchain-page')) {

        $('#slider-1').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            dots: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        dots: false
                    }
                }
            ]
        });
        $('#slider-2').slick({
            infinite: true, slidesToShow: 1, slidesToScroll: 1, speed: 1000,
            //			autoplay: true,
            autoplaySpeed: 5000,
            cssEase: 'linear',
            dots: true,
            adaptiveHeight: true
        });

        $('.navbar-toggle').click(function() {
            $('.collapse').toggle();
        });

        /*$.getJSON("https://buygazprom.com/rateslocal.php", function(d) {
				$("#rubbtc").html(d.RUB.avg_1h);
			}); */

        if ($(window).width() > 1200) {
            $('.show-btn').click(function() {
                $(this).siblings('.text-container').toggleClass("show");
                $(this).toggleClass("rotate");
                $(this).parents('.masonry-item').siblings().find('.text-container').removeClass('show');
                $(this).parents('.masonry-item').siblings().find('.show-btn').removeClass('rotate');
                $(this).parents('.masonry-item').next().next().toggleClass('move-down');
            });

            // init Masonry
            var $grid = $('.masonry-wrap').masonry({itemSelector: '.masonry-item', percentPosition: true});
            // layout Isotope after each image loads
            $grid.imagesLoaded().progress(function() {
                $grid.masonry();
                $(window).resize();
            });

        } else {
            $('.text-container').addClass('show');
            $('.show-btn').remove();
        }

        // Load the fonts
        // import Highcharts from '../parts/Globals.js';
        Highcharts.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Unica+One',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);

        Highcharts.theme = {
            colors: [
                '#fde333',
                '#fde333',
                '#fde333',
                '#fde333',
                '#fde333',
                '#ff0066',
                '#eeaaee',
                '#55BF3B',
                '#DF5353',
                '#7798BF',
                '#aaeeee'
            ],
            chart: {
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 1
                    },
                    stops: [
                        [
                            0, '#2a2a2b'
                        ],
                        [1, '#3e3e40']
                    ]
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            }
        };

        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);

        // Create the chart
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },

            title: {
                text: 'Инвестиции в блокчейн-проекты в 2016 году поквартально'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total investment'
                }

            },
            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}$'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:13px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} mln $</b><br/>'
            },

            series: [
                {
                    name: 'Total investment',
                    colorByPoint: true,
                    data: [
                        {
                            className: 'series-name',
                            name: 'Q4 2015',
                            y: 25,
                            drilldown: ''
                        }, {
                            name: 'Q1 2016',
                            y: 160,
                            drilldown: ''
                        }, {
                            name: 'Q2 2016',
                            y: 101,
                            drilldown: ''
                        }, {
                            name: 'Q3 2016',
                            y: 114,
                            drilldown: ''
                        }, {
                            name: 'Q4 2016',
                            y: 192,
                            drilldown: ''
                        }
                    ]
                }
            ],
            drilldown: {
                series: []
            }
        });
    }
    if ($('body').hasClass('fond-page')) {

        $('.map').click(function() {
            $('.map div').css("pointer-events", "auto");
        });

        $(".map").mouseleave(function() {
            $('.map div').css("pointer-events", "none");
        });

        var pos1 = new google.maps.LatLng(58.015650, 56.233170),
            pos2 = new google.maps.LatLng(55.728050, 37.635929),

            option1 = {
                zoom: 17,
                center: pos1,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 65
                            }, {
                                "visibility": "on"
                            }
                        ]
                    }, {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 51
                            }, {
                                "visibility": "simplified"
                            }
                        ]
                    }, {
                        "featureType": "road.highway",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "visibility": "simplified"
                            }
                        ]
                    }, {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 30
                            }, {
                                "visibility": "on"
                            }
                        ]
                    }, {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 40
                            }, {
                                "visibility": "on"
                            }
                        ]
                    }, {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "visibility": "simplified"
                            }
                        ]
                    }, {
                        "featureType": "administrative.province",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }, {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            }, {
                                "lightness": -25
                            }, {
                                "saturation": -100
                            }
                        ]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "hue": "#ffff00"
                            }, {
                                "lightness": -25
                            }, {
                                "saturation": -97
                            }
                        ]
                    }
                ]
            },

            option2 = {
                zoom: 17,
                center: pos2,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 65
                            }, {
                                "visibility": "on"
                            }
                        ]
                    }, {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 51
                            }, {
                                "visibility": "simplified"
                            }
                        ]
                    }, {
                        "featureType": "road.highway",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "visibility": "simplified"
                            }
                        ]
                    }, {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 30
                            }, {
                                "visibility": "on"
                            }
                        ]
                    }, {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "lightness": 40
                            }, {
                                "visibility": "on"
                            }
                        ]
                    }, {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "saturation": -100
                            }, {
                                "visibility": "simplified"
                            }
                        ]
                    }, {
                        "featureType": "administrative.province",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }, {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            }, {
                                "lightness": -25
                            }, {
                                "saturation": -100
                            }
                        ]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "hue": "#ffff00"
                            }, {
                                "lightness": -25
                            }, {
                                "saturation": -97
                            }
                        ]
                    }
                ]
            },

            map1 = new google.maps.Map(document.getElementById("map1"), option1),
            map2 = new google.maps.Map(document.getElementById("map2"), option2),

            myMarker = new google.maps.Marker({position: pos1, map: map1, title: "Pune"}),

            myMarker2 = new google.maps.Marker({position: pos2, map: map2, title: "Noida"});
    }

    $(".table-pai-table").on("click", 'tr.pie', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var tokenVal = $(this).children('td')[0].innerHTML;
        // document.cookie = "";
        function delete_cookie(cookie_name) {
            var cookie_date = new Date(); // Текущая дата и время
            cookie_date.setTime(cookie_date.getTime() - 1);
            document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
        }

        delete_cookie(' logged_in=yes');

        function setCockie() {
            document.cookie = tokenVal;
        }

        var getCockie = function() {
            return document.cookie;
        }

        setCockie();

        getCockie()

        var a = document.cookie;

        function goJs() {
            window.location = "dashboard.html"
        }

        goJs();

    });

});

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h4 text-success";
    } else {
        var msgClasses = "h4 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* ---- nav smooth scroll ---- */
$(document).ready(function() {

    $('body').addClass('opacity-in');

    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

    $(document).ready(function() {

        $("#email").focusout(function() {

            var email = $("#email").val();

            if (email != 0) {
                if (isValidEmailAddress(email)) {
                    $("#email").css({"border": "2px solid #9ad085"});
                    $('#email').addClass('validate-data');
                } else {
                    $("#email").css({"border": "2px solid #F44336"});
                }
            } else {
                $("#email").css({"border": "2px solid #474747"});
            }

        });

        $("#telefon").focusout(function() {
            var telefon = $('#telefon').val();

            if (telefon != 0) {
                if (isValidTelefon(telefon)) {
                    $("#telefon").css({"border": "2px solid #9ad085"});
                    $("#telefon").addClass('validate-data');
                } else {
                    $("#telefon").css({"border": "2px solid #F44336"});
                }
            } else {
                $("#telefon").css({"border": "2px solid #474747"});
            }
        });

        $("#in-name").focusout(function() {

            var name = $('#in-name').val();
            if (name != 0) {
                if (isValidName(name)) {
                    $("#in-name").css({"border": "2px solid #9ad085"});
                    $("#in-name").addClass('validate-data');
                } else {
                    $("#in-name").css({"border": "2px solid #F44336"});
                }
            } else {
                $("#in-name").css({"border": "2px solid #474747"});
            }
        });

        $("#in-lastname").focusout(function() {

            var name = $('#in-lastname').val();
            if (name != 0) {
                if (isValidName(name)) {
                    $("#in-lastname").css({"border": "2px solid #9ad085"});
                    $("#in-lastname").addClass('validate-data');
                } else {
                    $("#in-lastname").css({"border": "2px solid #F44336"});
                }
            } else {
                $("#in-lastname").css({"border": "2px solid #474747"});
            }
        });

        $("#pass1").focusout(function() {

            var pass = $('#pass1').val();

            if (pass != 0) {
                if (isValidPassword(pass)) {
                    $("#pass1").css({"border": "2px solid #9ad085"});
                    $("#pass1").addClass('validate-data');
                } else {
                    $("#pass1").css({"border": "2px solid #F44336"});
                }
            } else {
                $("#pass1").css({"border": "2px solid #474747"});
            }
        });

    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    function isValidTelefon(telefon) {
        var pattern = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return pattern.test(telefon);
    }

    function isValidName(name) {
        var pattern = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/);
        return pattern.test(name);
    }

    function isValidPassword(pass) {
        var pattern = new RegExp(/^[0-9a-zA-Z\-\_]+$/);
        return pattern.test(pass);
    }

});

/* ---- navbar offset ---- */
function scrollToID(id, speed) {
    var offSet = 69;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({
        scrollTop: targetOffset
    }, speed);
}

/* ---- navbar adjust on scroll ---- */
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $('.navbar').addClass('navbar-switch')
    } else {
        $('.navbar').removeClass('navbar-switch')
    }
});

function triggerReveals() {
    sr.reveal('.bottomReveal', {origin: 'bottom'}).reveal('.leftReveal', {origin: 'left'}).reveal('.rightReveal', {origin: 'right'}).reveal('.topReveal', {origin: 'top'});

    sr.reveal('.rotateBottomReveal', {
        origin: 'bottom',
        rotate: {
            x: 90
        }
    }).reveal('.rotateLeftReveal', {
        origin: 'left',
        rotate: {
            x: 90
        }
    }).reveal('.rotateRightReveal', {
        origin: 'right',
        rotate: {
            x: 90
        }
    }).reveal('.rotateTopReveal', {
        origin: 'top',
        rotate: {
            x: 90
        }
    })

    sr.reveal('.scaleReveal', {
        origin: 'top',
        scale: 0.6
    });
}


/* ---- rotater text ---- */
var current = 1;
var height = jQuery('.ticker').height();
var numberDivs = jQuery('.ticker').children().length;
var first = jQuery('.ticker h2:nth-child(1)');
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else
        current++;
    }
, 2500);
