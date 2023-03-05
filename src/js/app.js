"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
import { ScrollSmoother } from "gsap/ScrollSmoother.js";
gsap.registerPlugin(ScrollSmoother);

window.addEventListener("load", windowLoad);
function windowLoad() {
    if (!ScrollTrigger.isTouch) {
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.4,
            effects: true,
        })
        gsap.fromTo('.welcome__container', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: { 
                trigger: '.welcome__container', 
                start: 'center', 
                end: 'bottom',
                scrub: true, 
            }
        });
        const itemsLeft = document.querySelector('.main__column_1').querySelectorAll('.main__item');
        itemsLeft.forEach(item => {
            gsap.fromTo(item, { x:-50, opacity: 0 }, {
                opacity: 1,
                x: 0,
                scrollTrigger: { 
                    trigger: item,
                    end: 'center',
                    scrub: true, 
                }
            });
        });
        const itemsRight = document.querySelector('.main__column_2').querySelectorAll('.main__item');
        itemsRight.forEach(item => {
            gsap.fromTo(item, { x:50, opacity: 0 }, {
                opacity: 1,
                x: 0,
                scrollTrigger: { 
                    trigger: item,
                    end: 'center',
                    scrub: true, 
                }
            });
        });
    }
}
