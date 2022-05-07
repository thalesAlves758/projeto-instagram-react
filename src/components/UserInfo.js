export default function UserInfo(props) {
  return (
    <div className="usuario">
      <img src={props.image} alt="" />
      <div className="texto">
        <strong>{props.user}</strong>
        {props.name}
      </div>
    </div>
  );
}
