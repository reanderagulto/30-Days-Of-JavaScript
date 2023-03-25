const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')
const input = document.querySelector('input')
const p = document.querySelector('p')

let bmi
// button.addEventListener('click', e => {
//     console.log('Clicked');
// })

// button.addEventListener('dblclick', e => {
//     console.log('Double Clicked');
// })

// button.addEventListener('mouseenter', e => {
//     console.log('Mouse Entered in the Button');
// })

// button.addEventListener('mouseleave', e => {
//     console.log("Mouse Leaved the button");
// })

// button.addEventListener('mousemove', e => {
//     console.log('Mouse Moved');
// })

// button.addEventListener('mouseover', e => {
//     console.log('Mouse Over');
// })

// button.addEventListener('click', e => {
//     bmi = mass.value / height.value ** 2
//     alert(`Your BMI is ${bmi.toFixed(2)}`)
//     console.log(bmi);
// })

// input.addEventListener('input', e => {
//     p.textContent = e.target.value
// })

// input.addEventListener('blur', (e) => {
//     p.textContent = 'Field is Required'
//     p.style.color = 'red'
// })


document.body.addEventListener('keypress', e => {
    alert(e.DOM_KEY_LOCATION_STANDARD)
})