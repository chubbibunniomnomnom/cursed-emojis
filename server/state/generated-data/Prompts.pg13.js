export function getRandomPG13Prompt() {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

const prompts = [
  "https://github.com/chubbibunniomnomnom/cursed-emojis/blob/master/emoji1.png",
  "https://github.com/chubbibunniomnomnom/cursed-emojis/blob/master/emoji2.png",
  "https://github.com/chubbibunniomnomnom/cursed-emojis/blob/master/emoji3.png",
  "https://github.com/chubbibunniomnomnom/cursed-emojis/blob/master/emoji4.png"
];
