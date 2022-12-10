const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);
document.addEventListener('DOMContentLoaded', localStorageOku)

function gorevSilTamamla(e) {
    const tiklanilanEleman = e.target

    // when you click the logo it doesn't get click function, to avoid it i decided to use that technique
    // you can do that in another way with using css code which is 'pointer-events: none;'
    if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi') || tiklanilanEleman.classList.contains('fa-regular')) {

        tiklanilanEleman.parentElement.classList.toggle("gorev-tamamlandi")
    }
    if (tiklanilanEleman.classList.contains('gorev-btn-sil') || tiklanilanEleman.classList.contains('fa-solid')) {

        if (confirm("are u sure ma'am")) {
            tiklanilanEleman.parentElement.classList.toggle('kaybol')

            const silinecekGorev = tiklanilanEleman.parentElement.children[0].innerText;
            localStorageSil(silinecekGorev);

            // kaybolma efekti bittikten sonra silme islemi yapilsin diye asagidaki kod yazildi eger bu kod olmasaydi element direk silinirdi ve animasyon olmazdi
            tiklanilanEleman.parentElement.addEventListener('transitionend', function () { tiklanilanEleman.parentElement.remove(); })
        }
    }
}

function gorevEkle(e) {
    e.preventDefault();

    if (yeniGorev.value.length > 0) {

        gorevItemOlustur(yeniGorev.value)

        //applyin to local storage
        localStorageKaydet(yeniGorev.value)

        // empty the value 
        yeniGorev.value = ''
    } else {
        alert("it can't be empty")
    }

}

function localStorageKaydet(yeniGorev) {
    let gorevler = localStorageArrayeDonustur()

    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageOku() {
    let gorevler = localStorageArrayeDonustur()

    gorevler.forEach(function (gorev) {
        gorevItemOlustur(gorev);
    });
}

function gorevItemOlustur(gorev) {
    // creating main div 
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    // creating li 
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim')
    gorevLi.innerText = gorev;
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

    // adding li to our unorder list 
    gorevListesi.appendChild(gorevDiv)
}

function localStorageSil(gorev) {
    let gorevler = localStorageArrayeDonustur();

    const silinecekElementIndex = gorevler.indexOf(gorev);
    console.log(silinecekElementIndex)
    gorevler.splice(silinecekElementIndex, 1);

    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageArrayeDonustur() {
    let gorevler;

    if (localStorage.getItem('gorevler') == null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    return gorevler;
}