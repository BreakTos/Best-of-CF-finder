// content.js
var targetDiv = document.querySelector('.title');
  
    // Check if the div exists before attempting to change its color
    if (targetDiv&&window.location.href.indexOf("problem")!=-1) {
     //targetDiv.style.color="red";
     // add two buttons as child
     targetDiv.style.paddingLeft="150px";
     var upvote=document.createElement('button');
     var downvote=document.createElement('button');
     upvote.style.backgroundColor="green";
     downvote.style.backgroundColor="red";
     upvote.style.width="30px";
     downvote.style.height="30px";
     upvote.style.height="30px";
     downvote.style.width="30px";
     upvote.style.marginRight="30px";
     upvote.style.marginLeft="30px";
    targetDiv.appendChild(upvote);
    targetDiv.appendChild(downvote);
    var secondDiv = document.querySelector('.lang-chooser > div:nth-child(2) a');
    var nubName=secondDiv.innerHTML;
    //alert(nubName);
    var curProb=window.location.href;
    if(curProb.indexOf("contest")==-1) curProb=curProb.substring(curProb.indexOf("problem/")+8);
    else curProb=curProb.substring(curProb.indexOf("contest/")+8,curProb.indexOf('problem')-1)+"/"+curProb[curProb.length-1];
    
      //  alert('hi');
    upvote.addEventListener('click', ()=>{
        // send nubName and curProb to backend
        //  alert("jo")
        upvoteBackend(curProb,nubName);
    });
    downvote.addEventListener('click', ()=>{
        alert('Downvoted');
    })
    }


  function upvoteBackend(curProb,nubName){
    var data={prob:curProb,name:nubName};
    //alert("hi")
    const endPoint ="https://cfproblemrater.onrender.com/updateVotes";
    fetch(endPoint,{
        method:'POST',
        headers:{       
      'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
    })
    //alert("bye")
  }