fetch('http://127.0.0.1:3001/db1.json/names')
.then(data => { console.log(data)
  // Assuming data has a property named 'text'
//   var textContent = data.text;

//   // Display the text content in the 'output' div
//   document.getElementById('output').textContent = textContent;
})
.catch(error => {
  console.error('Error fetching data:', error);
});