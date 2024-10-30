import axios from "axios";
import { getEnv } from "../../config/variables";
import { getKey } from "../../secure/store/asycStorageExpo";

const { default_url } = getEnv();

axios.defaults.baseURL = default_url;

(async () => {
    const _token = await getKey('_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`;
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    console.log(_token);
})();
