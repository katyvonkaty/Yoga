import axios from "axios";

export default axios.create ({
  baseURL:"https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID Cvk3Gv42ATrkfwjMummOdVb56dAYaHLzELVhql7SjG8'
  }
})

//creates customizeable copy qith specific headers

// const searchImages = (term) => {
//
// }
