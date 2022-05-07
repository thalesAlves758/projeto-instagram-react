export default function UserInfo(props) {
  return (
    <div class="usuario">
      <img src={props.image} />
      <div class="texto">
        <strong>{props.user}</strong>
        {props.name}
      </div>
    </div>
  );
}
