import axios from 'axios';

export default axios.create({
    baseURL: 'https://marilia.pythonanywhere.com/api/'
})