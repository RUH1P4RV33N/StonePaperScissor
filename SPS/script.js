const options = document.querySelector('.play .comp .items'); 
const useropt=document.querySelector('.play .user .items');
const usermain=document.querySelector('.play .user .main img');
const info=document.querySelector('.container')
const firstChild = [options.children[0],options.children[1],options.children[2]];
const highscore=document.querySelector('.container h5 span');
const start=document.querySelector('.container .btn');
let arr=['stn','prp','scs'];
let compchoice;
let userchoice=null;
let hs=0;
const arrimg=['stone.png','paper.png','scissor.png']
const userimgs=[useropt.children[0],useropt.children[1],useropt.children[2]];
let value=true;

//pop
info.classList.add('active-popup');
pop();
let inter;

//Animation
function rand() {
    let i = 0; 
    inter=setInterval(() => {
        firstChild[i].classList.add(arr[i])
        compchoice=arr[i];
        console.log(compchoice);
        i = (i + 1) % 3;
        firstChild[i].classList.remove(arr[i]);
        
            console.log((arr));
            
            i=(i+1)%3;
    }, 200);

}
//on click
function onclick(){
    userimgs.forEach((img,i)=>{
        img.addEventListener('click',function(){
            usermain.src=arrimg[i];
            userchoice=arr[i];
        })
    })
}


let scr=0;
const submit=document.querySelector('.play .vs div input.btn');
const score=document.querySelector('.game h2 span.score');


    submit.addEventListener('click',function(){
    submit.classList.add('active');
    if(userchoice===null)
    {
        alert("PICK UP A CHOICE");
    }
    else if(userchoice===compchoice)
    {
        score.innerHTML=`DRAW`;
        // score.innerHTML=`${scr}`;
    }
    else if(userchoice==='stn'&& compchoice==='scs')
    {
        scr++;
        score.innerHTML=`${scr}`;
    }
    else if(userchoice==='scs'&& compchoice==='prp')
    {
        scr++;
        score.innerHTML=`${scr}`;
    }
    else if(userchoice==='prp'&& compchoice==='stn')
    {
        scr++;
        score.innerHTML=`${scr}`;  
    }
    else{
        clearInterval(inter);
        information();
        reset();
    }
});


function reset(){
    scr=0;
    userchoice=null;
    score.innerHTML=`${scr}`;
    usermain.src='prof.avif';
    information();
    info.classList.add('active-popup');
    pop();
}

function information()
{
    if(scr>hs)
    {
        hs=scr;
    }
    highscore.innerHTML=`${hs}`;
}

const input=document.getElementById('username');
function pop(){
    start.addEventListener('click',()=>{
        if(input.value==="")
        {
            alert('NO VALUE ENTERED');
        }
        else
        {
            info.classList.remove('active-popup');
            clearInterval(inter);
            rand();
            onclick();
        }
        
    })
}





