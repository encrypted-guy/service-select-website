$(document).ready(function(){
    $('#android').click(function(){
        $('#android').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#android').dblclick(function(){
        $('#android').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    $('#ios').click(function(){
        $('#ios').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#ios').dblclick(function(){
        $('#ios').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    $('#website').click(function(){
        $('#website').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#website').dblclick(function(){
        $('#website').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    $('#software').click(function(){
        $('#software').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#software').dblclick(function(){
        $('#software').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    
    $('#cyber').click(function(){
        $('#cyber').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#cyber').dblclick(function(){
        $('#cyber').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

        
    $('#game').click(function(){
        $('#game').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#game').dblclick(function(){
        $('#game').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

           
    $('#social').click(function(){
        $('#social').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#social').dblclick(function(){
        $('#social').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    $('#ecommance').click(function(){
        $('#ecommance').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#ecommance').dblclick(function(){
        $('#ecommance').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    
    $('#blog').click(function(){
        $('#blog').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#blog').dblclick(function(){
        $('#blog').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

       
    $('#shop').click(function(){
        $('#shop').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#shop').dblclick(function(){
        $('#shop').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    $('#art').click(function(){
        $('#art').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#art').dblclick(function(){
        $('#art').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

    $('#cms').click(function(){
        $('#cms').css({
            "color":"#fff",
            "background":"#8333e9",
        }); 
    });
    $('#cms').dblclick(function(){
        $('#cms').css({
            "color":"#8333e9",
            "background":"#fff",
        }); 
    });

});




/*---------------------------------------------------*/
function checkemail(){
    // var email = document.querySelector('#email').value;
    var email = document.querySelector('#email');
    var vali = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(vali.test(email)){
        email.style.color = "green";
    }else {
        email.style.color = "red";
        email.style.fontWeight="bold";
    };
}

function showVal(newVal){
    document.getElementById("valBox").innerHTML=newVal;
}
