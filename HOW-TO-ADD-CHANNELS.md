# How to Add Channels Using Gemini AI 🤖

This script automatically formats and adds channel lists to your website using Google's Gemini AI.

## Setup (One-time)

1. **Get a Gemini API Key:**
   - Go to: https://makersuite.google.com/app/apikey
   - Click "Create API Key"
   - Copy your key

2. **Set the API Key:**
   ```bash
   export GEMINI_API_KEY="your-api-key-here"
   ```

## Usage

1. **Run the script:**
   ```bash
   node add-channels.mjs
   ```

2. **Enter country information:**
   - Country name (e.g., "Spanje", "Duitsland")
   - Flag emoji (e.g., "🇪🇸", "🇩🇪")

3. **Paste your channel list:**
   - Copy your raw channel list (any format)
   - Paste it into the terminal
   - Press `Ctrl+D` when done

4. **Review and confirm:**
   - Gemini will format the channels
   - Review the output
   - Type `y` to add to website

## Example

```bash
$ node add-channels.mjs

Enter country name: Spanje
Enter country flag emoji: 🇪🇸

Paste your channel list below:
|ES| LA 1
|ES| LA 2
|ES| ANTENA 3
...
(press Ctrl+D)

🤖 Using Gemini to format channels...
✨ Formatted channels: ["ES LA 1", "ES LA 2", ...]

📝 Add to website? (y/n): y
✅ Successfully added channels to the website!
```

## What Gemini Does

- ✅ Removes prefixes like `|ES|`
- ✅ Cleans up channel names
- ✅ Removes duplicates
- ✅ Groups by category (if headers present)
- ✅ Formats as JavaScript array

## Benefits

- 🚀 **10x faster** than manual formatting
- 🎯 **Automatic cleanup** of messy data
- 🤖 **AI-powered** smart formatting
- ✨ **Copy-paste ready** output

## Go Back to Claude

After running this script:
1. Your channels are added automatically!
2. The dev server will hot-reload
3. Visit http://localhost:3000/#/kanalen to see them
4. Return to Claude for any other updates

---

**Need help?** Just paste your channel list to Claude and we'll add it manually!
