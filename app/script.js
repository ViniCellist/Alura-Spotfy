const searchInput = document.querySelector('#search-input');
const resultArtist = document.querySelector('#result-artist');
const resultPlaylist = document.querySelector('#result-playlist');

function requestAPI(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}

function displayResults(results) {
    hidePlaylist();
    const artistName = document.querySelector('#artist-name');
    const artistImage = document.querySelector('#artist-img');

    results.forEach(element => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    });
    resultArtist.classList.remove('hidden');
}

function hidePlaylist() {
    resultPlaylist.classList.add('hidden');
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    requestAPI(searchTerm);
});

