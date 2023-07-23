(function(){

    const buttons = document.querySelectorAll('.btn');
    const shopItem = document.querySelectorAll('.item');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter

            shopItem.forEach((item)=>{
                if(filter === 'all'){
                    item.style.display = 'block';
                } else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block';
                    } else{
                        item.style.display = 'none';
                    } 
                }
            });
        });
    })

})();