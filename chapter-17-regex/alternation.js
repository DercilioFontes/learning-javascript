
const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>';

const matches = html.match(/area|a|link|script|source/ig);
console.log(matches);
// [ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script', 'script' ]

const matches2 = html.match(/<area|<a|<link|<script|<source/ig);
console.log(matches2);
// [ '<a', '<script' ]


const html2 = '<br> [!CDATA[[<br>]]';

const matches3 = html2.match(/<br>/ig);
console.log(matches3);
// [ '<br>', '<br>' ]