// const readMoreButton = document.getElementById('read-more');
// readMoreButton.addEventListener('click', function(){
//     const loadNews = async(id) => {
//         const url = `https://openapi.programming-hero.com/api/news/category/${id}`
//         try{
//             const res = await fetch(url);
//             const data = await res.json();
//             //console.log(data.data[0]);
//             displayNews(data.data);
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     const displayNews = data => {
//         const modalTitle = document.getElementById('phoneDetailsModalLabel');
//         modalTitle.innerText = data.title;
//         const newsDetails = document.getElementById('news-details');
//         phoneDetails.innerHTML = `
//             <p>Realease Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found.'}</p>        
//         `;
//     }
//     loadNews(id);
// });
