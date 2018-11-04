
const adminLogin = prompt ('Пожалуйста, введите Ваш логин');

if (adminLogin === 'admin') {
const adminLogin = 'admin';
adminPassword = prompt ('Пожалуйста, введите Ваш пароль');
} else{
   if (adminLogin === null) {
    alert ('Отменено пользователем!');
      } else {
  alert ('Доступ запрещен, неверный логин!'); 
  }
}

if (adminPassword === 'm4ngo1zh4ackz0r') {
const adminPassword = 'm4ngo1zh4ackz0r';
alert ('Добро пожаловать!');
} else { 
  if (adminPassword === null) {
  alert ('Отменено пользователем!');
    } else {
  alert ('Доступ запрещен, неверный пароль!');
  }
} 