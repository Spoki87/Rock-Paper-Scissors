const userPaper=document.getElementById('USERpaper');
const userRock=document.getElementById('USERrock');
const userSissors=document.getElementById('USERsissors');

const pcPaper=document.getElementById('PCpaper');
const pcRock=document.getElementById('PCrock');
const pcSissors=document.getElementById('PCsissors');

const button=document.createElement('button');
const score=document.getElementById('score');

const plaAgin=()=>{
    footer.appendChild('button');
}

const draw=()=>{
    const pcChoise=Math.floor(Math.random()*3+1);
    console.log(pcChoise);
    switch(pcChoise)
    {
        case 1:
            pcPaper.style.backgroundColor='black';
            return 'paper';
        case 2:
            pcRock.style.backgroundColor='black';
            return 'rock';
        case 3:
            pcSissors.style.backgroundColor='black';
            return 'sissors';
    }
}

const whosWinner=(pc,user)=>{
   if(user===pc)
   {
       score.textContent='REMIS';
   }
   else if(user==='paper'&&pc==='rock')
   {
       score.textContent='WYGRAŁEŚ';
   }
   else if(user==='paper'&&pc==='sissors')
   {
       score.textContent='PRZEGRAŁEŚ';
   }
   else if(user==='rock'&&pc==='paper')
   {
       score.textContent='PRZEGRAŁEŚ';
   }
   else if(user==='rock'&&pc==='sissors')
   {
       score.textContent='WYGRAŁEŚ';
   }
   else if(user==='sissors'&&pc==='paper')
   {
       score.textContent='WYGRAŁEŚ';
   }
   else if(user==='sissors'&&pc==='rock')
   {
       score.textContent='PRZEGRAŁEŚ';
   }
}

const choisePaper=()=>{
    userPaper.style.backgroundColor='black';
    const pcChoise=draw();
    const userChoise='paper';
    whosWinner(pcChoise,userChoise);
}

const choiseRock=()=>{
    userRock.style.backgroundColor='black';
    const pcChoise=draw();
    const userChoise='rock';
    whosWinner(pcChoise,userChoise);
}

const choiseSissors=()=>{
    userSissors.style.backgroundColor='black';
    const pcChoise=draw();
    const userChoise='sissors';
    whosWinner(pcChoise,userChoise);
}



userPaper.addEventListener('click',choisePaper);
userRock.addEventListener('click',choiseRock);
userSissors.addEventListener('click',choiseSissors);

