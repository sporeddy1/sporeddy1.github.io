const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" }
};

const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

for (let key in works) {
    let link = document.createElement("a");
    link.textContent = works[key].title;
    link.href = "#";
    link.onclick = function () {
        contentFrame.src = works[key].url;
        return false;
    };
    navDiv.appendChild(link);
}