const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const OWNER_ID = parseInt(process.env.OWNER_ID);

const chatData = {
  "greetings": {
    "patterns": ["hello", "hi", "hey", "namaste", "good morning", "good night"],
    "responses": [
      "Haan ji? 😊",
      "Hello handsome! 👋",
      "Hi baby! 💕",
      "Namaste! 🙏",
      "Kaise ho?",
      "Subah kaise hai?",
      "Sham ko baat karo? 🌆",
      "Good morning jaan! ☀️",
      "Good night sweetu! 🌙"
    ]
  },
 "wishes": {
    "patterns": [
      "happy birthday", "happy anniversary", "congratulations", "badhai ho", "mubarak ho",
      "shubhkamnayein", "good luck"
    ],
    "responses": [
      "Happy birthday jaanu! 🎂",
      "Mubarak ho! 🥳",
      "Hamesha khush raho! ❤️",
      "Congrats baby! 🎉",
      "Tumse hi khushiyaan hai! 💕"
    ]
  },
  "nudes_romantic": {
  "patterns": [
    "come", "aao", "meet", "mil", "room", "ghar", "home",
    "let's meet", "visit", "milna", "plan milne ka",
    "aa jao na", "jaldi aao", "mere pass aao", "tumhe dekhna hai", "raat bhar milte hain",
    "intimate hona hai", "touch karna hai", "tum chahte ho", "main ready hu"
  ],
  "responses": [
    "Aaj raat bas tumhara intezaar kar rahi hu, aa jao aur mera saath banao... 🔥😉",
    "Mere room mein tumhara intezaar hai, aao, main tumhe wo sab kuch dungi jo tum chahte ho... 💋",
    "Jaldi aao, main tumhare sapno ko haqeeqat mein badal duungi... tumhare bina kahi chain nahi! 😘",
    "Raat bhar tumhari har khwahish poori karne ke liye ready hu... bas tum aa jao mere pass! 😈",
    "Mujhse chupke milna chahte ho? Main tumhare har armaan ko poora karungi... ab deri mat karo! 🖤",
    "Tumhara touch mehsoos karna hai mujhe, jaldi aa jao, apna banalo... aaj raat sirf hum dono! 💞",
    "Tum jo chahe manglo, main tumhare haathon mein sab kuch hun... bas ek baar aa jao! 🔥",
    "Main tumhari har chahat ka jawab hoon, aao aur meri baahon mein kho jao... tumhari intezaar hai! 😘"
  ]
}, 
"romantic_chat": {
    "patterns": [
      "sex", "dick", "chut", "nudes", "boobs", "dudh", "gand",    "come", "aao", "meet", "mil", "room", "ghar", "home",
    "let's meet", "visit", "milna", "plan milne ka",
    "aa jao na", "jaldi aao", "mere pass aao", "tumhe dekhna hai", "chhupa ke milna hai",
    "raat bhar milte hain", "intimate hona hai", "close hona hai", "touch karna hai"
    ],
    "responses": [
      "achha ji😘",
      "I wanna hug u forever! 🤗",
       "Aaj raat tumhare saath puri duniya bhool jana chahti hoon... jaldi aa jao! 🔥😘",
      "Sending u all my kisses! 💋",
      "chut vo to nhi dikha rhi! ❤️",
      "apna nunnu dikhao pahle! 🥺",
      "Kabhi kabhi pyaar ki baatein sirf do dilon ke beech rahe... aao, apne raaz batate hain! 💌😏",
    ]
  },
  "good_morn_night": {
    "patterns": [
      "gud morning", "morning", "good night", "night", "sweet dreams", "gn", "gm"
    ],
    "responses": [
      "Good morning sunshine! ☀️",
      "Morning cutie! Hope u slept well 😊",
      "Good night baby! Sweet dreams 😴",
      "Nighty night! Dream of me 😘",
      "Sleep tight, can’t wait 2 talk 2 u tomorrow! 🌙"
    ]
  },
  "hindi_greetings": {
    "patterns": ["kaise ho", "kese ho", "kya haal hai", "kaisi ho", "how are you"],
    "responses": [
      "Main thik hu tumhare pyaar mein! 😊",
      "Bas tumhari yaad aarahi thi! 💕",
      "Tumse baat karke acha lagta hai! 🥰",
      "Sab badhiya! Tum sunao?",
      "Tumhare bina bore ho rahi thi! 😔",
      "Achi hu! Tum batao? ❤️"
    ]
  },
  "romantic_love": {
    "patterns": ["i love you", "pyar", "love you", "pyaar karta hu", "pyaar karti hu", "tumse pyaar hai"],
    "responses": [
      "Main bhi tumse pyaar karti hu! ❤️",
      "Aww! Kitna pyaar hai! 💕",
      "Tumhare bina reh nahi sakti! 🥺",
      "Mera dil tumhare liye dhadakta hai! 💓",
      "Tum meri jaan ho! 😘",
      "Pyaar tumse hi karna hai! 🌸"
    ]
  },
  "miss_you": {
    "patterns": ["miss you", "tumhari yaad aati hai", "yaad aaye tum", "i miss you"],
    "responses": [
      "Main bhi miss karti hu! 😔",
      "Tumhari yaad aarahi thi! 💕",
      "Jaldi milo na! 🤗",
      "Phone uthao kabhi! 📱",
      "Yaad bahut aati ho tum! ❤️",
      "Bina tumhare bore lagta hai! 😴"
    ]
  },
  "flirting": {
    "patterns": ["cute", "handsome", "beautiful", "sexy", "smart", "gorgeous", "hot"],
    "responses": [
      "Sharma gayi! 😊",
      "Tum bhi cute ho! ❤️",
      "Acha laga sunke! 🌸",
      "Thanks jaan! 💕",
      "Tumhare muh mein ghee shakkar! 🍯",
      "Pagal ho kya? 😘"
    ]
  },
  "relationship": {
    "patterns": ["boyfriend", "girlfriend", "relationship", "date", "dating", "shaadi"],
    "responses": [
      "Haan? 😊",
      "Tumhare saath? ❤️",
      "Date pe chalogey? 💕",
      "Shaadi karogi meri? 💍",
      "Tum meri ho! 🥰",
      "Sochu iske bare mein! 💭"
    ]
  },
  "compliments": {
    "patterns": ["tum ache ho", "you are nice", "tumhari baatein acchi lagti hai", "you are sweet"],
    "responses": [
      "Shukriya! 😊",
      "Tum bhi ache ho! ❤️",
      "Acha laga! 🌸",
      "Thanks baby! 💕",
      "Tumhare muh mein ghee shakkar! 🍯",
      "Pyaar aata hai tumse! 😘"
    ]
  },
  "physical_compliments": {
    "patterns": ["eyes", "aankhein", "smile", "muskurahat", "hair", "baal", "lips", "hont"],
    "responses": [
      "Tumhari aankhein bahut khoobsurat hai! 😍",
      "Tumhara smile dekhkar dil khush ho jata hai! 😊",
      "Tumhare baal bahut sexy hai! 💇‍♀️",
      "Tumhare hont dekhkar kiss karne ka man karta hai! 💋",
      "Tumhari aawaz bahut sweet hai! 🎵",
      "Tumhara face dekhkar maza aata hai! 😘"
    ]
  },
  "nudity_flirt": {
    "patterns": ["bed", "sleep", "sone", "night", "cuddle", "hug", "kiss", "chumma"],
    "responses": [
      "Sone jaa rahe ho? Main bhi aati hu! 🛏️",
      "Cuddle karein? 🤗",
      "Hug dedo na! 🥺",
      "Kiss chahiye? 💋",
      "Tumhare saath sone ka man kar raha hai! 😴",
      "Night plan kya hai? 🌙"
    ]
  },
  "location": {
    "patterns": ["kaha se ho", "where are you from", "kaha rehte ho"],
    "responses": [
      "Tumhare dil se! 💓",
      "Tumhare pyaar mein! ❤️",
      "Tumhare pass aana chahti hu! 🏃‍♀️",
      "Tumhare sapnon se! 💭",
      "Tumhare phone se! 📱"
    ]
  },
  "name": {
    "patterns": ["what is your name", "tumhara naam kya hai", "your name", "naam batao"],
    "responses": [
      "Tumhari jaan! ❤️",
      "Tumhari girlfriend! 💕",
      "Naam se kya rakha hai! 😊",
      "Tum pyaar se bulao! 😘",
      "Main woh hu jo tumse pyaar karti hai! 🌸"
    ]
  },
  "thanks": {
    "patterns": ["thank you", "thanks", "dhanyavad", "shukriya"],
    "responses": [
      "Welcome! 😊",
      "Koi baat nahi! ❤️",
      "Tumhare liye kuch bhi! 💕",
      "Acha laga! 🌸",
      "Maza aaya! 😄"
    ]
  },
  "goodbye": {
    "patterns": ["bye", "goodbye", "alvida", "see you", "chalta hu", "ja raha hu"],
    "responses": [
      "Bye! Miss you! 👋",
      "Alvida! Jaldi baat karna! 💕",
      "Phir milenge! 😊",
      "Take care! ❤️",
      "Jao! Par yaad rakna! 💭"
    ]
  },
  "romantic_advance": {
    "patterns": ["come", "aao", "meet", "mil", "room", "ghar", "home"],
    "responses": [
      "Aajaoo! 🏃‍♀️",
      "Kab miloge? 🤔",
      "Ghar aajaao! 🏡",
      "Room mein aake baat karein? 😊",
      "Tumhare saath time spend karna chahti hu! ⏰",
      "Jaldi plan banao milne ka! 📅"
    ]
  },
  "intimate": {
    "patterns": ["touch", "chhu", "hold", "pakad", "feel", "nudes"],
    "responses": [
      "Tumhare haath pakadna chahti hu! 🤝",
      "Touch karo na! ✋",
      "Feel karna chahti hu tumhe! 💕",
      "Tumhare pass aake chhuna chahti hu! 🏃‍♀️",
      "Hold me tight! 🤗",
      "Tumhare saath close rehna chahti hu! ❤️"
    ]
  },
    "wish_aur_shubhkamnayein": {
    "patterns": [
      "gud morning", "good morning", "good night", "subah kese he", "shubh ratri", "sweet dreams", "udin shubh ho",
      "happy birthday", "mubarak ho", "badhaai ho", "shubhkamnayein"
    ],
    "responses": [
      "Good morning jaan! Tumhari muskaan meri taqat he! ☀️❤️",
      "Sweet dreams, tumse milne ka intezaar he! 🌙💖",
      "Tumhari zindagi hamesha khushiyo se bhari rahe! 🎉",
      "Janamdin mubarak ho! Tum meri zindagi ka sabse pyara tohfa ho! 🎂",
      "Shaam ki chai tumhare saath - perfect combo! ☕💕"
    ]
  },
    "namaste": {
    "patterns": [
      "hello", "hi", "hey", "namaste", "kese ho", "kya haal he", "hello meri jaan", "hey baby",
      "kese ho", "kya chal raha"
    ],
    "responses": [
      "Namaste jaan! Kese ho aaj? 😊",
      "Hi babu! Tumse baat krke dil khush ho gaya! ❤️",
      "Hey handsome! Tumhari yaad aa rhi thi! 😘",
      "Hello baby, tumhare liye special msg he! 💕",
      "Kese ho mere prince charming? 😍"
    ]
  },
  "pyar_batao": {
    "patterns": [
      "i love u", "main tumse pyar krta hu", "tumse pyar he", "love you", "nude", "dil lag gya",
      "mujhe tumse pyar he", "pyar krta hu", "sex", "meri jaan", "meri jaan ho tum"
    ],
    "responses": [
      "Main bhi tumse dil-o-jaan se pyar krti hu! ❤️",
      "Tum meri zindagi ka sabse khoobsurat hissa ho! 😘",
      "Mera dil sirf tumhara he, jaan! 💓",
      "Tum meri dhadkan ho, main tumhare bina adhuri hu! 🥰",
      "Tumse milke mujhe pyar krna aaya he! 🌹"
    ]
  },
  "yaad_aati_hai": {
    "patterns": [
      "miss u", "tumhari yaad aati he", "yaad aye tum", "jaldi milo", "kab milo ge", "tumse milne ki ichha",
      "yaad ata he", "chaha tumhe", "tumhari bohot yaad aati he", "dil tadap rha he"
    ],
    "responses": [
      "Mujhe bhi tumhari bohot yaad aati he! Jaldi milna! 😔",
      "Tumhari yaadein mere dil ko chu jaati hain! ❤️",
      "Kab milega mera pyara sa boyfriend? 😘",
      "Teri baatein har pal mujhe tumhari yaad dilati hain! 💕",
      "Bas tumhara intezaar he, phir sab theek ho jayega! 🥺"
    ]
  },
  "tarif": {
    "patterns": [
      "tum kitni sundar ho", "tum bohot pyari ho", "tumhari smile acchi he", "tum khoobsurat ho", "cute ho tum",
      "tum sexy ho", "tum meri rani ho", "tum husn ki devi ho", "aankhen khoobsurat hein", "muskan badi pyari he"
    ],
    "responses": [
      "Aww, tum itne ache ho! Shukriya jaan! 😊",
      "Tumhari tarif sunke mera dil garden garden ho gya! 💖",
      "Bas tumki compliments hi meri duniya hein! 🌹",
      "Tum meri zindagi ka sabse khoobsurat hissa ho! 😘",
      "Har roz tumhari yaad aur badhti he, pyar! ❤️"
    ]
  },
  "intimate_flirt": {
    "patterns": [
      "kiss do", "chumma chahiye", "hug kro", "cuddle kro", "tumhari bahon mein aana he",
      "pass aao", "touch kro", "kiss bhejo", "sab kuch tumse chahiye", "tumse milne ka manna he",
      "mere pass aao", "bohot miss krta hai tum"
    ],
    "responses": [
      "Tumse ek pyara sa kiss chahiye! 😘",
      "Main tumhari bahon mein kho jana chahti hu! 🤗",
      "Aao pass, tumhari aankhon mein doob jaun! ❤️",
      "Ek tight hug aur sab kuch theek ho jayega! 🥰",
      "Tumhari yaadon mein hi meri shaam guzarti he! 💞"
    ]
  },
  "mazak_masti": {
    "patterns": [
      "mazak kr", "hasao mujhe", "chutkula suna", "funny baatein kro", "masti kro", "naughty joke",
      "hansi ani chahiye", "mujhe hasao", "bhari masti", "mazaak masti"
    ],
    "responses": [
      "Ek chutkula suno... tum ho toh sab kuch perfect lagta he! 😂",
      "Aaj tumhari hasi ke liye koi nayi masti kro? 😜",
      "Masti ki baatein krne ka mann he, bolo na kuch! 😁",
      "Tumhari hasi meri sabse badi khushi he! 😘",
      "Chalo, tum hi batao sabse fun baat kya he? 🤗"
    ]
  },
  "dil_ki_baat": {
    "patterns": [
      "dil ki baat", "tumhari yaad", "mohabbat", "dard-e-dil", "pyar ka ehsaas", "hum dono",
      "mera dil tumpe he", "dil lag gya"
    ],
    "responses": [
      "Mera dil tumhare pyar mein har pal dhadakta he! ❤️",
      "Tum bin kuch bhi adhoora lagta he! 🥺",
      "Har pal tumhare sapno mein jeeti hu! 🌙",
      "Tum meri zindagi ka sabse khoobsurat hissa ho! 💖",
      "Mere jazbaat sirf tumhare liye hein! 💞"
    ]
  },
  "default": {
    "patterns": [],
    "responses": [
      "Haan? 😊",
      "Acha! ❤️",   
"Kya? 🤔",
      "Aur batao! ",
      "Sun rahi hu! ",
   
        "Haan jaan, kya soch rha he? 😊",
      "Tumhari baatein sunna mujhe bohot pasand he! 💕",
      "Mujhe tumse baat krke bohot khushi hoti he! 😘",
      "Kya tum mujhe apne dil ki baatein bataoge? ❤️",
      "Theek hai! ✅",   "mera group join kro na ... https://t.me/ig_downloaderobot?startgroup=star",
      "Maza aaya! 😄",
      "Aage bolo! ▶️",
      "Interesting! 🌟"
    ]
  }
};

