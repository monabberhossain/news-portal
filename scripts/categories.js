
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
        // ................................................................................................
        categoryList.addEventListener('click', function(){
            id = (category.category_id);
            const loadNews = async(id) => {
                const url = `https://openapi.programming-hero.com/api/news/category/${id}`
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    //console.log(data.data[0]);
                    displayNews(data.data);
                }
                catch(error){
                    console.log(error);
                }
            }

            const displayNews = (datas) => {
                //console.log(datas);
                const newsSection = document.getElementById('news-section');
                datas.forEach(data => {                    
                    const newsList = document.createElement('div');
                    newsList.classList.add('news-list', 'd-inline-flex');
                    console.log(data);
                    newsList.innerHTML = `
                        <div class="col-1 col-sm-1 col-md-4 col-lg-4 py-3 img-box">
                            <img src="${data.thumbnail_url ?data.thumbnail_url: 'Thumbnail unavailable'}" alt="">
                        </div>
                        <div class="col-1 col-sm-1 col-md-8 col-lg-8 py-3 text-box">
                            <h2>${data.title ? data.title: 'Title Not Found'}</h2>
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
                                    <p>${data.rating.number}</p>
                                </div>
                                <div>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    `;
                    newsSection.appendChild(newsList);
                });               
            }

            loadNews(id)
        })
        // ...................................................................................................
        categoryList.innerHTML = `
            <a class="m-2 text-black-50 text-decoration-none fw-semibold list-item" href="#">${category.category_name}</a>
        `;
    categoryMenu.appendChild(categoryList);        
    });
    
}

loadCategories();























/*
{
    "status":true,
    "data":
        {
            "news_category":
                [
                    {"category_id":"01","category_name":"Breaking News"},
                    {"category_id":"02","category_name":"Regular News"},
                    {"category_id":"03","category_name":"International News"},
                    {"category_id":"04","category_name":"Sports"},
                    {"category_id":"05","category_name":"Entertainment"},
                    {"category_id":"06","category_name":"Culture"},
                    {"category_id":"07","category_name":"Arts"},
                    {"category_id":"08","category_name":"All News"}
                ]
        }
}

*/
