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

//add
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
        const array = data.rows;
        const last = array[array.length-1];
        $('#contents').append(`<li>할일 : <span id = "pass_con${last.id}">${last.contents}</span>
        기한 : <span id = "pass_dead${last.id}">${last.deadline}</span> <br>
        <input type = "button" class = "btn_edit" value = "수정" onclick="edit_contents(${last.id})">
        <input type = "button" class = "btn_delete" value = "삭제" onclick = "del_contents(${last.id})"></li><br>`);
    });
    $('#write').attr('style', 'visibility:hidden');
    
});

//list
function list(){
    callApi('/list', {}, (data)=>{
        const array = data.rows;
        for(let i = 0; i < array.length; i++){
            const json = array[i];
            $('#contents').append(`<li>할일 : <span id = "pass_con${json.id}">${json.contents}</span>
            기한 : <span id = "pass_dead${json.id}">${json.deadline}</span> <br>
            <input type = "button" class = "btn_edit" value = "수정" onclick = "edit_contents(${json.id})">
            <input type = "button" class = "btn_delete" value = "삭제" onclick = "del_contents(${json.id})"></li><br>`);
        }
    });
}

let index;
function edit_contents(id){
    $('#edit').attr('style', 'visibility:visible');
    const main = $(`#pass_dead${id}`).position();
    const pop = $('#edit');
    pop.css('top', (main.top)+'px');
    pop.css('left', (main.left + 100) + 'px');
    const pass_con = $(`#pass_con${id}`).text();
    const pass_dead = $(`#pass_dead${id}`).text();
    $('#edit_contents').val(pass_con);
    $('#edit_contents').focus();
    $('#edit_deadline').val(pass_dead);
    index = id;
}

//edit
$('#btn_edit').click(()=>{
    const new_contents = $('#edit_contents').val();
    const new_deadline = $('#edit_deadline').val();
    if(!new_contents || !new_deadline){
        if(!new_contents){
            alert('내용을 입력해주세요');
            return false;
        }
        else if(!new_deadline){
            alert('기한을 정해주세요');
            return false;
        }
    }
    const newJson = {
        'id' : index,
        'contents' : new_contents,
        'deadline' : new_deadline
    };
    callApi('/edit', newJson, (data)=>{
        $('#contents').empty();
        const json = JSON.parse(data);
        const array = json.rows;
        for(let i = 0; i < array.length; i++){
            const temp = array[i];
            $('#contents').append(`<li>할일 : <span id = "pass_con${temp.id}">${temp.contents}</span>
            기한 : <span id = "pass_dead${temp.id}">${temp.deadline}</span> <br>
            <input type = "button" class = "btn_edit" value = "수정" onclick = "edit_contents(${temp.id})">
            <input type = "button" class = "btn_delete" value = "삭제" onclick = "del_contents(${temp.id})"></li><br>`);
        }
    });
    alert('수정 완료!');
    $('#edit').attr('style', 'visibility:hidden');
});

function del_contents(id){
    const sure = confirm('정말로 삭제하시겠습니까?');
    if(!sure) {return false;}
    const idJson = {'id' : id};
    callApi('/delete', idJson, (data)=>{
        $('#contents').empty();
        const array = data.rows;
        for(let i = 0; i < array.length; i++){
            const temp = array[i];
            $('#contents').append(`<li>할일 : <span id = "pass_con${temp.id}">${temp.contents}</span>
            기한 : <span id = "pass_dead${temp.id}">${temp.deadline}</span> <br>
            <input type = "button" class = "btn_edit" value = "수정" onclick = "edit_contents(${temp.id})">
            <input type = "button" class = "btn_delete" value = "삭제" onclick = "del_contents(${temp.id})"></li><br>`);
        }
    })
}

$(document).ready(()=>{
    list();
});