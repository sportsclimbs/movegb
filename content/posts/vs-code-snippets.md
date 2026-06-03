---
title: "VS Code snippets"
linktitle: VSC snippets
date: 2026-05-29T20:20:47+01:00
summary: "How to configure snippets in VS Code"
cover_image: images/rows.jpg
tags: [VS Code]
---

It's actually fairly easy to configure snippets in VS Code but there are a few gotchas to trip you up.

First open the snippets panel by pressing `Ctrl + Shft + p` and typing 'configure snippets'. You get another drop down to choose the context of your snippet. Maybe only for the current project or a specific language is probably more common. Choose that then you get a file to edit your snippet.

They consist of 5 parts:

1. A name
2. The scope of where the snippet can be used
3. The prefix to launch the snippet
4. The body of the snippet
5. A description

Here's a snippet for markdown files that is launched using the word `bash`. 

```json
    "bash": {
    "scope": "markdown",
    "prefix": "bash",
    "body": [
        "```bash",
        "$0",
        "```",
    ],
    "description": "Insert bash code fence"
},
```

This creates code fences with the *bash* language.

The `$0` marks the position of the cursor when your snippet has completed.

This is in JSON format. Note quotes around everything and commas at the end inc. every line in the body.

Now when I first did this it didn't work. However there is a second way to launch a snippet and that is by pressing `Ctrl + space` to get a dropdown of all snippets. You then type your prefix and press `Enter`. I did this which confirmed my snippet worked as expected. But why wouldn't it work just typing the prefix? It was down to the `editor.tabCompletion` setting.

To change this setting press `Ctrl + ,` to open the settings. Then search for `editor.tabCompletion`. Set this to `on` and it worked.


## Adjust IntelliSense Trigger Settings

If you want snippets to appear automatically as you type:

- Search for editor.quickSuggestions in Settings
- Make sure it's enabled for your file type (e.g., set to true or { "other": true })
- Also check editor.suggestOnTriggerCharacters is enabled


## Verify the Snippets File

Make sure your snippet file is in the right location:

- **Global snippets:** ~/.config/Code/User/snippets/ (Linux/Mac) or %APPDATA%\Code\User\snippets\ (Windows)
- **Language-specific:** Create a file named [language].json in that snippets folder
