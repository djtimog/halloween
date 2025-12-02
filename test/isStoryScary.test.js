import { isStoryScary } from "../utils/StoryClassifier.js";

test("Is Story Scary", async () => {
  const result =
    await isStoryScary(`Yesterday afternoon, I took a walk to the park near my house.
The weather was warm, and a gentle breeze moved through the trees.
Children were playing on the swings, and a group of people were having a picnic on the grass.

I sat on a bench and watched a small dog chase butterflies while its owner laughed.
After a while, I bought an ice cream and enjoyed the quiet moment before heading back home.

It was a simple, peaceful day.`);
  expect(result).toBe(false);
}, 100000);

// Last night, I woke up to the sound of someone breathing in my room.
// Heavy… slow… wet breathing.

// I froze.

// I live alone.

// The breathing came from the corner near my closet.
// I grabbed my phone and turned on the flashlight—
// but the beam flickered and died instantly.

// The breathing stopped.

// Then a voice whispered, right beside my ear:

// “Found you.”

// I jumped up and ran for the light switch, but when the room lit up,
// nothing was there.

// Only my closet door, now slightly open…
// and on the floor in front of it, fresh muddy footprints
// leading straight to my bed.
