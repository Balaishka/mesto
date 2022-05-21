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

    _fetchWithBody(way, methodName, bodyContent) {
        return fetch(`${this._url}${way}`, {
            method: methodName,
            headers: this._headers,
            body: bodyContent
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

    getLikesCard(cardId) {
        return this._fetch(`cards/${cardId}`, "GET");
    }

    addLikeCard(cardId) {
        return this._fetch(`cards/${cardId}/likes`, "PUT");
    }

    deleteLikeCard(cardId) {
        return this._fetch(`cards/${cardId}/likes`, "DELETE");
    }

    addNewCard(newCard) {
        return this._fetchWithBody("cards", "POST", newCard);
    }

    deleteCard(cardId) {
        return this._fetch(`cards/${cardId}`, "DELETE");
    }
}