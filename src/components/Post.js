export default function Post(props) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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

      <div className="conteudo">
        <img src={props.contentImage} alt=""/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
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
