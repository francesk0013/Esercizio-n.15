document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        { name: 'Ferrari F8', img: 'ferrari_f8.jpg' },
        { name: 'Lamborghini Aventador', img: 'lamborghini_aventador.jpg' },
        // Aggiungi altre auto qui
    ];

    const bikes = [
        { name: 'Ducati Panigale', img: 'ducati_panigale.jpg' },
        { name: 'Yamaha YZF-R1', img: 'yamaha_r1.jpg' },
        // Aggiungi altre moto qui
    ];

    const carGallery = document.getElementById('car-gallery');
    const bikeGallery = document.getElementById('bike-gallery');

    function displayVehicles(vehicles, gallery) {
        vehicles.forEach(vehicle => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.src = vehicle.img;
            img.alt = vehicle.name;
            let p = document.createElement('p');
            p.textContent = vehicle.name;

            div.appendChild(img);
            div.appendChild(p);
            gallery.appendChild(div);
        });
    }

    if (carGallery) displayVehicles(cars, carGallery);
    if (bikeGallery) displayVehicles(bikes, bikeGallery);
});
