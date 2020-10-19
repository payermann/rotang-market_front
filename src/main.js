import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="itemsMain">
        <div>
          <img
            src={
              "https://hhcdn.ru/photo/483441959.jpeg?t=1602857256&h=NL2q3kvv1QyxxnFlRSEtQQ"
            }
          />
        </div>
        <div className="textMain">
          <h1>Добро пожаловать на мой сайт-презентацию.</h1>
          <p>
            Это сайт построен с использованием микросервисной архитектуры на
            основе докер контейнеров, расположенных на сервере Microsoft azure.
            Серверная часть реализована на фреймворке django. Отображение
            написано на библиотеке js react, nginx используется в качестве
            прокси-сервера. API построен с использованием библиотеки
            djangorestframework. PostgreSQL используется в качестве базы данных.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
