# 📊 Настройка Google Таблицы и Apps Script

## 🎯 Шаг 1: Создайте таблицу

1. **Откройте Google Таблицы**: https://sheets.google.com
2. **Создайте новую таблицу**: "TG Block Survey 2026 - Данные"
3. **В первой строке добавьте заголовки**:

| A1 | B1 | C1 | D1 | E1 |
|---|---|---|---|---|
| Время | Тип | Вопрос/Текст | Ответ | Источник |

## 🔧 Шаг 2: Обновите Apps Script

В вашем Apps Script замените весь код на этот:

```javascript
function doPost(e) {
  try {
    // Получаем активную таблицу
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Парсим данные
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    // Если это голосование (есть поля question и option)
    if (data.question && data.option) {
      sheet.appendRow([
        timestamp,
        'ГОЛОСОВАНИЕ',
        data.question,
        data.option,
        data.source || 'TG Block Survey'
      ]);
      
      console.log('Голос записан:', data.question, data.option);
    }
    
    // Если это обратная связь (есть поле q1)
    else if (data.q1) {
      sheet.appendRow([
        timestamp,
        'ОБРАТНАЯ СВЯЗЬ',
        data.q1,
        data.user_id || 'Anonymous',
        data.source || window.location.href
      ]);
      
      console.log('Обратная связь записана:', data.q1.substring(0, 50) + '...');
    }
    
    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Данные сохранены'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Ошибка:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Тестовая функция для проверки
function testFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([
    new Date(),
    'ТЕСТ',
    'Тестовая запись',
    'test_option',
    'manual_test'
  ]);
  console.log('Тест выполнен');
}
```

## 🚀 Шаг 3: Деплой скрипта

1. **Сохраните код** (Ctrl+S)
2. **Нажмите "Развернуть"** → "Новое развертывание"
3. **Тип**: "Веб-приложение"
4. **Выполнять как**: "Я"
5. **Доступ**: "Любой пользователь"
6. **Развернуть**
7. **Скопируйте URL** (он уже есть в коде сайта)

## 📋 Что будет в таблице:

### Пример данных голосования:
```
10.03.2026 21:45  | ГОЛОСОВАНИЕ     | priority    | bots           | TG Block Survey
10.03.2026 21:46  | ГОЛОСОВАНИЕ     | budget      | medium         | TG Block Survey
10.03.2026 21:47  | ОБРАТНАЯ СВЯЗЬ  | Мои боты... | Anonymous      | https://tg-block...
```

### Столбцы:
- **Время** - когда отправлено
- **Тип** - ГОЛОСОВАНИЕ или ОБРАТНАЯ СВЯЗЬ
- **Вопрос/Текст** - название вопроса или полный текст отзыва
- **Ответ** - выбранный вариант или "Anonymous"
- **Источник** - откуда пришли данные

## ✅ Проверка работы:

1. **Запустите тестовую функцию** `testFunction()` в Apps Script
2. **Проверьте** появилась ли строка в таблице
3. **Если да** - всё настроено правильно
4. **Данные с сайта** будут попадать автоматически

## 🔍 Анализ данных:

Сможете легко:
- **Подсчитать голоса** по каждому варианту
- **Прочитать отзывы** пользователей
- **Построить графики** в Google Sheets
- **Экспортировать в Excel** при необходимости

Всё готово! Данные будут накапливаться в таблице автоматически! 📊