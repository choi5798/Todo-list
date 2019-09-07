function callApi(api, json, callback){
    $.ajax({
        url:'/api' + api,
        data:json,
        type:'POST',
        success : (data)=>{
            console.log(data);
            alert('성공!');
            callback(data);
        },
        error : (err)=>{
            alert('에러 : ' + err);
        }

    });
}

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
    const json = {'contents' : contents, 'deadline' : deadline};
    callApi('/add', json, (data)=>{
        const p = $('#body').createElement('p');
        p.innerHTML = data;
    })
    
})

