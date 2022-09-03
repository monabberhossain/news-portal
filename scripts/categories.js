const loadCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayCategories(data.data);
    }
    catch(error){
        console.log(error);
    }
}

const displayCategories = (data) => {
    const categories = data.news_category;
    const categoryMenu = document.getElementById('category-menu');
    categories.forEach(category => {
        let categoryList = document.createElement('li');
        categoryList.classList.add('list-unstyled', 'category-list');
        categoryList.addEventListener('click', function(){
            id = (category.category_id);
            const loadNewsList = async(id) => {
                const url = `https://openapi.programming-hero.com/api/news/category/${id}`
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    displayNewsList(data.data);
                }
                catch(error){
                    console.log(error);
                }
            }

            const displayNewsList = (datas) => {                
                
                const newsSection = document.getElementById('news-section');                
                newsSection.innerHTML = '';
                const numberOfArticles = document.getElementById('number-of-articles');
                datas.forEach(data => {
                    const newsList = document.createElement('div');
                    newsList.classList.add('news-list', 'd-flex', 'flex-column',  'flex-sm-column', 'flex-md-row', 'flex-lg-row');
                    
                    newsList.innerHTML = `
                        <div class="col-lg-3 col-md-5 py-3 img-box text-center">
                            <img src="${data.thumbnail_url ?data.thumbnail_url: 'Thumbnail unavailable'}" alt="">
                        </div>
                        <div class="col-lg-9 col-md-7 py-3 text-box">
                            <h2><a href="#">${data.title ? data.title: 'Title Not Found'}</a></h2>
                            <p class="text-black-50 short-para">${data.details ? data.details: 'Description Not Found'}</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-inline-flex">
                                    <img src="${data.author.img ? data.author.img: 'Thumbnail unavailable'}" class="tiny-image img-fluid" alt="">
                                    <div class="ms-1">
                                        <h5>${data.author.name ? data.author.name: 'Unknown Author'}</h5>
                                        <h6>${data.author.published_date ? data.author.published_date: 'Date not found'}</h6>
                                    </div>
                                </div>
                                <div>
                                    <p><i class="fa-solid fa-eye"></i> ${data.total_view ? data.total_view: 'Data not found'}</p>
                                </div>
                                <div>
                                    <p>Ratings: ${data.rating.number} </p>
                                </div>
                                <div>
                                    <a id="read-more" class="text-decoration-none btn btn-custom fs-4 fw-semibold" data-bs-toggle="modal" data-bs-target="#newsDetailsModal" href = "#">Read More</a>
                                </div>
                            </div>
                        </div>
                    `;
                    newsSection.appendChild(newsList);
                    const readMoreButton = document.getElementById('read-more');
                    readMoreButton.addEventListener('click', function(){
                        loadNews(data._id);
                    });
                });              
                numberOfArticles.innerText = datas.length + ' News Found in the Category.';
            }
            const loadNews = async(id) => {
                const url = `https://openapi.programming-hero.com/api/news/${id}`
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    console.log(url);
                    displayNews(data.data);
                }
                catch(error){
                    console.log(error);
                }
            }
            const displayNews = data => {
                const modalTitle = document.getElementById('newsDetailsModalLabel');
                modalTitle.innerHTML = `<h2>${data[0].title ? data[0].title: 'No Title Found.'}</h2>`;
                const newsPhoto = document.getElementById('img-section');
                newsPhoto.innerHTML = `
                    <img class="img-fluid" src="${data[0].image_url}" alt="">
                `;
                const newsDetails = document.getElementById('news-details');
                newsDetails.innerHTML = `
                    <p>Realease Date: ${data[0].details ? data[0].details: 'No Release Date Found.'}</p>        
                `;
                const extraInfo = document.getElementById('extra-info');
                extraInfo.innerHTML = `
                    <div class="d-inline-flex col-4">
                        <img src="${data[0].author.img ? data[0].author.img: 'Thumbnail unavailable'}" class="tiny-image img-fluid" alt="">
                        <div class="ms-1">
                            <h5>${data[0].author.name ? data[0].author.name: 'Unknown Author'}</h5>
                            <h6>${data[0].author.published_date ? data[0].author.published_date: 'Date not found'}</h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <p><i class="fa-solid fa-eye"></i> ${data[0].total_view ? data[0].total_view: 'Data not found'}</p>
                    </div>
                    <div class="col-4">
                        <p>Ratings: ${data[0].rating.number} </p>
                    </div>
                `;
            }
            loadNewsList(id);
        })
        categoryList.innerHTML = `
            <a class="m-2 text-black-50 text-decoration-none fw-semibold list-item" href="#">${category.category_name}</a>
        `;
    categoryMenu.appendChild(categoryList);        
    });
    
}

loadCategories();