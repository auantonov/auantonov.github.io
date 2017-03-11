function check() {
    var a = $('.validate-data').length;
    if (a == 5) {
        reg();
    }
}

function reg() {
    $.post("https://reg.bigtime.fund/", $("#regform").serialize(), function(d) {
        if (d != 'ok') {
            alert("Пользователь с таким email уже есть в базе или произошла другая ошибка");
        } else {

            $("#regform").hide();

            $("#regresult").show();

            $("#ulogin").html($("#email").val().replace(/<\/?[^>]+>/gi, ''));
            $("#upass").html($("#pass1").val().replace(/<\/?[^>]+>/gi, ''));

            localStorage.setItem("isuser", 1);
            setTimeout(function(){
            	window.location.reload();}
            , 3000);
        }
    });
}



function login1() {

    $.post("https://reg.bigtime.fund/", $("#loginform").serialize(), function(d) {
        //alert(d);
        var obj = $.parseJSON(d);

        if (obj.fio) {
            localStorage.setItem("isuser", 1);
            //$('#myModallogin').modal('toggle');
            window.location.reload();
        } else {
            alert("Пользователь не найден");
        }
    });

}

var saveCookie = document.cookie;

var myeth;
var cur,
    price;
function fill_table() {
	
    $('tr.pie').each(function(index, value) {
        cur = $(this).attr('data-ticker');

        var me = $(this);

        $(me).find(".currentprice").html($(this).attr('data-price'));
        $(me).find(".rost").html(Math.round($(this).attr('data-price') / $(this).attr('data-startprice') * 1000 - 1000) / 10 + "%");
        $(me).find(".start").html($(this).attr('data-start'));
        $(me).find(".tip").html($(this).attr('data-tip'));
        /*
        if (!myeth)
            myeth = "";
        var url = "https://api.etherscan.io/api?module=proxy&data=0x70a08231000000000000000000000000" + myeth.replace('0x', '') + "&to=" + $(this).attr('rel') + "&action=eth_call";
        console.log(url);
		
        $.getJSON(url, function(d) {
            $(me).find(".mytokenbalance").html(parseInt(d.result, 16));
        });
		*/
    });
    $("tr.pie").on("click", function() {
        $(this).addClass('active').siblings().removeClass('active');
        $("#centru").show();

        cur = $(this).attr('data-ticker');
        curaddr = $(this).attr('rel');
        price = $(this).attr('data-price'); //сколько токенов получаем за 1 биткоин

        $("#priceinrub").html(price);
        $("#priceinbtc").html(price / $("#rubbtc").text());

        $("#x1").html($(this).attr('data-start'));
        $("#x2").html($(this).attr('data-tip'));
        $("#x3").html($(this).attr('data-interval'));
        $("#x4").html($(this).attr('data-tokensold'));
        $("#x5").html($(this).attr('data-price'));
        $("#x6").html($(this).attr('data-price') * $(this).attr('data-tokensold'));
        $("#x7").html(Math.round($(this).attr('data-price') / $(this).attr('data-startprice') * 1000 - 1000) / 10 + "%"); //$(this).attr('data-price')/$(this).attr('data-startprice')*100-100+"%"
        $("#x8").html($(this).attr('data-price') / $(this).attr('data-lastprice') * 100 - 100 + "%");
        $("#kupit").val(); //сколько он хочет купить

        $.get("//reg.bigtime.fund/more.php?id=" + $(this).attr('data-tid'), function(d) {
            $("#other").html(d);
        });

        $("#piechart").prop("src", "//reg.bigtime.fund/pie.php?id=" + $(this).attr('data-tid'));
        recalc_prices();
        recalc_buy();

    });

}

//var secretSeed = lightwallet.keystore.generateRandomSeed();
//$("#seed").html(secretSeed);

