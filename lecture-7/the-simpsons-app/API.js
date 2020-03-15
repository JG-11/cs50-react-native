export const getQuote = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const result = await response.json();
    return result;
}