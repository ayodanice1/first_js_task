
const myName = "Ayodele Lawal";
const myCourses = ["HTML-CSS-JS", "Node.JS", "Python"];

console.log(myName, myCourses);

if (myCourses.length % 2 == 1) {
	for (let i= 1; i <= 200; i++) {
		if (i % 2 == 1) { console.log(i); }
	}
} else {
	for (let i= 1; i <= 200; i++) {
		if (i % 2 == 0) { console.log(i); }
	}
};