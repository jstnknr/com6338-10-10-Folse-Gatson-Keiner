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
 
  const dogImage = document.getElementById("dogImage");
  const dogBreed = document.getElementById("dogBreed");
  const dogGroup= document.getElementById("dogGroup")

  function renderDog () {
 
  fetch("https://api.thedogapi.com/v1/images/search?has_breedsapi_key=${x-api-Key}", requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dogImage.src = data[0].url;
        dogBreed.innerHTML= "Dog Breed:" + JSON.stringify(data[0].breeds[0].name);
    })
    .catch(error => console.log('error', error)); 

}
