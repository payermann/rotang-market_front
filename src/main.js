import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="itemsMain">
        <div>
          <img src={"http://13.94.114.133:8000/media/myphoto.jpeg"} />
        </div>
        <div className="textMain">
          <h1>Добро пожаловать на мой сайт-презентацию.</h1>
          <p>
            Это сайт построен с использованием микросервисной архитектуры на
            основе докер контейнеров, расположенных на сервере Microsoft azure.
            Серверная часть реализована на фреймворке django. Отображение
            написано на библиотеке js react. nginx используется в качестве
            прокси-сервера. API построен с использованием библиотеки
            djangorestframework. PostgreSQL используется в качестве базы данных.
            <br />Мой <ins><a href="mailto:payermann@yandex.ru">email</a></ins> для связи.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
