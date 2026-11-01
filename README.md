# Side Chat — Chat Panel for DeepSeek Harness

A persistent DSH Web plugin that puts a second, parallel conversation in the right sidebar.

## Requirements

- A DSH Web profile with the built-in right sidebar.
- This is a DSH **bundle**, not a standalone web app. The Host half is intentionally empty; the Web half registers the sidebar UI.

## Install

Install the project directory as a DSH bundle:

- In a DSH session, call the `plugin_manager` tool with `action: install_bundle` and this directory as `target`.
- Or add the package to a DSH profile bundle list and let the profile loader mount it.

The plugin survives restarts and applies to every Session in that profile.

## Use

- Open a session and click the chat-bubble action beside the session title.
- Or open the right sidebar, choose **Start**, and pick **Side chat** from the guide.
- The side chat is a fork of the current conversation at its latest completed turn, so it starts with the same workspace and conversation context without interrupting the main thread.
- Closing the tab keeps the side conversation. Opening the entry again returns to the same thread. A new thread replaces the mapping only if the old child session no longer exists.
- Side chats are named `[主会话标题]侧边聊天（N）`: the name in the square brackets is the current main session title, and `N` is the side-chat sequence within that main session. The title follows later main-session renames.
- Use the side-chat tab's actions menu and choose **Archive side chat** to archive the child conversation and close the tab in one step.
- If the side conversation is archived from the session list, its tab shows a restore panel instead of blocking every turn. Choose **Restore and continue** to unarchive it and resume the thread, or **Start a new side chat** to fork a fresh child and replace the archived tab.

The side chat uses the normal Conversation renderer and composer inside the right sidebar. The child session remains available as a normal session in the profile.

## Files

- `client.js` — browser half: tab type, resource provider, session fork, header action, guide card, and embedded Conversation.
- `index.js` — empty Host half, required by the bundle.
- `cordis.patch.yml` — inserts the `side-chat` plugin row.
- `locale/*.json` — Plugin Manager title and description.
- `icon.svg` — original bundle artwork.
