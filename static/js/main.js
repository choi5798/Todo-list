$('#btn_insert').click(()=>{
    $('#write').attr('style', 'visibility:visible');
    $('#add_contents').focus();
});

$('#btn_cancel').click(()=>{
    $('#write').attr('style', 'visibility:hidden');
});

$('#btn_edit_cancel').click(()=>{
    $('#edit').attr('style', 'visibility:hidden');
})