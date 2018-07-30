

let adminLogin = prompt('Пожалуйста, введите Ваш логин');
let adminPassword;

if (adminLogin === null) {
  alert('Отменено пользователем')
} else if (adminLogin !== 'admin') {
  alert('Доступ запрещен')
} if (adminLogin === 'admin') {
  adminPassword = prompt('Пожалуйста, введите Ваш пароль');
} if (adminPassword === null) {
  alert('Отменено пользователем');
} else if (adminPassword !== 'm4ngo1zh4ackz0r') {
  alert('Доступ запрещен');
} if (adminPassword === 'm4ngo1zh4ackz0r') {
  alert('Добро пожаловать!')
}

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

