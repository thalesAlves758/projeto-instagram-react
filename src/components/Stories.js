import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      image: "assets/img/9gag.svg",
      user: "9gag"
    },
    {
      image: "assets/img/meowed.svg",
      user: "meowed"
    },
    {
      image: "assets/img/barked.svg",
      user: "barked"
    },
    {
      image: "assets/img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet"
    },
    {
      image: "assets/img/wawawicomics.svg",
      user: "wawawicomics"
    },
    {
      image: "assets/img/respondeai.svg",
      user: "respondeai"
    },
    {
      image: "assets/img/filomoderna.svg",
      user: "filomoderna"
    },
    {
      image: "assets/img/memeriagourmet.svg",
      user: "memeriagourmet"
    },
  ];

  return (
    <div className="stories">
      { stories.map((story, index) => <Story key={index} image={story.image} user={story.user} />) }

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
