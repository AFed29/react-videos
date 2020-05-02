import axios from 'axios'
import APIKEY from './keys.js'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key : APIKEY
  }
});
