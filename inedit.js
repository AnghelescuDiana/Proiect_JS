


//lista de tip TO DO
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // CREAZA ELEMENT TIP "li"
	li.appendChild(document.createTextNode(input.value)); //face textul de tip input in "li"
	ul.appendChild(li); //adauga li la ul
	input.value = ""; //reseteaza inputul

        
	//de aici incepe codul cu taiatul
	// e in functiune, asa ca adauga numai pt elemente noi
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//aici se termina


	// butonul de add si delete
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// sfarsit


	//adauga clasa delete
	function deleteListItem(){
		li.classList.add("delete")
	}
	//sfarsit
}


function addListAfterClick(){
	if (inputLength() > 0) { //se asigura ca un input gol nu este creat drept li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //asta verifica daca apesi enter
		//13 este keycode pt enter
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
//sfarsit de TO DO list



//Calcul
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validam input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Verifica daca acest input este gol sau <=1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculul
  var total = (billAmt * serviceQual) / numOfPeople;
  //rotunjeaza la 2 decimale
  total = Math.round(total * 100) / 100;
  //da voie sa am mereu 2 cifre dupa punct
  total = total.toFixed(2);
  //afisare suma
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//sa se reseteze suma cand dai load la pagina
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click ca sa apelezi functia
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
//sfarsit calculator

/*
//ceas/timp
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// arata timpul curent pe pagina
var showCurrentTime = function()
{
    // afiseaza stringul pe pagina
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // setez orele
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // setez minutele
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // si secundele
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // pun impreuna stringul care afiseaza timpul
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

//pun ceasul sa se increementeze singur si sa schimbe mesajele si imaginile 
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Only the best!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Buy!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Come visit us!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// sa se incrementeze ceasul odata la secunda
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// fac butonul sa mearga
var partyButton = document.getElementById("TimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Sfarsit de reduceri!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Sa inceapa reducerile!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// activeava selectorul ofertaiarna
var ofertaiarnaselector =  document.getElementById("ofertaiarnaselector");

var ofertaiarnaEvent = function()
{
    ofertaiarna = ofertaiarnaselector.value;
};

ofertaiarnaselector.addEventListener("change", ofertaiarnaEvent);


// activeaza selectorul lunchtime
var ofertacadouselector =  document.getElementById("ofertacadouselector");

var cadouEvent = function()
{
    ofertacadou = ofertacadouselector.value;
};

ofertacadouselector.addEventListener("change", cadouEvent);


// activeaza selectorul nap time
var ofertaannnouselector =  document.getElementById("ofertaannnouselector");

var annouEvent = function()
{
    annou = ofertaannnouselector.value;
};

ofertaannnouselector.addEventListener("change", annouEvent);

//sfarsit  ceas
*/


//chestionar
(function() {
  const myQuestions = [
    {
      question: "Cine e creatorul firmei Louis Vuitton?",
      answers: {
        a: "Morris Jackson",
        b: "G.G. Ferndinand",
        c: "Louis Vuitton"
      },
      correctAnswer: "c"
    },
    {
      question: "Cu ce merge cureaua Gucci?",
      answers: {
        a: "Trashbag",
        b: "Rochie",
        c: "Pantaloni si bluza"
      },
      correctAnswer: "c"
    },
    {
      question: "Cine e cel mai bogat fashion designer?",
      answers: {
        a: "Nina Moriaty",
        b: "J.J. Simpson",
        c: "Eliza Turner",
        d: "Mimi Zorchini"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    //loc unde stochez outputul html ului 
    const output = [];

    // pt fiecare intrebare...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // stocam list the multipla choices
      const answers = [];

      // si pentru fiecare raspuns 
      for (letter in currentQuestion.answers) {
        // adauga un Html radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // adauga inttebarea si raspunsurile in output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // combina outputul listat intr un string de html si il afiseaza
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // obtin containerele de raspunsuri
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // retin raspunsurile userului
    let numCorrect = 0;

    // pt fiecare intrebare
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // cauta raspunsul selectat
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // daca raspunsul e corect
      if (userAnswer === currentQuestion.correctAnswer) {
        // adauga la nr de raspunsuri corecte
        numCorrect++;

        // daca e corect coloreaza verde
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // dac e gresit sau lasat gol, coloreaza cu rosu
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // afiseaza nr de raspunsuri corecte din total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // afiseaza quizul
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // la apasare submit, afiseaza rezultat
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
//incheiare quiz


