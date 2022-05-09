import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestions = [
    {
      image: "assets/img/bad.vibes.memes.svg",
      user: "bad.vibes.memes",
      reason: "Segue você",
    },
    {
      image: "assets/img/chibirdart.svg",
      user: "chibirdart",
      reason: "Segue você",
    },
    {
      image: "assets/img/razoesparaacreditar.svg",
      user: "razoesparaacreditar",
      reason: "Novo no Instagram",
    },
    {
      image: "assets/img/adorable_animals.svg",
      user: "adorable_animals",
      reason: "Segue você",
    },
    {
      image: "assets/img/smallcutecats.svg",
      user: "smallcutecats",
      reason: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      { suggestions.map((suggestion, index) => (
        <Suggestion
          key={index}
          image={suggestion.image}
          user={suggestion.user}
          reason={suggestion.reason}
        />
      )) }
    </div>
  );
}
