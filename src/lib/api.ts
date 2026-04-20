import { cache } from "@solidjs/router";

export const getCommunities = cache(async () => {
  "use server";
  console.log("getCommunities server function called...");
  const data = [
    {
      name: "Indie Hackers",
      members: 148,
      author: "John",
      image: "https://picsum.photos/seed/ih/100/100",
      author_avatar: "https://picsum.photos/seed/john/20/20"
    },
    {
      name: "AI Builders",
      members: 362,
      author: "Martha",
      image: "https://picsum.photos/seed/ai/100/100",
      author_avatar: "https://picsum.photos/seed/martha/20/20"
    }
  ];
  console.log("getCommunities data:", JSON.stringify(data));
  return data;
}, "communities");

export const getEvents = cache(async () => {
  "use server";
  console.log("getEvents server function called...");
  const data = [
    { title: "Bridging the Future", date_time: "Today, 6:30 PM", image: "https://picsum.photos/seed/event1/100/100" },
    { title: "Marketing Conf", date_time: "Wed, 4:30 PM", image: "https://picsum.photos/seed/event2/100/100" },
    { title: "Sound Electro | Beyond art", date_time: "Fri, 8:00 PM", image: "https://picsum.photos/seed/event3/100/100" }
  ];
  console.log("getEvents data:", JSON.stringify(data));
  return data;
}, "events");
