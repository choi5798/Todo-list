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