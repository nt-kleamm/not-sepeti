const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);

function gorevEkle(e) {
    e.preventDefault();

    // creating main div 
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    // creating li 
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim')
    gorevLi.innerText = yeniGorev.value;
    // appending childe div -> li 
    gorevDiv.appendChild(gorevLi)

    // creating set button 
    const gorevTamamBtn = document.createElement('button')
    gorevTamamBtn.classList.add('gorev-btn')
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi')
    gorevTamamBtn.innerHTML = '<i class="fa-regular fa-square-check"></i>'
    // appending child div -> button
    gorevDiv.appendChild(gorevTamamBtn);

    // creating delete button 
    const gorevSilBtn = document.createElement('button')
    gorevSilBtn.classList.add('gorev-btn')
    gorevSilBtn.classList.add('gorev-btn-sil')
    gorevSilBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    // appending child to div -> button delete
    gorevDiv.appendChild(gorevSilBtn)

    // empty the value 
    yeniGorev.value = ''

    // adding li to our unorder list 
    gorevListesi.appendChild(gorevDiv)
}