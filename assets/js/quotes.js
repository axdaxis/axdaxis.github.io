// hello lurker. I have added comments
const quoteText = document.getElementById("quote");
const quoteList = [
    "<i>You know it's cold outside, when you go outside and it's cold...</i>", // https://axdaxis.dev/files/daxBotMedia/IMG_8426.PNG
    "*curls into a ball, bounces down the court, flies up & swishes thrus the hoop*", // https://twitter.com/tobyfox/status/298489896425897984
    "+Yeah!", // Miiverse
    "<i>'I keep on running like a chicken with its head cut off!</i>'", // BIRDBRAIN https://www.youtube.com/watch?v=0iVlSNpq8i8
    "don't ever buy no gas station from the gas station", // https://www.youtube.com/watch?v=EAfPbSKDVRk
    "<i>A water?</i>", // https://www.youtube.com/watch?v=U-nYdR9lMqM
    "<i>You know rectangles? They're like messed-up squares?</i>", // https://hushbugger.github.io/deltarune/text/#en:1:obj_dummyenemy_slash_Step_0_gml_408_0
    "Rouxls Kaard Homeless Society", // Idk
    "<i>RAISE UP YOUR BAT FOR THE BURNING FIGHT!</i>", // https://hushbugger.github.io/deltarune/text/#en:3:scr_rhythmgame_notechart_slash_scr_rhythmgame_notechart_gml_1529_0
    "<i>We're ALL a little GLOOBY sometimes!!</i>", // https://hushbugger.github.io/deltarune/text/#en:3:obj_tenna_enemy_slash_Step_0_gml_152_0
    "<i>* COWABUNGA-DERO! THAT'S THE SMOOTH TASTE OF TV TIME!</i>", // https://hushbugger.github.io/deltarune/text/#en:3:obj_tenna_enemy_slash_Step_0_gml_231_0
    "I'm the balls man", // - Dax
    "<i>it's ok to do a little crime sometimes.", // https://tumblr.dax009.ink/post/744548951086268416/they-were-so-real-for-this
    "<i>wait, i'm goated?</i>", // Just. a saying.
    "127.0.0.1:3000", // Default VSCode Live Preview port. Lol
    "When I'm bored I dip my son in Red 40", // - Dax
    "roblox tragedy", // https://www.youtube.com/watch?v=WjUvRs4pBuI
    "he's itching to give you a diffee", // - Nebula
    "aprons wash hands gloves!", // I heard this at school once LOL
    "<i>reminder to self: add “no diving” sign to bathroom</i>", // - Dax
    "I'm so Battat core!", // https://twitter.com/shokolandish/status/1959697801736225155
    "Shoutouts to SimpleFlips", // Just search this one up.
    "Activity Level B", // https://www.reddit.com/r/Undertale/comments/1icuzcv/comment/m9tsfsj/
    "when i was 14 i thought that king dice from cuphead was hot", // - Dax
    "#DARKWOKE", // Why does this have a Wikipedia article https://en.wikipedia.org/wiki/Dark_Woke
    "persona!", // Persona!
    `my credit card number is ${creditNumberNotActuallyLuhnAlgorithmButIdgaf()}`, // Don't bother.
    "No one looks at these so I can confidently say I had a crush on Papyrus at the age of 14", // I still kinda do. - Dax
    "Don't look through the source too much.", // Please.
    "'cause i think you're so good, and i'm nothing like you'", // Love Like You - Steven Universe. I think
    "Does anyone want to break the US Digital Millennium Copyright Act, together..?", // >_<
    "The edge of the shadow, where reality and dream meet.", // https://twitter.com/tobyfox/status/89485880615641088
    "Now it's time to turn the internal screaming external!", // - Dax
    "It's TV Time!", // - Tenna
    "Coded with love and a bit of prescription medication", // It's true. - Dax
    "hype moments and aura", // type shit
    "mweh heh heh!", // Idk
    "~ <a href='https://axdaxis.dev/files/videos/Halloween%20-%20Just%20the%20Facts.mp4' target='_blank'>Halloween - Just the Facts</a> ~", // How do I even begin to explain this
    ":P",
    "I LIVE IN A HOAL" // https://hushbugger.github.io/deltarune/text/#en:4:obj_npc_jackenstein_slash_Other_10_gml_27_0
];
function rollQuote(element) {
    element.innerHTML = quoteList[Math.floor(Math.random() * quoteList.length)];
}
function creditNumberNotActuallyLuhnAlgorithmButIdgaf() {
    const minCeiled = Math.ceil(1000000000000000);
    const maxFloored = Math.floor(9999999999999999);
    const generated = (Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)).toString();
    const genString = generated.match(/.{1,4}/g);
    return genString.join(' ');
}
rollQuote(quoteText);
quoteText.style.display = 'block';

quoteText.addEventListener('click', function() {
    rollQuote(quoteText);
})