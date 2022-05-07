import Stories from './Stories';
import Posts from './Posts';
import UserInfo from './UserInfo';
import Suggestions from './Suggestions';

export default function Content() {
  const currentUser = {
    image: "assets/img/catanacomics.svg",
    user: "catanacomics",
    name: "Catana",
  };

  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>

      <div class="sidebar">
        <UserInfo image={currentUser.image} user={currentUser.user} name={currentUser.name} />

        <Suggestions />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  );
}