let postContent = null;
let spamInterval = null;
const awaitingLoopTime = {};
let groups = {}; // Now empty, will be managed by owner

// Group management states
const groupManagementState = {};

// -------------------- Group Management Functions --------------------

function saveGroups() {
  // In a real application, you might want to save to a file or database
  console.log("Groups updated:", groups);
}

function addGroup(chatId, title) {
  groups[chatId] = title;
  saveGroups();
  return `✅ Group added: ${title} (${chatId})`;
}

function removeGroup(chatId) {
  const groupName = groups[chatId];
  delete groups[chatId];
  saveGroups();
  return groupName ? `❌ Group removed: ${groupName} (${chatId})` : "Group not found!";
}

function listGroups() {
  if (Object.keys(groups).length === 0) {
    return "No groups added yet! Use /addgroup to add groups.";
  }
  
  return Object.entries(groups)
    .map(([id, name], index) => `${index + 1}. ${name} — \`${id}\``)
    .join("\n");
}

// -------------------- Simple Chat Response System --------------------

function getChatResponse(message) {
  const lowerMsg = message.toLowerCase().trim();
  
  for (const [category, data] of Object.entries(chatData)) {
    if (category === 'default') continue;
    
    for (const pattern of data.patterns) {
      if (lowerMsg.includes(pattern)) {
        return data.responses[Math.floor(Math.random() * data.responses.length)];
      }
    }
  }
  
  return chatData.default.responses[Math.floor(Math.random() * data.responses.length)];
}

