import { Telegraf, Markup } from "telegraf";
import { supabaseClient } from "../api/supabase/supabaseClient";

const tgBotToken = import.meta.env.VITE_SUPABASE_URL;

const bot = new Telegraf(tgBotToken);

const webApplink = import.meta.env.WEB_APP_LINK;

bot.command("start", async (context) => {
  context.reply(
    "Welcome! Click on the button below to launch the app",
    Markup.keyboard([
      Markup.button.webApp("Click on the link here", webApplink),
    ])
  );

  const userId = context.from.id;
  const username = context.from.username;

  console.log("Команда /start получена от пользователя:", context.from);

  try {
    const { data, error } = await supabaseClient
      .from("users")
      .insert([{ id: userId, createdAt: new Date(), username: username }]);

    if (error) {
      console.error("Ошибка при вставке данных в Supabase:", error);

      context.reply("Произошла ошибка при сохранении ваших данных.");
    } else {
      console.log("Данные успешно отправлены в Supabase:", data);

      context.reply(
        `Добро пожаловать! Данные пользователя с именем ${username} успешно сохранены в таблицу users!`
      );
    }
  } catch (error) {
    console.error("Ошибка при обращении к Supabase:", error);

    context.reply("Произошла ошибка при сохранении ваших данных.");
  }
});

bot.launch();
