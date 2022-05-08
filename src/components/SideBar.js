import UserInfo from './UserInfo';
import Suggestions from './Suggestions';

export default function SideBar() {
  const currentUser = {
    image: "assets/img/catanacomics.svg",
    user: "catanacomics",
    name: "Catana",
  };
  
  return (
    <div className="sidebar">
      <UserInfo image={currentUser.image} user={currentUser.user} name={currentUser.name} />

      <Suggestions />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}
