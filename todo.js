
let myNoteList = document.getElementsByTagName('li');
var close = document.getElementsByClassName('close');
for (let i =0; i < close.length; i++) {
    close[i].onclick = function () {
        let closeNote = this.parentElement;
        closeNote.style.display = 'none';
    }
}

let list = document.querySelector('ul');

list.addEventListener('click', (task)=>{
    if (task.target.tagName === 'LI' ) {
        task.target.classList.toggle('checked')
    }
}, false);

let del = (e) => {
    let parent = document.getElementById('myUL');
    let child = e.target.parentElement;
    parent.removeChild(child);
};

newElement = () => {
    let arr = Array.from(myNoteList);
    let arrtext = arr.map((text)=>{
        return text.firstChild.data
    });
    if (document.getElementById('myInput').value ==='') {
        alert('please add any note')
    } else {
        arrtext.push( document.getElementById('myInput').value);
    }

    let sort = arrtext.sort();
    let fragment = document.createDocumentFragment();
    sort.map((element)=>{
        let li = document.createElement('li');
        let newValue = document.createTextNode(element);
        document.getElementById('myInput').value = '';
        li.appendChild(newValue);
        let span = document.createElement('span');
        let closeSign = document.createTextNode('\u00D7');
        span.className = 'close';
        span.style.color = 'black';
        span.addEventListener('click', del);
        span.appendChild(closeSign);
        li.appendChild(span);
        fragment.appendChild(li);
    });
    list.innerHTML = '';
    list.appendChild(fragment);

    for (let i =0; i < close.length; i++) {
        close[i].onclick = function () {
            let closeNote = this.parentElement;
            closeNote.style.display = 'none';
        }
    }
};
document.querySelector('.addBtn').addEventListener('click', newElement);




