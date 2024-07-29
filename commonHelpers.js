(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".reviews-list"),c="https://portfolio-js.b.goit.study/api/reviews";console.log(c);function f(r,o,i,s){const e=`
      <li class="reviews-list-item " id='${r}'>
        <img src="${i}" alt="${o}" class="reviews-img">
        <div class="text-wrap">
          <h3 class="reviews-card-title">${o}</h3>
          <p class="reviews-text">${s}</p>
        </div>
      </li>
    `;l.insertAdjacentHTML("beforeend",e)}f(c);fetch(c).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{console.log("Отримані відгуки:",r),l&&r.map(({_id:o,author:i,avatar_url:s,review:e})=>{f(o,i,s,e)})}).catch(a);function a(){iziToast.error({backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16px",position:"topRight",message:"Sorry, no information was found!"})}
//# sourceMappingURL=commonHelpers.js.map
