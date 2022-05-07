import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestions = [
    {
      image: "assets/img/bad.vibes.memes.svg",
      user: "bad.vibes.memes"
    },
    {
      image: "assets/img/bad.vibes.memes.svg",
      user: "bad.vibes.memes"
    },
    {
      image: "assets/img/bad.vibes.memes.svg",
      user: "bad.vibes.memes"
    },
    {
      image: "assets/img/bad.vibes.memes.svg",
      user: "bad.vibes.memes"
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      { suggestions.map((suggestion, index) => <Suggestion key={index} image={suggestion.image} user={suggestion.user} />) }
    </div>
  );
}
