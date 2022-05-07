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
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      { suggestions.map(suggestion => <Suggestion image={suggestion.image} user={suggestion.user} />) }
    </div>
  );
}
