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

// /command-name is the slack command listers for
// async allows asychronous opreations like api calls
// ack() acknowledges the command request from slack
// respond() sends a message back to slack


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

app.command("/raju-catfact",async({ack,respond})=>{
    await ack();
    try{
        const reponse = await axios.get("https://catfact.ninja/fact");
        await respond({text: `cat fact:\n${reponse.data.fact}`})
    } catch(err){
        await respond({text: "Failed to fetch cat fact"});
    }
});

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


(async()=>{
    await app.start();
    console.log("BOt is running");
})();


