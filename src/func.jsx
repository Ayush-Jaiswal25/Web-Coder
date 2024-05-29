import Lenis from 'lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export function hero(){
  window.onload = function(){
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update();
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    
    const SlideUp_Title = document.getElementById('SlideUp-Title');
    gsap.to(SlideUp_Title, {
      delay: 1,
      duration: 2,
      text: "Converting Ideas into Website",
      ease: "none",
    });
    gsap.to(SlideUp_Title, {
      delay: 4,
      duration: 2,
      text: "And",
      ease: "none",
    });
    gsap.to(SlideUp_Title, {
      delay: 7,
      duration: 2,
      text: "Website into Reality",
      ease: "none"
    });
    
  }
}




