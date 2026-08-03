// Quote vars & functions

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
    "I LIVE IN A HOAL", // https://hushbugger.github.io/deltarune/text/#en:4:obj_npc_jackenstein_slash_Other_10_gml_27_0
    "You know when you're driving and you see that water puddle ahead of you and then it goes away, you know about that, right? Yeah. You know what that is, right? Yeah. What is it? No.",
    "gnawing at the bars of my cage",
    "Shoutout to Napstablook",
    "<i>* Dr. Gaster. * What an act to follow!</i>", // https://hushbugger.github.io/dialogue/#Gaster%20Follower%201:1,
    "THAT GREEN DICE WILL PAY",
    "#SCIFELLSWEEP",
    "Happy new year 1997!", // https://hushbugger.github.io/deltarune/text/#en:2:obj_virovirokun_enemy_slash_Step_0_gml_26_0
    "<i>* Chips Ahoyeth, Landlubbers!</i>", // https://hushbugger.github.io/deltarune/text/#en:2:obj_ch2_scene21_loop_slash_Step_0_gml_511_0
    "couldn't think of anything funny for this one",
    "\"sv_cheats 1\" - Sun Tzu, The Art of War",
    "<i>Tell Edge he's <u>HOT.</u></i>", // https://loverofpiggies.tumblr.com/post/147144113435/a-day-early-whaaaat-wanna-support-me-check-out
    "you just need to let things go your honor", // https://twitter.com/barrel_rolls/status/2043765686464659874
    `"Every song you've ever heard either is or isn't by the red hot chili peppers"`, // https://twitter.com/World0fEcho/status/2045587963824984406
    "They should invent a Rome that was built in a day", // https://twitter.com/megannn_lynne/status/2030391965276061833
    `fym "it's over" 😭`,
    "<i>Opinion: We Should All Know Less About Each Other</i>",
    "~ <a href='https://www.tiktok.com/@wongtong_/video/7247221981555313963' target='_blank'>Just warming up</a> ~",
    "- Chinese Proverb", // in-joke to something I saw in a classroom once.
    "LegitDax009#7228", // my old Discord username + tag. waoh
    `<i>dont cry becasue its over, Attack. Attack wverythjng around you. do spin attacks and hurt things</i>`, // https://twitter.com/ipaddlearound/status/1850174333127131336
    "doom scrolling on github right now", // https://twitter.com/isabelrosesss/status/2045081449007620128
    "I'm so Siffrin core!", // I'm so Siffrin core!
    "<i>Of course it goes without saying that I am hopelessly dependent on the ingot</i>", // https://www.tumblr.com/latenightgasstationwalk/712689372606218240/
    "<i>It's #LetTheAirOutOfYourCoworkersTiresMonday</i>", // https://twitter.com/wormpuller/status/2081758505543831574
    `"Sjelter"?`, // https://deltarune.wiki/w/Thank_you_survey
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
async function quotePageLoad() {
    rollQuote(quoteText);
    quoteText.style.display = 'block';
}
// End quotes

// Timesync js
const DateTime = luxon.DateTime;
async function timeSyncSet() {
    timeElement = document.getElementById("localTime");
    chicagoTime = DateTime.now().setZone('America/Chicago');
    sysTime = DateTime.now().setZone('system');
    let localTime = chicagoTime.toLocaleString(DateTime.TIME_WITH_SECONDS);
    let offset = ((chicagoTime.offset - sysTime.offset) / -60); 
    //console.log(`${chicagoTime.offset}, ${sysTime.offset}, ${offset / -60}`);
    const plural = offset === 1 ? "hour" : "hours";
    const offsetText = offset === 0 ? "the same as" :
                        offset > 0 ? `${offset} ${plural} behind` :
                        `${Math.abs(offset)} ${plural} ahead of`; // I'm not actually sure where this code came from...
    timeElement.innerText = `My local time is ${localTime} - this is ${offsetText} your local time!`;
}
// End timesync

// Discord widget js
// Defining the elements as vars

