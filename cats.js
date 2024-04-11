    
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_ko6irPUKUlEKskbue5qj0HAu4bSo38UV1a4uruSB2jnD9T9oWATpLUYwhNYdx5Wi"
      });
      
      var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };
    
      const catButton = document.getElementById("catButton");
      catButton.onclick = renderCat
     
      const catContainer = document.getElementById("catContainer");
      const catBreed = document.getElementById("dogBreed");
      const dogGroup= document.getElementById("dogGroup")
    
      function renderCat () {
     
      fetch("https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const catImage = document.createElement('img')
             catImage.src= data[0].url;
             catContainer.appendChild(catImage)
    
        })
        .catch(error => console.log('error', error)); 
    
    }
    