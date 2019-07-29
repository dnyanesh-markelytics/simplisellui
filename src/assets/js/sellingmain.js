$(".ss-mn").click(function() {
        $("body").addClass("showMenu");
    })
    $(".closemn").click(function() {
        $("body").removeClass("showMenu");
    })

    $("#categories,#stores,#offers").click(function() {
        $(".ss-ctm").addClass("showNav");
    })
    $(".go-back-list").click(function() {
        $(".ss-ctm").removeClass("showNav");
    })

    $(".ss-smlk").click(function() {
        $(this).toggleClass("showSub");
    });


    $("#categories").mouseenter(function(){
        $("#categoriesnav").show();
        $("#topstorenav").hide();
        $("#offernav").hide();
    });
    
    $("#categoriesnav").mouseleave(function(){
        $(this).hide();
    });
    
    

    $('.profleinks').mouseenter(function(){
            $('.ptoplinks').show();
            $('#categoriesnav').hide();
        })
        $('.profleinks').mouseleave(function(){
            $('.ptoplinks').hide();
        })