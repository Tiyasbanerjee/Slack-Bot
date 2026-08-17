require("dotenv").config();

const axios = require("axios");

const {App} = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
})

app.command("/raju-ping",async({command,ack,respond})=>{ // registers a slach command
    const start = Date.now();
    await ack();
    const latency = Date.now() - start;
    await respond({text:`pong!\nLatency:${latency}ms`})
});
//pings to raju and returns the latency of the bot
app.command("/raju-help",async({ack,respond})=>{
    await ack();
    await respond({
        text:
        `Avalable Commands:
        /raju-ping - Check the latency of the bot
        /raju-help - Get a list of available commands
        /raju-catfact - get a fact on cats`
    })
});
//returns a list of available commands
app.command("/raju-catfact",async({ack,respond})=>{
    await ack();
    try{
        const reponse = await axios.get("https://catfact.ninja/fact");
        await respond({text: `cat fact:\n${reponse.data.fact}`})
    } catch(err){
        await respond({text: "Failed to fetch cat fact"});
    }
});
//returns a random cat fact from the catfact api
app.command("/raju-joke",async({ack,respond})=>{
    await ack();
    try{
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        await respond({
            text:
            `${response.data.setup}
            ${response.data.punchline}`
        }) 
    } catch(err){
        await respond({text:"failed to fetch joke"});
    }
});
//returns a random joke from the official-joke-api
app.command("/raju-define", async({ack,respond,command})=>{
    await ack();
    const word = command.text.trim();
    if (!word){
        await respond({
            text:`heyy mannn , i am a bot not a GOD... 
            please tell me the word, because i cant read your mind...
            if you need help, use /raju-help`
        })
        return;
    }
    try{
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
        const data = response.data[0];
        const defination = data.meanings[0].definitions[0].definition;
        const partOFSpeech = data.meanings[0].partOfSpeech;
        const example = data.meanings[0].definitions[0].example || "No example available";
        await respond({
            text:`
            Word: ${word}
            Part of Speech: ${partOFSpeech}
            Defination: ${defination}
            Example: ${example}
            `
        });
    }catch(err){
        if (err.reponse && err.reponse.status === 404){
            await respond({text:`Sorryyy, I couldn't find a definition for "${word}".`});
        }else{
            await respond({text:"Failed to fetch definition"});
        }
    }
});
// returns word meaning from the dictionary api.
app.command("/raju-spell", async({ack,respond,command})=>{
    await ack();
    const word = command.text.trim();
    if (!word){
        await respond({
            text:`heyy mannn , i am a bot not a GOD... 
            please tell me a word, because i cant read your mind...
            if you need help, use /raju-help`
        })
        return;
    }
    try{
        const response = await axios.get(`https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&max=5`);
        const suggestions = response.data;
        if (suggestions.length === 0){
            await respond({text:`No suggestions found for "${word}".`});
            return;
        }

        const wordList = suggestions.map((item, index) => `${index + 1}. ${item.word}`).join("\n");
        await respond({text: `Did you mean one of these words?\n${wordList}`});

    } catch(err){
        await respond({text: "Failed to fetch spell check results"});
    }
});
//helps you keep your spelling correct by providing suggestions for misspelled words using the datamuse api.
(async()=>{
    await app.start();
    console.log("BOt is running");
})();
//starts the bot