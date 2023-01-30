const container=document.querySelector('.container');

container.addEventListener('click',(e)=>{
    console.log(`X: ${e.clientX}`);
    console.log(`Y: ${e.clientY}`);
})

// X -> 290 to 1630
// Y -> 200 to 480

const floatingParticipant = document.querySelectorAll('.participant');

setInterval(()=>{
    const X=Math.floor(Math.random()*(1630-290+1)+290);
    const Y=Math.floor(Math.random()*(480-200+1)+200);
    floatingParticipant.forEach((participant)=>{
        console.log(participant);
        participant.style.left=`${X}px`;
        participant.style.top=`${Y}px`;
    })
},1);