const searchBar = document.getElementById('search-bar');
const listItems = document.getElementsByTagName('li');

searchBar.addEventListener('input', function () {
    const searchTerm = searchBar.value.toLowerCase();

    Array.from(listItems).forEach(function (item) {
        const itemText = item.innerText.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});