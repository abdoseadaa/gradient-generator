$(document).ready(function () {
    changeColor(2 , 3)

    $('.selec-option-1').change(function () { 
       if($(this).val() == 1){
         $('.sampleCont').addClass('squareCont')
       }else{
        $('.sampleCont').removeClass('squareCont')
       }
    });
    $('.sampleTxt').hover(function(){
         $(this).val('copy !');
    })
    $('button').click(function () { 
        changeColor(2 , 3)
    })
    $('button').click(function () { 
        var amount     = parseInt($(this).prev().prev().val())
        var direction = $(this).prev().val()
        changeColor(amount , direction)
    });
    
    $('.sampleTxt').click(function () { 
             $(this).val($(this).parent().css('background-image'));
            var copyText = $(this)
            copyText.select();
            document.execCommand("copy");
            // Swal.fire(
            //     'copied :)',
            //     `${copyText.val()}`,
            //     'success'
            //   )
            $('.overlay p').text('Copied :)')
            $('.overlay').css({
                    'background-image' : `${copyText.val()}`,
                    'display' : 'flex',
                    'z-index' : '2'
                    } 
                    ).fadeIn(1000 , function(){
                    $(this).fadeOut(2000)
            })
    });
    function changeColor(amount , directionIndex ){
        var gradDirection = ['to bottom' , 'to top' , 'to right' , 'to left'  ]
        var classLength = $('.sample').length;
        for(var x=0; x <=classLength ; x++){
            var colorTxt = '';
            for(var y=1; y<=amount ; y++){
                colorTxt += `, ${generateColor()}`
            }
            var targetClass = '.sample'+[x];
            $(targetClass).css('background-image' ,`linear-gradient(${gradDirection[directionIndex]}  ${colorTxt})` )
        }
    }
    function generateColor(){
        var alpha = '0123456789abcdef'
        alpha = alpha.split('');
        var colorCode = '#';
        for(var i=0 ; i<=5 ; i++){
            var randNum = Math.floor(Math.random()*alpha.length)
            colorCode += alpha[randNum];
        }
        return colorCode;
    }
});