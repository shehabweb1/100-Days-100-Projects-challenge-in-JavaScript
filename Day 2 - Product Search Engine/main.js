const search = () => {
    const search = document.getElementById('search-item').value.toUpperCase();
    const storeItems = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const pTitle = storeItems.getElementsByTagName('h2');

    for(var i = 0; i < pTitle.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML  

            if(textValue.toUpperCase().indexOf(search) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
};