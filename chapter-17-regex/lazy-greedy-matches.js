
const input = "Regex pros know the difference between\n" + "<i>greedy</i> and <i>lazy</i> matching.";

const inputChangedGreddy = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log(inputChangedGreddy);
/*
Regex pros know the difference between
<strong>greedy</i> and <i>lazy</strong> matching.
*/

const inputChangedLazy = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(inputChangedLazy);
/*
Regex pros know the difference between
<strong>greedy</strong> and <strong>lazy</strong> matching.
*/


/*
All of the repetition metacharacters—*, +, ?, {n}, {n,} and {n,m}—can be followed with a question mark to make them lazy (though in practice, I’ve only ever used it for * and +).
*/