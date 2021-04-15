const {Command} = require('discord.js-commando');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'info',
            memberName: 'invite',
            description: 'Replies with the bots vote link.',
        });
    }

    run(message) {
        return message.embed({
            "title": "Vote",
            "description": "[Click me!](Your Bots vote link.)",
            "author": {
                "name": "LinkV Bypass",
                "url": "https://github.com/07test9992/test",
                "icon_url": "https://cdn.discordapp.com/avatars/780857188171644962/0344f614c6e85bef212f77d24631c631.webp?size=128"
            }
        });
    }
};
