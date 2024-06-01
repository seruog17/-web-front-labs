function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();

    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 20px; margin-bottom: 30px;'>Дата и время для русской локали: " + today.toLocaleString('ru-RU') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 20px; margin-bottom: 30px;'>Дата и время для локали США: " + today.toLocaleString('en-US') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 20px; margin-bottom: 30px;'>Дата и время для локали Германии: " + today.toLocaleString('de-DE') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 20px; margin-bottom: 30px;'>Дата и время для французской локали: " + today.toLocaleString('fr-FR') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 20px; margin-bottom: 30px;'>Дата и время для японской локали: " + today.toLocaleString('ja-JP') + "</span>";
    out.innerHTML += "<br><span style='font-family: Arial, sans-serif; font-size: 20px; color: black; font-weight: bold; margin-left: 20px; margin-bottom: 30px;'>Дата и время для испанской локали: " + today.toLocaleString('es-ES') + "</span>";
}