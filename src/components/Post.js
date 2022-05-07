import { useState } from 'react';

export default function Post(props) {
  const [liked, setLiked] = useState(false);

  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function handleLike() {
    setLiked(!liked);
  }

  function likePost() {
    setLiked(true);
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.image} alt="" />
          {props.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo" onClick={likePost}>
        <img src={props.contentImage} alt=""/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon onClick={handleLike} name={liked ? "heart" : "heart-outline"}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likedByImage} alt="" />
          <div className="texto">
            Curtido por <strong>{props.likedByUser}</strong> e <strong>outras {numberWithDots(props.amountLikes)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
