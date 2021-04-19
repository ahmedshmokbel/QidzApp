import axios from 'axios';

export class NetworkLayer {
  //Private Property for host URL
  #API_HOST;

  constructor() {
    this.#API_HOST = 'http://www.omdbapi.com/?apikey=c6d8f0a9'; 

  }

  //Secure Get Request use then callback to use resolved promise
  get_request = (endpoint, access_token) => {
    const url = this.#API_HOST + endpoint;
    return new Promise(function (resolve, reject) {
      try {
        let source = axios.CancelToken.source();
        setTimeout(() => {
          source.cancel();
          // Timeout Logic
        }, 31000);
        axios
          .get(url, {
            headers: {
              Token: access_token,
            },
            timeout: 30000,
            cancelToken: source.token,
          })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => { reject(err) });
      } catch (err) {
        reject(err);
      }
    });
  };

  //Secure Post Request pass stringified body(JSON formatted)
  post_request = (endpoint, access_token, body) => {
    const url = this.#API_HOST + endpoint;
    return new Promise(function (resolve, reject) {
      try {
        axios
          .post(url, body, {
            headers: {
              Token: access_token,
            },
            timeout: 40000
          })
          .then((res) => {
            resolve(res.data);
          })
          .catch(async (err) => {
            await reject(err)
           }
          );
      } catch (err) {
        reject(err);
      }
    });
  };

  //Secure Post Request with form data header
  post_request_formData = (endpoint, access_token, bodyFormData) => {
    const url = this.#API_HOST + endpoint;
    // console.log(body)
    return new Promise(function (resolve, reject) {
      try {
        // setTimeout(()=>reject({code:'ECONNABORTED'}),120000)
        axios({
          method: 'post',
          url: url,
          data: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data', Token: access_token, },
          timeout: 120000
        })
          .then((res) => {
            resolve(res.data);
          })
          .catch(async (err) => await reject('err'));
      } catch (err) {
        reject(err);
      }
    });
  };

  //Secure Post Request with form data header
  post_request_formData_fetch = async (endpoint, access_token, bodyFormData) => {
    const url = this.#API_HOST + endpoint;
    try {
      var ret = await fetch(url,//'https://express-filesupload.herokuapp.com/uploads';,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            Token: access_token,
          },
          body: bodyFormData,
        })


      var obj = await ret.json();
      console.log('forget password', obj)

      return obj
    } catch (error) {
      console.log('Catch', error)

    }

  };

  //Secure update Request pass stringified body(JSON formatted)
  update_request = (endpoint, access_token, body) => {
    const url = this.#API_HOST + endpoint;
    return new Promise(function (resolve, reject) {
      try {
        axios
          .put(url, body, {
            headers: {
              Token: access_token,
            },
            timeout: 20000
          })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  };

  //Delete Request
  delete_request = (endpoint, access_token) => {
    const url = this.#API_HOST + endpoint;
    return new Promise(function (resolve, reject) {
      try {
        axios
          .delete(url, {
            headers: {
              Token: access_token,
            },
            timeout: 20000
          })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  };
}

