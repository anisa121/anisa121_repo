// Функция для отправки данных на Apps Script
async function sendToSheets(formData) {
  const params = new URLSearchParams(formData).toString();
  const response = await fetch(`https://script.google.com/macros/s/AKfycbwuzVQmKyt1zz_gJNscnmdVn5D3R6Wt72qOuCXDpcydrWipvHQF0YrOik9kFRBLsbPA/exec?${params}`);
  return response.json(); // вернёт JSON с {status: 'success'} или {status: 'error'}
}

// Обработчик формы
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
      alert("Отправлено!");
      document.getElementById('demo-form').reset();
    } else {
      alert("Ошибка при отправке: " + (result.message || "Неизвестная ошибка"));
      console.error(result);
    }
  } catch (error) {
    alert("Ошибка при fetch: " + error);
    console.error(error);
  }
});
