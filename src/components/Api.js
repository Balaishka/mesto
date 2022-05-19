export class Api {
    constructor(config) {
        this._url = config.baseUrl;
        this._headers = config.headers;
    }

    _fetch(way, methodName) {
        return fetch(`${this._url}${way}`, {
            method: methodName,
            headers: this._headers
        })
          .then((res) => {
              if (res.ok) {
                  return res.json();
              }

              return Promise.reject(`Ошибка: ${res.status}`);
          });
    }

    getAllCards() {
        return this._fetch("cards", "GET");
    }
}