function displayData() {
  const apiGiph = "AYyh40hWbkpevIR5LRy7GIN3YSd382bx"
  const searchQuery = document.getElementById('searchQuery').value
  const endPointGet = `https://api.giphy.com/v1/gifs/search?api_key=${apiGiph}&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
    fetch(endPointGet)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json();
    })
    .then(data => {
      data.data.forEach(element => {
        const newImage = document.createElement("img");
        newImage.src = element.images.original.url;
        newImage.className = "giphy_img";
  
        const section_image = document.getElementById("section_image");
        section_image.appendChild(newImage);
        console.log(newImage);
      });
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
  }

async function displayTrending() {
  const apiGiph = "AYyh40hWbkpevIR5LRy7GIN3YSd382bx"
  const endPointGet = `https://api.giphy.com/v1/gifs/trending?api_key=${apiGiph}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`

    try {
      const response = await fetch (endPointGet)
      let data = await response.json()
        data.data.forEach(element => {
          let newImage = document.createElement ("img")
          newImage.src = element.images.original.url
          newImage.className = "giphy_img"
          console.log (newImage)
  
          let section_image = document.getElementById ("section_image")
          section_image.appendChild (newImage)
          console.log (section_image)
          console.log ("success")
        });
      } catch (error) {
      FileSystem.out.prinln("Error displaying")
  }
} 