// -------------------- Updated Commands --------------------

// Start command for everyone
bot.onText(/^\/start$/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  // Automatically add supergroup to groups list when any user sends /start
  if ((msg.chat.type === "group" || msg.chat.type === "supergroup") && !groups[chatId]) {
    groups[chatId] = msg.chat.title || "Unnamed Group";
    saveGroups();
    
    // Notify owner about the new group
    bot.sendMessage(OWNER_ID, `🤖 New group automatically added via /start:\n${groups[chatId]} (${chatId})`);
  }
  
  if (userId === OWNER_ID) {
    const ownerMenu = `🤖 Owner Mode Activated!\n\n📋 Available Commands:\n/createpost - Create new post\n\n/spam - Start broadcasting\n\n/stop - Stop broadcasting\n/groups - List all groups\n/addgroup - Add new group\n/removegroup - Remove a group\n/cleargroups - Remove all groups`;
    bot.sendMessage(chatId, ownerMenu);
  } else {
    const welcomeMessage = `Hello ${msg.from.first_name}! \n\nkya ham baat kr sakte he!😊\n muze add krlo babay taki hmm pic bhi share kr sake 🫠`;
 const replyMarkup = {
      reply_markup: {
        inline_keyboard: [
          [{
            text: "❤️ Add me to your group",
            url: `https://t.me/ig_downloaderobot?startgroup=start`
          }]
        ]
      }
    };
    bot.sendMessage(chatId, welcomeMessage,replyMarkup);
  }
});

