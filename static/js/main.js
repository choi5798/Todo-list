var donelist = document.getElementById('donelist');
function moveItem(){
    //this === span
    const listItemId = this.id.replace('li_' , '');
    const listItem = document.getElementById('li_' + listItemId);
    donelist.appendChild(listItem);
}

function renameItem(){
    // this === pencilIcon
    const pencilIcon = document.createElement('i');
    pencilIcon.className = 'fa fa-pencil';
    pencilIcon.onclick = renameItem;

    const newText = prompt('what should this item be renamed to?');
    if(!newText || newText === '' || newText === ' ') return false; // blank 방지
    const spanId = this.id.replace('pencilIcon_', '');
    const span = document.getElementById('item_' + spanId);

    span.innerText = newText;
}

function removeItem(){
    //this === span
    const listItemId = this.id.replace('li_', '');
    document.getElementById('li_' + listItemId).style.display = 'none';
}

function updateItemStatus(){
    const chId = this.id.replace('cb_', "");
    const itemText = document.getElementById('item_' + chId);

    if(this.checked){
        itemText.className = 'checked';
    }
    else{
        itemText.className = '';
    }
}

function addNewItem(list, itemText){
    const date = new Date();
    const id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    const checkBox = document.createElement('input');
    checkBox.onclick = updateItemStatus;
    checkBox.type = 'checkbox';
    checkBox.id = 'cb_' + id;

    const span = document.createElement('span');
    
    span.id = 'item_' + id;
    span.innerText = itemText;
    span.onclick = moveItem;
    
    const listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = removeItem;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);

}

const inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = (event)=>{
    // Event.which(13) === ENTER Key
    // console.log('which : ' + event.which);
    if(event.which === 13){
        const itemText = inputText.value;
        if(!itemText || itemText === "" || itemText === " ") return false;
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.select();
    }
};

