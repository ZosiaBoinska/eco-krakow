(function() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("myBtn").style.display = "block";
    } else {
    document.getElementById("myBtn").style.display = "none";
    }
  }

  const myScrollBtn = document.getElementById("myBtn");

  myScrollBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  const modal = document.getElementById("myModal");

  const btn = document.getElementById("newRulesPhoto");

  const span = document.getElementById("closePhoto");

  btn.onclick = function() {
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
  }

  const quizBtn = document.getElementById("openQuiz");

  const quizModal = document.getElementById("myModalQuiz");

  const spanQuiz1 = document.getElementById("closeQuiz1");

  quizBtn.onclick = function() {
    quizModal.style.display = "block";
  }

  quizModal.onclick = function(event) {
    if (event.target == quizModal) {
      quizModal.style.display = "none";
      window.location.reload(true);
    }
  }

  spanQuiz1.onclick = function() {
    quizModal.style.display = "none";
    window.location.reload(true);
  }

  const quizFinished = document.getElementById("quizCompleted");

  quizFinished.onclick = function() {

    const question1 = document.quiz.question1.value;
  	const question2 = document.quiz.question2.value;
  	const question3 = document.quiz.question3.value;
    const question4 = document.quiz.question4.value;
    const question5 = document.quiz.question5.value;
  	let correct = 0;

    if (question1 == "black") {
		correct++;
    }
	  if (question2 == "yellow") {
		correct++;
    }
  	if (question3 == "black") {
		correct++;
	  }
    if (question4 == "yellow") {
		correct++;
	  }
    if (question5 == "black") {
		correct++;
	  }
    const pictures = ["../photos/great.gif", "../photos/try.gif", "../photos/again.gif"];
	  const messages = ["Dobra robota!", "Nie jest ani dobrze, ani źle", "Oj, chyba trzeba by nad tym popracować..."];
	  let score;

	  if (correct == 0 || correct == 1) {
	  	score = 2;
	  }

	  if (correct > 1 && correct < 5) {
	  	score = 1;
	  }

	  if (correct == 5) {
	  	score = 0;
  	}

	  document.getElementById("afterSubmit").style.visibility = "visible";
    spanQuiz1.style.visibility = "hidden";

	  document.getElementById("feedback").innerHTML = messages[score];
	  document.getElementById("numberRight").innerHTML = "Twoja liczba poprawnych odpowiedzi to:  " + correct;
	  document.getElementById("feedbackPhoto").src = pictures[score];

    const spanQuiz2 = document.getElementById("closeQuiz2");

    spanQuiz2.onclick = function() {
      quizModal.style.display = "none";
      window.location.reload(true);
    }
    
  }


  for (i=1; i<13; i++) {
    let currentPhoto = document.getElementById("image"+i);
    currentPhoto.onclick = function() {
      currentPhoto.classList.toggle('photo-enlarged');
    }
  }

}) ();
