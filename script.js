// Get the elements from the page
const card = document.getElementById("card");
const moodLabel = document.getElementById("mood");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const shareButton = document.getElementById("share");
const statusMessage = document.getElementById("status");

// Each mood has its own colors: a strong color (accent) and a soft background (tint)
const moods = {
  motivation: { label: "Motivation", accent: "#1f5fbf", tint: "#e9f1fc" },
  courage:    { label: "Courage",    accent: "#c0392b", tint: "#fdeeec" },
  wisdom:     { label: "Wisdom",     accent: "#6a4bb5", tint: "#f0ecfa" },
  calm:       { label: "Calm",       accent: "#1f7a5c", tint: "#e8f5f0" },
  hope:       { label: "Hope",       accent: "#a8650f", tint: "#fcf3e3" }
};

// The quotes: an array of objects (each has text, author and mood)
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", mood: "motivation" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin", mood: "motivation" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay", mood: "motivation" },

  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", mood: "courage" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt", mood: "courage" },
  { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr.", mood: "courage" },

  { text: "The unexamined life is not worth living.", author: "Socrates", mood: "wisdom" },
  { text: "Knowledge is power.", author: "Francis Bacon", mood: "wisdom" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", mood: "wisdom" },

  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu", mood: "calm" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", mood: "calm" },
  { text: "Peace begins with a smile.", author: "Mother Teresa", mood: "calm" },

  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", mood: "hope" },
  { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu", mood: "hope" },
  { text: "Fall seven times, stand up eight.", author: "Japanese proverb", mood: "hope" }
];

// Remember the last quote so we never show the same one twice in a row
let lastIndex = -1;

// Pick a random index that is different from the last one
function getRandomIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);
  return index;
}

// Show a new random quote and change the colors to match its mood
function showQuote() {
  const index = getRandomIndex();
  const quote = quotes[index];
  const mood = moods[quote.mood];

  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
  moodLabel.textContent = mood.label;

  // Change the CSS variables, and the whole card changes color
  card.style.setProperty("--accent", mood.accent);
  card.style.setProperty("--tint", mood.tint);

  lastIndex = index;
  statusMessage.textContent = "";
}

// Show a short message, then clear it after 2.5 seconds
function showStatus(message) {
  statusMessage.textContent = message;
  setTimeout(function () {
    statusMessage.textContent = "";
  }, 2500);
}

// Share the current quote (share menu on phones, otherwise copy to the clipboard)
async function shareQuote() {
  const quote = quotes[lastIndex];
  const text = "\u201C" + quote.text + "\u201D - " + quote.author;

  if (navigator.share) {
    try {
      await navigator.share({ text: text });
    } catch (error) {
      // The user closed the share menu, so there is nothing to do
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showStatus("Quote copied to the clipboard.");
  } catch (error) {
    showStatus("Could not copy. Please copy the quote by hand.");
  }
}

// ---------- Events ----------
newQuoteButton.addEventListener("click", showQuote);
shareButton.addEventListener("click", shareQuote);

// Show the first quote when the page loads
showQuote();