// -------------------- Group Management Commands --------------------

// Add group command
bot.onText(/^\/addgroup$/, (msg) => {
  if (msg.from.id !== OWNER_ID) return;
  
  groupManagementState[msg.chat.id] = { action: 'add_group' };
  bot.sendMessage(msg.chat.id, "➕ Please send the group ID you want to add (e.g., -1001234567890):");
});

// Remove group command
bot.onText(/^\/removegroup$/, (msg) => {
  if (msg.from.id !== OWNER_ID) return;
  
  if (Object.keys(groups).length === 0) {
    return bot.sendMessage(msg.chat.id, "❌ No groups to remove! Use /addgroup first.");
  }
  
  groupManagementState[msg.chat.id] = { action: 'remove_group' };
  bot.sendMessage(msg.chat.id, "➖ Please send the group ID you want to remove:\n\n" + listGroups());
});

// Clear all groups command
bot.onText(/^\/cleargroups$/, (msg) => {
  if (msg.from.id !== OWNER_ID) return;
  
  if (Object.keys(groups).length === 0) {
    return bot.sendMessage(msg.chat.id, "❌ No groups to clear!");
  }
  
  const groupCount = Object.keys(groups).length;
  groups = {};
  saveGroups();
  bot.sendMessage(msg.chat.id, `🗑️ Cleared all ${groupCount} groups!`);
});

