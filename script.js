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
