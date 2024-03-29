import { teleBot } from "@/index";
import { startBot } from "./start";
import { log } from "@/utils/handlers";
import { settings } from "./settings";
import { setEmojiCommand } from "./setEmoji";
import { stopBot } from "./stop";
import { setGifCommand } from "./setGif";

export function initiateBotCommands() {
  teleBot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "stop", description: "Stop the bot" },
    { command: "settings", description: "To customize the bot" },
    { command: "setemoji", description: "To set an emoji" },
    { command: "setgif", description: "To set a GIF" },
  ]);

  teleBot.command("start", (ctx) => startBot(ctx));
  teleBot.command("stop", (ctx) => stopBot(ctx));
  teleBot.command("settings", (ctx) => settings(ctx));
  teleBot.command("setemoji", (ctx) => setEmojiCommand(ctx));

  teleBot.hears(/\/setgif/, (ctx) => setGifCommand(ctx, true));
  // @ts-expect-error CTX type invalid
  teleBot.on(":animation", (ctx) => setGifCommand(ctx));

  log("Bot commands up");
}
