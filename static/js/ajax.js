function callApi(api, json, callback){
    $.ajax({
        url:'/api' + api,
        data:json,
        type:'POST',
        success : (data)=>{
            callback(data);
        },
        error : (err)=>{
            alert('오류, 콘솔 창 확인');
            console.log(JSON.stringify(err));
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
        const array = data['rows'];
        const last = array[array.length-1];
        $('#contents').append(`<li>할일 : ${last['contents']} 기한 : ${last['deadline']} </li><br>`);
    });
    $('#write').attr('style', 'visibility:hidden');
});


function list(){
    callApi('/list', {}, (data)=>{
        const array = data['rows'];
        for(let i = 0; i < array.length; i++){
            const json = array[i];
            console.log(array[i]);
            $('#contents').append(`<li>할일 : ${json['contents']} 기한 : ${json['deadline']} </li><br>`);
        }
    });
}

$(document).ready(()=>{
    list();
});