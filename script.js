// loading section
function loader() {
let loading = document.querySelector("#loading")
let counter = document.querySelector("#counter")
let main = document.querySelector("#main")

let i = 0;
let interval = setInterval(() => {
    i++;
    counter.innerText = i
    if (i === 100) {
       clearInterval(interval) }

   setTimeout(() => {
    loading.style.display = "none";
    main.style.display = "block";
   }, 6100);    

}, 60);}

loader();

// video section 
function videoplayer() {
    let videoCon = document.querySelector('#video-con')
let video = document.querySelector('#myvideo')
let playbtn = document.querySelector('#playbtn')

playbtn.addEventListener('click',function (e) {
    e.stopPropagation();
    video.currentTime = 0;
    video.play();
    video.muted = false;
    playbtn.style.display = 'none'
})
videoCon.addEventListener('click',function () {
    if (!video.paused) {
    video.currentTime = 0;
    video.pause();
    playbtn.style.display = 'block' }
})}

videoplayer();

// mouseenter section
function menter() {
    let page = document.querySelectorAll('.page')
    page.forEach(function(e) {
        e.addEventListener("mouseenter",function(){
            let h1 = e.querySelector('h1')
            let h2 = e.querySelector('h2')
            h1.style.color = 'red'
            h2.style.color = 'red'
        })

         e.addEventListener("mouseleave",function(){
            let h1 = e.querySelector('h1')
            let h2 = e.querySelector('h2')
            h1.style.color = ''
            h2.style.color = ''
        })
    })}

menter();

