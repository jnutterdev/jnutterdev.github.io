// const aboutMe = document.getElementById("about-button");

// aboutMe.addEventListener("click", () => {
//     const e = document.getElementsByClassName('hidden-about')[0];

//     if (e.style.display === "none") {
//         e.style.display = "block";
//     } else {
//         e.style.display = "none";
//     }
// });

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=400,height=400,left=-400,top=-400`;
let button = document.getElementById('about-button');

button.onclick = () => {
    window.open('about.html', 'about', params);
};