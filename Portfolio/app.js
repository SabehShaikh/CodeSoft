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


var sidemenu = document.getElementById('side-menu');

const openMenu = () => {
    sidemenu.style.right = '0';
}

const closeMenu = () => {
    sidemenu.style.right = '-200px';
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxgCY3uq_AAZPnMtZmonhz1k9Qx5LKKtaU6J4NgduvZC5t4n8bLCqsxWjkYHPq_cjlV/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            Swal.fire('Message sent succesfully!')
            // setTimeout(function () {
            //     msg.innerHTML = ""
            // }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


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
