document.getElementById('welcome').innerText += " rehan";

const languagesDiv = document.getElementById('languages');
const ipaddressDiv = document.getElementById('ipaddress');

// Function to show the current date
function showDate() {
    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toLocaleDateString(); // Format the date (e.g., "MM/DD/YYYY")
    languagesDiv.innerHTML = `Current Date: ${formattedDate}`;
}

function showIP() {
    const ipaddressDiv = document.getElementById('ipaddress'); // Ensure there is a div with this ID

    // Fetch the public IP address from ipify
    fetch('https://api.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching IP address: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const ipAddress = data.ip; // Extract the IP address
            ipaddressDiv.innerHTML = `Your IP Address: ${ipAddress}`;
        })
        .catch(error => {
            console.error('An error occurred:', error);
            ipaddressDiv.innerHTML = 'An error occurred while fetching the IP address.';
        });
}

document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener('change', function () {
      const namesDiv = document.getElementById('names');
      namesDiv.innerHTML = this.value === 'male'
        ? 'John, Paul, Mark'
        : 'Mary, Jessica, Lisa';
    });
  });


  document.getElementById('country').addEventListener('change', function () {
    const languageDropdown = document.getElementById('language');
    languageDropdown.innerHTML = ''; // Clear options
  
    const options = this.value === 'INDIA'
      ? ['Hindi', 'English', 'Bengali']
      : ['English', 'Spanish', 'Italian'];
  
    options.forEach(language => {
      const option = document.createElement('option');
      option.value = language.toUpperCase();
      option.textContent = language;
      languageDropdown.appendChild(option);
    });
  });

  document.getElementById('save').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;

    const data = { Name: name, Age: age, DOB: dob };
    console.log(JSON.stringify(data));
  });

  document.getElementById('reset').addEventListener('mouseover', function () {
    document.getElementById('name').value = '';
    // document.getElementById('age').value = '';
    // document.getElementById('dob').value = '';
  });

  // Replace with your Google Client ID
  const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

  // Function to handle Google Login credentials
  function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log("Google User Info:", data);
    alert(`Welcome, ${data.name}`);
  }

  // Save Button Action
  document.getElementById('save').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;

    const data = { Name: name, Age: age, DOB: dob };
    console.log("Form Data:", JSON.stringify(data));
  });

  // Reset Button Action
  document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('userForm').reset();
  });

  function myReset() {
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('dob').value = '';
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }