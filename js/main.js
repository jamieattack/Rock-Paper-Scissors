var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice <= 0.34) {
	computerChoice = "rock";
	
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
	
} else {
	computerChoice = "scissors";
	
} document.write("Computer: " + computerChoice + "<br>")
document.write("UserChoice: " + userChoice + "<br>")

function compare(){
  if(userChoice === computerChoice) {
     result =("The result is a tie")
    } 
      else if(userChoice === "rock" && computerChoice ==="paper"){
 		 result=("paper wins")
 	}
 	  else if(userChoice === "rock" && computerChoice =="scissors"){
 		 result =("rock wins")
 	}
 	  else if(userChoice === "paper" && computerChoice == "rock"){
 	  	 result =("paper wins")
 	}
 	  else if(userChoice ==="paper" && computerChoice == "scissors"){
 	  	 result =("scissors wins")
 	}
 	  else if(userChoice ==="scissors" && computerChoice == "rock"){
 	  	result =("rock wins")
 	}
 	  else if(userChoice === "scissors" && computerChoice == "paper"){
 	  	 result =("scissors wins")
 	} 
 }

 compare()
 document.write(result)



