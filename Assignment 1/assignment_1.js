var arr = new Array();
arr.push("hello world.");
arr.push("hello world 2.");
arr.push("hello world 3.");
arr.push("assignment");
arr.push("this is a demo statement.");
arr.push("this is first line.this is second line.");
// Display Array
arr.forEach(display);
function display(line, num) {
    console.log("Line number " + num + " : " + line);
}
// Coversion to Statement case
console.log("\nStatement Case representation of the string :");
arr.forEach(toStatementCase);
function toStatementCase(line, num) {
    var sentence = line.split(".");
    sentence.forEach(makeUpperCase);
}
function makeUpperCase(sentence) {
    if (sentence.length == 0)
        return;
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
    console.log(sentence);
}
// Total words in the string
var totalWords = 0;
arr.forEach(wordCount);
function wordCount(line) {
    totalWords += line.split(" ").length;
}
console.log("\nTotal number of words : " + totalWords);
//Strings having character "a"
console.log("\nWords that contain character 'a' : ");
arr.forEach(containsCharacter);
function containsCharacter(line) {
    var words = line.split(" ");
    words.forEach(function (word) {
        if (word.toLowerCase().indexOf("a") > -1)
            console.log(word);
    });
}
// Count matching words
var count = {};
var words = new Array();
arr.forEach(function (line) {
    line.split(".").forEach(function (sentence) {
        sentence.split(" ").forEach(function (word) {
            if (word.length < 1)
                return;
            words.push(word);
        });
    });
});
words.forEach(function (item) {
    if (!count[item])
        count[item] = 0;
    count[item] += 1;
});
console.log("\nMatching words :");
console.log(count);
