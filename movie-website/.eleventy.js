module.exports = function (eleventyConfig) {
    // Custom collection for movies
    eleventyConfig.addCollection("movies", () => [
      {
        title: "Lord of the Rings: The Two Towers",
        description: "The second part of the epic Lord of the Rings trilogy, where Frodo and Sam continue their journey to destroy the One Ring.",
        image: "/assets/images/lotr-the-two-towers.jpg",
      },
      {
        title: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        image: "/assets/images/the-matrix.jpg",
      },
      {
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        image: "/assets/images/inception.jpg",
      },
      {
        title: "The Dark Knight",
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        image: "/assets/images/the-dark-knight.jpg",
      },
      {
        title: "Casino Royale (James Bond)",
        description: "James Bond embarks on his first mission as a 00 agent and must defeat a banker who funds terrorists in a high-stakes poker game at Casino Royale.",
        image: "/assets/images/casino-royale.jpg",
      },
      {
        title: "The Lion King (Disney)",
        description: "The Lion King follows the journey of Simba, a young lion who must learn to embrace his destiny as king of the Pride Lands.",
        image: "/assets/images/the-lion-king.jpg",
      },
    ]);
    return {
      dir: {
        input: "src",
        output: "_site", 
        layouts: "src/layouts",
      },
    };
  };
  
