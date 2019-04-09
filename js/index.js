// Your code goes here
const navLinks = document.querySelectorAll(`.nav .nav-link`);
const bodyImg = document.querySelectorAll('img');
const button = document.querySelectorAll('.btn')
const header = document.querySelectorAll('.text-content h2, .destination h4, h2, h1')
const container = document.querySelectorAll('.container')
const contentSect = document.querySelectorAll('.content-section')

navLinks.forEach(function (element) {

    element.addEventListener('click', function (event) {
        event.preventDefault();
    })
});

button.forEach(function (element) {
    element.addEventListener('dblclick', function (event) {
        event.target.style.backgroundColor = 'dodgerblue'
        alert(`X Coordinate: ${event.clientX}. Y Coordinate: ${event.clientY}`)
    })

    element.addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = '#17a2b8'
    })
});

header.forEach(function (element) {
    element.addEventListener('mouseover', function (event) {
        event.target.style.textDecoration = 'underline'
    })
    element.addEventListener('mouseout', function (event) {
        event.target.style.textDecoration = 'none'
    })
});

window.addEventListener('resize', function () {
    alert('window resized!')
});

window.addEventListener('scroll', function () {

});

bodyImg.forEach(function (element) {

    element.addEventListener('click', function (event) {
        event.stopPropagation();
        alert('What a beautiful picture!')
    })

    element.addEventListener('mouseover', function (event) {
        event.target.style.border = '4px solid black';
    })

    element.addEventListener('mouseout', function (event) {
        event.target.style.border = 'none';
    })
});

contentSect.forEach(function (element) {
    element.addEventListener('click', function (event) {
        alert("If you're reading this I am bubbling!")
    })
})