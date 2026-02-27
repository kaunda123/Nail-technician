
document.addEventListener('DOMContentLoaded', function(){
    //document.querySelector('.expand-btn').addEventListener('click', function() {
        //const content=document.querySelector('.expandable-content');
        //content.style.display=content.style.display==='block'? 'none':'block';
        //this.textContent=this.textContent==='More'?'Collapse':'More';
    //});
    const expandBtn = document.querySelector('.expand-btn');
    if (expandBtn) {
        expandBtn.addEventListener('click', function() {
            const content = document.querySelector('.expandable-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            this.textContent = this.textContent === 'More' ? 'Collapse' : 'More';
        });
    } 
    else {
        console.log('Expand button not found');
    }
});
function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
};
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('form submitted!');
    let name = document.getElementById('name').value;
    let service = document.getElementById('service').value;
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value;
    
    let summary = `
    <h3>Summary:</h3>
    <p>Name: ${name}</p>
    <p>Service: ${service}</p>
    <p>Time: ${time}</p>
    <p>Date: ${date}</p>
    `;
    document.getElementById('summary').innerHTML = summary;
    localStorage.setItem('Summary',summary);
});
