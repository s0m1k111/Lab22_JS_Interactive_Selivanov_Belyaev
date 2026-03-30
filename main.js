const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");

const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");

const result = document.getElementById("result");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const city = cityInput.value.trim();
  const hobby = hobbyInput.value.trim();

  if (!name || !age || !city || !hobby) {
    result.textContent = "Пожалуйста, заполните все поля.";
    return;
  }

  result.textContent = `Имя: ${name}, Возраст: ${age}, Город: ${city}, Хобби: ${hobby}`;
});

clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  hobbyInput.value = "";
  result.textContent = "";
});
