function sendAjax(url, data){
    data = {'email' : data};
    data = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);

    xhr.addEventListener('load', ()=>{ // 일 다 끝나면 발동
        console.log("xhr.responseText : " + xhr.responseText);
        var result = JSON.parse(xhr.responseText);
        if(result.result !== 'ok') return;
        document.querySelector(".result").innerHTML = result.email;
    });
}

document.querySelector('.ajaxsend').addEventListener('click', ()=>{
    var inputdata = document.forms[2].elements[0].value;
    console.log('inputdata : ' + inputdata);
    sendAjax('http://localhost:3000/ajax_send_email', inputdata);
})