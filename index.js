import{a as M,S as P,i as m}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const B="49649354-b54131589ae558e3bfeef2cb6",E="https://pixabay.com/api/",$=15;async function h(t,o=1){return(await M.get(E,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:$}})).data}const y=document.querySelector(".gallery");let p=new P(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const o=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:s,comments:q,downloads:v})=>`
    <li class="item">
      <a href="${i}" class="gallery-link">
        <img src="${a}" alt="${e}" class="gallery-image" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${q}</p>
        <p><b>Downloads:</b> ${v}</p>
      </div>
    </li>
  `).join("");y.insertAdjacentHTML("beforeend",o),p.refresh()}function x(){y.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}function w(){document.querySelector(".load-more").classList.remove("hidden")}function c(){document.querySelector(".load-more").classList.add("hidden")}function d(t){m.info({message:t})}function S(t){m.error({message:t})}const O=document.querySelector(".form"),H=document.querySelector(".load-more"),I=document.querySelector(".gallery");let u="",l=1,n=0,f=0;O.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o){d("Please enter a search term!");return}u=o,l=1,n=0,x(),c(),b();try{const a=await h(u,l);f=a.totalHits,a.hits.length===0?d("Sorry, no images found for your query."):(g(a.hits),n+=a.hits.length,n<f&&w())}catch{S("Failed to load images. Try again later.")}finally{L()}});H.addEventListener("click",async()=>{l+=1,c(),b();try{const t=await h(u,l);g(t.hits),n+=t.hits.length,p.refresh();const{height:o}=I.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),n>=f?(d("We're sorry, but you've reached the end of search results."),c()):w()}catch{S("Failed to load more images.")}finally{L()}});
//# sourceMappingURL=index.js.map
