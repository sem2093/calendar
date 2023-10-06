$(document).ready(function(){
    $("#myCarousel").carousel();
});





function captureDate() {
            // Get the input element by its ID
            const dateInput = document.getElementById('dateInput');

            // Get the selected date value
            const selectedDate = dateInput.value;

            // Display the selected date (you can perform any further processing here)
            alert("Selected Date: " + selectedDate);

  outputDiv.textContent =  selectedDate;
        }

 const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  // Add an event listener to the input field to capture user input
  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    // Clear previous search results
    searchResults.innerHTML = '';

    // Filter months that match the user's input
    const matchingMonths = months.filter(month => month.toLowerCase().includes(query));

    // Display matching months
    matchingMonths.forEach(month => {
      const resultItem = document.createElement('div');
      resultItem.textContent = month;
      searchResults.appendChild(resultItem);
    });
  });

    
