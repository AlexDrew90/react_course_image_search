import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos',
  {
    headers: {
      Authorization: 'Client-ID 6rQKL6rZfrfLijv8ncFhwuZczekAHYG4sDUzA4vCmZw'
    },
    params: {
      query: term,
    }

  });
  return response.data.results;
};

export default searchImages;
