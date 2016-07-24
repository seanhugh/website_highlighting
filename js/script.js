var regions=[
    {
        "region_name": "David Chickowski",
        "region_code": "girl",
        "population": "Im an artist, Designer and Maker. I speacialize in website design, graphic design and scrapwood art."
    },
    {
        "region_name": "Sean Hughes",
        "region_code": "dude",
        "population": "Im an artist, Designer and Maker. I speacialize in website design, graphic design and scrapwood art."
    },
    {
        "region_name": "Lazio",
        "region_code": "laz",
        "population": 5557276
    },
    {
        "region_name": "Sicilia",
        "region_code": "sic",
        "population": 4999932
    },
    {
        "region_name": "Veneto",
        "region_code": "ven",
        "population": 4881756
    },
    {
        "region_name": "Emilia-Romagna",
        "region_code": "emi",
        "population": 4377487
    },
    {
        "region_name": "Piemonte",
        "region_code": "pie",
        "population": 4374052
    },
    {
        "region_name": "Puglia",
        "region_code": "pug",
        "population": 4050803
    },
    {
        "region_name": "Toscana",
        "region_code": "tos",
        "population": 3692828
    },
    {
        "region_name": "Calabria",
        "region_code": "cal",
        "population": 1958238
    },
    {
        "region_name": "Sardegna",
        "region_code": "sar",
        "population": 1640379
    },
    {
        "region_name": "Liguria",
        "region_code": "lig",
        "population": 1565127
    },
    {
        "region_name": "Marche",
        "region_code": "mar",
        "population": 1545155
    },
    {
        "region_name": "Abruzzo",
        "region_code": "abr",
        "population": 1312507
    },
    {
        "region_name": "Friuli-Venezia Giulia",
        "region_code": "fri",
        "population": 1221860
    },
    {
        "region_name": "Trentino-Alto Adige",
        "region_code": "tre",
        "population": 1039934
    },
    {
        "region_name": "Umbria",
        "region_code": "umb",
        "population": 886239
    },
    {
        "region_name": "Basilicata",
        "region_code": "bas",
        "population": 576194
    },
    {
        "region_name": "Molise",
        "region_code": "mol",
        "population": 313341
    },
    {
        "region_name": "Val d'Aosta",
        "region_code": "vao",
        "population": 127844
    }
];


var temp_array= regions.map(function(item){
    return item.population;
});
var highest_value = Math.max.apply(Math, temp_array);

$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        // .css({'fill': 'rgba(11, 104, 170,' + regions[i].population/highest_value +')'})
        .data('region', regions[i]);
    }

    // $('.map g').mouseover(function (e) {
    //     var region_data=$(this).data('region');
    //     $('<div class="info_panel">'+ 
    //         region_data.region_name + '<br>' +
    //         'Population: ' + region_data.population.toLocaleString("en-UK") +
    //         '</div>'
    //      )
    //     .appendTo('body');
    // })





    $(document).ready(function() {
        var viewportWidth = $("body").innerWidth();
        $(".coverdisimg").css({'height': viewportWidth/3}); 



    $( '#dropdown1' ).hover(
        function(){
            $(this).children('.dropdown-menu').slideDown(200);
            console.log('this');

        },
        function(){
            $(this).children('.dropdown-menu').slideUp(200);
        }
    );
}); // end ready

// $("#arrow").delay(5000).css({'pointer-events': "none"});

    $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if ($( window ).width() > 500){
    if (scrollTop<600){
       $("#covermap").css({opacity: (scrollTop/700)}); 
       $("#themap").css({position: "fixed", top: scrollTop});}
    }
    if (scrollTop>200){
       $("#cover").css({'pointer-events': "auto"}); 
    }
    else{
        $("#cover").css({'pointer-events': "none"}); 
    }


    //PIC STUFF
//     $(document).ready(function(){
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // assigning the object
//         // $bgobj.data('speed')); 
//         $(window).scroll(function() {
            
//             // Put together our final background position
//             var position = $bgobj.position();
//             var position = position['top'];
//             var windowHeight = $( window ).height();
//             var scrollTop = $(window).scrollTop();
//             if ((scrollTop+windowHeight)>(position)){
//                 var height = $bgobj.height();
//                 yPos = 100-((scrollTop+windowHeight-position)*100/(height+windowHeight));
//                 yPos = Math.round(yPos);
//                 console.log("ypos:", yPos);
//                 var coords = '50% '+ yPos + '%';
//             }

//             // Move the background
//             $bgobj.css({ backgroundPosition: coords });
//         }); 
//     });    
// });


    // if (scrollTop>100){
    //     $(".g").css({"pointer-events":"none"});}
    });
$(document).ready(function() {
    $(window).stellar();
});

    $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        var res = region_data.region_name.split(" ");
        var first = res[0];
        var last = res[1];
        // $('<div class="info_panel panel panel-default ">'+ '<h3>' +
        //      '</h3>' + '<p class = "test_title">' + '<span style="font-weight:600;">' + first + '</span>' + " " + '<span style="font-weight:100;">' + last + '</span>' + '</p>' + '<img src = "img/AMERICA.png" class="panelimg">' + '<h4>About me:</h4>' + '<p class = "infobody">' 
        //      + region_data.population +
        //     '</div>'
        //  )
        $('<div class="info_panel panel panel-default ">' + '<p class = "test_title">' + '<span style="">' + first + '</span>' + " " + '<span style="">' + last + '</span>'
              + '</p>' + '</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse
        jawn = this.getBoundingClientRect();
        $('.info_panel').css({
            left: jawn.right,
            top: jawn.top,
            opacity:1,
            // top: mouseY-50,
            // left: mouseX - ($('.info_panel').width()/2) + 200
        });
    });
});

