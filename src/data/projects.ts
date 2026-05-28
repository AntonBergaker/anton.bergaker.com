import { type TagNames } from "@components/ScrollCardTag";

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
        url: "/projects/the-story-goes-on",
        image: "/card_images/tsgo.png",
        tags: ["gamemaker", "steam", "nintendo_switch", "xbox_one"],
    },
    {
        major_project: true,
        name: "Pentapop",
        url: "/projects/pentapop",
        image: "/card_images/pentapop.png",
        tags: ["play_in_browser", "gamemaker", "csharp", "android", "ios"],
    },
    {
        major_project: true,
        name: "miniSweeper",
        url: "/projects/minisweeper",
        image: "/card_images/minisweeper.png",
        tags: ["play_in_browser", "gamemaker", "android", "ios"],
    },
    {
        major_project: true,
        name: "Doodle Digits",
        url: "/projects/doodle-digits",
        image: "/card_images/doodledigits.png",
        tags: ["run_in_browser", "csharp", "html5", "react"],
    },
    {
        major_project: true,
        name: "Super Tower Defense",
        url: "/projects/super-tower-defense",
        image: "/card_images/vrc_tower_defense.png",
        tags: ["unity3d", "csharp"],
    },
    {
        major_project: false,
        name: "Evil Hangman",
        url: "/hangman",
        image: "/card_images/evil_hangman.png",
        tags: ["play_in_browser", "typescript", "html5"],
    },
    {
        major_project: false,
        name: "Honk Network",
        url: "/honknetwork",
        image: "/card_images/honk_network.png",
        tags: ["run_in_browser", "nodejs", "typescript", "html5"],
    },
    {
        major_project: false,
        name: "Rover Wars",
        url: "/rover_wars",
        image: "/card_images/rover_wars.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Petrock Rocket Racing",
        url: "/petrock_rocket_racing",
        image: "/card_images/petrock_rocket_racing.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Snail Trail Trial",
        url: "/snail_trail_trial",
        image: "/card_images/snail_trail_trial.png",
        tags: ["play_in_browser", "godot", "game_jam"],
    },
    {
        major_project: false,
        name: "Mini Murder Mystery",
        url: "https://vrchat.com/home/world/wrld_fc4df4f2-bd77-4641-a3c5-ee072c240d52",
        image: "/card_images/mini_murder_mystery.png",
        tags: ["unity3d", "csharp"]
    },
    {
        major_project: false,
        name: "Squircle PNG Generator",
        url: "/squircle-generator",
        image: "/card_images/squircle_generator.png",
        tags: ["run_in_browser", "typescript", "html5"],
    },
    {
        major_project: false,
        name: "BunBundle",
        url: "https://github.com/AntonBergaker/BunBundle",
        image: "/card_images/bunbundle.png",
        tags: ["csharp", "wpf"],
    },
    {
        major_project: false,
        name: "Xtreme Xplosive Fishing",
        url: "/xtreme_xplosive_fishing",
        image: "/card_images/xtreme_xplosive_fishing.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Vibus",
        url: "/vibus",
        image: "/card_images/vibus.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Decimal Time",
        url: "/decimal-time",
        image: "/card_images/decimal_time.png",
        tags: ["blog_post", "html5"],
    },
    {
        major_project: false,
        name: "there's something in the dark",
        url: "/theres_something_in_the_dark",
        image: "/card_images/tsitd.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Caffeine King",
        url: "/caffeineking",
        image: "/card_images/caffeine_king.png",
        tags: ["play_in_browser", "gamemaker", "game_jam"],
    },
    {
        major_project: false,
        name: "Implementing Co-op into The Story Goes On",
        url: "http://blog.tsgogame.com/implementing-coop/",
        image: "/card_images/coop_banner.png",
        tags: ["blog_post", "gamemaker"],
    },
    {
        major_project: false,
        name: "Don't Sink - Xbox Port",
        url: "https://store.steampowered.com/app/710610/Dont_Sink/",
        image: "/card_images/dont_sink.png",
        tags: ["gamemaker", "contract_work", "xbox_one"],
    },
    {
        major_project: false,
        name: "BinaryBundle",
        url: "https://github.com/AntonBergaker/BinaryBundle",
        image: "/card_images/binary_bundle.png",
        tags: ["csharp"],
    },
    {
        major_project: false,
        name: "Authentic Native Textbox",
        url: "https://marketplace.yoyogames.com/assets/8620/android-native-textbox",
        image: "/card_images/ant.png",
        tags: ["gamemaker", "extension", "android", "ios"],
    },
    {
        major_project: false,
        name: "Minesweeper Discord Bot",
        url: "https://github.com/AntonBergaker/MinesweeperDiscordBot",
        image: "/card_images/minesweeper_discord_bot.png",
        tags: ["csharp"],
    },
    {
        major_project: false,
        name: "Small Pentapop Localization Tool",
        url: "https://github.com/AntonBergaker/MinesweeperDiscordBot",
        image: "/card_images/small_pp.png",
        tags: ["csharp", "gamemaker"],
    },
    {
        major_project: false,
        name: "GodotLayersSourceGenerator",
        url: "https://github.com/AntonBergaker/GodotLayersSourceGenerator",
        image: "/card_images/godot_layers_source_generator.png",
        tags: ["csharp", "godot"],
    },
    {
        major_project: false,
        name: "anton.bergaker.com",
        url: "https://github.com/AntonBergaker/anton.bergaker.com",
        image: "/card_images/anton_bergaker_com.png",
        tags: ["html5", "react"],
    },
    {
        major_project: false,
        name: "SplitTask",
        url: "https://github.com/AntonBergaker/SplitTask",
        image: "/card_images/splittask_banner.png",
        tags: ["csharp"],
    },
];
