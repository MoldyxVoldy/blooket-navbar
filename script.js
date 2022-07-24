setInterval(() => {
    try{
        document.getElementsByClassName('arts__body___3acI_-camelCase')[0].style.left = '100px'
        document.getElementsByClassName('arts__body___3acI_-camelCase')[0].style.right = '0px'
        document.getElementsByClassName('arts__body___3acI_-camelCase')[0].style.width = 'auto'//`${window.screen.width - 100}px`
    }catch{
        try{
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase')[0].style.left = '100px'
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase')[0].style.right = '0px'
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase')[0].style.width = 'auto'//`${window.screen.width - 100}px`
        }catch{
            try{
                document.getElementsByClassName('arts__profileRegularBody___2fvy5-camelCase')[0].style.left = '100px'
                document.getElementsByClassName('arts__profileRegularBody___2fvy5-camelCase')[0].style.right = '0px'
                document.getElementsByClassName('arts__profileRegularBody___2fvy5-camelCase')[0].style.width = 'auto'//`${window.screen.width - 100}px`
            }catch{
                
            }
        }
    }
}, 1000/30);

    
let style = document.createElement('style')
style.innerHTML = (`
:root{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
    overflow-y: scroll;
    --primary-background: rgb(25,25,25);
    --parent-height: 100rem;
    --parent-top: 55px;
    --tranistion-speed: 600ms;
    --text-primary: white;
}

*{
    margin: 0px;
    padding: 0px;
}

.navbar{
    position: fixed;
    background-color: var(--primary-background);
    height: var(--parent-height);
    width: 100px;
    left: 0px;
    top: var(--parent-top);
    transition: width 200ms ease;
    margin: 0px;
    padding: 0px;
}

.navbar:hover{
    width: 400px;
}

.navbar:hover .text{
    left: auto;
}

.navbar:hover .parent{
    width: 400px;
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
    width: 100px;
    top: var(--parent-top);
    transition: width 200ms ease;
}

.child{
    position: relative;
    display: block;
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: 100px;
    transition: width 200ms ease;
}

.child:hover{
    background-color: rgb(15, 15, 15);
}

.child:hover .text{
    color: #2623cc;
}

.icon{
    width: 75px;
    height: 75px;
    margin: auto;
    padding: 12.5px;
    padding-left: 10px;
    padding-top: 10px;
}

.text{
    display: inline;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: -999px;
    transition: 600ms;
    color: var(--text-primary);
    font-size: 35px;
}
`)
document.head.appendChild(style)
let nav = document.createElement('nav')
nav.classList.add('navbar')
let div = document.createElement('ul')
div.classList.add('parent')
function addLi(name){
    let btn = document.createElement('li')
    btn.innerHTML = name
    btn.classList.add('child')
    div.appendChild(btn)
}
// let guiBtn = document.createElement('li')
//guiBtn.innerHTML = 
'https://moldyxvoldy.w3spaces.com/images/favicon.png'

addLi('<img src="https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg" alt="img" class="icon"><p class="text">Blooket Gui</p>')
addLi('<img src="https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg" alt="img" class="icon"><p class="text">Account Creater</p>')
addLi('<img src="https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg" alt="img" class="icon"><p class="text">Connect to Server</p>')
addLi('<img src="https://moldyxvoldy.w3spaces.com/images/favicon.png" alt="img" class="icon"><p class="text">MxV-Utility</p>')
// guiBtn.classList.add('child')
// div.appendChild(guiBtn)

nav.appendChild(div)
// nav.onmouseover = () => nav.style.width = '400px'
// nav.onmouseleave = () => nav.style.width = '100px'
document.body.appendChild(nav)
div.children[Array.from(div.children).length-1].style.top = `${window.screen.height - 300}px`
div.children[Array.from(div.children).length-1].style.position = 'absolute'
