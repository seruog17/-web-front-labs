function showDate() {
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let out = document.getElementById('current-date');
    let today = new Date();

    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 0px; margin-bottom: 30px;'>Дата и время для русской локали: " + today.toLocaleString('ru-RU') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 0px; margin-bottom: 30px;'>Дата и время для локали США: " + today.toLocaleString('en-US') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 0px; margin-bottom: 30px;'>Дата и время для локали Германии: " + today.toLocaleString('de-DE') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 0px; margin-bottom: 30px;'>Дата и время для французской локали: " + today.toLocaleString('fr-FR') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 0px; margin-bottom: 30px;'>Дата и время для японской локали: " + today.toLocaleString('ja-JP') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 0px; margin-bottom: 30px;'>Дата и время для испанской локали: " + today.toLocaleString('es-ES') + "</span>";

    out.innerHTML += "<br style='margin-bottom: 30px;'>";
    
    let year = today.getFullYear();
    let month = today.toLocaleString('ru-RU', { month: 'long' });
    let date = today.getDate();
    let dayNumber = today.getDay();
    let dayOfWeek = weekDays[dayNumber];

    out.innerHTML += "<br>Текущий год: " + year + "<br>Текущий месяц: " + month + "<br>Текущая дата: " + date + "<br>День недели: " + dayOfWeek;
}
function findDayOfWeek() {
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dateInput = document.getElementById('date');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const result = document.getElementById('result');

    const year = parseInt(yearInput.value, 10);
    const month = parseInt(monthInput.value, 10) - 1; 
    const date = parseInt(dateInput.value, 10);

    const dateObj = new Date(year, month, date);

    if (isNaN(dateObj.getTime())) {
        result.innerHTML = "Неверный формат даты!";
    } else {
        const dayNumber = dateObj.getDay();
        const dayOfWeek = weekDays[dayNumber];
        result.innerHTML = `День недели: ${dayOfWeek}`;
    }
}