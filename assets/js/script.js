$(document).ready(function () {
    // $(".selectBox").on("click", function (e) {
    //     e.preventDefault();
    //     $(this).toggleClass("show");
    //     var dropdownItem = e.target;
    //     var container = $(this).find(".selectBox__valueInner");
    //     container.text(dropdownItem.text);
    //     $(dropdownItem)
    //         .addClass("active")
    //         .siblings()
    //         .removeClass("active");
    // });
    // $(window).click(function (e) {
    //     if (!$(e.target).hasClass('selectBox') && $(e.target).parents('.selectBox').length === 0) {
    //         $(".selectBox").removeClass("show");
    //     }
    // });
    $("form#contact_frm").submit(function (e) {
        e.preventDefault()
        let myform = document.getElementById("contact_frm");
        let fd = new FormData(myform);

        $('.header_booking_form.main_section').css('display', 'block');
        $('.header_booking_form .mail_loader').addClass('active').show();
        $('.send_btn').attr('disabled', true);

        $.ajax({
            url: "shoot_mail.php?contact_frm=1",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (response) {
                $('#contact_frm').each(function () {
                    this.reset();
                });
                $('.header_booking_form').addClass('active').show();
                $('.header_booking_form .mail_loader').removeClass('active').show();
                $('.send_btn').attr('disabled', false);
                setTimeout(function () {
                    $('.header_booking_form').removeClass('active').hide();
                }, 3000)
            }
        });
    });
    $("form#mega_tab_2").submit(function (e) {
        e.preventDefault()
        let myform = document.getElementById("mega_tab_2");
        let fd = new FormData(myform);

        $('.header_booking_form .mail_loader').addClass('active').show();
        $('.send_btn').attr('disabled', true);
        $.ajax({
            url: "shoot_mail.php?mega_tab_2=1",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (response) {
                $('#mega_tab_2').each(function () {
                    this.reset();
                });
                $('.header_booking_form').addClass('active').show();
                $('.header_booking_form .mail_loader').removeClass('active').show();
                $('.send_btn').attr('disabled', false);
                setTimeout(function () {
                    $('.header_booking_form').removeClass('active').hide();
                }, 3000)
            }
        });
    });
    $("form#mega_tab_1").submit(function (e) {
        e.preventDefault()
        let myform = document.getElementById("mega_tab_1");
        let fd = new FormData(myform);
        $('.header_booking_form .mail_loader').addClass('active').show();
        $('.send_btn').attr('disabled', true);

        $.ajax({
            url: "shoot_mail.php?book_prescriptions=1",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (response) {
                $('#mega_tab_1').each(function () {
                    this.reset();
                });
                $('.header_booking_form').addClass('active').show();
                $('.header_booking_form .mail_loader').removeClass('active').show();
                $('.send_btn').attr('disabled', false);
                setTimeout(function () {
                    $('.header_booking_form').removeClass('active').hide();
                }, 3000)
            }
        });
    });
    $('.footer_button_main').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('data-target');
        $('.footer_tabs_content').not(target).removeClass('active');
        $(target).toggleClass('active');
    });
    $('.navbar-toggler').click(function (e) {
        e.preventDefault();
        $(this, 'header').toggleClass('active');
    });
    $(".mega_tab_link").click(function (e) {
        e.preventDefault();
        $(".mega_tab_link").removeClass('active');
        $(this).addClass('active');
        let target = $(this).attr('data-target');
        $('.header_booking_form_tab_body').removeClass('d-none').not(target).hide();
        $(target).show();
    });
    $("header .selectBox").click(function (e) {
        e.preventDefault();
        $(".mega_tab_link").removeClass('active');
        $('.mega_tab_link_1').addClass('active');
        let target = $('#mega_tab_1');
        $('.header_booking_form_tab_body').removeClass('d-none').not(target).hide();
        $(target).show();
    });
    $("header .selectBox, .btn-book").click(function (e) {
        e.preventDefault();
        $(".header_booking_form").toggle();
    });
    $(".btn-book").click(function (e) {
        e.preventDefault();
        $(".mega_tab_link").removeClass('active');
        $('.mega_tab_link_2').addClass('active');
        let target = $('#mega_tab_2');
        $('.header_booking_form_tab_body').removeClass('d-none').not(target).hide();
        $(target).show();
    });
    // $('.header_booking_form_tab_body').submit(function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         type: "POST", url: 'php/index.php', data: $(this).serialize(), success: function (res) {
    //             let response = parseInt(res);
    //             if (response === 1) {
    //                 $('.header_booking_form').addClass('active');
    //                 setTimeout(function () {
    //                     $('.header_booking_form').removeClass('active').hide();
    //                 }, 3000)
    //             } else {
    //                 alert(response)
    //             }
    //         }
    //     });
    // });
    // $('.contact_form').submit(function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         type: "POST", url: 'php/index.php', data: $(this).serialize(), success: function (res) {
    //             let response = parseInt(res);
    //             if (response === 1) {
    //                 $('.header_booking_form').addClass('active').show();
    //                 setTimeout(function () {
    //                     $('.header_booking_form').removeClass('active').hide();
    //                 }, 3000)
    //             } else {
    //                 alert(response)
    //             }
    //         }
    //     });
    // });
});