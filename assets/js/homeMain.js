// BRICK OF VARIABLES
// Dropdown
const menuLinks = document.getElementsByClassName("menuLinks")[0];
const dropDownToggle = document.getElementById("dropdownToggle");
const dropdownLinks = document.getElementById("dropdownContent");
const dropdownPortal = document.getElementById("dropdownPortal");

// Stuff for the playlist switcher
const selectElement = document.getElementById("playlistselection"); 
const playlistEmbed = document.getElementById("Dax009Playlist");
const baseURL = "https://www.youtube-nocookie.com/embed/videoseries?playsinline=0&rel=0&origin=https://dax009.ink&enablejsapi=1&list=";

// Audio widget
const audioDiv = document.getElementById("audio");
const waveformDiv = document.getElementById("waveform");
const playPause = document.getElementById("playPause");
const filenameElement = document.getElementById('audioFilename');
const volume = document.getElementById('volumeSlider');
const volumeLabel = document.getElementById('volumeLabel');

// Dropdown that works with my implementation.
function toggleDropdown() {
    window.scrollTo(0, 0);
    dropdownPortal.appendChild(dropdownLinks);
    dropdownLinks.style.position = 'absolute';
    if (window.innerWidth < 768) {
        dropdownLinks.style.top = `${dropDownToggle.getBoundingClientRect().top + 30}px`; 
    } else {
        dropdownLinks.style.top = `${dropDownToggle.getBoundingClientRect().top + 30}px`; 
    }
    dropdownLinks.style.left = `${dropDownToggle.getBoundingClientRect().left - 200}px`; 

    
    if (window.getComputedStyle(dropdownLinks).display === 'none') {
        dropdownLinks.style.display = 'flex';
    } else {
        dropdownLinks.style.display = 'none';
    }
}

menuLinks.addEventListener('scroll', function() {
    if (dropdownLinks.style.display === 'flex') {
        toggleDropdown();
    };
});

window.addEventListener('resize', function() {
    if (dropdownLinks.style.display === 'flex') {
        toggleDropdown();
    };
});

// YT playlist embed switcher.
const playlistIDs = [
    "UUXakrxvcr8Hl2bB30wGPDrQ", // Dax009
    "UUXHbvF6pF4KOoJKqMhrv6yg", // DaxTen
    "PLsATjXjPMLqWFwrQKUSgKs955VSBMbSk7", // The Best of Dax009
    "PLsATjXjPMLqWosF6t0R37U8FMRGjHvmJg", // Splatoon videos!
    "PLsATjXjPMLqU6903KRFi5Kf7OEoWMSGha", // Technology stuff!
    //"PLsATjXjPMLqXM1yxLfH4la9Oz0CTxcyd1", // Homebrew/Hacks!
    "PLsATjXjPMLqWXEyb8TxLZhQ3MbppXuD-3", // Vlogs/IRL stuff
    "PLsATjXjPMLqXL-CCEGW-4G-8OI1mcEoiV", // Dax009 Specials/Subscriber Milestones
    "UU1Nfey6JACblkz5xxwSBTOw", // Not Dax009/axdaxis
    "UU5rYwkq1syVdrSnj0foZ7ig", // Jackeltron
    "UUmnGxXwyE8wy9AqyBxkJBXg", // Jackeltron TRES
    "UUg-dfNuQ5PFhzCkXe88STNg", // Wooystun
    "UUUAi1YD6boX8Uhf7B0FBAMQ", // Nebula
    "UUejvnBSSRVmOPzjInRALUng", // KingKeaton09
    "UUn-OAQvi8kMo-aVIeLTSxdA", // etern1
    "UUDeF1Hmg71xthk8kNwJxrxw", // IAteUrCube
    "UU2-mAIWl_G8N8k0gmQipXSw", // 2Dimentions
    "UUQpTfbeb4lfGAuZac1pOhTg", // FN32 DXer
    "UUb5PlYiCd9CNdwsNJIBWf1Q" // kev996
];
selectElement.addEventListener("change", () => {
    //alert(baseURL + playlistIDs[selectElement.value]);
    playlistEmbed.src = baseURL + playlistIDs[selectElement.value];
});

// Audio embed
const audioFiles = [
    'dogcheck.mp3',
    'castletown_empty.mp3',
    'S_Shellfie.mp3',
    'mus_mettaton_ex.mp3',
    'RotM_Ride_or_Fry.mp3',
    'mus_xpart_2.mp3',
    'mus_ghostbattle.mp3',
    'AUDIO_STORY.mp3',
    'mus_sansdate.mp3',
    'mus_snowy.mp3',
    'april_2012.mp3',
    'castletown.mp3',
    'cyber.mp3',
    'mus_waterfall.mp3',
    'S_Calamari_Inkantation_(Callie_vs._Marie).mp3',
    'S2_Blitz_It!.mp3',
    'S2_Wave_Prism.mp3',
    'Splatoon_2_-_Fly_Octo_Fly_(Final_Fest_version).mp3',
    'hip_shop.mp3'
];

// Init WaveSurfer
const wavesurfer = WaveSurfer.create({
    container: waveformDiv,
    waveColor: '#FFFFFF',
    progressColor: '#121212',
    height: '30',
    normalize: true,
    plugins: [
        WaveSurfer.Hover.create({
            lineColor: '#ff0000',
            lineWidth: 2,
            labelBackground: '#555',
            labelColor: '#fff',
            labelSize: '18px',
        }),
    ],
})
wavesurfer.setVolume(0.5);
wavesurfer.load(getRandomAudioFile())
function getRandomAudioFile() {
    let randomIndex = Math.floor(Math.random() * audioFiles.length);
    let fileName = audioFiles[randomIndex]
    filenameElement.textContent = `Now playing: ${fileName}`;
    return '/assets/audio/' + fileName;
}

function toggleAudio() {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause()
        playPause.src = "/images/play.svg";
    } else {
        wavesurfer.play()
        playPause.src = "/images/pause.svg";
    }
}

wavesurfer.on('finish', () => {
    wavesurfer.play()
})

volume.addEventListener("change", function(e) {
    wavesurfer.setVolume(e.currentTarget.value / 100);
    volumeLabel.innerText = "Volume: " + e.currentTarget.value;
})

function newAudio() {  // function to shuffle
    let newRandomAudioFile = getRandomAudioFile();
    wavesurfer.pause();
    playPause.src = "/images/play.svg";
    wavesurfer.load(newRandomAudioFile);
    wavesurfer.setTime(0);
}

// Lightbox settings.
lightbox.option({
    'fadeDuration': 200,
    'resizeDuration': 200
});
