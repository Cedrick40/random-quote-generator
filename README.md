# Random Quote Generator

An app that shows a random quote and its author every time the user clicks a button. The colors of the card change to match the mood of each quote. Built for Task 8 (Random Quote Generator) of my Web Development internship.

**Live page:** https://cedrick40.github.io/random-quote-generator/

## About the project

The page shows one quote at a time, with its author and a small label for its mood (Motivation, Courage, Wisdom, Calm, or Hope). Each mood has its own colors, so the card, the label, the author, and the buttons change color depending on how the quote sounds. A Share button lets the user share or copy the quote.

## Objective

To practice arrays, random numbers, event handling, and DOM manipulation.

## Tools used

- HTML5
- CSS3
- JavaScript
- VS Code
- Git and GitHub (free)

## Features

- 15 quotes stored in JavaScript as an array of objects (`text`, `author`, `mood`)
- A **New quote** button that picks a random quote with `Math.random`
- The same quote is never shown twice in a row
- A different color theme for each mood:

| Mood | Color |
| --- | --- |
| Motivation | Blue |
| Courage | Red |
| Wisdom | Purple |
| Calm | Green |
| Hope | Amber |

- A **Share** button: it opens the share menu on devices that support it, and otherwise copies the quote and author to the clipboard, with a short confirmation message
- Smooth color transitions between quotes
- A first quote is shown when the page loads
- Responsive layout for desktop and mobile

## How it works

1. **Data:** the quotes are stored in an array of objects, and a `moods` object holds the label and two colors (`accent` and `tint`) for each mood.
2. **Random choice:** `getRandomIndex()` uses `Math.floor(Math.random() * quotes.length)` to pick an index. A `do...while` loop repeats the choice until the index is different from the last one, which prevents an immediate duplicate.
3. **Showing a quote:** `showQuote()` writes the text, author, and mood label to the page with `textContent` (DOM manipulation).
4. **Mood colors:** `showQuote()` also sets two CSS custom properties, `--accent` and `--tint`, on the card with `style.setProperty`. The CSS uses these variables with `var()`, and `transition` makes the change smooth.
5. **Sharing:** `shareQuote()` uses `navigator.share` when available and falls back to `navigator.clipboard.writeText`. It uses `async` / `await` with `try` / `catch` to handle failures and cancelled shares.
6. **Events:** `addEventListener("click", ...)` connects the two buttons to their functions.

## Styling

A soft blue-white page with a card that takes on the colors of the current mood: a colored top edge, a tinted background, a rounded mood label, a large opening quotation mark, and a colored author line and buttons. The quote is set in a serif font for a classic feel. A media query makes the text smaller and the buttons fill the width on small screens.

## Project structure

```
random-quote-generator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Outcome

A working random quote generator that avoids repeats, changes its colors to match each quote, supports sharing, and works on desktop and mobile. This task taught me how to store data as objects in an array, generate random numbers, prevent duplicates, and update the page and its styles from JavaScript.

## Author

Cedrick Niyibikora

- GitHub: https://github.com/Cedrick40
- LinkedIn: https://www.linkedin.com/in/cedrick10