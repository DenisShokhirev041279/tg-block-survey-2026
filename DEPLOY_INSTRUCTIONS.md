# 🚀 Инструкции по деплою

## Метод 1: Загрузка через GitHub Desktop или веб-интерфейс

### Вариант A: Через веб-интерфейс GitHub
1. Откройте https://github.com/DenisShokhirev041279/tg-block-survey-2026
2. Нажмите "uploading an existing file"
3. Перетащите все файлы из папки проекта:
   - `index.html`
   - `README.md` 
   - `vercel.json`
   - `.gitignore`
4. Напишите commit message: "Initial commit: Telegram Block Survey 2026 landing page"
5. Нажмите "Commit changes"

### Вариант B: Через GitHub Desktop
1. Скачайте GitHub Desktop: https://desktop.github.com/
2. Clone репозиторий: https://github.com/DenisShokhirev041279/tg-block-survey-2026.git
3. Скопируйте файлы в папку репозитория
4. Сделайте commit и push

## Метод 2: Командная строка (если есть права)

```bash
# В терминале перейдите в папку проекта
cd "/Users/shokhirevdenis/Desktop/лендинг про телеграмм"

# Инициализируйте Git (если еще не сделано)
git init

# Добавьте файлы
git add .

# Создайте коммит
git commit -m "Initial commit: Telegram Block Survey 2026 landing page"

# Переименуйте ветку
git branch -M main

# Подключите к репозиторию
git remote add origin https://github.com/DenisShokhirev041279/tg-block-survey-2026.git

# Загрузите на GitHub
git push -u origin main
```

## 🌐 Деплой на Vercel

### Автоматический деплой:
1. Зайдите на https://vercel.com
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите репозиторий `tg-block-survey-2026`
5. Нажмите "Deploy" (настройки определятся автоматически)

### Ручной деплой:
1. Установите Vercel CLI: `npm i -g vercel`
2. В папке проекта: `vercel`
3. Следуйте инструкциям

## 📱 Альтернативные платформы

### Netlify:
1. Зайдите на https://netlify.com
2. Drag & Drop папку с файлами
3. Сайт будет доступен мгновенно

### GitHub Pages:
1. В настройках репозитория включите GitHub Pages
2. Выберите source: "Deploy from a branch" → main
3. Сайт будет доступен по адресу: https://denisshokhirev041279.github.io/tg-block-survey-2026/

## ✅ Проверка

После деплоя проверьте:
- [ ] Сайт открывается
- [ ] Все ссылки работают
- [ ] Адаптивность на мобильных
- [ ] Анимации работают

## 🔗 Ваши ссылки в лендинге:
- Telegram канал: https://t.me/ger_dennis_ai
- Личный аккаунт: https://t.me/ger_denis_sh  
- LinkedIn: https://www.linkedin.com/in/denis-shokhirev-38b866392
- YouTube: https://www.youtube.com/@ger_dennis_ai