async function getWidgetData() {
    const inviteAnchor = document.getElementById("invite");
    const currentlyOnline = document.getElementById("currentlyOnline");
    const widgetMembers = document.getElementsByClassName("widgetMembers")[0];
    const url = 'https://discord.com/api/guilds/549307561086550017/widget.json'; // Grab 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        inviteAnchor.href = json.instant_invite; // Invite 
        currentlyOnline.innerText = 'Online: ' + json.presence_count;
        json.members.forEach(element => {
            // Widget rendering
            let member = document.createElement('div');
            member.className = 'widgetMember';
            let memberAvatar = document.createElement('img');
            memberAvatar.src = element.avatar_url;
            member.appendChild(memberAvatar);
            let memberUsername = document.createElement('span');
            memberUsername.innerText = element.username;
            member.appendChild(memberUsername);
            if (element.status === 'online') {
                memberAvatar.classList.add('online');
            } else if (element.status === 'idle') {
                memberAvatar.classList.add('idle');
            } else if (element.status === 'dnd') {
                memberAvatar.classList.add('dnd');
            }
            if (element.game) { // For RPC.. stuff like that..
                let gameText = element.game.name.substring(0, 8);
                if (element.game.name.length > 8) {
                    gameText += '…';
                }
                memberUsername.innerText = element.username + ' - Playing ' + gameText;
            }
            widgetMembers.appendChild(member);
        });
    } catch (error) {
        console.error(error.message);
        currentlyOnline.innerText = 'Unable to fetch Discord widget info - ' + error.message;  // Sad!
    }
}
// End Discord widget

// Statusbadges discord widget stuff js
/*
function createSectionText(text, classes, p) { // text, class names, p/span (true/false)
    let newText = p ? document.createElement("p") : document.createElement("span");
    newText.innerText = text;
    if (classes) {
        for (i = 0; i < classes.length; i++) {
            newText.classList.add(classes[i]);
        }
    }
    return newText;
}


async function grabPresence() {
    const url = "https://api.statusbadges.me/presence/244224554686218240";
    const presenceStatuses = document.getElementsByClassName("presenceStatuses")[0];
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // check offline
        if (json.status == "offline") { return }

        switch (json.status) {
            case "online":
                statusText = createSectionText("Currently online", ["statusText", "presenceStatus-" + json.status], false)
                presenceStatuses.appendChild(statusText);
                break;
            case "idle":
                statusText = createSectionText("Currently idle", ["statusText", "presenceStatus-" + json.status], false)
                presenceStatuses.appendChild(statusText);
                break;
            case "dnd":
                statusText = createSectionText("Currently on Do Not Disturb", ["statusText", "presenceStatus-" + json.status], false)
                presenceStatuses.appendChild(statusText);
                break;
        }

        let clientStatus = json.client_status;
        let statusSetAlready = false;
        if (clientStatus.hasOwnProperty("desktop")) {
            if (!statusSetAlready) {
                statusSetAlready = true;
                statusText = createSectionText(`Currently ${clientStatus.desktop} on desktop`, ["statusText", "presenceStatus-" + json.status], false)
            } else {
                statusText = createSectionText(` and ${clientStatus.desktop} on desktop`, ["statusText", "presenceStatus-" + json.status], false)
            }
            presenceStatuses.appendChild(statusText);
        }
        if (clientStatus.hasOwnProperty("mobile")) {
            if (!statusSetAlready) {
                statusSetAlready = true;
                statusText = createSectionText(`Currently ${clientStatus.desktop} on mobile`, ["statusText", "presenceStatus-" + json.status], false)
            } else {
                statusText = createSectionText(` and ${clientStatus.desktop} on mobile`, ["statusText", "presenceStatus-" + json.status], false)
            }
            presenceStatuses.appendChild(statusText);
        }
        if (clientStatus.hasOwnProperty("web")) {
            if (!statusSetAlready) {
                statusSetAlready = true;
                statusText = createSectionText(`Currently ${clientStatus.desktop} on web`, ["statusText", "presenceStatus-" + json.status], false)
            } else {
                statusText = createSectionText(` and ${clientStatus.desktop} on web`, ["statusText", "presenceStatus-" + json.status], false)
            }
            presenceStatuses.appendChild(statusText);
        }



        console.log(json)
    } catch (error) {
        console.error(error.message);
        presenceStatuses.innerText = 'Unable to fetch Discord presence info - ' + error.message;  // Very sad!
    }
}
*/

