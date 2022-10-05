ttty.initTerminal({
    host: document.querySelector("#terminal-api-ttty"),
    prompt: "C:\\Users\\kaazdw > ",
    //   welcomeMessage: "Welcome",
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
            func: ({ pclear }) => { window.open("#") }
        },
        multiply: {
            name: "multiply",
            description: "Multiply two numbers",
            argDescriptions: ["number one", "number two"],
            func: ({ print }, one, two) => { print(Number(one) * Number(two)) }
        },
        portfolio: {
            name: "portfolio",
            description: "a way to go on my personnal website",
            func: ({ print }, argument) => { window.open("https://google.fr", "_blank") }
        },
        dir: {
            name: "dir",
            description: "a command to display development's informations",
            func: ({ print }) => { print("this web terminal ") }
        },
        colorchange: {
            name: "colorchange",
            description: "a command used to change color mod of the terminal",
            func: ({ print }) => { print("this web terminal ") }
        },





    }
});

function shutdown() {
    window.close();
}
