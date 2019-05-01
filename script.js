const scrollElement = document.createElement('div');
document.querySelector('body').appendChild(scrollElement);
let grow = true;

let size = 1;
scrollElement.style.height = size + 'px';



changeHstyle = () => {
    if (size >= window.innerWidth / 1) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }


    if (grow) {
        size += 5
        scrollElement.style.height = size + "px";
        scrollElement.style.backgroundColor = "red";

    }

    else {
        size -= 5
        scrollElement.style.height = size + "px";
        scrollElement.style.backgroundColor = "green";

    }

}

window.addEventListener('scroll', changeHstyle);