// Tumblr widget js
var tumblrStart = 0;
const antiSpoilersToggle = document.querySelector("#spoilersToggle");
// Source - https://stackoverflow.com/a/60487971
// Posted by Sarasranglt, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-18, License - CC BY-SA 4.0
function getHighestResImg(element) {
    if (element.getAttribute("srcset")) {
        return element
        .getAttribute("srcset")
        .split(",")
        .reduce(
            (acc, item) => {
            let [url, width] = item.trim().split(" ");
            width = parseInt(width);
            if (width > acc.width) return { width, url };
            return acc;
            },
            { width: 0, url: "" }
        ).url;
}
    return element.getAttribute("src");
} // saw a comment that said "This solution obviously doesn’t work if any of the image URLs contain a comma"
// i mean, douche, you didn't have to say "obviously"
// but like
// no tumblr image url *should* have a comma in it

async function createPost(postID, headerAvatar, reblogAvatar, headerNameContent, postUrl, postDate, postTitle, postContent, noteCount, postTags, interactionButtons) {
    //console.log("\n\n\n\ncreatepost ran!")
    /*console.log(
        `Avatar: ${headerAvatar}\n`,
        `Header name content: ${headerNameContent}\n`, 
        `Post date: ${postDate}\n`,
        `Post content: ${postContent}\n`,
        `Note count: ${noteCount}\n`, 
        `Interaction HTML: ${interactionButtons}\n`
    )*/
    //setup
    const tumblrEmbedHolder = document.querySelector(".tumblrEmbed");

    let postContainer = document.createElement('div'); // tumblrPost
    let postHeader = document.createElement('div'); //tumblrPostHeader
    let postAvatarContainer = document.createElement('div'); // tumblrAvatar, if reblog
    let postAvatar = document.createElement('img');  // tumblrAvatar
    let postBody = document.createElement('div'); //tumblrPostBody 
    let postFooter = document.createElement('div'); //tumblrPostFooter
    let postButtons = document.createElement('div'); //tumblrInteractionButtons

    // Add classes
    postContainer.classList.add("tumblrPost");
    postHeader.classList.add("tumblrPostHeader");
    postAvatarContainer.classList.add("tumblrAvatarContainer");
    postBody.classList.add("tumblrPostBody");
    postFooter.classList.add("tumblrPostFooter");
    postButtons.classList.add("tumblrInteractionButtons");

    // Header
    let postLinkout = document.createElement("a");
    let postLinkoutButton = document.createElement("img");
    postLinkout.href = postUrl;
    postLinkout.target = "_blank";
    postLinkoutButton.src = 'images/open.svg';
    postLinkout.appendChild(postLinkoutButton);
    postLinkout.classList.add("tumblrPostLinkout");
    postHeader.appendChild(postLinkout);

    postAvatar.src = headerAvatar;
    postAvatar.classList.add("tumblrAvatar");
    postAvatarContainer.appendChild(postAvatar);
    if (reblogAvatar) { // Reblog
        let rebloggerAvatar = document.createElement('img');
        rebloggerAvatar.src = reblogAvatar;
        rebloggerAvatar.classList.add("tumblrAvatar", "tumblrReblogAvatar");
        postAvatarContainer.insertAdjacentElement("afterbegin", rebloggerAvatar);
        postAvatar.classList.add("tumblrAuthorAvatar");
    }
    postHeader.appendChild(postAvatarContainer);

    postHeader.insertAdjacentHTML("beforeend", headerNameContent)
    let postDateLabel = document.createElement("span");
    postDateLabel.innerText = postDate;
    postHeader.appendChild(postDateLabel);
    
    
    // Body
    if (postTitle && postTitle != "") {
        //console.log("titleTITLE TITLE GODDAMNIT!!")
        let postTitleHeader = document.createElement("h3");
        postTitleHeader.innerHTML = postTitle;
        postBody.appendChild(postTitleHeader);
    }
    postBody.insertAdjacentHTML("beforeend", postContent)
    let tempBody = postBody.innerText.toLowerCase();
    if (tempBody.includes("spoiler")) {
        postBody.classList.add("tumblrPostSpoiler");
    }
    if (postTags) {
        let postTagsContent = '';
        let postTagsElement = document.createElement("p");
        postTagsElement.classList.add("tumblrTagContainer");
        postTags.forEach(tag => {
            let tagString = tag.toLowerCase();
            if (tagString.includes("spoiler") && postBody.classList.contains("tumblrPostSpoiler") == false) {
                postBody.classList.add("tumblrPostSpoiler");
            }
            postTagsContent = postTagsContent + `<a class="tumblrTagLink" href="https://tumblr.dax009.ink/tagged/${tag}" target="_blank">#${tag}</a> `
        });
        postTagsElement.innerHTML = postTagsContent;
        postBody.appendChild(postTagsElement);
    }
    
    // Footer
    let postNotes = document.createElement("span");
    let postNoteContent = '';
    if (noteCount === "1") { // edge case scenario. sad.
        postNoteContent = `${noteCount} note`;
    } else {
        postNoteContent = `${noteCount} notes`;
    }
    postNotes.innerHTML = `<a class="tumblrNotesLink" href="${postUrl}#notes" target="_blank">${postNoteContent}</a>`
    postFooter.appendChild(postNotes);

    // Append & fix buttons 
    let modifiedButtons = interactionButtons.replaceAll("color=black", "color=white");
    postButtons.insertAdjacentHTML("beforeend", modifiedButtons);
    postFooter.appendChild(postButtons);

    // Append all elements to container
    postContainer.append(postHeader, postBody, postFooter);
    
    // Image handling, Letterbox2
    let imgs = postContainer.querySelectorAll(".tumblrPostBody img");
    let vids = postContainer.querySelectorAll(".tumblrPostBody video");
    let altText = postContainer.querySelectorAll(".tmblr-alt-text-helper"); 
    let anchors = postContainer.querySelectorAll("a");
    anchors.forEach(async function(element){ // Add _blank
        element.target = "_blank";
        let oldHref = element.getAttribute('href');
        if (oldHref) {
            element.href = oldHref.replace(/^\\'(.*)\\'$/, '$1'); 
        }
        // console.log(element.href);
    });
    imgs.forEach(async function(element) { // Proper alt text 
        element.loading = "lazy"; // Lazyloading
        let highRes = getHighestResImg(element); // Highest res src for Lightbox
        if (element.getAttribute("alt")) {
            element.setAttribute('title', element.getAttribute('alt')); // Alt text, set to both title & alt
        }
        let imgAnchor = document.createElement("a");
        imgAnchor.href = highRes;
        imgAnchor.setAttribute('data-lightbox', `tumblr-image-${postID}`); // Lightbox
        element.parentElement.insertAdjacentElement("afterbegin", imgAnchor)
        imgAnchor.appendChild(element);
    });
    vids.forEach(function(element) {
        element.removeAttribute('autoplay');
    })
    altText.forEach(async function(element){
        element.remove();
    }); // Remove alt text "button" (only really works on the website, already embedded in img)

    tumblrEmbedHolder.append(postContainer);
}

