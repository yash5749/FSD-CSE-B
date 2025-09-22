const url = "https://api.github.com/users/";

fetch(url)
  .then(resp => resp.json())   
  .then(data => {
    console.log("DATA", data);
  })
  .catch(err => {
    console.error("Error:", err);
  });

console.log("Fetched successfully");
