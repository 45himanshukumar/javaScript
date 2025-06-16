
let userscore=0;
let computerscore=0;

 const choises= document.querySelectorAll(".choies");
   const msg=document.querySelector("#msg");
   const userscorepara= document.querySelector("#user");
   const computerscorepara=document.querySelector("#comp")

   const getcomputerchoies=()=>{
           const option=["rock","paper","scissors"];
           const randomnumber=Math.floor(Math.random()*3);
           return option[randomnumber];
   }

       const draw=()=>{
          console.log("draw");
          msg.innerText="Game draw please try again";
          msg.style.backgroundColor="#081b31";
       }


       const showwin=(userwin,userchoies,computerchoies)=>{
           if(userwin){
            userscore++;
            userscorepara.innerText=userscore;
            msg.innerText=`You Win.${userchoies} beats ${computerchoies}`;
            msg.style.backgroundColor="green";
           }
           else{
            computerscore++
             computerscorepara.innerText=computerscore;
            msg.innerText=`You Lose.${computerchoies}  beats  ${userchoies}`;
            msg.style.backgroundColor="red";
           }
       }

    const playgame=(userchoies)=>{
            console.log("userchoies=>",userchoies);

            const computerchoies=getcomputerchoies();
            console.log("computerchoies=>",computerchoies);

            if(userchoies===computerchoies){
                draw();
            }
            else{
                let userwin=true;
                if(userchoies==="rock"){
                    //scissors,paper
                 userwin=   computerchoies==="paper"? false:true;
                }
                else if(userchoies==="paper"){
                    //rock,scissors
                  userwin=  computerchoies==="scissors"?false:true;
                }
                else{
                    //rock,paper
                   userwin=   computerchoies==="rock"?false:true;
                }
                showwin(userwin,userchoies,computerchoies);
            }
    }

   choises.forEach( (choies) => {
       //console.log(choies)
        choies.addEventListener("click",()=>{
            const userchoies=choies.getAttribute("id");
            playgame(userchoies);
        });

   });