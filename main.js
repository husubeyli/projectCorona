
let searchButton = document.getElementById('search');

let searchDiv = document.querySelector('#search_div');

document.addEventListener("DOMContentLoaded", function(event) {
    searchDiv.setAttribute('style','display: none'); 
});
$('#search').click(function(e){
    $('#search_div').toggle();
    e.preventDefault();
})
// searchButton.addEventListener('click', function(e){

    // if(searchDiv.style.display == 'none'){
    //     searchDiv.setAttribute('style','display: block');
    //     console.log('hello');
    // }else{
    //     searchDiv.setAttribute('style','display: none'); 
    //     console.log('no');
    // }

    // searchDiv.setAttribute('style','transition: height 4s;')

    // $('#search_div').toggle();
    // e.preventDefault();
// });
