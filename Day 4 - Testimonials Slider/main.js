(function(){
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img, name, text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        customers.push(customer)
    }

    createCustomer(0, 'Robert Phillips', 'I believe this movie to be unlike any other where in any other story, an ending of this sort where the "dark night" aspect of filmmaking only arrives near the end of the cut would be built upon to spread a message that aims to inspire others to do the right thing (etc). Instead of following this path, it flips it on its head.'  )
    createCustomer(1, 'Jacob Thapa', "I thought this was a great movie, depending on what your preferences are for a great movie. If you like movies that are kindof all over the place taking your emotions on a rollercoaster then this is a great movie.")
    createCustomer(2, 'Polly Brown', "That said, this movie stuck with me for 16 years, and I enjoyed the second viewing as much as the first. Despite some shaky acting and serious plot holes, The Butterfly Effect punches you in the gut over and over. It's less of a comment on chaos theory than a bleak critique on navel-gazing and wishful thinking. A lesson on if there ever was one.")
    createCustomer(3, 'Jennifer Davis', "This movie deserves much higher ratings on all platforms! I know time travel movies have a lot of skepticism but this one (despite its flaws) is much better than it’s regarded. I recently rewatched this film after many years and it’s just as interesting as it was back in 2004. ")
    createCustomer(4, 'Jason Ramjas', "Definitely a classic, although much more macabre than I remember. There are many nauseating moments and certain ones that were resolved in such a roundabout way that they felt like they only existed to make the audience upset (the dog and the prison rape mainly)")

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--;
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++;
                if(index === customers.length){
                    index = 0;
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})();