import { type TagNames } from "../components/scroll_card_tag.astro";

// Haha death pls
import TsgoImage from "../pages/card_images/tsgo.png";
import PentapopImage from "../pages/card_images/pentapop.png";
import MinisweeperImage from "../pages/card_images/minisweeper.png";
import DontSinkImage from "../pages/card_images/dont_sink.png";
import BunBundleImage from "../pages/card_images/bunbundle.png";

import VrcTowerDefenseImage from "../pages/card_images/vrc_tower_defense.png";
import EvilHangmanImage from "../pages/card_images/evil_hangman.png";
import HonkNetworkImage from "../pages/card_images/honk_network.png";
import RoverWarsImage from "../pages/card_images/rover_wars.png";
import PetrockRocketRacingImage from "../pages/card_images/petrock_rocket_racing.png";
import SnailTrailTrialImage from "../pages/card_images/snail_trail_trial.png";
import DoodleDigitsImage from "../pages/card_images/doodledigits.png";
import XtremeXplosiveFishingImage from "../pages/card_images/xtreme_xplosive_fishing.png";
import VibusImage from "../pages/card_images/vibus.png";
import TsitdImage from "../pages/card_images/tsitd.png";
import CaffeineKingImage from "../pages/card_images/caffeine_king.png";
import CoopBannerImage from "../pages/card_images/coop_banner.png";
import AntImage from "../pages/card_images/ant.png";
import MinesweeperDiscordBotImage from "../pages/card_images/minesweeper_discord_bot.png";
import SmallPpImage from "../pages/card_images/small_pp.png";
import ImageHostImage from "../pages/card_images/image_host.png";
import AntonBergakerComImage from "../pages/card_images/anton_bergaker_com.png";
import DecimalTimeImage from "../pages/card_images/decimal_time.png";
import SplitTaskImage from "../pages/card_images/splittask_banner.png";

export type ProjectData = {
    major_project: boolean;
    name: string;
    url: string;
    image: string;
    tags: TagNames[];
};

export const projects: ProjectData[] = [
    {
        major_project: true,
        name: "The Story Goes On",
        url: "/thestorygoeson",
        image: "../pages/card_images/tsgo.png",
        tags: ["gamemaker", "steam", "nintendo_switch", "xbox_one"],
    },
    {
        major_project: true,
        name: "Pentapop",
        url: "/pentapop",
        image: "../pages/card_images/pentapop.png",
        tags: ["play_in_browser", "gamemaker", "csharp", "android", "ios"],
    },
    {
        major_project: true,
        name: "miniSweeper",
        url: "/minisweeper",
        image: "../pages/card_images/minisweeper.png",
        tags: ["play_in_browser", "gamemaker", "android", "ios"],
    },
    {
        major_project: true,
        name: "Doodle Digits",
        url: "https://github.com/AntonBergaker/DoodleDigits",
        image: "../pages/card_images/doodledigits.png",
        tags: ["csharp", "html5", "react"],
    },
    {
        major_project: true,
        name: "Super Tower Defense",
        url: "/vrc_tower_defense",
        image: "../pages/card_images/vrc_tower_defense.png",
        tags: ["unity3d", "csharp"],
    },
    {
        major_project: false,
        name: "Evil Hangman",
        url: "/hangman",
        image: "../pages/card_images/evil_hangman.png",
        tags: ["play_in_browser", "typescript", "html5"],
    },
    {
        major_project: false,
        name: "Honk Network",
        url: "/honknetwork",
        image: "../pages/card_images/honk_network.png",
        tags: ["play_in_browser", "nodejs", "typescript", "html5"],
    },
    {
        major_project: false,
        name: "Don't Sink - Xbox Port",
        url: "https://store.steampowered.com/app/710610/Dont_Sink/",
        image: "../pages/card_images/dont_sink.png",
        tags: ["gamemaker", "contract_work", "xbox_one"],
    },
    {
        major_project: false,
        name: "Rover Wars",
        url: "/rover_wars",
        image: "../pages/card_images/rover_wars.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Petrock Rocket Racing",
        url: "/petrock_rocket_racing",
        image: "../pages/card_images/petrock_rocket_racing.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Snail Trail Trial",
        url: "/snail_trail_trial",
        image: "../pages/card_images/snail_trail_trial.png",
        tags: ["play_in_browser", "godot", "game_jam"],
    },
    {
        major_project: false,
        name: "BunBundle",
        url: "https://github.com/AntonBergaker/BunBundle",
        image: "../pages/card_images/bunbundle.png",
        tags: ["csharp", "wpf"],
    },
    {
        major_project: false,
        name: "Xtreme Xplosive Fishing",
        url: "/xtreme_xplosive_fishing",
        image: "../pages/card_images/xtreme_xplosive_fishing.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Vibus",
        url: "/vibus",
        image: "../pages/card_images/vibus.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Decimal Time",
        url: "/decimaltime",
        image: "../pages/card_images/decimal_time.png",
        tags: ["blog_post", "html5"],
    },
    {
        major_project: false,
        name: "there's something in the dark",
        url: "/theres_something_in_the_dark",
        image: "../pages/card_images/tsitd.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Caffeine King",
        url: "/caffeineking",
        image: "../pages/card_images/caffeine_king.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Implementing Co-op into The Story Goes On",
        url: "http://blog.tsgogame.com/implementing-coop/",
        image: "../pages/card_images/coop_banner.png",
        tags: ["blog_post", "gamemaker"],
    },
    {
        major_project: false,
        name: "BinaryBundle",
        url: "https://github.com/AntonBergaker/BinaryBundle",
        image: "../pages/card_images/binary_bundle.png",
        tags: ["csharp"],
    },
    {
        major_project: false,
        name: "Authentic Native Textbox",
        url: "https://marketplace.yoyogames.com/assets/8620/android-native-textbox",
        image: "../pages/card_images/ant.png",
        tags: ["gamemaker", "extension", "android", "ios"],
    },
    {
        major_project: false,
        name: "Minesweeper Discord Bot",
        url: "https://github.com/AntonBergaker/MinesweeperDiscordBot",
        image: "../pages/card_images/minesweeper_discord_bot.png",
        tags: ["csharp"],
    },
    {
        major_project: false,
        name: "Small Pentapop Localization Tool",
        url: "https://github.com/AntonBergaker/MinesweeperDiscordBot",
        image: "../pages/card_images/small_pp.png",
        tags: ["csharp", "gamemaker"],
    },
    {
        major_project: false,
        name: "GodotLayersSourceGenerator",
        url: "https://github.com/AntonBergaker/GodotLayersSourceGenerator",
        image: "../pages/card_images/godot_layers_source_generator.png",
        tags: ["csharp", "godot"],
    },
    {
        major_project: false,
        name: "anton.bergaker.com",
        url: "https://github.com/AntonBergaker/anton.bergaker.com",
        image: "../pages/card_images/anton_bergaker_com.png",
        tags: ["html5", "react"],
    },
    {
        major_project: false,
        name: "SplitTask",
        url: "https://github.com/AntonBergaker/SplitTask",
        image: "../pages/card_images/splittask_banner.png",
        tags: ["csharp"],
    },
];
