const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_offNx9b2F59eZC4cZAJfcpTXWH648xZzCO36GVahdtMKhqtyNH6hw1FM7c9vq2rs"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  const generateDogButton = document.getElementById("button");
  generateDogButton.onclick = renderDog
 
  const dogBreed = document.getElementById("dogBreed");
  const dogContainer= document.getElementById("dogContainer")

  

  function renderDog () {
 
  fetch("https://api.thedogapi.com/v1/images/search?has_breedsapi_key=${x-api-Key}", requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const dogImage = document.createElement('img')
             dogImage.src= data[0].url;
             dogImage.alt="Random Image of a Dog"
        dogBreed.innerHTML= "Dog Breed:" + JSON.stringify (data[0].breeds[0].name);
        dogContainer.appendChild(dogImage)
    })
    .catch(error => console.log('error', error)); 

}

window.onload = function welcomeAlert() {
  var userName = localStorage.getItem("userName");
  if (userName) {
    alert("Hello, " + userName + "! Welcome to the dog page! WOOF!");
  } else {
    alert("Welcome to the dog page! WOOF!")
      }
    }
