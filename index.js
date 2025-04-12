import{a as d,S as m,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="49649354-b54131589ae558e3bfeef2cb6",y="https://pixabay.com/api/";async function h(t){try{return(await d.get(y,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{throw new Error("Ошибка при загрузке изображений")}}const l=document.querySelector(".gallery");let g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(t){const o=t.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:f})=>`
            <li class="item">
                <a href="${n}" class="gallery-link">
                    <img src="${s}" alt="${e}" class="gallery-image">
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${r}</p>
                    <p><b>Views:</b> ${a}</p>
                    <p><b>Comments:</b> ${u}</p>
                    <p><b>Downloads:</b> ${f}</p>
                </div>
            </li>
            `).join("");l.innerHTML=o,g.refresh()}function L(){l.innerHTML=""}function w(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}function i(t){c.info({message:t})}function q(t){c.error({message:t})}const v=document.querySelector(".form");v.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o){i("Please enter a search term!");return}L(),w();try{const s=await h(o);s.length===0?i("Sorry, no images found for your query."):b(s)}catch{q("Failed to load images. Try again later.")}finally{S()}});
//# sourceMappingURL=index.js.map