function spoilerToggle(toggle) {
    let spoilered = document.getElementsByClassName("tumblrPostSpoiler");
    if (spoilered.length > 0) {
        for (i = 0; i < spoilered.length; i++) {
            spoilered[i].style.filter = toggle ? "blur(8px)" : "none";
        }
    }
}

// Called from the tumblr API script tag... you and your JSONP..
async function tumblrWidgetLoad(json) {
    const tumblrEmbedHolder = document.querySelector(".tumblrEmbed");
    let spoilerValue;

    let currentToggle = getCookie("antiSpoilers");
    switch (currentToggle) {
        case "true": // Hide spoilers
            spoilerValue = true;
            antiSpoilersToggle.toggled = true;
            break;
        case "false": // Don't hide spoilers
            spoilerValue = false;
            antiSpoilersToggle.toggled = false;
            break;
        default: // No value
            spoilerValue = false;
            antiSpoilersToggle.toggled = false;
            setCookie("antiSpoilers", false)
            break;
    }
    antiSpoilersToggle.disabled = false;

    json.posts.forEach(post => {
        /*console.log(post);
        console.log(post.type)
        console.log(post["url-with-slug"])*/

        let reblog;
        let headerNameContent;
        let postBody;
        let postTitle;

        if (post["reblogged-root-url"] && post["reblogged-from-name"] != post["reblogged-root-name"]) {
            //console.log("Reblog of a reblog!");
            reblog = true;
        } else if (post["reblogged-from-url"]) {
            //console.log("Reblogged from original");
            reblog = true;
        }

        let dateObj = DateTime.fromSeconds(post["unix-timestamp"]);
        newDateObj = dateObj.setZone("system");
        let formattedDate = newDateObj.toLocaleString(DateTime.DATETIME_SHORT);
        //console.log(formattedDate)
        if (reblog) {
            headerNameContent = `<a href="${post.tumblelog.url}" target="_blank">${post.tumblelog.name}</a> reblogged from <a href="${post["reblogged-from-url"]}" target="_blank">${post["reblogged-from-name"]}</a><br>`
        } else {
            headerNameContent = `<a href="${post.tumblelog.url}" target="_blank">${post.tumblelog.name}</a><br>`
        }                

        switch(post.type.toLowerCase()) {
            case 'regular': // Regular posts, Posts after 2022 (NPF) excl. Answers. you need to check for embeds in these as well - probably more complicated.
                //console.log('Regular/NPF (Modern) post');
                postBody = post["regular-body"];
                postTitle = post["regular-title"];
                break;
            case 'photo': // Legacy photo post
                //console.log('Legacy photo post');
                if (post.photos.length !== 0) {
                    // Multiple photos
                    postBody = '';
                    post.photos.forEach(photo => {
                        postBody = postBody + `
                    <figure><img src="${photo['photo-url-1280']}"></figure>`;
                    });
                } else { //todo - implement srcset
                    postBody = `
                    <img src="${post['photo-url-1280']}">`;
                }
                if (post["photo-caption"] != "") {
                    postBody = postBody + post["photo-caption"];
                }
                break;
            case 'answer': // Ask answers (Both modern & legacy)
                //console.log('Ask answers (Both modern & legacy)');
                postTitle = 'Someone asked: ' + post.question;
                postBody = `<blockquote>${post.answer}</blockquote>`;
                break;
            case 'quote': // Legacy Quote post
                //console.log('Legacy Quote post');
                postTitle = `<p class="tumblrQuote">${post["quote-text"]}</p>`
                postBody = post["quote-source"];
                break;
            case 'link': // Legacy Link post
                //console.log('Legacy Link post');
                if (post["link-text"] != null) {
                    postTitle = `<a href="${post["link-url"]}">${post["link-text"]}</a>`;
                } else {
                    postTitle = `<a href="${post["link-url"]}">${post["link-url"]}</a>`;
                }
                postBody = post["link-description"];
                break;
            case 'conversation': // Legacy Chat/'Conversation' post.
                //console.log('Legacy Chat/\'Conversation\' post.');
                postBody = '';
                postTitle = post["conversation-title"];
                post.conversation.forEach(chat => {
                    postBody = postBody + `<b>${chat.label} </b><span>${chat.phrase}</span><br>`;
                });
                break;
            case 'audio': // Legacy Audio post.. can be internal, Spotify, or SoundCloud
                //console.log('Legacy Audio post.. can be internal, Spotify, or SoundCloud');
                postBody = post["audio-embed"];
                postBody = postBody + post["audio-caption"];
                break;
            case 'video': // Legacy Video post. YouTube and mp4 embeds.
                //console.log('Legacy Video post. YouTube and mp4 embeds.');
                postBody = post["video-player"];
                postBody = postBody + post["video-caption"];
                break;
            ;
        }

        createPost(
            post.id,
            post.tumblelog.avatar_url_512,
            post.reblogged_from_avatar_url_512 ?? null,
            headerNameContent,
            post["url-with-slug"],
            formattedDate,
            postTitle,
            postBody,
            post["note-count"],
            post["tags"],
            post["reblog-button"] + post["like-button"]
        )
    }); 

    spoilerToggle(spoilerValue)
    tumblrEmbedHolder.style.height = "800px"; // For animation

    // Page selector init
    const tumblrPageButtons = document.createElement("div");
    tumblrPageButtons.id = "tumblrPageButtons";

    const firstPageButton = document.createElement("button");
    firstPageButton.innerText = "<<";
    firstPageButton.addEventListener("click", () => (loadMorePosts(0)));
    tumblrPageButtons.insertAdjacentElement("beforeend", firstPageButton);

    const prevPageButton = document.createElement("button");
    prevPageButton.innerText = "<";
    prevPageButton.addEventListener("click", () => (loadMorePosts(tumblrStart - 20)));
    tumblrPageButtons.insertAdjacentElement("beforeend", prevPageButton);

    const pageNumberInput = document.createElement("input");
    pageNumberInput.type = "number";
    pageNumberInput.required = true;
    pageNumberInput.min = 1;
    pageNumberInput.max = Math.floor(json["posts-total"] / 20) + 1; // divided by the number of posts being loaded at one time
    pageNumberInput.addEventListener("change", () => loadMorePosts(((pageNumberInput.value - 1) * 20)));
    tumblrPageButtons.insertAdjacentElement("beforeend", pageNumberInput);

    const nextPageButton = document.createElement("button");
    nextPageButton.innerText = ">";
    nextPageButton.addEventListener("click", () => loadMorePosts(tumblrStart + 20));
    tumblrPageButtons.insertAdjacentElement("beforeend", nextPageButton);

    const lastPageButton = document.createElement("button");
    lastPageButton.innerText = ">>";
    lastPageButton.addEventListener("click", () => (loadMorePosts((Math.floor(json["posts-total"] / 20)) * 20)));
    tumblrPageButtons.insertAdjacentElement("beforeend", lastPageButton);

    if (tumblrStart > 19) {
        pageNumberInput.value = Math.floor(tumblrStart / 20) + 1;
    } else {
        pageNumberInput.value = 1;
        prevPageButton.disabled = true;
        firstPageButton.disabled = true;
    }

    tumblrEmbedHolder.insertAdjacentElement("beforeend", tumblrPageButtons);

    function loadMorePosts(startPos) {
        if ((Math.sign(startPos) <= -1) || !startPos || startPos > Math.floor(json["posts-total"] / 20) * 20) {
            start = 0;
        } else {
            start = startPos;
        }

        let script = document.getElementById('tumblrJs');
        let newScript = document.createElement('script');
        tumblrStart = start;
        let currentPostRoster = document.getElementsByClassName("tumblrPost");
        while(currentPostRoster[0]) {
            currentPostRoster[0].parentNode.removeChild(currentPostRoster[0]);
        }
        newScript.id = "tumblrJs";
        newScript.src = `https://axdaxis.tumblr.com/api/read/json?callback=tumblrWidgetLoad&start=${start}&num=20`;
        script.insertAdjacentElement("afterend", newScript);
        script.remove();
        tumblrPageButtons.remove();
    }
}
quotePageLoad();
getWidgetData();
timeSyncSet();
//grabPresence();

quoteText.addEventListener('click', function() {
    rollQuote(quoteText);
});

antiSpoilersToggle.addEventListener("change", () => {
    setCookie("antiSpoilers", antiSpoilersToggle.checked);
    spoilerToggle(antiSpoilersToggle.checked);
});

// Source - https://stackoverflow.com/a/24103596
// Posted by Mandeep Janjua, modified by community. See post 'Timeline' for change history
// Modified for my own uses
// Retrieved 2026-07-30, License - CC BY-SA 4.0

function setCookie(name, value) {
    var expires = "";
    document.cookie = name + "=" + (value || "")  + "; max-age=2147483647; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
