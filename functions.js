
document.querySelector('.expand-btn').addEventListener('click',function(){
    const content=document.querySelector('.expandable-content');
    content.style.display=content.style.display==='block'? 'none':'block';
    this.textContent=this.textContent==='More'?'Collapse':'More';
});

function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
  }
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  };