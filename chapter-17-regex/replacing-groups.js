
let html = '<a class="nope" href="/yep">Yep</a>';

html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html);
// <a href="/yep">Yep</a>

let html2 = '<a class="yep" href="/yep" id="nope">Yep</a>';

html2 = html2.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log(html2);
// <a href="/yep" class="yep">Yep</a>

/*
In addition to $1, $2, and so on, there are also $‘ (everything before the match), $& (the match itself ), and $’ (everything after the match). If you want to use a literal dol‐ lar sign, use $$:
*/

const input = "One two three";

console.log(input.replace(/two/, '($`)'));
// One (One ) three

console.log(input.replace(/\w+/g, '($&)'));
// (One) (two) (three)

console.log(input.replace(/two/, "($')"));
// One ( three) three

console.log(input.replace(/two/, "($$)"));
// One ($) three