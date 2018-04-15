# Discord-Cross-Server-Multiplayer
A bot that allows multiplayer through cross server! This bot is only for testing multiplayer through discord.

# Creating the Bot
First we must create the bot before we can use this repository, If you are new at making bots then follow this, else skip this.
First thing we need to do is go to the applications tab in discord, <p><a href="https://discordapp.com/developers/me">Here is the link to it.</a></p>
Now after you've went there you should see this
<a href="https://imgbb.com/"><img src="https://image.ibb.co/gGSWMn/image.png" alt="image" border="0"></a>
If there is something there then you must have created an Application before, Now click on `New Application`, after that you should see this:
<a href="https://ibb.co/f562SS"><img src="https://preview.ibb.co/dQnWMn/image.png" alt="image" border="0"></a>
Now click on `App Name` and name it to whatever you want, you dont have to give an `App Icon` unless you want your bot to have an icon, Now we are going to use **Cross-Server Multiplayer** as the `App Name`, After that click on `Create App`. Now you should see this
<a href="https://ibb.co/mcqkgn"><img src="https://preview.ibb.co/d9JtZ7/image.png" alt="image" border="0"></a>
This may be different on your side but I've created an Application! Now, on my side you don't see that because I've already created the bot, anyhow click on `Create a Bot User`. Then click on **Yes do it!**, Now get your bot's token by clicking the `Token: click to reveal` button. Then it will reveal the token!
<a href="https://ibb.co/gBAOZ7"><img src="https://preview.ibb.co/nyPiZ7/image.png" alt="image" border="0"></a>
Now, keep your token in a safe place because if people get your bot token, they can do anything to it. So do not give your bot token to anyone unless you trust them! Now copy and paste the token into a text document. *Note: I've reset my token so using the token I've provided will not be usable, go ahead try it people. Just like the other people that try and look for bots that exposed their token, those people just go ahead and take the token and ban every user that is in the bots server. Why am I saying this? Dunno*

#### Congratulations you have created a bot!
Now lets move on to the `Setup`!

# SETUP
## REQUIREMENTS
* `Latest NodeJS Version` (and Node Package Manager)
* `At least 150 MB of RAM` (Depending on how many users will use it.)
* `Any operating system as long as it supports nodejs`

## CLONE REPOSITORY
To clone the repository, you must have git or some other program to clone this **project** (Or you can just download it) Once you've done that, extract it (if you've downloaded it)

## INSTALLING DEPENDENCIES
After you've done that, then open git bash or any terminal you want, then **cd** to the **extracted directory**, after that you type `npm install`, then wait until the dependencies install.

## SETTINGS
Now you will see a file named `settings.json`, that file contains a lot of stuff that you can configure. Now why are we here? Because we are going to use our token we made! So if you've passed the "Creating a bot" section, then go to the text document you've made and copy the token, then paste it onto the strings, it should look like this:
```json
{
    "token": "YOUR BOT TOKEN THAT YOU ENTERED",
}
```
Now after you've put in your token, save the settings.json.
If you would like to see the other settings, please stay in this section.

## LIVE CHAT
### Permissions
**Here are the permissions that are used for live chat roles**:
* `*` > **All Permissions** [Recommended for Owners]
* `SEND_MESSAGE` > **Send a message** [Recommended for all users]
* `CLEAR_CHAT` > **Wipes out the history of the chat** [Recommended for Staff]
* `SILENCE_CHAT` > **Mutes the chat** [Recommended for Staff]
* `MUTE_USERS` > Permission to mute users [Recommended for Staff]
* `KICK_USERS` > **Permission to kick users from the chat** [Recommended for Staff]
* `BAN_USERS` > **Permission to ban users from the chat** [Recommended for Staff]
* `UNBAN_USERS` > **Permission to unban users from the chat** [Recommended for Staff]

NOTE: this readme is work in progress.