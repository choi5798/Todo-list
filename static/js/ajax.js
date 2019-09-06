$('#btn_submit').click(()=>{
    const contents = $('#add_contents').val();
    const deadline = $('#add_deadline').val();
    console.log('deadline : ' + deadline);

    if(!contents || contents === ' '){
        alert('내용을 입력해주세요');
        return false;
    }
    if(!deadline || deadline === null){
        alert('기한을 정해주세요');
        return false;
    }
    $.ajax({
        url:'/api/add',
        data:{'contents' : contents, 'deadline' : deadline},
        type:'POST',
        success : (data)=>{
            alert('성공!');
        },
        error : (err)=>{
            alert(err);
        }

    })
})