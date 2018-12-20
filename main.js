var machineVictories = 0;
var userVictories = 0;
var draws = 0;
function computerPlay(){
    var nmb = Math.random() * (4-1) + 1;
    nmb = Math.floor(nmb);
    var machineChoose;
    if(nmb == 1){
        machineChoose = "fire";
    }else if(nmb == 2){
        machineChoose = "grass";
    }else{
        machineChoose = "water";
    }
    alert("Machine choose: "+machineChoose);
    return machineChoose;
}

function singlePlay(userPlays, machinePlays){
    var winner;
    //Player wins
    if(userPlays =="fire" & machinePlays =="grass"){
        winner="You win! Fire beats Grass!"
        userVictories++;
    }else if(userPlays =="grass" & machinePlays =="water"){
        winner="You win! Grass beats Water!"
        userVictories++;
    }else if(userPlays =="water" & machinePlays =="fire"){
        winner="You win! Water beats Fire!"
        userVictories++;
    }
    //Machine wins
    if(machinePlays =="fire" & userPlays =="grass"){
        winner="You lose...! Fire beats Grass!"
        machineVictories++;
    }else if(machinePlays =="grass" & userPlays =="water"){
        winner="You lose...! Grass beats Water!"
        machineVictories++;
    }else if(machinePlays =="water" & userPlays =="fire"){
        winner="You lose...! Water beats Fire!"
        machineVictories++;
    }
    //Draw
    if(winner == null){
        winner ="DRAW!"
        draws++;
    }
    
    //alert(winner+" " +userVictories+" - "+machineVictories);
    scoreUpdate();
    GameOver();
    
}

function scoreUpdate(){
    document.getElementById("user").innerHTML = "User Victories: "+userVictories;
    document.getElementById("machine").innerHTML = "Machine Victories: "+machineVictories;
    document.getElementById("draw").innerHTML = "Draws: "+draws;
}

function GameOver(playerChoose, machineChoose){
    if(userVictories == 3){
        userVictories = 0;
        machineVictories = 0;
        draws = 0;
        alert("User Wins!");
        scoreUpdate();
    }else if(machineVictories == 3){
        userVictories = 0;
        machineVictories = 0;
        draws = 0;
        alert("Machine Wins!");
        scoreUpdate();
    }

}