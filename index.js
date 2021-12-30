//Dependencies
const DiscordNitro = require("discordnitro")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <amount> <output>")
    process.exit()
}

if(isNaN(Self_Args[0])){
    console.log("amount is not a number.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid output.")
    process.exit()
}

console.log("Generating Discord nitros, please wait.")
const Discord_Nitros = DiscordNitro(Self_Args[0])

console.log(`Saving Discord nitros to ${Self_Args[1]}`)
Fs.writeFileSync(Self_Args[1], Discord_Nitros.join("\n"), "utf8")
console.log(`Discord nitros has been saved to ${Self_Args[1]}`)