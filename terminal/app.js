function shutdown() {
    window.close();
}
ttty.initTerminal({
    host: document.querySelector("#terminal-api-ttty"),
    prompt: "C:\\Users\\kaazdw > ",
    welcomeMessage: "Hi, welcome on my hub terminal. Press 'tab' or click for writing. Use 'help' to display all commands you can use here.",
    commands: {
        echo: {
            name: "echo",
            description: "a command with one echo arg",
            argDescriptions: ["a string to be echoed in console"],
            func: ({ print }, argument) => { print(argument) }
        },
        clear: {
            name: "clear",
            description: "a command for cleaning the cmd",
            func: ({ pclear }) => { location.reload();
            }
        },
        multiply: {
            name: "multiply",
            description: "Multiply two numbers",
            argDescriptions: ["number one", "number two"],
            func: ({ print }, one, two) => {( print(Number(one) * Number(two)) )}
        },
        portfolio: {
            name: "portfolio",
            description: "!!WIP!! a way to go on my personnal website ",
            // func: ({ print }) => {( window.open("https://google.fr", "_blank") )}
        },
        dir: {
            name: "dir",
            description: "a command to display development's informations",
            func: ({ print }) => { print(">> I build this web-terminal with the Mikhail Korolev's API name TTTY, available on his github: https://github.com/mkrl/ttty. For the background i've basicly used a svg background generator.")}
        },
        // webhookmsg: {
        //     name: "webhookmsg",
        //     description: "",
        //     argDescriptions:[""],
        //     func: ({ print }, user, msg) => { Send(user, msg); console.log("open") }
        // }
        webhook: {
            name: "webhook",
            description: "a way to go on my webhook discord form",
            func: ({ load }) => { location.href = "/webhook/index-webhook.html" }
        },
        github: {
            name: "github",
            description: "redirect on my github profile",
            func: ({ load }) => { window.open("https://github.com/KaazDW") }
        },
        

    }
});

Connexion();
function Connexion() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1022948477442998323/BCx-BiyY71uG8Wdu-ds8N9BA04XwoNXvfPTCzfNmZDXgiY9gjlk5quJWWmdi836BnjLW");
  
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
      username: "AlertConnect",
      avatar_url: "https://i.pinimg.com/564x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg",
      content: "+1c to TERMINALwebsite",
    }
    request.send(JSON.stringify(params));
  
  }
  

