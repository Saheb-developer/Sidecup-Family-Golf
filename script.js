const cursor = document.querySelector('#cursor');
const cursorBlur = document.querySelector('#cursor-blur');
const content = document.querySelector("#page5 div h2");
const atag = document.querySelectorAll("a")
function cursormoving() {
    let cursorBoundingVal = cursor.getBoundingClientRect()
    let cursorBlurBoundingVal = cursorBlur.getBoundingClientRect()
    document.addEventListener('mousemove', (dets) => {
        cursor.style.top = dets.clientY - (cursorBoundingVal.height / 2) + 'px'
        cursor.style.left = dets.clientX - (cursorBoundingVal.width / 2) + 'px'
        cursorBlur.style.top = dets.clientY - (cursorBlurBoundingVal.height / 2) + 'px'
        cursorBlur.style.left = dets.clientX - (cursorBlurBoundingVal.width / 2) + 'px'
    })
}
function page1or2anim() {
    gsap.to('nav', {
        backgroundColor: 'black',
        height: 100 +'px',
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top -10%",
            end: "top 5%",
            scrub: 1,
        },
    })

    gsap.to('main', {
        backgroundColor: 'black',
        ease: "power1.out",
        duration: 3,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 100%",
            end: "top 0%",
            scrub: 2,
        },
    })
}
function contentchange(){
    setInterval(() => {
        content.textContent = `Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️`
    }, 3000);
    setInterval(() => {
        content.textContent = `I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!`
    }, 6000);
    setInterval(() => {
        content.textContent = `Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.`
    }, 9000);
    setInterval(() => {
        content.textContent = `Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.`
    }, 12000);
    setInterval(() => {
        content.textContent = `Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!`
    }, 15000);
}
function hoverscaleanim(){
    atag.forEach(elem => {
        elem.addEventListener("mouseenter",(dets)=>{
            console.log(dets)
            gsap.to(cursor,{
                scale: 5,
                backgroundColor:"transparent",
                border:"0.1px solid #fff"
            })
        })
        elem.addEventListener("mouseleave",(dets)=>{
            console.log(elem)
            gsap.to(cursor,{
                scale:1,
                backgroundColor:"#95C11E",
                border:"0.1px solid #95C11E"
            })
        })
    });
}


hoverscaleanim()
contentchange()
page1or2anim();
cursormoving();