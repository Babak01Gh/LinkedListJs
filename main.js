
// Classes for linkedList
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    appendNode(newNode){
        let node = this.head;
        if(node==null){
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
}
class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

// Create variables
const myList = new LinkedList();
const addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const printBtn = document.querySelector('#print');
const searchBtn = document.querySelector('#search');
const deleteBtn = document.querySelector('#delete');
const nameInput = document.querySelector('.input__name');
const age = document.querySelector('.input__age');
const id = document.querySelector('.input__id');
const stuBoxList = document.querySelector('.studentsList');



// eventListener for Buttons
addBtn.addEventListener('click',()=>{
    const student = new Node([nameInput.value,age.value,id.value])
    myList.appendNode(student)
    clear()
})
clearBtn.addEventListener('click',clear)
printBtn.addEventListener('click',printer)
searchBtn.addEventListener('click',search)
deleteBtn.addEventListener('click',deleteNode);


function clear(){
    nameInput.value = '';
    age.value = '';
    id.value = '';
}
function printer(){
    let test = myList.head
    stuBoxList.innerHTML = '';
    while (test){
        printSome(test)
        test = test.next
    }
}
function search(){
    stuBoxList.innerHTML = '';
    const searchCode = id.value;
    let newHead = myList.head;
    while (newHead){
        if (newHead.data[2]===searchCode){
            printSome(newHead)
            break;
        }
        newHead = newHead.next;
    }
    if(!newHead){
        stuBoxList.textContent = 'NOT FOUND'
    }
}
function printSome(test){
    const section = document.createElement('div');
    section.classList.add('stuBox')
    section.innerHTML = '<i class="fa-regular fa-user fa-6x"></i>'
    const tags = ['p__name','p__code','p__age'];
    tags.forEach((el)=>{
        const pTag = document.createElement('p');
        pTag.classList.add(el);
        pTag.textContent = test.data[tags.indexOf(el)]
        section.appendChild(pTag)
    })
    const pNext = document.createElement('p');
    pNext.classList.add('p__next');
    pNext.textContent =  test.next ? `next: ${test.next.data[2]}`: `next: null`
    section.appendChild(pNext)
    stuBoxList.appendChild(section)
}

function deleteNode(){
    const deleteCode = id.value;
    let p = myList.head;
    while (p){
        let q = p.next;
        if (myList.head.data[2]===deleteCode){
            myList.head = myList.head.next;
            break;
        }
        if (q.next === null){
            if (q.data[2]===deleteCode){
                p.next = null
                break;
            }
            break;
        }
        if (q.data[2] === deleteCode){
            p.next = q.next
        }
        p = p.next;
    }
}