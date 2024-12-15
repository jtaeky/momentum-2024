const quotes = [
    {
        quote: "In any given moment we have two options: to step forward into growth, or step back into safety.",
        author: "Abraham Maslow",
    },
    {
        quote: "True life is lived when tiny changes occur.",
        author: "Leo Tolstoy",
    },
    {
        quote: "All change is hard at first, messy in the middle and gorgeous at the end.",
        author: "Robin Sharma",
    },
    {
        quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        author: "James Baldwin",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author: "Albert Einstein",
    },
    {
        quote: "You and I possess within ourselves at every moment of our lives, under all circumstances, the power to transform the quality of our lives.",
        author: "Werner Erhard",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
    },
    {
        quote: "I think it is possible for ordinary people to choose to be extraordinary.",
        author: "Elon Musk",
    },
    {
        quote: "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.",
        author: "Douglas MacArthur",
    }
]; 

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;