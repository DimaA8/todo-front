# Приложение ToDo
![image](https://github.com/user-attachments/assets/b654fb99-2a12-4854-85e3-f3cf3292c107)

Доступно по ссылке: https://dimaa8.github.io/todo-front/

Запуск приложения: 
### `npm install`
### `npm start`

На проекте используется react (hooks), typescript, mui, zustand, testing-library, настроены lint, prettier.
Модули организуются в виде отдельных папок со следующей структурой:
- \__tests__
- components
- constants
- helpers
- interfaces
- stores

p.s. в требованиях не был указан запрет использования стейт менеджеров, поэтому использую zustand, без него думал бы в сторону контекстов, если сделать еще проще, то можно хук стора useTodo переписать на обычный реакт хук в котором методы описать через функции, а поля todos, filter через useState, вызывать этот хук уже в корне модуля (TodoBlock) и прокидывать нужные функции и стейты в дочерние компоненты.