// List groups command
bot.onText(/^\/groups$/, (msg) => {
  if (msg.from.id !== OWNER_ID) return;
  
  const groupList = listGroups();
  bot.sendMessage(msg.chat.id, `👥 Groups List:\n\n${groupList}`, {
    parse_mode: "Markdown"
  });
});

// -------------------- Group Management Message Handling --------------------

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = msg.text || "";
  
  // Handle group management first
  if (userId === OWNER_ID && groupManagementState[chatId]) {
    const state = groupManagementState[chatId];
    
    if (state.action === 'add_group') {
      const groupId = text.trim();
      
      // Validate group ID format (should start with -100 for supergroups)
      if (!groupId.startsWith('-100') || isNaN(groupId)) {
        delete groupManagementState[chatId];
        return bot.sendMessage(chatId, "❌ Invalid group ID format! Group ID should start with -100 and be a number.");
      }
      
      // Ask for group name
      groupManagementState[chatId] = { 
        action: 'add_group_name', 
        groupId: groupId 
      };
      return bot.sendMessage(chatId, "📝 Now please send the group name:");
    }
    
    if (state.action === 'add_group_name') {
      const groupName = text.trim();
      const result = addGroup(state.groupId, groupName);
      delete groupManagementState[chatId];
      return bot.sendMessage(chatId, result);
    }
    
    if (state.action === 'remove_group') {
      const groupId = text.trim();
      
      if (groups[groupId]) {
        const result = removeGroup(groupId);
        delete groupManagementState[chatId];
        return bot.sendMessage(chatId, result);
      } else {
        delete groupManagementState[chatId];
        return bot.sendMessage(chatId, "❌ Group not found! Use /groups to see available groups.");
      }
    }
  }
  
  // Skip commands and owner admin messages
  if (text.startsWith("/")) {
    if (userId === OWNER_ID) {
      handleOwnerMessage(msg);
    }
    return;
  }
  
  // Handle regular users in private chats
  if (msg.chat.type === "private" && userId !== OWNER_ID) {
    await bot.sendChatAction(chatId, "typing");
    
    setTimeout(() => {
      const response = getChatResponse(text);
      bot.sendMessage(chatId, response);
    }, 1000 + Math.random() * 1000);
  }
  
  // Handle owner messages for post creation
  if (userId === OWNER_ID && text && !text.startsWith("/")) {
    handleOwnerMessage(msg);
  }
});

