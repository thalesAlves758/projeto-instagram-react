import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      image: "assets/img/meowed.svg",
      user: "meowed",
      contentImage: "assets/img/gato-telefone.svg",
      likedBy: {
        image: "assets/img/respondeai.svg",
        user: "respondeai",
      },
      amountLikes: 101523
    },
    {
      image: "assets/img/barked.svg",
      user: "barked",
      contentImage: "assets/img/dog.svg",
      likedBy: {
        image: "assets/img/adorable_animals.svg",
        user: "adorable_animals",
      },
      amountLikes: 99159
    },
  ];

  return (
    <div className="posts">
      { posts.map((post, index) => (
        <Post
          key={index}
          image={post.image}
          user={post.user}
          contentImage={post.contentImage}
          likedByImage={post.likedBy.image}
          likedByUser={post.likedBy.user}
          amountLikes={post.amountLikes}
        />
      )) }
    </div>
  );
}
