// Function to send data to Apps Script
async function sendToSheets(formData) {
  const params = new URLSearchParams(formData).toString();
  const response = await fetch(`https://script.google.com/macros/s/AKfycbwuzVQmKyt1zz_gJNscnmdVn5D3R6Wt72qOuCXDpcydrWipvHQF0YrOik9kFRBLsbPA/exec?${params}`);
  return response.json(); // returns JSON with {status: 'success'} or {status: 'error'}
}

// Form handler
document.getElementById('demo-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    email: document.getElementById('email').value,
    classLevel: document.getElementById('class-level').value,
    role: document.getElementById('role').value
  };

  try {
    const result = await sendToSheets(data);

    if (result.status === 'success') {
      alert("Successfully sent!");
      document.getElementById('demo-form').reset();
    } else {
      alert("Error sending: " + (result.message || "Unknown error"));
      console.error(result);
    }
  } catch (error) {
    alert("Fetch error: " + error);
    console.error(error);
  }
});
