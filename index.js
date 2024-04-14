document.getElementById("randomButton").addEventListener("click", function() {
    const links = [
        "dogs.html",
        "cats.html"
    ];
    
    const randomIndex = Math.floor(Math.random() * links.length);
    
    window.location.href = links[randomIndex];
});

var nameButton = document.getElementById('nameButton')

nameButton.onclick = function saveName() {
    var name = document.getElementById("nameInput").value;
    console.log(name)
    localStorage.setItem("userName", name);
  }

  