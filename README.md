# Slack-Bot

**Raju** is a smart😎 bot who helps you in real time with English spelling and word meanings📝📝.

[![Watch Raju Bot Demo](https://img.youtube.com/vi/euCq271Imf4/maxresdefault.jpg)](https://youtu.be/euCq271Imf4)

*Click the image above to watch the Raju Bot demo video!*

Suppose you are chatting with someone on Slack, and suddenly the person goes offline😭. Now you are feeling bored😞, so what can you do? Check if Raju is active!📍

### 1. `/raju-ping`

If Raju is active, it will send you a ping back📍 with the latency in milliseconds.

Now you can ask him for a cat fact or a joke. But wait... you forgot the exact commands?😩😩😩😩

### 2. `/raju-help`

Just type this command and Raju will tell you all of his abilities💖, which are:

* Telling you a cat fact💭
* Telling you a joke💭💭
* Helping you with word spelling📝
* Helping you with word meanings📝💬📝

Now you want to ask Raju for a cat fact or a joke using:

### 3. `/raju-catfact` or 4. `/raju-joke`

While you are doing all this, that person comes back online🥹 with a long message written like a piece of Shakespeare...🤯 and you don't know the meaning of a word!🤯🤯 Just ask Raju🥰✅✨:

### 5. `/raju-define <your word>`

Now you want to text them back, but you can't remember the exact spelling of a word🤔. You can't afford to look bad in front of them while they are writing in super polished English!🫣 So ask Raju:

### 6. `/raju-spell <the word you forgot the spelling of>`

So, did you like Raju? My Cat loved him a lot because he tells interesting facts about her!


---
---

## 🛠️ The Techy Part🚀

This runs on **Node.js** and uses two main libraries: `@slack/bolt` and `axios` for API requests.

**APIs used:**

* **Cat Facts:** `[https://catfact.ninja/fact](https://catfact.ninja/fact)`
* **Jokes:** `[https://official-joke-api.appspot.com/random_joke](https://official-joke-api.appspot.com/random_joke)`
* **Word Meanings:** `[https://api.dictionaryapi.dev/api/v2/entries/en/](https://api.dictionaryapi.dev/api/v2/entries/en/)`
* **Spelling Suggestions:** `[https://api.datamuse.com/words](https://api.datamuse.com/words)`

---

## 🚀 How You Can Use This

Clone my repository (and if you like it, feel free to star the repo too!):
`[https://github.com/Tiyasbanerjee/Slack-Bot.git](https://github.com/Tiyasbanerjee/Slack-Bot.git)`

1. **Clone the repo:**
```bash
git clone https://github.com/Tiyasbanerjee/Slack-Bot.git

```


2. **Open the project folder:**
```bash
cd Slack-Bot

```


3. **Install dependencies:**
```bash
npm install

```


4. **Set up Environment Variables:**
Create a `.env` file inside the root folder and add your Slack tokens:
```env
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...

```


5. **Start the bot:**
```bash
node index.js

```

Now your bot is active and running—you are ready to go!