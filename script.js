// this script fetches a random dog image from The Dog API and displays it on the page when the button is clicked.
document.addEventListener("DOMContentLoaded", function () {
  // ensure the DOM is fully loaded before attaching event listeners
  // select the button and attach a click event listener
  document
    .getElementById("fetch-button")
    .addEventListener("click", function () {
      // when the button is clicked, fetch a random dog image
      fetch("https://api.thedogapi.com/v1/images/search")
        // when the response is received, parse the JSON data
        .then((response) => response.json())
        .then((data) => {
          // check if the data is not empty
          if (data.length === 0) {
            console.error("no data received from API.");
            return;
          }
          // create an image element and set its source to the URL from the API response
          let imageContainer = document.getElementById("image-container");

          // check if the imageContainer exists in the DOM
          if (!imageContainer) {
            console.error("image container not found in the DOM.");
            return;
          }

          // create an img element and set its src attribute to the URL from the API response
          // set the alt attribute for accessibility
          // add some styling to the image
          let img = document.createElement("img");
          img.src = data[0].url;
          img.alt = "Random Dog";
          img.style.width = "300px";
          img.style.borderRadius = "10px";

          // clear the previous image and append the new image to the container
          imageContainer.innerHTML = ""; // Clear previous images
          imageContainer.appendChild(img);
        })
        // handle any errors that occur during the fetch operation
        // log the error to the console for debugging purposes
        .catch((error) => console.error("Error fetching dog image:", error));
    });
});
