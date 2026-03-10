# 📱 Настройка уведомлений в Telegram

## 🤖 Создание бота для уведомлений:

### Шаг 1: Создайте бота
1. Напишите **@BotFather** в Telegram
2. Отправьте `/newbot`
3. Придумайте имя: `TG Block Survey Bot`
4. Придумайте username: `tg_block_survey_bot`
5. **Скопируйте токен** (выглядит как: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Шаг 2: Получите свой Chat ID
1. Напишите боту любое сообщение
2. Откройте: `https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates`
3. Найдите `"chat":{"id":123456789` - это ваш Chat ID

### Шаг 3: Обновите Google Apps Script

Замените код в вашем Apps Script на:

```javascript
const TELEGRAM_BOT_TOKEN = 'ВАШ_ТОКЕН_БОТА';
const TELEGRAM_CHAT_ID = 'ВАШ_CHAT_ID';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Сохранить в таблицу
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Если это голосование
    if (data.question) {
      sheet.appendRow([
        new Date(),
        'ГОЛОСОВАНИЕ',
        data.question,
        data.option,
        data.source || 'Unknown'
      ]);
      
      // Отправить уведомление в Telegram
      sendTelegramNotification(`🗳️ Новый голос!\n\nВопрос: ${data.question}\nОтвет: ${data.option}\nВремя: ${new Date().toLocaleString('ru-RU')}`);
    }
    
    // Если это обратная связь
    if (data.q1) {
      sheet.appendRow([
        new Date(),
        'ОБРАТНАЯ СВЯЗЬ',
        data.q1.substring(0, 100) + '...',
        data.user_id,
        data.source || 'Unknown'
      ]);
      
      // Отправить уведомление в Telegram
      sendTelegramNotification(`💬 Новая обратная связь!\n\n"${data.q1.substring(0, 200)}..."\n\nВремя: ${new Date().toLocaleString('ru-RU')}`);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendTelegramNotification(message) {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    UrlFetchApp.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
  } catch (error) {
    console.log('Telegram notification error:', error);
  }
}
```

## 📊 Структура Google Таблицы:

Создайте таблицу с заголовками:
- **A1**: `Timestamp` (Время)
- **B1**: `Type` (Тип: ГОЛОСОВАНИЕ/ОБРАТНАЯ СВЯЗЬ)  
- **C1**: `Content` (Содержание)
- **D1**: `Details` (Детали)
- **E1**: `Source` (Источник)

## 🔔 Что будете получать:

### При голосовании:
```
🗳️ Новый голос!

Вопрос: priority
Ответ: bots
Время: 10.03.2026, 21:45
```

### При обратной связи:
```
💬 Новая обратная связь!

"Мои боты в TG работают нестабильно уже 2 недели. Клиенты жалуются на задержки..."

Время: 10.03.2026, 21:46
```

## ⚡ Быстрая настройка:

1. **Создайте бота** (5 минут)
2. **Поделитесь Google Таблицей** со мной: `shohirevdenis@gmail.com`
3. **Дайте токен бота и Chat ID**
4. **Я настрою всё за 10 минут**

Тогда будете получать каждое действие на сайте в реальном времени! 📱