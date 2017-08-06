/* Плавное появление */ 
$ (document).ready(function() { $("body").css("display","none").fadeIn(1500); });

$(document).ready(function(){
    /*
    document.onmousewheel = function (e) {
        e.preventDefault();
    }
    */
    /*
     $('.triangle.top').hover(
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '205px',
     width: '445px'
     }, 500);
     $(this).stop().animate({
     marginLeft: '-222px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '100px',
     width: '100px',
     marginLeft: '-6px'
     }, 500);
     },
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '164px',
     width: '356px',
     top: '-1px'
     }, 500);
     $(this).stop().animate({
     marginLeft: '-178px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '80px',
     width: '80px',
     marginTop: '-52px',
     marginLeft: '-40px'
     }, 500);
     }
     );
     $('.triangle.left').hover(
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '205px',
     width: '445px',
     left: '-122px',
     top: '78px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '125px',
     width: '125px',
     marginTop: '-62px',
     marginLeft: '-58px'
     }, 500);
     },
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '164px',
     width: '356px',
     left: '-99px',
     top: '96px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '100px',
     width: '100px',
     marginTop: '-50px',
     marginLeft: '-70px'
     }, 500);
     }
     );
     $('.triangle.right').hover(
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '205px',
     width: '445px',
     left: '-53px',
     top: '78px'

     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '125px',
     width: '225px',
     marginTop: '-62px',
     marginLeft: '78px'
     }, 500);
     },
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '164px',
     width: '356px',
     left: '11px',
     top: '96px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '100px',
     width: '120px',
     marginTop: '-50px',
     marginLeft: '140px'
     }, 500);
     }
     );
     $('.triangle.bottom').hover(
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '205px',
     width: '445px'
     }, 500);
     $(this).stop().animate({
     marginLeft: '-222px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '162px',
     width: '162px',
     marginTop: '-80px',
     marginLeft: '-35px'
     }, 500);
     },
     function(){
     $(this).find('.anglePic').stop().animate({
     height: '164px',
     width: '356px'
     }, 500);
     $(this).stop().animate({
     marginLeft: '-178px'
     }, 500);
     $(this).find('.innerAnglePic').stop().animate({
     height: '130px',
     width: '130px',
     marginTop: '-50px',
     marginLeft: '-65px'
     }, 500);
     }
     );
     */
    var screenHeight = $('html').height();
    var screenWidth = $('html').width();
    var centerSize = screenHeight*0.3;


    var angleHorizontWidth = screenWidth/5; //3.85
    var angleHorizontHeight = angleHorizontWidth/2.2; // 2.17
    var angleHorizontMarginLeft = -angleHorizontWidth/2;
    var angleVerticalWidth = screenWidth/10.8; //8.33
    var angleVerticalHeight = angleVerticalWidth*2.2; //2.2
    var angleHorizontMarginTop = -angleVerticalHeight/2;
//        var buttonLeftWidth = $('.button.left').outerWidth();

//        var buttonLeftHeight = $('.button.left').outerHeight();
//        var buttonLeftBorderWidth = $('.button').css('border-width');
//        console.log(buttonLeftBorderWidth);
//        var buttonLeftFontSize = parseInt($('.button.left').css('font-size'));
    var buttonLeftFontSize = screenHeight/34.85;
//        var buttonLeftFontLineHeight = parseInt($('.button.left').css('line-height'));
    var buttonLeftFontLineHeight = ($('.button.left').height())-12;
    var buttonLeftWidth = buttonLeftFontSize*6.73;
    var buttonLeftHeight = buttonLeftFontSize*1.3;

    if(screenWidth>479){





        $('.triangle.top, .triangle.bottom').css({
            width: angleHorizontWidth,
            height: angleHorizontHeight,
            marginLeft: angleHorizontMarginLeft
        });
        $('.triangle.left, .triangle.right').css({
            width: angleVerticalWidth,
            height: angleVerticalHeight,
            marginTop: angleHorizontMarginTop
        });


        /* -260/2+164-50/2 */
//        alert(angleHorizontHeight);
//        var ah = $('.triangle.top').height();



        $('.button:not(.social)').css({
            fontSize: buttonLeftFontSize,
            width: buttonLeftWidth,
            height: buttonLeftHeight,
            lineHeight: buttonLeftHeight+'px'

        });
        console.log('screenHeight:'+parseInt(screenHeight)+',angleHorizontHeight: '+parseInt(angleHorizontHeight)+',centerSize: '+parseInt(centerSize)+',buttonLeftHeight:'+parseInt(buttonLeftHeight)+',marginTop: '+parseInt(screenHeight/4-buttonLeftHeight+centerSize/2-angleHorizontHeight));
        $('.button.top').css({
            marginLeft: -buttonLeftWidth/2-6,
//            marginTop: -(-centerSize/2+angleHorizontHeight-buttonLeftHeight/2)
//            marginTop: (angleHorizontHeight-centerSize/2)-buttonLeftHeight/2
//            marginTop: screenHeight/4-buttonLeftHeight+centerSize/2-angleHorizontHeight
//            marginTop: angleHorizontHeight+screenHeight/18.03
            marginTop: angleHorizontHeight+(screenHeight/2-centerSize/2-angleHorizontHeight-buttonLeftHeight-12)/2
        });
//58
        $('.button.social').css({
            marginBottom: angleHorizontHeight+(screenHeight/2-centerSize/2-angleHorizontHeight-buttonLeftHeight)/2
        });

        /* -260/2+164-212/2 */
        $('.button.left').css({
            marginLeft: (-centerSize/2+angleVerticalWidth-buttonLeftWidth/2),
            marginTop:-buttonLeftHeight/2-6
        });
        $('.button.right').css({
            marginRight: (-centerSize/2+angleVerticalWidth-buttonLeftWidth/2),
            marginTop:-buttonLeftHeight/2-6
        });
        $('.header').css({
            fontSize: screenHeight/19
        });


        $('.triangle.bottom').hover(
            function(){
                $(this).stop().animate({
//                height: '197px', width: '427px', marginLeft:'-213px'
                    height: angleHorizontHeight*1.2+'px',width: angleHorizontWidth*1.2+'px',marginLeft:angleHorizontMarginLeft*1.2+'px'
                }, 500);
            },
            function(){
                $(this).stop().animate({
//                height: '164px', width: '356px', marginLeft:'-178px'
                    height: angleHorizontHeight+'px',width: angleHorizontWidth+'px',marginLeft:angleHorizontMarginLeft+'px'
                }, 500);
            }
        );
        $('.triangle.right').hover(
            function(){
                $(this).stop().animate({
//                width: '197px',height: '434px',marginTop:'-213px'
                    height: angleVerticalHeight*1.2+'px',width: angleVerticalWidth*1.2+'px',marginTop:angleHorizontMarginTop*1.2+'px'
                }, 500);},
            function(){$(this).stop().animate({
//            width: '164px',height: '362px',marginTop:'-181px'
                height: angleVerticalHeight+'px',width: angleVerticalWidth+'px',marginTop:angleHorizontMarginTop+'px'
            }, 500);
            }
        );
        $('.triangle.left').hover(
            function(){
                $(this).stop().animate({
//              width: '197px',height: '434px',marginTop:'-216px'
                    height: angleVerticalHeight*1.2+'px',width: angleVerticalWidth*1.2+'px',marginTop:(angleHorizontMarginTop)*1.2+'px'
                }, 500);
            },
            function(){
                $(this).stop().animate({
//                width: '164px',height: '362px',marginTop:'-181px',
                    height: angleVerticalHeight+'px',width: angleVerticalWidth+'px',marginTop:angleHorizontMarginTop+'px'
                }, 500);
            }
        );
        $('.triangle.top').hover(
            function(){
                $(this).stop().animate({
//            height: '197px',width: '427px',marginLeft:'-213px'
                    height: angleHorizontHeight*1.2+'px',width: angleHorizontWidth*1.2+'px',marginLeft:angleHorizontMarginLeft*1.2+'px'
                }, 500);},
            function(){$(this).stop().animate({
//            height: '164px',width: '356px',marginLeft:'-178px'
                height: angleHorizontHeight+'px',width: angleHorizontWidth+'px',marginLeft:angleHorizontMarginLeft+'px'
            }, 500);}
        );
    }
    else{


        var triangleBottomWidth = $('.triangle:not(.top)').width();

        $('.triangle:not(.top)').css({
//            width: angleHorizontWidth,
            height: triangleBottomWidth/2.15
//            marginLeft: angleHorizontMarginLeft
        });
        $('.header').css({
//            width: angleHorizontWidth,
//            top: screenWidth/2.2-60
            top: $('.button.top').position().top - 120
//            marginLeft: angleHorizontMarginLeft
        });
        $('.triangle.bottom').css({
            marginLeft: -triangleBottomWidth/2
        });
        $('.triangle.right,.triangle.left').css('top','');

        $('.button:not(.social)').css({
            fontSize: buttonLeftFontSize*1.5,
            height: buttonLeftHeight*2.1,
            lineHeight: buttonLeftHeight*2.1+'px',
            width:screenWidth-12
        });
        $('.button.social').css({
            marginBottom: triangleBottomWidth/2.15 + 20
        });
        $('.button.top').css({
            marginTop: -buttonLeftHeight*3
        });
//58
        $('.button.social').css({
//            marginBottom: angleHorizontHeight+(screenHeight/2-centerSize/2-angleHorizontHeight-buttonLeftHeight)/2
        });

        /* -260/2+164-212/2 */
        $('.button.left').css({

            marginTop: buttonLeftHeight/3
        });
        $('.button.right').css({

            marginTop: buttonLeftHeight *3.7
        });

        $('.triangle.top').css({
//            width: angleHorizontWidth,
            height: screenWidth/2.2
//            marginLeft: angleHorizontMarginLeft
        });

        $(window).resize(function(){
            console.log(screenWidth+', '+screenHeight);
            screenHeight = $('html').height();
            screenWidth = $('html').width();
            triangleBottomWidth = $('.triangle:not(.top)').width();

            $('.triangle.top').css({
//            width: angleHorizontWidth,
                height: screenWidth/2.2
//            marginLeft: angleHorizontMarginLeft
            });
            $('.triangle.bottom').css({
                marginLeft: -triangleBottomWidth/2
            });
            $('.header').css({
//            width: angleHorizontWidth,
//            top: screenWidth/2.2-60
                top: $('.button.top').position().top - 120
//            marginLeft: angleHorizontMarginLeft
            });
            $('.triangle:not(.top)').css({
//            width: angleHorizontWidth,
                height: triangleBottomWidth/2.15
//            marginLeft: angleHorizontMarginLeft
            });
            $('.button.social').css({
                marginBottom: triangleBottomWidth/2.15 + 20
            });
            $('.button:not(.social)').css({
                width:screenWidth-12
            });
        });
    }




    $('.center').css({
        width: centerSize,
        height: centerSize,
        marginLeft: -centerSize/2,
        marginTop: -centerSize/2
    });

    $(window).resize(function(){
        screenHeight = $('html').height();
        screenWidth = $('html').width();


//        angleHorizontWidth = screenWidth/3.85;
//        angleHorizontHeight = angleHorizontWidth/2.17;
//        console.log(angleHorizontWidth+','+angleHorizontHeight);
//        angleHorizontMarginLeft = -angleHorizontWidth/2;

        centerSize = screenHeight*0.3;
//        console.log(screenHeight);
//        console.log(angleHorizontMarginLeft);
        console.log(angleHorizontWidth+','+angleHorizontHeight);
        $('.center').css({
            width: centerSize,
            height: centerSize,
            marginLeft: -centerSize/2,
            marginTop: -centerSize/2
        });
        $('.triangle.top').css({
//            width: angleHorizontWidth,
//            height: angleHorizontHeight,
//            marginLeft: angleHorizontMarginLeft
        });
    });

    $('a.button.right').click(function(e) {
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $('#sign_up').lightbox_me({
                centered: true,
                overlayCSS: {
                    background: 'white',
                    opacity: .95
                },
                onLoad: function() {
                    /*$('#sign_up').find('input:first').focus()*/

                },
                onClose: function() {
                    $('.button.right.active').removeClass('active');
                    $('.button.right').animate({backgroundColor: "#000", color:"#fff"}, 500);
                }
            });
        }
        e.preventDefault();
    });


    $('.formHeader').css({
        fontSize: buttonLeftFontSize
    });
    $('.button.social a').hover(
        function(){$(this).stop().animate({opacity: .5}, 250);},
        function(){$(this).stop().animate({opacity: 1}, 250);}
    );
    $('.button').hover(
        function(){
            if(!$(this).hasClass('active') && !$(this).hasClass('social')){
                $(this).stop().animate({backgroundColor: "#fff", color:"#000"}, 250);
            }
        },
        function(){
            if(!$(this).hasClass('active') && !$(this).hasClass('social')){
                $(this).stop().animate({backgroundColor: "#000", color:"#fff"}, 250);
            }
        }
    );
})