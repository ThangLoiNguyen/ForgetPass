//---Required
document.getElementById('submit').addEventListener('click', function (event) {
    const mail = document.getElementById('email').value;
    if (mail === '') {
        alert('Enter your Email!');
    }

    else {
        window.location.href = 'https://thangloinguyen.github.io/BNI---CMS/';
    }
})