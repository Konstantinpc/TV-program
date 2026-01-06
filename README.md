# Задача 16 – TV Program API (Shows Module) – ПИ

Backend проект по условие **№16 (TV program)**. Реализиран е модул **Shows** с Controller + Service + база данни (**SQLite + TypeORM**).

## ✅ Функционалности (по условие)

**Show** има свойства:
- `id` (number)
- `name` (string)
- `duration` (number)
- `participants` (string[])

Реализирани endpoints:
- **GET** `getAllShowsByDuration()` – връща всички shows със същата продължителност
- **POST** `addShow()` – добавя нов show
- **PUT** `editShow()` – редактира show по `showID` като параметър
- **DELETE** `deleteShow()` – изтрива show по `showID` като query параметър

---

## 🧱 Технологии
- Node.js
- Express
- TypeORM
- SQLite