function bundle_loaded() {
	
    if (localStorage.getItem("isuser") != 1)
        $(".regb").show();
    if (localStorage.getItem("isuser") == 1)
        $(".bexit").show();
    /* 
    myeth = localStorage.getItem('myethaddress');
    //alert(myeth);
    if (!myeth || myeth.length < 3 || myeth == 'undefined') {
        console.log("!myeth");

        lightwallet.keystore.deriveKeyFromPassword('123123', function(err, pwDerivedKey) {
            var ks = new lightwallet.keystore(secretSeed, pwDerivedKey);
            ks.generateNewAddress(pwDerivedKey, 1);
            var address = ks.getAddresses()[0];
            var prv_key = ks.exportPrivateKey(address, pwDerivedKey);

            localStorage.setItem("myethaddress", address);
            localStorage.setItem("myprivate", prv_key);
            localStorage.setItem("isreg", 1);
            localStorage.setItem("mainnet", "off");
            console.log('address and key: ', address, prv_key);

            //alert(reg.privateKey);
            myeth = reg.address;

        });

    } */
    //$("#myeth").html(myeth);
    //if (localStorage.getItem("isuser") != 1)
    //    $("#myeth").html("неизвестен");

    //грузим все

    $.get("//reg.bigtime.fund/exp.php", function(d) {

        jQuery.each(d, function(i, item) {
            console.log(item);
            console.log(item.title);

            //add_token(item.inteval,item.tip,item.start,item.price,item.lastprice,item.startprice,item.ticker,item.rel,item.title);
            var line;
            line += "<tr class='pie firstline' data-token='" + item.title + "' data-tid='" + item.id + "' data-tokensold='" + item.mint + "' data-interval='" + item.interv + "' data-tip='" + item.tip + "' data-start='" + item.start + "' data-price='" + item.price + "' data-lastprice='" + item.price + "' data-startprice='" + item.lastprice + "' data-ticker='" + item.ticker + "' rel='" + item.rel + "' data-token='"+ item.token +"' data-masterkey='"+ item.masterkey +"'>";
            line += "<td class='pai-title'>" + item.title + "</td>";
            line += "<td class='tip'>" + item.tip + "</td>";
            line += "<td class='number mytokenbalance'>loading</td>";
            line += "<td class='number'><span class='currentprice'>??</span> р</td>";
            <!-- не менять! считается само-->
            line += "<td class='number rost'>??%</td>";
            <!-- не менять! считается само-->
            line += "<td class='number start'>??</td>";
            line += "<td class='number end'>" + item.end + "</td>";
            line += "<td class=pie-link><a href=# onclick='$(\"#moreinfo\").show();return false'>Подробнее <i class='fa fa-hand-o-right' aria-hidden='true'></i></a></td>";

            line += '</tr>';
            console.log(line);
            $("#tokenstable").append(line);

            //
        });
        fill_table();
    }, "json");

    setTimeout(function() {

        var pieArray = document.querySelectorAll('.firstline');

        var element;

        pieArray.forEach(function(d) {
            if (saveCookie === d.dataset.token) {
                element = d;
            }
        });

        $(element).trigger('click');

        $(".firstline").click(function() {
            $(this).addClass('active');

        })

        if (localStorage.getItem("isuser") == 1)
            $(".onlyuser").css("display", "block");
        }
    , 500);

}

function recalc_buy() {

    $("#kupit").val(); //сколько он хочет купить
    $("#sk").html($("#kupit").val());
    $("#pr").html(cur); //тикер проекта
    $("#inrub").html(Math.round($("#kupit").val() * price)); //в рублях
    $("#inbtc").html(Math.round($("#kupit").val() * price / $("#rubbtc").html() * 100) / 100); //в битках
    // var tx = new Tx(options);

}

function pad(num, size) {
    var s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
}

var basicBtcPrice,
    basicRubPrice,
    pricelala,
    lala;

function recalc_prices() {
    $.getJSON("https://buygazprom.com/rateslocal.php", function(d) {

        //$("#rubbtc").html(d.RUB.avg_1h);
        //$("#usdbtc").html(d.USD.avg_1h);
        var currestRub = $("#rubbtc").html();
        basicRubPrice = $('.pie').attr('data-price');
        var currestRub = $('#rubbtc').html();
        basicBtcPrice = basicRubPrice / currestRub;
        $('.basicPrice').html(basicRubPrice + ' руб');

    });
}

recalc_prices();

function updateSell() {
    var inputSellVal = document.getElementById("sell-token").value;
    var SellRubresult = inputSellVal * basicRubPrice;
    var SellBtcresult = inputSellVal * basicBtcPrice;
    document.getElementById('sell-token-rub').innerHTML = SellRubresult.toFixed(2) + ' руб';
    document.getElementById('sell-token-btc').innerHTML = SellBtcresult.toFixed(7) + ' btc';
    document.getElementById('priceinbtc').innerHTML = SellBtcresult.toFixed(7);

}

setTimeout(function() {

    var FixedBtcPrice = basicBtcPrice.toFixed(7);
    $('.FixedBtcPrice').html(FixedBtcPrice + ' btc');
    updateSell();

}, 5000);

// var sumInput = $('#kupit').val();
// alert(sumInput);

bundle_loaded();

$( document ).ready(function(){
    $('.js-send-bitcoin').click(function(){
        var count = $('#showafterrecalc #inbtc').html();
        var pie = $(".pie.active").attr('data-token');
        $.get("http://reg.bigtime.fund/alert/?count="+count+"&pie="+pie);
        $('#kupit').val("");
        $('.thank-text').html("Спасибо! Ожидайте токены в ближайшее время.");
    });

    $('.js-send-another-token').click(function(){

    	var who = $('#js-send-who').val();
    	var count = $('#js-send-count').val();
    	var tok = $('.pai-pai table tr.active').attr('data-token');
    	App.sendTokVal(who,count,tok);
    	$('#js-send-status').html('Токен в пути');
    });



});