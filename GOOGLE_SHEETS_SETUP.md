# 📊 Подключение Google Sheets для сбора голосов

## Быстрая настройка (5 минут):

### 1. Создайте Google Таблицу
1. Откройте: https://sheets.google.com
2. Создайте новую таблицу: "TG Block Survey 2026"
3. В первой строке добавьте заголовки:
   - A1: `Timestamp`
   - B1: `Question` 
   - C1: `Option`
   - D1: `User_Agent`

### 2. Создайте Google Apps Script
1. В таблице: **Расширения → Apps Script**
2. Удалите весь код и вставьте:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.question,
      data.option,
      data.userAgent
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Деплой скрипта
1. **Развернуть → Новое развертывание**
2. Тип: **Веб-приложение**
3. Выполнять как: **Я**
4. Доступ: **Любой пользователь**
5. **Развернуть**
6. **Скопируйте URL** (выглядит как: `https://script.google.com/macros/s/AKfycbz.../exec`)

### 4. Обновите код сайта
В файле `index.html` найдите строку:
```javascript
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzxvKJL8_example_url/exec';
```

Замените на ваш URL и уберите комментарии с блока отправки:
```javascript
// Уберите /* и */ вокруг этого блока:
await fetch(SHEET_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    question: question,
    option: option,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent.substring(0, 100)
  })
});
```

## ✅ Готово!

Теперь все голоса будут сохраняться в Google Таблицу в реальном времени.

## 📊 Альтернативы:

### Вариант 1: Только локальное хранение (текущий)
- Данные сохраняются в браузере пользователя
- Никаких настроек не нужно
- Статистика общая для всех

### Вариант 2: Telegram Bot API
- Создайте бота через @BotFather
- Голоса отправляются в ваш чат
- Полная анонимность

### Вариант 3: Typeform встроенный
- Красивые формы
- Готовая аналитика
- Бесплатный план

Рекомендую начать с Google Sheets - просто и эффективно!