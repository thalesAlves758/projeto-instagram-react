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
      image: "assets/img/meowed.svg",
      user: "meowed",
      contentImage: "assets/img/gato-telefone.svg",
      likedBy: {
        image: "assets/img/respondeai.svg",
        user: "respondeai",
      },
      amountLikes: 101523
    },
  ];

  return (
    <div class="posts">
      { posts.map(post => (
        <Post
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
