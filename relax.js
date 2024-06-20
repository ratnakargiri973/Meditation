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

//   logout
let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", function(){
    alert("You are successfully logged out !!!")
    window.location.assign("index.html");
})
