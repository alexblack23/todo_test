$('#sort-asc').click(function() {
    sort(true);
    console.log('hello');
});
$('#sort-desc').click(function() {
    sort(false);
});

function sort(isAscSorting) {
    let selectList = $('#list li');

    selectList.sort(function(a, b) {
        let aValue = +a.innerText;
        let bValue = +b.innerText;

        return isAscSorting ?
            aValue > bValue :
            aValue < bValue;
    });

    $('#list').html(selectList);
}