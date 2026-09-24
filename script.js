document.addEventListener("DOMContentLoaded",()=>{
  const items=[...document.querySelectorAll(".reveal")];
  if(!("IntersectionObserver" in window)){items.forEach(i=>i.classList.add("is-visible"));return;}
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");obs.unobserve(entry.target);}})
  },{threshold:.12,rootMargin:"0px 0px -6% 0px"});
  items.forEach((item,index)=>{if(!item.classList.contains("delay-1")&&!item.classList.contains("delay-2")&&!item.classList.contains("delay-3")){item.style.transitionDelay=((index%4)*.045)+"s"}observer.observe(item);});
});