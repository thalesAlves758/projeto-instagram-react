export default function Post(props) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.image} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.contentImage} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likedByImage} />
          <div class="texto">
            Curtido por <strong>{props.likedByUser}</strong> e <strong>outras {numberWithDots(props.amountLikes)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
