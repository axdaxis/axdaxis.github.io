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

// Variables
const tumblrEmbedHolder = document.querySelector(".tumblrEmbed");
var tumblrStart = 0;

async function createPost(headerAvatar, headerNameContent, postUrl, postDate, postTitle, postContent, noteCount, postTags, interactionButtons) {
    //console.log("\n\n\n\ncreatepost ran!")
    console.log(
        `Avatar: ${headerAvatar}\n`,
        `Header name content: ${headerNameContent}\n`, 
        `Post date: ${postDate}\n`,
        `Post content: ${postContent}\n`,
        `Note count: ${noteCount}\n`, 
        `Interaction HTML: ${interactionButtons}\n`
    )
    //setup
    let postContainer = document.createElement('div'); // tumblrPost
    let postHeader = document.createElement('div'); //tumblrPostHeader
    let postAvatar = document.createElement('img');  // tumblrAvatar
    let postBody = document.createElement('div'); //tumblrPostBody 
    let postFooter = document.createElement('div'); //tumblrPostFooter
    let postButtons = document.createElement('div'); //tumblrInteractionButtons

    // Add classes
    postContainer.classList.add("tumblrPost");
    postHeader.classList.add("tumblrPostHeader");
    postAvatar.classList.add("tumblrAvatar");
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
    postHeader.appendChild(postAvatar);
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
    if (postTags) {
        let postTagsContent = '';
        let postTagsElement = document.createElement("p");
        postTags.forEach(tag => {
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
        imgAnchor.setAttribute('data-lightbox', `tumblr-image`); // Lightbox
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
// Called from the tumblr API script tag... you and your JSONP..
async function tumblrWidgetLoad(json) {
    json.posts.forEach(post => {
        /*console.log(post);
        console.log(post.type)
        console.log(post["url-with-slug"])*/

        let reblog;
        let headerNameContent;
        let postBody;
        let postTitle;

        if (post["reblogged-root-url"] && post["reblogged-from-name"] != post["reblogged-root-name"]) {
            console.log("Reblog of a reblog!");
            reblog = true;
        } else if (post["reblogged-from-url"]) {
            console.log("Reblogged from original");
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
                console.log('Regular/NPF (Modern) post');
                postBody = post["regular-body"];
                postTitle = post["regular-title"];
                break;
            case 'photo': // Legacy photo post
                console.log('Legacy photo post');
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
                console.log('Ask answers (Both modern & legacy)');
                postTitle = 'Someone asked: ' + post.question;
                postBody = post.answer;
                break;
            case 'quote': // Legacy Quote post
                console.log('Legacy Quote post');
                postTitle = `<p class="tumblrQuote">${post["quote-text"]}</p>`
                postBody = post["quote-source"];
                break;
            case 'link': // Legacy Link post
                console.log('Legacy Link post');
                if (post["link-text"] != null) {
                    postTitle = `<a href="${post["link-url"]}">${post["link-text"]}</a>`;
                } else {
                    postTitle = `<a href="${post["link-url"]}">${post["link-url"]}</a>`;
                }
                postBody = post["link-description"];
                break;
            case 'conversation': // Legacy Chat/'Conversation' post.
                console.log('Legacy Chat/\'Conversation\' post.');
                postBody = '';
                postTitle = post["conversation-title"];
                post.conversation.forEach(chat => {
                    postBody = postBody + `<b>${chat.label} </b><span>${chat.phrase}</span><br>`;
                });
                break;
            case 'audio': // Legacy Audio post.. can be internal, Spotify, or SoundCloud
                console.log('Legacy Audio post.. can be internal, Spotify, or SoundCloud');
                postBody = post["audio-embed"];
                postBody = postBody + post["audio-caption"];
                break;
            case 'video': // Legacy Video post. YouTube and mp4 embeds.
                console.log('Legacy Video post. YouTube and mp4 embeds.');
                postBody = post["video-player"];
                postBody = postBody + post["video-caption"];
                break;
            ;
        }

        createPost(
            post.tumblelog.avatar_url_512, // change to reblogger avatar, maybe? if reblogged
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
    const loadMoreButton = document.createElement("button");
    loadMoreButton.innerText = "Load more"; // who would've known?
    tumblrEmbedHolder.insertAdjacentElement("beforeend", loadMoreButton)
    loadMoreButton.addEventListener('click', () => {
        let script = document.getElementById('tumblrJs');
        let newScript = document.createElement('script');
        newScript.id = "tumblrJs"
        tumblrStart = tumblrStart + 20;
        newScript.src = `https://axdaxis.tumblr.com/api/read/json?callback=tumblrWidgetLoad&start=${tumblrStart}&num=20`;
        script.insertAdjacentElement("afterend", newScript);
        script.remove();
        loadMoreButton.remove()
    });
}