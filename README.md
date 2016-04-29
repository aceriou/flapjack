# flapjack
An expandable IRC bot for NodeJS.

This is a basic working setup for creating IRC bots that can log, process commands, and more. This is highly expandable, so feel free to use this however you like.

# Setting up
Setting up instructions were made for Ubuntu 16.04, but can easily be converted to other versions, or distros.

Install npm, which includes nodejs.

```
sudo apt-get install npm
```

Download the repo

```
git clone https://github.com/aceriou/flapjack/
cd path/to/flapjack
```

Run and enjoy, but first, read the Configuration instructions below.

```
node listen.js
```

Please be aware, it can take a few moments before the bot connects to the IRC server and channel.

# Configuration
At the top of listen.js, there is a list of variables to edit so you can make this bot work for you. By default, this bot will listen to a channel, and then log everything to a .log file.
It also has two commands by default, as examples. 

When running the server, type "-flapjack", and you should get an output like this:

```
aceriou: -flapjack
flapjack_bot: good morning everyone!
```

This means the bot is working, and as another example, if any message includes the word 'twerk' it will return this:

```
aceriou: i hate ppl who twerk ugh
flapjack_bot: im twerking rn
```

Of course, below the line that reads "// Custom Commands" you can make your own commands, or remove it entirely, those are just examples to get you started.

# License
DO WHAT THE FUCK YOU WANT!
