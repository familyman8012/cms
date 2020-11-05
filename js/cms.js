
$(document).on('click', '.wrap_form_agree .list_yakwan .btn', function(){
 $('.pop_mask').show()
 $('#pop_yakwan').load('../cms_pop.html .pop_cms')
});

$(document).on('click', '.pop_cms .btn_close', function() {
    $('#pop_yakwan').empty();
    $('.pop_mask').hide()
});

$(document).on('click', '.list_certi .btn1', function() {
    $(this).closest('li').find('label').addClass('on');
    $(this).hide();
});

$(document).on('click', '.list_certi .btn2', function() {  
    $(this).closest('li').find('label').addClass('on');
    $(this).hide();
    $('.pop_mask, .sign1').show();
});

$(document).on('click', '.list_certi .btn3', function() {
    $(this).closest('li').find('label').addClass('on');
    $(this).hide();
    $('.pop_mask, .sign3').show();
});

$(document).on('click', '.wrap_pop .btn_yes, .wrap_pop .btn_no', function() {    
    $('.pop_mask, .sign1').hide();
});

$(document).on('click', '.wrap_pop .btn_close', function() {    
    $('.pop_mask, .sign2').hide();
});

$(document).on('click', '.wrap_pop .btn_confirm', function() {    
    $('.pop_mask, .sign3').hide();
});

$(document).on('click', '.btn_sign', function(e) {
    e.preventDefault();    
     $('.pop_mask').show()
    $('#pop_yakwan').load('../cms_pop2.html .pop_cms')
});


$(document).on('click', '.pop_cms .btn_save', function(e) {
    e.preventDefault();    
     $('#pop_yakwan').empty();
    $('.pop_mask').hide();
    $('.btn_sign').addClass('complete').text('서명완료');
    $('.btn_payment').removeClass('dis');
});

$(document).on('click', '.all_agree input, .all_agree label', function(e) {
    if ( $('.all_agree input:checkbox').is(":checked")) {
        $('.list_yakwan input:checkbox').prop("checked", true);
    } else {
        $('.list_yakwan input:checkbox').prop("checked", false);
    }
});