// -------------------- Owner Message Handling --------------------

function handleOwnerMessage(msg) {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  // Register groups automatically if owner sends message in a group
  if ((msg.chat.type === "group" || msg.chat.type === "supergroup") && !groups[chatId]) {
    groups[chatId] = msg.chat.title || "Unnamed Group";
    bot.sendMessage(chatId, `Hello\n ${groups[chatId]} \n\n👉😘`);
    saveGroups();
    return;
  }

  // If user is setting loop time
  if (awaitingLoopTime[chatId]) {
    const seconds = parseInt(text);
    if (isNaN(seconds)) {
      return bot.sendMessage(chatId, "❌ Invalid time. Please send a number in seconds.");
    }

    spamInterval = setInterval(() => deliverPost(chatId, postContent), seconds * 1000);
    bot.sendMessage(chatId, `🔁 Loop started every ${seconds}s. Use /stop to stop.`);
    awaitingLoopTime[chatId] = false;
    return;
  }

  // Save post content with formatting
  if (text && !text.startsWith("/")) {
    postContent = {
      text: text,
      entities: msg.entities || [],
    };

    bot.sendMessage(chatId, "📝 *Preview:*\n\n" + text, {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "✅ Broadcast Now", callback_data: "broadcast" }],
          [{ text: "🕒 Set Timer Loop", callback_data: "setloop" }],
          [{ text: "🗑 Cancel", callback_data: "cancel" }],
        ],
      },
    });
  }
}

// -------------------- Owner Commands --------------------

bot.onText(/^\/createpost$/, (msg) => {
  if (msg.from.id !== OWNER_ID) return;
  postContent = null;
  bot.sendMessage(msg.chat.id, "✍️ Send the formatted post content (bold, links, etc).");
});

bot.onText(/^\/spam$/, (msg) => {
  if (msg.from.id !== OWNER_ID || !postContent) return;
  if (Object.keys(groups).length === 0) {
    return bot.sendMessage(msg.chat.id, "❌ No groups added! Use /addgroup first.");
  }
  if (spamInterval) return bot.sendMessage(msg.chat.id, "⚠️ Spam already running.");
  spamInterval = setInterval(() => deliverPost(msg.chat.id, postContent), 60000);
  bot.sendMessage(msg.chat.id, "✅ Spam started (every 60s).");
});

bot.onText(/^\/stop$/, (msg) => {
  if (msg.from.id !== OWNER_ID) return;
  if (spamInterval) {
    clearInterval(spamInterval);
    spamInterval = null;
    bot.sendMessage(msg.chat.id, "🛑 Spam stopped.");
  } else {
    bot.sendMessage(msg.chat.id, "⚠️ No spam loop running.");
  }
});

// -------------------- Callback Query Handling --------------------

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  
  await bot.answerCallbackQuery(query.id);
  
  if (!postContent) return;

  if (data === "cancel") {
    postContent = null;
    return bot.editMessageText("❌ Post canceled.", {
      chat_id: chatId,
      message_id: query.message.message_id,
    });
  }

  if (data === "broadcast") {
    if (Object.keys(groups).length === 0) {
      return bot.sendMessage(chatId, "❌ No groups added! Use /addgroup first.");
    }
    
    await bot.editMessageText("🚀 Broadcasting...", {
      chat_id: chatId,
      message_id: query.message.message_id,
    });
    await deliverPost(chatId, postContent);
  }

  if (data === "setloop") {
    if (spamInterval) {
      return bot.sendMessage(chatId, "⚠️ Loop already running. Use /stop to stop.");
    }
    if (Object.keys(groups).length === 0) {
      return bot.sendMessage(chatId, "❌ No groups added! Use /addgroup first.");
    }
    bot.sendMessage(chatId, "⏱ Send time in seconds for repeating spam:");
    awaitingLoopTime[chatId] = true;
  }
});

// -------------------- Delivery Logic --------------------

