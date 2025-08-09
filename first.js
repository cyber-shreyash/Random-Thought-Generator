
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.  — FDR",
    "Life is 10% what happens to us and 90% how we react to it.    — Charles Swindoll",
    "Do not wait for leaders; do it alone, person to person.     — Mother Teresa",
    "Your time is limited, so don't waste it living someone else's life.     — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.    — Winston Churchill",
    "Believe you can and you're halfway there.    — Theodore Roosevelt",
    "The best way to predict the future is to create it.    — Peter Drucker",
    "You miss 100% of the shots you don't take.    — Wayne Gretzky",
    "The only person you are destined to become is the person you decide to be.    — Ralph Waldo Emerson",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.    — Vince Lombardi",
    "Keep your face always toward the sunshine—and shadows will fall behind you.    — Walt Whitman",
    "It is never too late to be what you might have been.     — George Eliot",
    "The only way to do great work is to love what you do.       — Steve Jobs",
    "Start where you are. Use what you have. Do what you can.    — Arthur Ashe",
    "Do one thing every day that scares you. — Eleanor Roosevelt",
    "I have not failed. I've just found 10,000 ways that won't work.    — Thomas Edison",
    "The two most important days in your life are the day you are born and the day you find out why.    — Mark Twain",
    "Peace begins with a smile.    — Mother Teresa",
    "With the new day comes new strength and new thoughts.   — Eleanor Roosevelt",
    "Be yourself; everyone else is already taken.     — Oscar Wilde",
    "The only journey is the one within.     — Rainer Maria Rilke",
    "The only true wisdom is in knowing you know nothing.    — Socrates",
    "The only thing we have to fear is fear itself.    — Franklin D. Roosevelt",
    "The only way to achieve the impossible is to believe it is possible.     — Charles Kingsleigh",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.    — Jordan Belfort"
];

document.getElementById("generate").addEventListener("click",()=>{
    let index=Math.floor(Math.random()*quotes.length);
    document.getElementById("mid").textContent=quotes[index];
})
