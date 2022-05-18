export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _createFetch(method) {
        return fetch(this._url, {
            method: method,
            headers: this._headers
        })
          .then((res) => {
              if (res.ok) {
                  return res.json();
              }

              return Promise.reject('Упс, ошибка');
          });
    }

    getData() {
        return this._createFetch("GET");
    }

    addData() {
        return this._createFetch("POST");
    }

    deleteData() {
        return this._createFetch("DELETE");
    }

    patchData() {
        return this._createFetch("PATCH");
    }
}