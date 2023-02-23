"use strict";

let name = prompt("Wassup dude! Cheesed to meet ya, what's your name?");
alert(`Ready to learn about me, ${name}? We can be besties if you get 5 outta 5!`);

function submitQuiz() {
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;
    const q5 = document.getElementById("q5").value;

    const answers = ["Lui E/Em", "January 2003", "Soulsville 2021", "Youtube", "Krispy Kreme"];
    const userAnswers = [q1, q2, q3, q4, q5];

    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
        score++;
      }
    }

    alert(`You got ${score} out of 5 questions correct!`);
  }

  // Lab 03

  // let correctAnswer = "12"

// function submitNumber6() {
//   const userAns = document.getElementById("Q6").value;
//   if (userAns > correctAnswer) {
//     alert(`Number is too high! Try again.`);
//   }
//   else if (userAns < correctAnswer) {
//     alert(`Number is too low! Try again.`);
//   }
//   else {
//     alert(`You guessed right!`);
//   }
// }

// function sumbitNumber6() {
//   const userAns = document.getElementById("Q6").value;
//   if (userAns > correctAnswer) {
//     alert(`Number is too high! Try again.`);
//   }
//   else if (userAns < correctAnswer) {
//     alert(`Number is too low! Try again.`);
//   }
//   else {
//     alert(`Nice! You got it!`);
//   }
// }

let correctAnswer = 12;

function submitNumber6() {
  let userAns = document.getElementById("Q6").value;
  if (userAns > correctAnswer) {
    alert(`Nuh-uh, too high.`);
  }
  else if (userAns < correctAnswer) {
    alert(`Nuh-uh, too low.`);
  }
  else if (userAns = correctAnswer)
  alert(`Awesome, you go it!`)
}


// Below is for lab 3 Q7

function checkUA(userinput, correctanwsers) {
  let userWC = false;
  let x = 0;
  while (x < correctanwsers.length) {
    if (correctanwsers[x] == userinput) {
      userWC = true
    }
    x += 1
  }
  if (userWC == true) {
    return true
  }
  if (userWC == false) {
    return false
  }

}


let userAns2 = "";
let correctAnswer2 = ["green", "red", "violet", "yellow"];
let retry = 5
function submitNumber7() {

  if (retry > 0) {


    let userAns2 = document.getElementById("Q7").value;
    let userWC = checkUA(userAns2, correctAnswer2)

    if (userWC == true) {
      alert("Congrats!")
    }
    if (userWC == false) {
      alert("Wanna Try Again?")
    }

    retry -= 1
  }
  else {
    alert(`Trials up!`)
  }
}

// Lab 04

let correctAnswerYN1 = "yes";

function submitYN1() {
  let userAns = document.getElementById("YN1").value;
  if (userAns == correctAnswerYN1) {
    alert(`correct.`);
  }
  else if (userAns == "no") {
    alert("nope");
  } 
  }
  

let correctAnswerYN2 = "yes";

function submitYN2() {
  let userAns = document.getElementById("YN2").value;
  if (userAns == correctAnswerYN1) {
    alert(`correct.`);
  }
  else if (userAns == "no") {
    alert("nope");
  } 
  }

  let correctAnswerYN3 = "no";

function submitYN3() {
  let userAnsYN3 = document.getElementById("YN3").value;
  if (userAnsYN3 == correctAnswerYN3) {
    alert(`correct.`);
  }
  else if (userAnsYN3 == "yes") {
    alert("no");
  } 
  }