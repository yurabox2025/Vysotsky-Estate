# Vysotsky Estate — Static Site

Готовый статический проект для деплоя на Render.

## Структура
- `index.html` — приложение (SPA) со шагами и прогрессом.
- `assets/` — изображения и шрифт (здесь лежат заглушки: замените своими).
- `render.yaml` — конфигурация для Render (Static Site).
- `.gitignore`

## Деплой на GitHub и Render
```bash
git init
git add .
git commit -m "init: Vysotsky Estate static site"
git branch -M main
git remote add origin https://github.com/yurabox2025/Vysotsky-Estate.git
git push -u origin main
```
Затем на https://render.com создайте **Static Site** и подключите репозиторий.
Build Command: пусто, Publish Directory: `.`.

## Тесты
Откройте страницу с параметром `?runTests=1` или нажмите **F9**, чтобы увидеть результаты проверок слева.
