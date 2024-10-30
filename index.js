let cursor = document.querySelector('.cursor');


document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor",{
        x : e.x,
        y : e.clientY,
        duration:1,
        filter : "blur(10px)"
    })
})