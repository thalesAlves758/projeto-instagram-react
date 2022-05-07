import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      image: "assets/img/9gag.svg",
      user: "9gang"
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
      image: "assets/img/9gag.svg",
      user: "9gang"
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
  ];

  return (
    <div class="stories">
      { stories.map(story => <Story image={story.image} user={story.user} />) }

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
