// Defining the elements as vars
const discordWidget = document.getElementsByClassName("discordWidget")[0];
const inviteAnchor = document.getElementById("invite");
const currentlyOnline = document.getElementById("currentlyOnline");
const widgetMembers = document.getElementsByClassName("widgetMembers")[0];

async function getWidgetData() {
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
getWidgetData() // Run it back!