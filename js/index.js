// Your code goes here
const navLinks = document.querySelectorAll(`.nav .nav-link`);
const bodyImg = document.querySelectorAll('img');
const button = document.querySelectorAll('.btn')
const header = document.querySelectorAll('.text-content h2, .destination h4, h2, h1')
const container = document.querySelector('.container')
const contentSect = document.querySelectorAll('.content-section')
const form = document.querySelectorAll('form input')
const formBtn = document.querySelector('form .btn')

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
    console.log(window.innerWidth)

    if (window.innerWidth === 800) {
        alert('Tablet View!')
    } if (window.innerWidth === 500) {
        alert('Mobile View!')
    }
});

window.addEventListener('scroll', function () {
    if (pageYOffset > 100) {
        document.querySelector('.intro h2').textContent = "You're Scrolling!"
    } if (pageYOffset > 600) {
        document.querySelector('.inverse-content h2').textContent = "Keep going!"
    } if (pageYOffset  > 900) {
        document.querySelector('.content-destination h2').textContent = "Almost there..."
} if (pageYOffset === 1240) {
    document.querySelector('footer p').textContent = "You made it!"
}
});

bodyImg.forEach(function (element) {

    element.addEventListener('click', function (event) {
        event.stopPropagation();
        alert('What a beautiful picture!')
    })

    element.addEventListener('dragstart', function (event) {
        dragged = event.target;
        event.target.style.opacity = .5;
    })

    element.addEventListener('dragend', event => {
        event.target.style.opacity = 1;
    })


    element.addEventListener('mouseover', function (event) {
        event.target.style.border = '4px solid black';
    })

    element.addEventListener('mouseout', function (event) {
        event.target.style.border = 'none';
    })
});
// bubbling event
contentSect.forEach(function (element) {
    element.addEventListener('click', function (event) {
        alert("If you're reading this I am bubbling!")
    })
})


form.forEach(function (element) {
    element.addEventListener('keydown', function (event) {
        console.log(event)
    })

    element.addEventListener('select', function (event) {
        event.target.style.backgroundColor = 'lightblue'
    })
})

formBtn.addEventListener('click', function (event) {
    event.preventDefault();
})