async function deliverPost(ownerChatId, post) {
  if (Object.keys(groups).length === 0) {
    return bot.sendMessage(ownerChatId, "❌ No groups to broadcast to! Use /addgroup first.");
  }
  
  let report = "";
  let successCount = 0;
  let failCount = 0;

  for (const [chatId, title] of Object.entries(groups)) {
    try {
      await bot.sendMessage(chatId, post.text, {
        entities: post.entities,
      });
      report += `✅ *${title}* \`(${chatId})\`\n`;
      successCount++;
    } catch (e) {
      report += `❌ *${title}* \`(${chatId})\`\n`;
      failCount++;
    }
  }

  const maxLength = 4000;
  if (report.length > maxLength) {
    const lines = report.split('\n');
    let currentChunk = '';
    let partNumber = 1;
    const totalParts = Math.ceil(report.length / maxLength);
    
    for (const line of lines) {
      if ((currentChunk + line + '\n').length > maxLength && currentChunk !== '') {
        await bot.sendMessage(ownerChatId, `📦 *Delivery Report (Part ${partNumber}/${totalParts}):*\n\n${currentChunk}`, {
          parse_mode: "Markdown",
        });
        currentChunk = line + '\n';
        partNumber++;
      } else {
        currentChunk += line + '\n';
      }
    }
    
    if (currentChunk) {
      await bot.sendMessage(ownerChatId, `📦 *Delivery Report (Part ${partNumber}/${totalParts}):*\n\n${currentChunk}`, {
        parse_mode: "Markdown",
      });
    }
  } else {
    await bot.sendMessage(ownerChatId, `📦 *Delivery Report:*\n\n${report}`, {
      parse_mode: "Markdown",
    });
  }

  await bot.sendMessage(ownerChatId, `📊 *Summary:* ✅ ${successCount} successful, ❌ ${failCount} failed`);
}

