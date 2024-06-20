const toggleTheam = document.getElementById("switch");
const body = document.body;
const cuurTheam = body.getAttribute('data-theam');
body.setAttribute('data-theam', "light");
localStorage.setItem('theam', "light");

toggleTheam.addEventListener("click", () => {
    const currTheam =localStorage.getItem('theam');
     const newTheam = currTheam === "dark" ? "light" : "dark";
     localStorage.setItem('theam', newTheam);
     body.setAttribute('data-theam', newTheam);
})


// loading
window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector('.loading-section').classList.add('loaded');
      }, 2000);
  });

//   home-container

document.querySelectorAll(".question-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("question-button-active");
    });
  });

     //Greetings
     let greeting = document.getElementById("greeting");

     function setGreetings(){
        let day = new Date();
        let hour = day.getHours();
        if (hour < 12) {
            // morning
            greeting.textContent = "Good morning, ";
          } else if (hour < 18) {
            // afternoon
            greeting.textContent = "Good afternoon, ";
          } else {
            // evening
            greeting.textContent = "Good evening, ";
          }
     }
     setGreetings();
      
     //giving user name
     let name = document.getElementById("name");
        //getName
     function getName(){
        if(localStorage.getItem("name") === null){
            name.textContent = "[EnterYourName]";
        }
        else{
            name.textContent = localStorage.getItem("name");
        }
     }

         //  setName
         function setName(event){
            if(event.type === "keypress"){
                 if (event.which == 13 || event.keyCode == 13) {
                    localStorage.setItem("name", event.target.innerText);
                    name.blur();
                  }
                } else {
                  localStorage.setItem("name", event.target.innerText);
            }
         }

         name.addEventListener("keypress", setName);
         name.addEventListener("blur", setName);
         getName();

         //about user

         const text = [
            "You matter.",
            "You're awesome!",
            "You did great today!",
            "I believe in you!",
            "You are loved!",
            "You are worthy",
            "Keep going!",
            "I love you!",
            "Make it happen.",
            "Be a light.",
            "Know your worth.",
            "Things will get better",
            "Be good. Do good.",
            "Follow your heart.",
            "Stay hopeful!",
            "You are strong!",
            "Protect your peace.",
            "Be still.",
            "You are beautiful!",
            "Keep on fighting!",
          ];

          let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typingElement = document.querySelector(".typing");

function type() {
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Delay before typing next message
  } else {
    setTimeout(type, 50); // Adjust typing speed
  }

  // Reset count to loop through messages
  if (count === text.length) {
    count = 0;
  }
}

// Start typing
type();

//Modal Section

let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let closeBtn = document.querySelector(".close-btn");
let home = document.querySelector(".content");
modalBg.style.display="none";

modalBtn.addEventListener("click", function(){
    modalBg.style.display = "block";
    home.style.display="none";
});
closeBtn.addEventListener("click",function() {
    home.style.display="block";
    modalBg.style.display = "none";
    home.style.display= "flex";
    home.style.justifyContent ="ceneter"
    home.style.alignItem = "center"
    home.style.gap="1rem";
});

let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", function(){
    alert("You are successfully logged out !!!")
    window.location.assign("index.html");
})




