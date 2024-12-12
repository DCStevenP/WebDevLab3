const fetch = require('node-fetch');

module.exports = async () => {
  const response = await fetch('http://localhost:1337/api/movies');
  const data = await response.json();
  return data.data.map(movie => ({
    id: movie.id,
    title: movie.attributes.title,
    description: movie.attributes.description,
    image: movie.attributes.image?.url,
  }));
};
