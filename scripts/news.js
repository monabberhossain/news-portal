const readMoreButton = document.getElementById('read-more');
readMoreButton.addEventListener('click', function(){
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
    displayNews = (data) => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
            <div class="modal fade" id="phoneDetailsModal" tabindex="-1" aria-labelledby="phoneDetailsModalLabel"
            aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="phoneDetailsModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="phone-details" class="modal-body">
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    loadNews(id);
});
