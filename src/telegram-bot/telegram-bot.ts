import { Telegraf, Markup } from "telegraf";
import { supabaseClient } from "../api/supabase/supabaseClient";
import "dotenv/config";

const tgBotToken = process.env.VITE_TELEGRAM_BOT_TOKEN as string;
const webApplink = process.env.VITE_WEB_APP_LINK as string;

const bot = new Telegraf(tgBotToken);

bot.command("start", async (context) => {
  context.reply(
    "Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение",
    Markup.keyboard([
      Markup.button.webApp("Нажмите, чтобы запустить приложение", webApplink),
    ])
  );

  const userId = context.from.id;
  const username = context.from.username;

  try {
    const response = await supabaseClient
      .from("users")
      .insert([{ id: userId, created_at: new Date(), user_name: username }]);

    console.log("Данные успешно отправлены в Supabase:", response);

    context.reply(
      `Добро пожаловать! Данные юзера c именем ${username} успешно сохранены в таблицу users!`
    );
  } catch (error) {
    console.error(`Ошибка при вставке данных в Supabase: ${error}`);

    context.reply(
      `Произошла ошибка при сохранении данных ${error}. Пожалуйста, попробуйте еще раз позже.`
    );
  }
});

bot.launch();
