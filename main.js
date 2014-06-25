//////////////////////////////////////////////
//
// Ruslan Ardashev (ruslan.ardashev@duke.edu)
// 06/21/14
//
//////////////////////////////////////////////

var iPhoneModel="";
var iPhoneColor="";
var currPage="";


function hideAndShow(idToHide, idToShow) {

    $(idToHide).slideUp(500);
    $('#homeButton').slideUp(0);
    $(idToShow).slideDown(500);
    $('#homeButton').slideDown(1000);

}


function reset() {

    iPhoneModel="";
    iPhoneColor="";

}


function checkoutPageGen() {

    $('#iPhone5S_5C_Black').hide(0);
    $('#iPhone5S_5C_White').hide(0);
    $('#iPhone5S_5C_DukeBlue').hide(0);
    $('#iPhone4S_4_Black').hide(0);
    $('#iPhone4S_4_White').hide(0);
    $('#iPhone4S_4_DukeBlue').hide(0);
    $('#iPhone5_Black').hide(0);
    $('#iPhone5_White').hide(0);
    $('#iPhone5_DukeBlue').hide(0);

    if(iPhoneModel=="iPhone5S_5C") {

        if(iPhoneColor=="Black") {

            //alert("5s,black");
            $('#iPhone5S_5C_Black').slideDown(500);            
        
        }

        else if(iPhoneColor=="White") {

            //alert("5s,white");
            $('#iPhone5S_5C_White').slideDown(500);

        }

        else if(iPhoneColor=="DukeBlue") {

            //alert("5s,db");
            $('#iPhone5S_5C_DukeBlue').slideDown(500);

        }

    }

    else if(iPhoneModel=="iPhone5") {

        if(iPhoneColor=="Black") {

            //alert("5b");
            $('#iPhone5_Black').slideDown(500);

        }

        else if(iPhoneColor=="White") {

            //alert("5w");
            $('#iPhone5_White').slideDown(500);

        }

        else if(iPhoneColor=="DukeBlue") {

            //alert("5db");
            $('#iPhone5_DukeBlue').slideDown(500);

        }

    }
    
    else if(iPhoneModel=="iPhone4S_4") {

        if(iPhoneColor=="Black") {

            //alert("4sb");
            $('#iPhone4S_4_Black').slideDown(500);

        }

        else if(iPhoneColor=="White") {

            //alert("4sw");
            $('#iPhone4S_4_White').slideDown(500);

        }

        else if(iPhoneColor=="DukeBlue") {

            //alert("4sdb");
            $('#iPhone4S_4_DukeBlue').slideDown(500);

        }

    }

}


$(document).ready(function() {

    $('#repairPage').hide(0);
    $('#colorPage').hide(0);
    $('#checkoutPage').hide(0);
    $('#notAvailable').hide(0);

    $('#email').click(function() {

        document.location.href = 'mailto:iFixTeamContact@gmail.com?Subject=iFixTeam';

    });

    $('#repairs').click(function() {

        currPage='#repairPage';
        hideAndShow('#home','#repairPage');   

    });

    $('#i5S_5C').click(function() {

        iPhoneModel = "iPhone5S_5C";
        hideAndShow('#repairPage','#colorPage');
        currPage = '#colorPage';

    });

    $('#i4S_4').click(function() {

        iPhoneModel = "iPhone4S_4";
        hideAndShow('#repairPage','#colorPage');
        currPage = '#colorPage';

    });

    $('#i5').click(function() {

        iPhoneModel = "iPhone5";
        hideAndShow('#repairPage','#colorPage');
        currPage = '#colorPage';

    });

    $('#Black').click(function() {

        iPhoneColor = "Black";
        currPage = '#checkoutPage';
        hideAndShow("#colorPage","#checkoutPage");
        checkoutPageGen();
        //alert("iPhoneColor:"+iPhoneColor+", iPhone Model: "+iPhoneModel);

    });

    $('#White').click(function() {

        iPhoneColor = "White";
        currPage = '#checkoutPage';
        hideAndShow("#colorPage","#checkoutPage");
        checkoutPageGen();
        //alert("iPhoneColor:"+iPhoneColor+", iPhone Model: "+iPhoneModel);

    });

    $('#DukeBlue').click(function() {

        iPhoneColor = "DukeBlue";
        if(iPhoneModel=="iPhone5S_5C"){
            currPage = '#notAvailable';
            hideAndShow("#colorPage","#notAvailable");
        } else{
            currPage = '#checkoutPage';
            hideAndShow("#colorPage","#checkoutPage");
            checkoutPageGen();
        }
        //alert("iPhoneColor:"+iPhoneColor+", iPhone Model: "+iPhoneModel);

    });

    $('#homeButtonClick').click(function() {

        hideAndShow(currPage, '#home');
        currPage = '#home';
        reset();

    });

});





