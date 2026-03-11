// ПРОВЕРКА: Есть ли JavaScript на сайте?
console.log('🚀 JavaScript LOADED!');
window.addEventListener('load', function() {
    console.log('✅ Page fully loaded');
    alert('JavaScript работает! Если видите это сообщение - проблема не в отключенном JS.');
});

// ПРОСТЕЙШАЯ функция голосования
function simpleVote(question, option, button) {
    console.log('Vote function called:', question, option);
    alert('Голосование работает!\nВопрос: ' + question + '\nОтвет: ' + option);
    
    // Изменяем кнопку
    button.style.backgroundColor = '#E8281A';
    button.style.color = '#ffffff';
    button.disabled = true;
    
    alert('Кнопка изменена! Видите красный цвет?');
    return true;
}