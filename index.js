// let box = document.querySelector(".box");
// let tween = new TimelineMax();

// tween.fromTo(box, 5, {x: 0}, {x:400});

let img_box = document.querySelector(".img-container");
let slider = document.querySelector(".slider");

let t = new TimelineMax();

t.fromTo(img_box, 1, {height: "0"}, {height: "600px"})
// .fromTo(img_box, 1, {width: "0"}, {width: "80vw"}, "-=1.5")
.fromTo(slider, 1, {x: "-100%"}, {x:"0%"});
