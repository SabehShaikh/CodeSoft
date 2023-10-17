var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

const opentab = (tabname) => {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}



// let tablinks = document.getElementsByClassName('tab-links');
// let tabcontents = document.getElementsByClassName('tab-contents');

// const opentab = (tabname) => {
//     for (let i = 0; i < tablinks.length; i++) {
//         if (tablinks[i].innerText === tabname) {
//             tablinks[i].classList.add('active-link');
//         } else {
//             tablinks[i].classList.remove('active-link');
//         }
//     }
//     for (let i = 0; i < tabcontents.length; i++) {
//         if (tabcontents[i].id === tabname) {
//             tabcontents[i].classList.add('active-tab');
//         } else {
//             tabcontents[i].classList.remove('active-tab');
//         }
//     }
// }