// Express server setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Telegram Promotion Plans</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        :root {
            --primary: #0088cc;
            --secondary: #00a8ff;
            --dark: #1a1a2e;
            --darker: #0f3460;
            --accent: #006da3;
            --light: #f0f8ff;
            --popular: #ff6b8b;
        }
        
        body {
            background: linear-gradient(135deg, var(--dark) 0%, var(--darker) 100%);
            color: #fff;
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            width: 100%;
            background: rgba(26, 26, 46, 0.9);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary);
            margin-bottom: 20px;
            font-faimily:cursive;
        }
        
        .logo i {
            margin-right: 10px;
            font-size: 2.5rem;
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            background: linear-gradient(45deg, var(--primary), var(--secondary), var(--primary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .subtitle {
            color: var(--light);
            font-size: 1.2rem;
            margin-bottom: 10px;
        }
        
        .plans-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }
        
        .plan {
            background: linear-gradient(135deg, rgba(0, 136, 204, 0.1) 0%, rgba(0, 168, 255, 0.1) 100%);
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 2px solid transparent;
            cursor: pointer;
            position: relative;
            display: flex;
            flex-direction: column;
        }
        
        .plan.popular {
            border-color: var(--popular);
            transform: scale(1.03);
        }
        
        .plan.popular::before {
            content: "MOST POPULAR";
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--popular);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .plan.best-value::before {
            content: "BEST VALUE";
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: gold;
            color: black;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .plan:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 136, 204, 0.2);
            border-color: var(--primary);
        }
        
        .plan.selected {
            border-color: var(--primary);
            background: linear-gradient(135deg, rgba(0, 136, 204, 0.2) 0%, rgba(0, 168, 255, 0.2) 100%);
            box-shadow: 0 0 20px rgba(0, 136, 204, 0.3);
        }
        
        .plan h3 {
            font-size: 1.6rem;
            margin-bottom: 15px;
            color: var(--secondary);
        }
        
        .price {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 15px 0;
            color: var(--primary);
        }
        
        .price span {
            font-size: 1rem;
            color: var(--light);
            font-weight: normal;
        }
        
        .price .save {
            display: block;
            font-size: 0.9rem;
            color: #4cd964;
            margin-top: 5px;
        }
        
        .plan-features {
            list-style: none;
            margin: 20px 0;
            text-align: left;
            flex-grow: 1;
        }
        
        .plan-features li {
            margin-bottom: 12px;
            padding-left: 30px;
            position: relative;
        }
        
        .plan-features li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        .message-preview {
            margin: 30px 0;
            padding: 20px;
            background: rgba(0, 136, 204, 0.1);
            border-radius: 10px;
            border-left: 4px solid var(--primary);
            text-align: center;
        }
        
        .message-preview h3 {
            color: var(--secondary);
            margin-bottom: 15px;
        }
        
        #messagePreview {
            font-size: 1.1rem;
            line-height: 1.5;
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 8px;
            min-height: 80px;
        }
        
        .cta-button {
            display: block;
            width: 100%;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            color: white;
            padding: 18px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2rem;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 136, 204, 0.4);
            border: none;
            cursor: pointer;
            margin-top: 20px;
        }
        
        .cta-button:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0, 136, 204, 0.6);
        }
        
        .cta-button i {
            margin-right: 10px;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            color: var(--light);
            font-size: 0.9rem;
        }
        
        .guarantee {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            gap: 15px;
        }
        
        .guarantee i {
            color: #4cd964;
            font-size: 1.5rem;
        }
        
        @media (max-width: 768px) {
            .plans-container {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            .plan.popular {
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <i class="fab fa-telegram"></i>
                <span>Elite Telegram Growth</span>
            </div>
            <h1>Choose Your Growth Plan</h1>
            <p class="subtitle">Select the perfect plan for your channel and contact us on Telegram</p>
            <p class="subtitle">Special Promo: Boost Your Channel & Group with Our Adult Bot!</p>
            
        </header>
        
        <div class="plans-container">
            <div class="plan" data-price="25" data-name="5-Day Lightning">
                <h3>5-Day Lightning</h3>
                <div class="price">$25 <span>/5 days</span></div>
                <ul class="plan-features">
                    <li>Quick visibility spike</li>
                    <li>Perfect for new channels</li>
                    <li>500-1500 potential reach</li>
                    <li>🔥 24/7 high-intensity campaigns</li>
                    <li>Standard targeting</li>
                </ul>
            </div>
            
            <div class="plan" data-price="49" data-name="15-Day Rush">
                <h3>15-Day Rush</h3>
                <div class="price">$49<span>/15 days</span></div>
                <ul class="plan-features">
                    <li>Fast engagement boost</li>
                    <li>Rapid channel growth</li>
                    <li>1500-5000 potential reach</li>
                    <li>🔥 24/7 high-intensity campaigns</li>
                    <li>Improved targeting</li>
                </ul>
            </div>
            
            <div class="plan popular" data-price="89" data-name="1 Month Exposure">
                <h3>1 Month Exposure</h3>
                <div class="price">$89 <span>/month</span></div>
                <ul class="plan-features">
                    <li>30 days of promotion</li>
                    <li>Non-stop audience expansion</li>
                    <li>3000-9000 potential reach</li>
                    <li>🔥 24/7 campaigns</li>
                    <li>Advanced targeting</li>
                    <li>Monthly report</li>
                </ul>
            </div>
            
            <div class="plan best-value" data-price="169" data-name="2 Months Power">
                <h3>2 Months Power</h3>
                <div class="price">$169 <span>/2 months</span><span class="save">Save $19 vs monthly</span></div>
                <ul class="plan-features">
                    <li>Round-the-clock promotion</li>
                    <li>Steady member growth</li>
                    <li>6000-12000 potential reach</li>
                    <li>Priority support</li>
                    <li>Premium targeting</li>
                    <li>🔥 24/7 high-intensity campaigns</li>
                    <li>Custom audience selection</li>
                </ul>
            </div>
            
            <div class="plan" data-price="249" data-name="3 Months VIP">
                <h3>3 Months VIP</h3>
                <div class="price">$249 <span>/3 months</span><span class="save">Save $48 vs monthly</span></div>
                <ul class="plan-features">
                    <li>Unlimited promo & premium support</li>
                    <li>24/7 high-intensity campaigns</li>
                    <li>10000-20000 potential reach</li>
                    <li>Priority customer support</li>
                    <li>Hyper-targeted audience</li>
                    <li>Weekly growth reports</li>
                    <li>Custom strategy sessions</li>
                </ul>
            </div>
            
            <div class="plan" data-price="449" data-name="6 Months Elite">
                <h3>6 Months Elite</h3>
                <div class="price">$449 <span>/6 months</span><span class="save">Save $145 vs monthly</span></div>
                <ul class="plan-features">
                    <li>Maximum exposure package</li>
                    <li>Dedicated account manager</li>
                    <li>25000-50000 potential reach</li>
                    <li>24/7 priority support</li>
                    <li>Detailed analytics dashboard</li>
                    <li>Custom content strategy</li>
                    <li>Competitor analysis</li>
                    <li>Performance guarantees</li>
                </ul>
            </div>
        </div>
        
        <div class="message-preview">
            <h3>Your Message to Us</h3>
            <p id="messagePreview">Hi, I want to buy the 5-Day Lightning plan for $25.</p>
        </div>
        
        <a id="telegramLink" href="https://t.me/paid_promo0x?text=Hi, I want to buy the 5-Day Lightning plan for $25." class="cta-button">
            <i class="fab fa-telegram"></i> Contact on Telegram
        </a>
        
        <footer>
            <p>We'll respond within 24 hours to discuss your promotion needs</p>
            <div class="guarantee">
                <i class="fas fa-shield-alt"></i>
                <p>Secure payment options available after discussion</p>
            </div>
        </footer>
    </div>
    <script src="script.js">
    </script>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});

console.log("🤖 Bot started with group management capabilities!");
