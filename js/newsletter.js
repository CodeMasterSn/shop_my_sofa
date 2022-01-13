const submitNews = document.getElementById('submitNews');
console.log(submitNews);

const banner = document.querySelector('.newsletter-banner');
console.log(banner);

const closeBtn = document.querySelector('.close');
console.log(closeBtn);

submitNews.addEventListener('click', activeNews);

function activeNews(){
    banner.classList.add('show');
}

closeBtn.addEventListener('click', function(){
    banner.classList.remove('show');
})