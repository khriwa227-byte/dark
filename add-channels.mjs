#!/usr/bin/env node
import { GoogleGenerativeAI } from '@google/genai';
import fs from 'fs';
import readline from 'readline';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'YOUR_API_KEY_HERE');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function processChannelList(rawList, countryName) {
  console.log('\n🤖 Using Gemini to format channels...\n');

  const prompt = `
You are a channel list formatter. Format this raw channel list into a clean JavaScript array format.

Raw channel list:
${rawList}

Country: ${countryName}

Requirements:
1. Remove the "|XX|" prefix or keep just the country code
2. Clean up channel names (remove extra spaces, fix formatting)
3. Remove duplicate entries
4. Group by category if headers like "##### SPORTS #####" are present
5. Output ONLY a JavaScript array of strings, like: ["Channel 1", "Channel 2"]
6. If there are category comments, add them as // comments

Output the formatted array ready to paste into code:
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract the array from the response
    const arrayMatch = text.match(/\[[\s\S]*\]/);
    if (arrayMatch) {
      return arrayMatch[0];
    }
    return text;
  } catch (error) {
    console.error('❌ Error using Gemini:', error.message);
    return null;
  }
}

async function addToChannelsFile(countryName, countryCode, channelsArray) {
  const channelsPath = './components/Channels.tsx';

  try {
    let content = fs.readFileSync(channelsPath, 'utf-8');

    // Find where to insert (before the last closing bracket of CHANNEL_CATEGORIES)
    const insertMarker = '  // === FEATURED CATEGORIES ===';

    const newCountryBlock = `
  {
    name: "${countryName}",
    icon: "${countryCode}",
    channels: ${channelsArray}
  },`;

    // Insert the new country
    const insertIndex = content.indexOf(insertMarker);
    if (insertIndex !== -1) {
      content = content.slice(0, insertIndex) + newCountryBlock + '\n' + content.slice(insertIndex);
      fs.writeFileSync(channelsPath, content, 'utf-8');
      console.log('\n✅ Successfully added channels to the website!\n');
      return true;
    } else {
      console.log('\n⚠️  Could not find insertion point. Here is the formatted array:\n');
      console.log(channelsArray);
      return false;
    }
  } catch (error) {
    console.error('❌ Error updating file:', error.message);
    console.log('\nFormatted array:\n');
    console.log(channelsArray);
    return false;
  }
}

async function main() {
  console.log('╔════════════════════════════════════════════╗');
  console.log('║   Channel List Optimizer (Powered by 🤖)  ║');
  console.log('╚════════════════════════════════════════════╝\n');

  // Check if API key is set
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    console.log('⚠️  No GEMINI_API_KEY found!');
    console.log('\nTo use this script:');
    console.log('1. Get API key from: https://makersuite.google.com/app/apikey');
    console.log('2. Run: export GEMINI_API_KEY="your-key-here"');
    console.log('3. Run this script again\n');
    rl.close();
    return;
  }

  const countryName = await question('Enter country name (e.g., "Spanje"): ');
  const countryCode = await question('Enter country flag emoji (e.g., "🇪🇸"): ');

  console.log('\n📋 Paste your channel list below.');
  console.log('   (Paste all channels, then press Ctrl+D on a new line)\n');

  let rawList = '';
  process.stdin.on('data', (chunk) => {
    rawList += chunk;
  });

  process.stdin.on('end', async () => {
    if (!rawList.trim()) {
      console.log('❌ No channel list provided!');
      rl.close();
      return;
    }

    const formattedArray = await processChannelList(rawList, countryName);

    if (formattedArray) {
      console.log('\n✨ Formatted channels:\n');
      console.log(formattedArray.slice(0, 200) + '...');

      const confirm = await question('\n📝 Add to website? (y/n): ');

      if (confirm.toLowerCase() === 'y') {
        await addToChannelsFile(countryName, countryCode, formattedArray);
      } else {
        console.log('\n📋 Copy this array:\n');
        console.log(formattedArray);
      }
    }

    rl.close();
  });

  process.stdin.resume();
}

main().catch(console.error);
