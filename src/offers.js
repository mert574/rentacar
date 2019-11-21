import $ from "jquery";
import qs from "qs";
import data from "../public/assets/mockData.json";

$(() => {
    const {pickupLocation, pickUpDate, returnDate} = qs.parse(window.location.search.substring(1));
    $("#resultsTitle > span").text(pickupLocation);
    $("#betweenDates > span").text(`${pickUpDate} - ${returnDate}`);

    data.result.forEach(listing => $("#car-listing").append(generateCarCard(listing)));
});

function generateCarCard(listing) {
    return `
            <div class="col-md-4 col-lg-3 car-list-item">
                <img class="card-img-top" src="${listing.car.image}" alt="${listing.car.name}" aria-hidden="true">
                <div class="card-body">
                <h5 class="card-title">${listing.car.brand} <strong>${listing.car.name}</strong></h5>
                <p class="card-text">
                    <strong class="text-monospace text-success">${listing.price}₺</strong>
                </p>
                </div>
            </div>
        `;
}
