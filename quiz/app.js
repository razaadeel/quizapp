var questions = ["How many headings are in HTML?","Tag used for breaking line is _____","How many list are there in HTML?","ul tag used for?","Images created for the web should be saved at a resolution of","p is an _____ element","span is an _____ element", "To add image, we use ____ tag","What is the current version of HTML?","th tag is used for?"];
var options = {
    A: ["4", "br", "1", "Order List", "100 ppi", "Block", "Block", "img", "HTML5", "table data"],
    B: ["6", "hr", "2", "Unorder List", "64 ppi", "Inline", "Inline", "image", "HTML4", "table row"],
    C: ["3", "p", "3", "Under Line", "80 ppi", "Both", "Both", "pic", "HTML3", "table head"],
    D: ["7", "b", "4", "None of the Above", "72 ppi", "None", "None", "im", "HTML1", "table heading"]
}
var ans = ["b", "a", "c", "b", "d", "a", "b", "a", "a", "d"];

var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

document.getElementById('mainDiv').style.display = "none";
document.getElementById('result').style.display = "none";

function start(){

}

var count = 0;
var Qno = 1;
var marks = 0;
function nextQues(){
    var selectedOpt = document.querySelector('input[type=radio]:checked');

    if (!selectedOpt) {
        alert('Please select option!');
       
    }
    else{
        if(count < 10){
            selectedOpt.checked = false;
            document.getElementById('start').style.display = "none";
            document.getElementById('mainDiv').style.display = "block";
            question.innerHTML ="Q" + Qno + ": " + questions[count];
            option1.innerHTML = options.A[count];
            option2.innerHTML = options.B[count];
            option3.innerHTML = options.C[count];
            option4.innerHTML = options.D[count];
    

            if(Qno <= questions.length){
                count++;
                Qno++;
            }
            
        }
        else{
            document.getElementById('mainDiv').style.display = "none";
            document.getElementById('result').style.display = "block";
            if(marks < 6){
                document.getElementById('resultHeading').innerHTML = "Sorry! You are Fail";
                document.getElementById('marksHeading').innerHTML = "You got " + marks + " marks";
            }
            else{
                document.getElementById('resultHeading').innerHTML = "Congratstulations! You are Pass"
                document.getElementById('marksHeading').innerHTML = "You got " + marks + " marks"
            }
            //console.log("result is " + marks);
        } 
    }
}


var i = 0;
function check(selected){
    if(selected === ans[i]){
        marks++;
    }
    i++;
    //console.log(marks);
}

