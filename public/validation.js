document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', (e) => {
    let name = document.getElementById('name').value;
    let model = document.getElementById('model').value;
    let color = document.getElementById('phonecolor').value;
    let price = document.getElementById('price').value;
    let battery = document.getElementById('range').value;
    let condition = document.getElementById('condition').value;
    let namehiba = document.getElementById('namehiba');
    let modelhiba = document.getElementById('modelhiba');
    let pricehiba = document.getElementById('pricehiba');
    pricehiba.style.display = 'none';
    modelhiba.style.display = 'none';
    namehiba.style.display = 'none';
    if (name == '') {
      e.preventDefault();
      namehiba.style.display = 'initial';
      console.log('Név nem lehet ures');
    } else {
      namehiba.style.display = 'none';
    }
    if (model == '') {
      e.preventDefault();
      modelhiba.style.display = 'initial';
      console.log('Model nem lehet ures');
    } else {
      modelhiba.style.display = 'none';
    }
    if (color == '') {
      e.preventDefault();
    }
    if (price == '' || price < 0) {
      e.preventDefault();
      pricehiba.style.display = 'initial';
      console.log('Ár nem lehet ures és nullánál kisebb vgay betu');
    } else {
      pricehiba.style.display = 'none';
    }
    if (battery == '' || battery < 0) {
      e.preventDefault();
      console.log('Akkumulátor nem lehet ures és nullánál kisebb');
    }
  });
});
