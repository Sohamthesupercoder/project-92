var questionturn="player 1";
var answerturn="player 2";
document.getElementById("playerquestion").innerHTML="question-turn= " + localStorage.getItem("player_1_name");
document.getElementById("playeranswer").innerHTML="answer-turn= " + localStorage.getItem("player_2_name");
var score1="0";
var score2="0";

document.getElementById("player1_name").innerHTML = localStorage.getItem("player_1_name") + " score= " + score1;
document.getElementById("player2_name").innerHTML = localStorage.getItem("player_2_name") + " score= " + score1;




function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanswer = parseInt(number1) * parseInt(number2);
    questionnumber = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_box = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionnumber + input_box + check_box;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    console.log(actualanswer);
}


function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer == actualanswer){
player1_score=score1 + 1;
document.getElementById("player1_name").innerHTML = localStorage.getItem("player_1_name") + " score= " + player1_score;
    }else{
        player2_score=score2 + 1;
        document.getElementById("player2_name").innerHTML = localStorage.getItem("player_2_name") + " score= " + player2_score;
    }


    if(questionturn == "player 1"){
        questionturn = "player2"
        document.getElementById("playerquestion").innerHTML="question-turn= " + localStorage.getItem("player_2_name");
        answerturn = "player1"
        document.getElementById("playeranswer").innerHTML="answer-turn= " + localStorage.getItem("player_1_name");
    } else{
        questionturn = "player1"
        document.getElementById("playerquestion").innerHTML="question-turn= " + localStorage.getItem("player_1_name");
        answerturn = "player2"
        document.getElementById("playeranswer").innerHTML="answer-turn= " + localStorage.getItem("player_2_name");
    }

    

    if(answerturn == "player 1"){
        answerturn = "player2"
        document.getElementById("playeranswer").innerHTML="answer-turn= " + localStorage.getItem("player_2_name");
    } else{
        questionturn = "player1"
        document.getElementById("playeranswer").innerHTML="answer-turn= " + localStorage.getItem("player_1_name");
    }
}