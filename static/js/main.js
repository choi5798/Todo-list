$('#btn_insert').click(()=>{
    $('#write').attr('style', 'visibility:visible');
    $('#add_contents').focus();
    $('#add_contents').val('');
    $('#add_deadline').val('');
});

$('#btn_cancel').click(()=>{
    $('#write').attr('style', 'visibility:hidden');
});

$('#btn_edit_cancel').click(()=>{
    $('#edit').attr('style', 'visibility:hidden');
})

$('.datepicker').datepicker({
    nextText : '다음 달',
    prevText : '이전 달',
    dateFormat : 'yy-mm-dd',
    showMonthAfterYear : true,
    showOtherMonths : true,
    changeMonth : true, 
    showOn : "both",
    buttonImage : "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText : '선택',
    yearSuffix : ' 년',
    monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']

});

$('.datepicker').datepicker('setDate', 'today');