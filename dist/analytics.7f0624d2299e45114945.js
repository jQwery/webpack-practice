window.analytics=function(){let e=0;isDestroyed=!1;const t=()=>e++;return document.addEventListener("click",t),{destroy(){document.removeEventListener("click",t),isDestroyed=!0},getClicks:()=>isDestroyed?`Analytics is destroyed. Total clics = ${e}`:e}}();