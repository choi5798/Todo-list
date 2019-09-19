$('#btn_insert').click(()=>{
    $('#write').attr('style', 'visibility:visible');
    $('#add_contents').focus();
    $('#add_contents').val('');
    $('#add_deadline').val('');
    if($('#edit').is(':visible')){
        $('#edit').attr('style', 'visibility:hidden');
    }
});

$('#btn_cancel').click(()=>{
    $('#write').attr('style', 'visibility:hidden');
});

$('#btn_edit_cancel').click(()=>{
    $('#edit').attr('style', 'visibility:hidden');
})

$('.datepicker').datepicker({
    showMonthAfterYear : true,
    format:"yyyy-mm-dd",
    i18n:{
        cancel:'취소',
        clear:'초기화',
        done:'확인',
        months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthsShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        weekdays:['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
        weekdaysShort:['일','월','화','수','목','금','토'],
        weekdaysAbbrev:['일','월','화','수','목','금','토'],
        previousMonth : '<',
        nextMonth : '>'
    },
    defaultDate : new Date(),
    setDafaultDate : true,
    showDaysInNextAndPreviousMonths : true,
    showClearBtn : true
}).datepicker('setDate', new Date());