const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
}

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
}

const addLogin = (logins, login) => {
  if (!isLoginValid(login)) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return;
  } else if (isLoginUnique(logins, login)) {
    logins.push(login);
    alert('Логин успешно добавлен!');
  } else {
    alert('Такой логин уже используется!');
  }
}

const login = prompt("Пожалуйста, введите ваш логин");
addLogin(logins, login);