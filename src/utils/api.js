import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const authFailureMessage =
  "Authentication failed, Please contact to admin for onBoarding!";

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 500000,
  params: {}, // do not remove this, its added to add params later in the config
});

// Add a request interceptor
instance.interceptors.request.use(
  async (config) => {
    // const isTokenGenerated = store.getState().common.isTokenGenerated;
    // if (!isTokenGenerated) {
    //   const getTokenFromStore = () => {
    //     return store.getState().common.isTokenGenerated;
    //   };
    //   await waitUntilValueIsTrue(getTokenFromStore);
    // }

    // const accessToken = await oktaAuth.tokenManager.get("accessToken");
    // config.headers.Authorization = `Bearer ${accessToken?.accessToken}`;
    // config.metadata = { startTime: new Date() };
    // try {
    //   const alias = sessionStorage.getItem("current_user");
    //   if (JSON.parse(alias || "{}")?.email && checkIfActuallyUserIsAdmin()) {
    //     config.headers["custom-user-email"] = JSON.parse(alias || "{}")?.email;
    //   }
    // } catch (err) {
    //   // do nothing here
    // }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // response.config.metadata.endTime = new Date();
    // response.duration =
    //   response.config.metadata.endTime - response.config.metadata.startTime;
    // if (response.duration > import.meta.env.VITE_API_THRESHOLD_TIME) {
    //   logEvent(analytics.API_DELAYS, {
    //     endpoint: response.config.url,
    //     duration: response.duration,
    //     params: response.config.params,
    //   });
    // }
    return response;
  },
  (error) => {
    // if (
    //   error?.response?.status === 400 &&
    //   error?.response?.data?.message === "Invalid Company ID!"
    // ) {
    //   return error?.response;
    // }
    // if (
    //   error?.response?.data?.code === 401 &&
    //   error?.response?.data?.message !== authFailureMessage
    // ) {
    //   logout(
    //     true,
    //     LOGOUT_ORIGINS.API_INTERCEPTOR,
    //     OKTA_IMPLEMENTATION_VERSION,
    //     {
    //       errorString: JSON.stringify(error),
    //       requestUrl: error?.response?.config?.baseURL,
    //     }
    //   );
    // }
    // if (
    //   error?.response?.status === 301
    // ) {

    //   return Promise.resolve(error?.response);
    // }
    return Promise.reject(error);
  }
);

async function getData(endUrl, config, apiUrl) {
  let url = apiUrl ? apiUrl : `${baseUrl}${endUrl}`;
  return await instance.get(url, config);
}

async function postData(endUrl, data, config, apiUrl) {
  let url = apiUrl ? apiUrl : `${baseUrl}${endUrl}`;
  return instance.post(url, data, config);
}
// putData(endUrl, data, config, apiUrl) {
//   let url = apiUrl ? apiUrl : `${baseUrl}${endUrl}`;
//   return instance.put(url, data, config);
// },
// patchData(endUrl, data, config, apiUrl) {
//   let url = apiUrl ? apiUrl : `${baseUrl}${endUrl}`;
//   return instance.patch(url, data, config);
// },
// deleteData(endUrl, data, config, apiUrl) {
//   let url = apiUrl ? apiUrl : `${baseUrl}${endUrl}`;
//   return instance.delete(url, data, config);
// },
const api = {
  getData,
  postData
};

export default api;
