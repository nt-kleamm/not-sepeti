const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla)

function gorevSilTamamla (e) {
    const tiklanilanEleman = e.target
    
    // when you click the logo it doesn't get click function, to avoid it i decided to use that technique
    // you can do that in another way with using css code which is 'pointer-events: none;'
    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi') || tiklanilanEleman.classList.contains('fa-regular')){
        tiklanilanEleman.parentElement.classList.toggle("gorev-tamamlandi")
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil') || tiklanilanEleman.classList.contains('fa-solid')){
        tiklanilanEleman.parentElement.classList.toggle('kaybol')
        // kaybolma efekti bittikten sonra silme islemi yapilsin diye asagidaki kod yazildi eger bu kod olmasaydi element direk silinirdi ve animasyon olmazdi
        tiklanilanEleman.parentElement.addEventListener('transitionend', function () { tiklanilanEleman.parentElement.remove(); })
    }
}

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
    gorevTamamBtn.innerHTML = '<i class="far fa-regular fa-square-check"></i>'
    // appending child div -> button
    gorevDiv.appendChild(gorevTamamBtn);

    // creating delete button 
    const gorevSilBtn = document.createElement('button')
    gorevSilBtn.classList.add('gorev-btn')
    gorevSilBtn.classList.add('gorev-btn-sil')
    gorevSilBtn.innerHTML = '<i class="far fa-solid fa-trash"></i>'
    // appending child to div -> button delete
    gorevDiv.appendChild(gorevSilBtn)

    // empty the value 
    yeniGorev.value = ''

    // adding li to our unorder list 
    gorevListesi.appendChild(gorevDiv)
}