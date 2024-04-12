document.getElementById("randomButton").addEventListener("click", function() {
    const links = [
        "dogs.html",
        "cats.html"
    ];
    
    const randomIndex = Math.floor(Math.random() * links.length);
    
    window.location.href = links[randomIndex];
});