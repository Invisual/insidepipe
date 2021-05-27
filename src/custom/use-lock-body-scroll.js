import { useLayoutEffect } from 'react';

export default function useLockBodyScroll(lock) {
  useLayoutEffect(() => {
    const originalStyleP = window.getComputedStyle(document.body).position;
    const originalStyleO = window.getComputedStyle(document.body).overflowY;
    let originalStyleS = window.pageYOffset;
    if(lock===true){
      // Get original value of body overflow
      // Prevent scrolling on mount
        originalStyleS = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
        document.body.style.top = ("-" + originalStyleS + "px");
        // Re-enable scrolling when component unmounts
      }
      else{
        document.body.style.overflowY = originalStyleO;
        document.body.style.position = originalStyleP;
        document.body.style.top = ("unset");
      }
      return () => {
        document.body.style.overflowY = originalStyleO;
        document.body.style.position = originalStyleP;
        document.body.style.top = ("unset");
        lock === true && window.scrollBy(0, originalStyleS);
    }
  }, [lock]); // Empty array ensures effect is only run on mount and unmount
}