<script>
  import MediaQuery from 'svelte-media-queries';

  let matches;
</script>

<MediaQuery query ='(max-width: 480px)' bind:matches/>

{#if !matches}
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 713 572.6">
    <defs>
      <linearGradient id="linear-gradient" x1="106.99" y1="-1099.75" x2="629.46" y2="-1704.72" gradientTransform="matrix(1, 0, 0, -1, 0, -1078)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#c6ccb8"/>
        <stop offset="1" stop-color="#878a79"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="-22.86" y1="-988.95" x2="575.19" y2="-1616.29" gradientTransform="matrix(1, 0, 0, -1, 0, -1078)" gradientUnits="userSpaceOnUse">
        <stop offset="0.01" stop-color="#5c7480"/>
        <stop offset="0.09" stop-color="#8cb0c2"/>
        <stop offset="0.5" stop-color="#5c7480"/>
        <stop offset="1" stop-color="#2d3d45"/>
      </linearGradient>
      <radialGradient id="radial-gradient" cx="357.19" cy="527.63" r="304.35" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#8d99a1"/>
        <stop offset="1" stop-color="#50686e"/>
      </radialGradient>
      <linearGradient id="linear-gradient-3" x1="334.62" y1="-1113.8" x2="334.62" y2="-1578.11" gradientTransform="matrix(1, 0, 0, -1, 0, -1078)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#50696e"/>
        <stop offset="0.33" stop-color="#e6e9ec"/>
        <stop offset="1" stop-color="#4e696f"/>
      </linearGradient>
      <radialGradient id="radial-gradient-2" cx="621.69" cy="-1166.12" fx="641.289286206375" r="79.41" gradientTransform="matrix(0, -1, -8.36, 0.03, -9122.37, 745.56)" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop offset="0.93" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="radial-gradient-3" cx="59.23" cy="-1159.96" fx="78.8277477448378" r="79.41" gradientTransform="matrix(0, -1, -8.36, 0.03, -9635.46, 176.76)" xlink:href="#radial-gradient-2"/>
      <radialGradient id="radial-gradient-4" cx="337" cy="-1106.8" r="303.28" gradientTransform="matrix(1, 0, 0, -1, 0, -1078)" xlink:href="#radial-gradient"/>
      <linearGradient id="linear-gradient-4" x1="626.8" y1="-1118.22" x2="626.8" y2="-1580.24" gradientTransform="matrix(1, 0, 0, -1, 0, -1078)" xlink:href="#radial-gradient"/>
      <linearGradient id="linear-gradient-5" x1="42.54" y1="-1124.16" x2="43.87" y2="-1568.16" gradientTransform="matrix(1, 0, 0, -1, 0, -1078)" xlink:href="#radial-gradient"/>
      <radialGradient id="radial-gradient-5" cx="334.29" cy="-1202.18" r="460.17" gradientTransform="matrix(1, 0, 0, -0.97, 0, -1101.24)" gradientUnits="userSpaceOnUse">
        <stop offset="0.01" stop-color="#7895a7"/>
        <stop offset="0.5" stop-color="#587789"/>
        <stop offset="0.69" stop-color="#446577"/>
        <stop offset="1" stop-color="#1a3f52"/>
      </radialGradient>
      <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur"></feGaussianBlur>
        <feOffset dy="22" dx="22"></feOffset>
        <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>
        
        <feFlood flood-color="#000" flood-opacity="0.75"></feFlood>
        <feComposite in2="shadowDiff" operator="in"></feComposite>
        <feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite>
            
            
        <feGaussianBlur in="firstfilter" stdDeviation="20" result="blur2"></feGaussianBlur>
        <feOffset dy="-22" dx="-22"></feOffset>
        <feComposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>
        
        <feFlood flood-color="#000" flood-opacity="0.75"></feFlood>
        <feComposite in2="shadowDiff" operator="in"></feComposite>
        <feComposite in2="firstfilter" operator="over"></feComposite>
      </filter>
      <filter id="yellow-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
        <feFlood result="flood" flood-color="#fff961" flood-opacity="1"></feFlood>
        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
        <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
        <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
        <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <filter id='grime' x='0%' y='0%' width='100%' height="100%">
        <feTurbulence type="fractalNoise" baseFrequency='0.85' result='noise' numOctaves="5" />
        <feDiffuseLighting in='noise' lighting-color='white' surfaceScale='2' result='paper'>
          <feDistantLight azimuth='65' elevation='90' />
        </feDiffuseLighting>
        <feComposite in="paper" result="mask" in2="SourceGraphic" operator="in"></feComposite>
        <feBlend in="SourceGraphic" in2="mask" mode="multiply"/>
        <!-- <feMerge>
            <feMergeNode in="paper"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge> -->
      </filter>
    </defs>
    <g id="outer-frame" filter="url(#grime)">
      <path d="M660.4,571l-651.7.6a8,8,0,0,1-8-8L0,8.7a8,8,0,0,1,8-8L662,.4c4.4,0,7.7,4.2,7.7,8.6l-.47,554C669.17,567.4,664.8,571,660.4,571Z" transform="translate(22 -0.4)"/>
      <path d="M10.7,2H658.85a8,8,0,0,1,8,8L665.7,561a8,8,0,0,1-8,8H10.7a8,8,0,0,1-8-8V10A8,8,0,0,1,10.7,2Z" transform="translate(22 -0.4)" fill="url(#linear-gradient)"/>
      <path d="M10.2,5h648a4,4,0,0,1,4,4V562a4,4,0,0,1-4,4H10.2a4,4,0,0,1-4-4V9A4,4,0,0,1,10.2,5Z" transform="translate(22 -0.4)" fill="#120702"/>
      <path d="M11.7,7h645a4,4,0,0,1,4,4V560a4,4,0,0,1-4,4H11.7a4,4,0,0,1-4-4V11A4,4,0,0,1,11.7,7Z" transform="translate(22 -0.4)" fill="url(#linear-gradient-2)"/>
    </g>
      <!-- <g opacity="0.5" style="mix-blend-mode: multiply">
        <image width="713" height="93" transform="translate(0 479.6)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAskAAABdCAYAAABXXfuRAAAACXBIWXMAAAsSAAALEgHS3X78AAAFgklEQVR4Xu3dW28bRRjH4f+mzYEegCIElZD4/l+NC6hQz03i5WJmupu3J67wODyPtHJiO5Xlq19H784s67oGAADYnH3rDQAA8H8jkgEAoBDJAABQiGQAAChEMgAAFCIZAAAKkQwAAIVIBgCAQiQDAEAhkgEAoBDJAABQiGQAAChEMgAAFCIZAAAKkQwAAIVIBgCAQiQDAEAhkgEAoBDJAABQiGQAAChEMgAAFCIZAAAKkQwAAIVIBgCAQiQDAEAhkgEAoBDJAABQiGQAAChEMgAAFCIZAACKh996wyyWZVnGj199IwAAx7Ymybqu67feOKtl9s/e43hcZ7vr41s+93cAAPxn9kG5JjnsrvUUY3nqSO6BfJbkQZLz3fWgPy+QAQDmsI/jmyTX/bpJcljX9fCVv53O7OMWS9pnvEzyuF/f9d+FMgDAHNZ+3aaF8bskr5O8SfI2yfWyLDmlUJ42kvsq8oMkF0meJvmpXz+mxfJFf10kAwAc3yFbIL9M8iLJX0n+Tgvm98uynMzoxbSRnLZK/DBt5fiHJM+T/Jbkl/77VX9dJAMAHNcYtbhOC+IXSf5IW9Rc+mu32VabpzdlJO9u1jtP8ijJsyS/Jvk9LZSfpcXziGShDABwHGNl+JDkQ1ok/5nWcEvaTPKHtIC+XZblcAqryVNGctoXOm7We5S2cvxz2iry83wayQAAHM9YSb5Jm0O+6s+P2eRXabPJH7KtKk9t9ki+SIvhJ0m+T5tNfpwWzuPmPZEMAHBc+xv3zvrj27R55Bf9etmfuzmF1eTpInk3ajEi+Sotiq/SVpbrXAsAAMc3QjnZ7it7mrbQ+X3aQufrnMhq8nSR3I2b9kYkX2b7rDdpS/c3MY8MADCDdfd4m63TLtMmAp72x5dpHTf9bPKMkTwOEBmRfJltBfk27YtdY49kAIAZjdnk27TJgKu0VeQnadMBb/rrh5lDeapI3p2wtw/ksR/ymrY8/zbt7shxNLVQBgCYwwje27RuW7ONXoyD4V71125yd0RjKlNFcrc/hnqsIo8B8PfZ5pXFMQDAfEb4jqOpz9Ka7lG2DRje9dcOSz9h5Av/1tHMFsl1Jfk8d2eR3/ZHoxYAAPPaHy6yH7t4lLaqfJm2+DntavI0kbzb1WJE8gjkMYv8vr/V3sgAAPMbN/FdZxu7uEyL5KtMvpo8TSR3Y9TiYX88S/tSxzngVpEBAE7H2Ortuv9eN2Z42F8/fPavj2imSN6vJI8r+fIsslAGAJjX/rjqm34l28TARf95yp0uZork5G4kJ9sZ4O+yneAijgEATsN+t4sxn7xkC+Xz/vwI6GlMEcm7eeT94SBjzGLMIo9VZJEMAHA69kdWj9P2xoTAfsT2kIlu4JsikrsayOOLtKMFAMBpq9vCrfl0zHaZ6Qa+mSI52SJ4bBnyPu1LHP/DAADgNI1t4UYoj5v16jTBFGaL5Locn2ybUE/35QEA8K+NztvfyDfViMXejJE8BrvH/sh2tAAAOH3r7vE2d0N5OjNF8vifxX7T6bGKnAhkAIBTt98Wbqwoj32Sp1pRnjGSx/GEY8u3RCADANwXNZTHJZKrdV3Xtgvcx+X2ccdjIpABAO6b/ejFCOR1lp0tkmSZ6LPs90vOZx4BALgf1vo4UyAnk0Xy0GMZAIB7brY4HqaMZAAAOCYHdAAAQCGSAQCgEMkAAFCIZAAAKEQyAAAUIhkAAAqRDAAAhUgGAIBCJAMAQCGSAQCgEMkAAFCIZAAAKEQyAAAUIhkAAAqRDAAAhUgGAIBCJAMAQCGSAQCgEMkAAFCIZAAAKEQyAAAUIhkAAAqRDAAAhUgGAIBCJAMAQCGSAQCgEMkAAFCIZAAAKEQyAAAUIhkAAAqRDAAAhUgGAIDiH8MbXhqZYBziAAAAAElFTkSuQmCC"/>
      </g> -->
    <g id="inner-frame" filter="url(#grime)">
      <path d="M25,26.9,21,515.3a4,4,0,0,0,4,4h615.7a4,4,0,0,0,4-4V26.9a4,4,0,0,0-4-4H29A4,4,0,0,0,25,26.9Z" transform="translate(22 -0.4)" fill="#141410"/>
      <path id="beige-strip" d="M26.78,29.1l-3.9,484a4,4,0,0,0,4,4h612a4,4,0,0,0,4-4V29.1a4,4,0,0,0-4-4H30.78A4,4,0,0,0,26.78,29.1Z" transform="translate(22 -0.4)" fill="#eae5cf"/>
      <polygon id="screenconsistency" points="659.78 511.4 51.77 510.23 54.22 29.4 659.78 29.4 659.78 511.4" fill="url(#radial-gradient)"/>
      <path id="edge-shines" d="M55.88,57.5s264.57-47.7,561.87,2c0,0,25.7,143.2-3.1,430.5,0,0-326.07,28.8-561.77-6C52.88,484.1,24.08,221.6,55.88,57.5Z" transform="translate(22 -0.4)" fill="url(#linear-gradient-3)"/>
      <path id="corner-shading-2" data-name="shading" d="M55.88,57.5s264.57-47.7,561.87,2c0,0,25.7,143.2-3.1,430.5,0,0-326.07,28.8-561.77-6C52.88,484.1,24.08,221.6,55.88,57.5Z" transform="translate(22 -0.4)" opacity="0.3" fill="url(#radial-gradient-2)"/>
      <path id="corner-shading-3" data-name="shading" d="M55.88,57.5s264.57-47.7,561.87,2c0,0,25.7,143.2-3.1,430.5,0,0-326.07,28.8-561.77-6C52.88,484.1,24.08,221.6,55.88,57.5Z" transform="translate(22 -0.4)" opacity="0.3" fill="url(#radial-gradient-3)"/>
    </g>
    <g id="inset-sides" filter="url(#grime)">
      <path d="M57.05,57.5s263.4-47.7,560.7,2L639,30.4v-.6H32.22L57.05,57.5Z" transform="translate(22 -0.4)" fill="url(#radial-gradient-4)"/>
      <path d="M617.75,59.5s25.7,143.2-3.1,430.5h0l24.2,21.8h0l.1-482-21.2,29.7Z" transform="translate(22 -0.4)" fill="url(#linear-gradient-4)"/>
      <path d="M57.05,57.6,32.22,29.8l-2.77,482H30l24-28.6C52.25,467,26.25,216.3,57.05,57.6Z" transform="translate(22 -0.4)" fill="url(#linear-gradient-5)"/>
      <path d="M614.65,490c-9.4.8-328.5,27.5-560.6-6.8H54l-24.5,28.6h609.4Z" transform="translate(22 -0.4)" fill="#8d99a1"/>
    </g>
    <g id="screen">
      <path id="ScreenFaceBlack" d="M607.39,245q-1-31.35-3.2-62.5-2-27-4.5-54c-1.5-14.9-2.3-26.7-9.9-39.9-12.3-21.5-39.8-22.1-61.2-25.2-24.3-3.5-48.9-5.8-73.4-8.2-25.9-2.5-51.9-4.4-77.9-4.4,0,0-17.1-.6-43-.6s-43,.6-43,.6c-26,0-52,1.9-77.9,4.3-24.5,2.3-49.1,4.7-73.4,8.2-21.4,3.1-48.9,3.7-61.2,25.2-7.6,13.3-8.4,25-9.9,39.9-1.7,18-3.3,36-4.5,54-1.5,20.8-2.5,41.6-3.2,62.5q-.75,19.95-.9,39.9c.1,11,.4,22,.6,33,.5,21.4.8,42.8,2.1,64.2.7,12,1.4,23.9,2.6,35.8,1,10.5,2.4,21.2,7.7,30.6,7.1,12.5,20.7,16.9,33.6,20.7s26.9,5.8,40.3,7.4c11.3,1.4,25.1,3.2,36.4,4,4.1.1,33.8,2.7,69.5,4.5,26.1,1.3,54.5,2.2,81.1,2.5,30-.3,63.4-1,89.6-2.5,28.4-1.5,48.5-3.8,48.5-3.8,12.3-.5,37.6-3.3,48.9-4.7,13.4-1.6,27.3-3.6,40.3-7.4s26.5-8.2,33.6-20.7c5.3-9.4,6.7-20.1,7.7-30.6,1.2-11.9,1.9-23.9,2.6-35.8,1.3-21.4,1.6-42.8,2.1-64.2.2-11,.5-22,.6-33C608.19,271.5,607.89,258.2,607.39,245Z" transform="translate(22 -0.4)" fill="#0c0a00"/>
      <path id="ScreenFaceBlue" d="M334.29,473c-63,0-151.5-7.4-152.4-7.5-11-.7-22.2-1.7-33.6-3.1-12.1-1.5-26.2-3.3-38.8-7-12.9-3.7-23.2-7.2-28.4-16.1-4.4-7.5-5.6-16.3-6.6-26.3-1.1-10.5-1.7-21.4-2.4-31.9l-.2-2.7c-1.1-17.4-1.5-35.2-1.8-52.4-.1-3.3-.3-13.9-.3-13.9-.2-9.1-.4-18.6-.5-27.9.1-13.2.4-26.1.9-38.5.7-20.6,1.8-41,3.2-60.6,1.2-17.1,2.8-34.7,4.5-52.3l.2-1.9c1.3-13.2,2.3-22.8,8.6-33.5,8.5-14.5,27.7-16.9,46.3-19.1,2.8-.3,5.6-.7,8.4-1.1,23.9-3.4,48.4-5.6,72.2-7.8l.8-.1c21-2,48.8-4.2,77-4.2h.3c.1,0,15.8-.5,39.2-.5h6.9c23.5,0,39.1.5,39.2.5h.3c28.2,0,56,2.2,77,4.2l.8.1c23.8,2.2,48.3,4.5,72.2,7.8,2.7.4,5.6.7,8.3,1.1,18.6,2.3,37.8,4.6,46.3,19.1,6.3,10.7,7.2,20.3,8.6,33.5l.2,1.9c1.8,17.6,3.3,35.2,4.5,52.3,1.4,19.6,2.5,39.9,3.2,60.6.5,12.3.7,25.3.9,38.5-.1,9.3-.3,18.7-.5,27.9,0,0-.2,10.6-.3,13.9-.4,17.2-.8,35-1.8,52.4l-.2,2.7c-.7,10.5-1.3,21.3-2.4,31.9-1,10-2.2,18.9-6.6,26.3-5.2,8.8-15.5,12.4-28.4,16.1-12.7,3.6-26.7,5.5-38.8,7-11.3,1.4-22.6,2.4-33.5,3.1C485.79,465.5,398.29,473,334.29,473Z" transform="translate(22 -0.4)" fill="url(#radial-gradient-5)" filter="url(#innershadow)"/>
    </g>

  </svg>
{/if}

<style>

</style>