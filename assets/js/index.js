// const serverList = document.querySelector('.server-list');
// const botList = document.querySelector('.bot-list');

// const serverInvites = [
//     "cybershoke",
//     "cybershokenet",
//     "lifehack",
//     "elysm",
//     "hatory",
//     "solisaid",
//     "futurama",
//     "stockholm",
//     "darkness",
//     "blume"
// ];

// const botIDs = [
//     "1081606819111247912",
//     "1043838190118764614",
//     "1063887970039496816",
//     "1013586206388396093",
//     "1065010859375607828",
//     "1124398308648026182",
//     "1118257018277482516",
// ];

// async function fetchServerData(inviteCode) {
//     const apiUrl = `https://discord.com/api/v9/invites/${inviteCode}`;
    
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data)
//         return data.guild;
//     } catch (error) {
//         console.error("Error fetching server data:", error);
//     }
// }

// async function fetchBotData(botID) {
//     const apiUrl = `https://80.87.107.138/api/discord/users/{botID}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data)
//         return data;
//     } catch (error) {
//         console.error("Error fetching bot data:", error);
//     }
// }

// async function populateServerList() {
//     for (const inviteCode of serverInvites) {
//         const serverData = await fetchServerData(inviteCode);
//         const serverBlock = createServerBlock(serverData);
//         serverList.appendChild(serverBlock);

//         await new Promise(resolve => setTimeout(resolve, 50));
//         serverBlock.classList.add('animate');
//     }
// }

// function createServerBlock(data) {
//     const serverBlock = document.createElement('a');
//     serverBlock.classList.add('server');
//     serverBlock.href = `https://discord.gg/${data.vanity_url_code ? data.vanity_url_code : null}`; 

//     const avatarImg = document.createElement('img');
//     const avatarExtension = data.icon.startsWith("a_") ? "gif" : "png";
//     avatarImg.src = `https://cdn.discordapp.com/icons/${data.id}/${data.icon}.${avatarExtension}`;
//     avatarImg.alt = "Server Avatar";
//     avatarImg.style.borderRadius = "50%";
//     serverBlock.appendChild(avatarImg);

//     const serverName = document.createElement('h2');
//     serverName.textContent = data.name;
//     serverBlock.appendChild(serverName);

//     const memberCount = document.createElement('p');
//     if (data.description) memberCount.textContent = `${data.description}`;
//     serverBlock.appendChild(memberCount);

//     return serverBlock;
// }

// async function populateBotList() {
//     for (const botID of botIDs) {
//         const botData = await fetchBotData(botID);
//         const botBlock = createBotBlock(botData);
//         botList.appendChild(botBlock);

//         await new Promise(resolve => setTimeout(resolve, 50));
//         botBlock.classList.add('animate');
//     }
// }

// function createBotBlock(data) {
//     const botBlock = document.createElement('div');
//     botBlock.classList.add('bot');

//     const avatarImg = document.createElement('img');
//     avatarImg.src = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`;
//     botBlock.appendChild(avatarImg);

//     const botName = document.createElement('h2');
//     botName.textContent = data.username;
//     botBlock.appendChild(botName);

//     return botBlock;
// }

// async function init() {
//     await populateServerList();
//     await populateBotList();
// }

// init();
