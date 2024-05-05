

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.split')
const fadeIns = document.querySelectorAll('.fade-in')


document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero')
    const heroSplitType = document.querySelector('.hero-split')
    const heroFadeIn = document.querySelector('.hero-fadein')
    const heroImage = document.querySelector('.hero_image-mockups')
    const footer = document.querySelector('footer')

    gsap.from(hero, {
        opacity: 0,
        scale: 3,
        duration: 1,
        ease: 'power1.in'
    })

    const heroSplit = new SplitType(heroSplitType, { type: 'lines' });

    gsap.from(heroSplit.lines, {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.5,
        delay: 2
    })

    const heroFade = new SplitType(heroFadeIn, {type: 'chars', lineThreshold: 0.5 })

    gsap.from(heroFade.chars, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.01,
        ease: 'power2.out',
        delay: 2.5
    })

    gsap.from(heroImage, {
        opacity: 0,
        scale:1.2,
        y:50,
        delay: 1
    })


    
});


splitTypes.forEach((word, i) => {

    const text = new SplitType(word, { type: 'words' })

    gsap.from(text.words, {
        scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: 0.2,
        y: 200,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.01
    })
})

fadeIns.forEach((char, i) => {
    const letter = new SplitType(char, {type: 'chars', lineThreshold: 0.5 })

    gsap.from(letter.chars, {
        scrollTrigger : {
            trigger: char,
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
        markers: false,
    })
})

const sections = document.querySelectorAll('.section')

sections.forEach((section, i) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: 0,
        duration: 0.1,
        stagger: 0.3,
        markers: false,
    })
    
})




const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)