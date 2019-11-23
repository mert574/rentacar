import $ from "jquery";
import qs from "qs";
import data from "../../public/assets/mockData.json";
import fillTemplateWithCarInfo from "../fillTemplateWithCarInfo";

const template = `
    <a href="/checkout?carId={{index}}" class="col-md-4 col-lg-3 car-list-item p-4 text-body text-decoration-none">
        <img class="card-img-top" src="{{image}}" alt="{{name}}" aria-hidden="true" />
        <div class="card-body text-left">
            <h5 class="card-title">{{brand}} <strong>{{name}}</strong></h5>
            <p class="card-text my-1">
                <img src="/assets/icons/transmission.svg" alt="transmission type" height="20" data-toggle="tooltip" data-placement="left" title="Transmission Type">
                {{transmission}}
            </p>
            <p class="card-text my-1">
                <img src="/assets/icons/car.svg" alt="car class" height="20" data-toggle="tooltip" data-placement="left" title="Car Class">
                {{class}}
            </p>
            <p class="card-text my-1">
                <img src="/assets/icons/fuel.svg" alt="fuel type" height="20" data-toggle="tooltip" data-placement="left" title="Fuel Type">
                {{fuel}}
            </p>
            <p class="card-text my-1">
                <img src="/assets/icons/seat.svg" alt="seats" height="20" data-toggle="tooltip" data-placement="left" title="Seats">
                {{seat}} seats
            </p>
            <p class="card-text my-1">
                <img src="/assets/icons/price.svg" alt="price icon" height="20" data-toggle="tooltip" data-placement="left" title="Daily rent price">
                <del class="mr-1 text-monospace text-danger">{{preDiscountPrice}}₺</del>
                <br>
                <strong class="mr-1 ml-4 text-monospace text-success">{{price}}₺</strong>
                per day!
            </p>
        </div>
    </a>
`;

$(() => {
    const {pickupLocation, pickUpDate, returnDate} = qs.parse(window.location.search.substring(1));
    $("#resultsTitle > span").text(pickupLocation);
    $("#betweenDates > span").text(`${pickUpDate} - ${returnDate}`);

    data.result.forEach((listing, i) => $("#car-listing").append(fillTemplateWithCarInfo(template, i)));

    $('[data-toggle="tooltip"]').tooltip();
});
