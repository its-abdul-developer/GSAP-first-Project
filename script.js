let tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    duration: 0.8,
    delay: 0.1,
    opacity: 0,
    stagger: 0.5,
})

tl.from("#section1 h1", {
    x: -500,
    duration:0.8,
    delay: 0.1,
    opacity: 0,
    stagger: 0.5,
})

tl.from("img", {
    x: 100,
    rotate: 45,
    duration:0.8,
    delay: 0.1,
    opacity: 0,
    stagger: 0.5,
})

tl.from("footer h4",{
    y: 500,
    opacity: 0,
    duration: 0.8,
    stagger:0.5,
})