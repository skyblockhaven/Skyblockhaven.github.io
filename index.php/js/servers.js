
const serverIP = "ender.skyblockhaven.com";

function copyIP(){
    navigator.clipboard.writeText(serverIP);
    alert("Server IP copied: " + serverIP);
}

const serverIP2 = "";

function copyIP2(){
    navigator.clipboard.writeText(serverIP2);
    alert("Server IP copied: " + serverIP2);
}
// ===== Typing Animation =====
const typing = document.getElementById("servertyping");

const text = [
    "Join the SkyBlockHaven SMP and enjoy an exciting survival experience with custom features, friendly players, regular events, and an active community.",

"Join the SkyBlockHaven Discord to stay up to date with the latest server news, announcements, events, giveaways, and community discussions.",

"Enter the SkyBlockHaven Anarchy server where there are no land claims or protections. Build, raid, PvP, and survive in a true anarchy world.",

"Connect to the SkyBlockHaven Network and explore our Minecraft servers, meet new players, participate in events, and enjoy new content as it's released.",

"Play on the SkyBlockHaven Minecraft Server and experience custom gameplay, an active community, frequent updates, exciting events, and endless adventures."
];
