document.getElementsByClassName('arts__body___3acI_-camelCase')[0].style.left = '100px'
document.getElementsByClassName('arts__body___3acI_-camelCase')[0].style.right = '0px'
document.getElementsByClassName('arts__body___3acI_-camelCase')[0].style.width = 'auto'
let style = document.createElement('style')
style.innerHTML = (`
:root{
    overflow-x: hidden; 
    overflow-y: scroll;
    --primary-background: rgb(25,25,25);
    --parent-height: 100rem;
    --parent-top: 55px;
}

.navbar{
    position: fixed;
    background-color: var(--primary-background);
    height: var(--parent-height);
    width: 100px;
    left: 0px;
    top: var(--parent-top);
    transition: width 200ms ease;
}


.parent{
    position: fixed;
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: var(--parent-height);
    left: 0px;
    width: 400px;
    top: var(--parent-top);
}

.child{
    position: relative;
    width: 100%;
}
`)
document.head.appendChild(style)
let nav = document.createElement('nav')
nav.classList.add('navbar')
let div = document.createElement('ul')
div.classList.add('parent')
function addLi(name, onclick){

}
let guiBtn = document.createElement('li')
guiBtn.classList.add('child')
div.appendChild(guiBtn)
nav.appendChild(div)
nav.onmouseover = () => nav.style.width = '400px'
nav.onmouseleave = () => nav.style.width = '100px'
document.body.appendChild(nav)
