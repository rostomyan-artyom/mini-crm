export default function (app) {
  app.$axios.defaults.headers.common['Content-Type'] ='application/json';

  app.$axios.onRequest((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Content-Type'] = 'application/json';

    // const authToken = app.$cookies.get('authToken');
    //
    // if (authToken) {
    //   config.headers['Authorization'] = `Bearer ${authToken}`;
    // }

    return config;
  })

  app.$axios.run = (request, params = undefined,headers = undefined) =>
    app.$axios[request.method](
      request.URL,
      {
        ...request.params,
        params,
      },
      headers
    )
}
