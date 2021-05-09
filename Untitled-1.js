var button = document.createElement("button"); // сама кнопка
var text = document.createTextNode("Добавить вопрос"); // создать текст на кнопке
button.appendChild(text); // чтобы текст появился на кнопке
button.body.appendChild(button); // приделать эту кнопку к html ???

// ОШИБКИ
var СС1 = "Вы не ввели текст вопроса.\nПопробуйте ввести вопрос заново.";
var СС2 = "Вы не ввели текст *N варианта ответа.\nПопробуйте добавить вопрос заново.";
var СС3 = "*N - номер вопроса.";
var СС4 = "Вы не ввели правильные варианты ответов.\nПопробуйте добавить вопрос заново.";
var СС5 = "Все вопросы должны иметь хотя бы один выбранный вариант ответа. \nПроверьте правильность заполнения.";
var СС6 = "Ваш результат<количество правильно отвеченных вопросов> из <количества всех вопросов>. \nВы молодец!";
var СС7 = "Поле может содержать только уникальные\nцифры 1, 2, 3, 4, разделенные запятой.\nПопробуйте добавить вопрос заново.";

// НЕ РАБОТАЕТ
function showErrors(typeOfError) {
  confirm(typeOfError);
}

/* это функция о том, что будет при нажатии на кнопку.
это и есть событие onclick (наверное??) А НУЖНА ЛИ ОНА)))*/
function clickButAddQ() {

  enterQuestion();
  createСorrectAnsws();

  addQuestsAndAnsws();
}


// функция ВВЕСТИ ВОПРОС
function enterQuestion() {
  var questsArr = []; // для вопросов
  var questsLength = 5; // длина массива (кол-во вопросов)

  for (var indexQ = 0; indexQ < questsLength; indexQ++) {
    var inputQValue = prompt(`Введите текст ${indexQ + 1} вопроса: `);
    /* проверить, что вопрос ввели */
    if (inputQValue === "") {

      showErrors(CC1); // НЕ РАБОТАЕТ
      //confirm("Вы не ввели текст вопроса. Попробуйте ввести вопрос заново."); // вернет булевое значение (нах мне эта информацяи)
      enterQuestion();
    } else if (inputQValue !== "") {
      questsArr[indexQ] = formatInputStr(inputQValue); // НЕ РАБОТАЕТ формат положить вопрос в массив с вопросами

      createAnswerOption(); // вводим варинты ответа на i-ый вопрос 

      addQuestsAndAnsws(indexQ); // рисует вопрос
    }
  }
}


// функция ЗАДАТЬ ВАР-ТЫ ОТВЕТОВ
function createAnswerOption() {
  var answsArr = [];
  //var total = answsArr.push(); это на потом
  var answsLength = 4;

  for (var indexA = 0; indexA < answsLength; indexA++) {
    var inputAnswValue = prompt(`Введите текст ${indexA + 1} варианта ответа`);
    if (inputAnswValue === "") {

      showErrors(CC2); // НЕ РАБОТАЕТ

      // добавить вопрос заново
      enterQuestion();
    } else if (inputAnswValue !== "") {
      answsArr[indexA] = formatInputStr(inputAnswValue);
      /* или так ???
      answsArr.push(indexA); не нравится(( хрень какая-то */

      addQuestsAndAnsws(indexA); // рисует ответы

    }
  }
}

// подрезать пробелы в введеной строке с обоих концов (НЕ РАБОТАЕТ!!!!!)
function formatInputStr(untrimmedStr) {
  return untrimmedStr.trim();
}

// функция ЗАДАТЬ ПРАВИЛЬНЫЕ ВАР-ТЫ ответов
function createСorrectAnsws() {
  var correctAnsw = prompt("Введите номера правильных ответов\nчерез запятую. Нумерация начинается с\n1");
  var cAArr = [];

  for (let indexCA = 0; indexCA < cAArr.length; indexCA++) {

    if ((correctAnsw !== "") &&
      (correctAnsw === "1" || correctAnsw === "2" || correctAnsw === "3" || correctAnsw === "4" ||
        correctAnsw === "1,2" || correctAnsw === "1,3" || correctAnsw === "1,4" ||
        correctAnsw === "2,3" || correctAnsw === "2,4" ||
        correctAnsw === "3,4" ||
        correctAnsw === "1,2,3" || correctAnsw === "2,3,4")) {

      cAArr[indexCA] = correctAnsw;

    } else {

      enterQuestion();
    }
  }

}

// СОЗДАТЬ ВОПРОСЫ и ОТВЕТЫ (видимые)
function addQuestsAndAnsws(taskName) {

  // создать вопрос
  var labelQ = createLabel(taskName);
  document.body.append(labelQ);
  // создать ответ
  var labelA = createLabel(taskName); // создать лейбл вар-та ответа 
  var checkboxA = createCheckbox();
  document.body.append(checkboxA); // появление чекбокса
  document.body.append(labelA); // появление лейбла
}

// функция СОЗДАТЬ ЛЕЙБЛ (для вар-тов ответа и для вопроса тоже???)
function createLabel(taskName) {
  var labelA = document.createElement("label");
  labelA.textContent = taskName;
  return labelA;
}

// функция СОЗДАТЬ ЧЕКБОКСы ДЛЯ ОТВЕТОВ
function createCheckbox() {
  var checkboxA = document.createElement("input")
  checkboxA.type = "checkbox";
  return checkboxA;
}

// функция ИЗВЛЕЧЬ ВОПРОСЫ И ОТВЕТЫ ИЗ МАССИВОВ и зачем
function extractElements(questsArr, answsArr) {
  questsArr.forEach(question => {
    return

  });
}


// кнопка начать тест
var button = document.createElement("button");
var text = document.createTextNode("Начать тест");
button.appendChild(text);
button.body.appendChild(button);




// действие кнопки начать тест
function clickStartTest() {}