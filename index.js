const apiKey = "ujSnZPpvqvw9qARNBrMxGzm1kKJx8vt6";

function searchGiph(page = 1) {
    const searchQuery = document.getElementById('search-box').value.trim();
    const limit = 10;
    const offset = (page - 1) * limit;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchQuery)}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            displayGifs(json.data);
            updatePagination(json.pagination);
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
            document.getElementById('gif-results').innerText = 'Failed to load GIFs. Please try again later.';
        });
}