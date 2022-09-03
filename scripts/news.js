// const readMoreButton = document.getElementById('read-more');
// readMoreButton.addEventListener('click', function(_id){
//     const id = _id;
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


// {
//     "status":true,"data":[{"_id":"4e6092d54c18fbd89ad59e88a1e87fbb","others_info":{"is_todays_pick":false,"is_trending":false},"category_id":"07","rating":{"number":4.5,"badge":"Excellent"},"total_view":300,"title":"Joe Biden announces $3B in new military aid to Ukraine","author":{"name":"","published_date":"2022-08-24 22:30:00","img":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"},"thumbnail_url":"https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png","image_url":"https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png","details":"Washington, Aug 24 (Prensa Latina) President Joe Biden has announced he will allot nearly billion in military aid to Kyiv – the biggest US package so far since the beginning of the Russian military…"}]
// }
