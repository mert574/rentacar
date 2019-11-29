import $ from "jquery";
import qs from "qs";
import data from "../assets/mockData.json";
import fillTemplateWithCarInfo from "../fillTemplateWithCarInfo";

$(() => {
    const {carId} = qs.parse(window.location.search.substring(1));
    const {car} = data.result[carId];

    $("h4#carName").text(`${car.brand} ${car.name}`);
    $("img#carImg").attr("src", car.image);

    const template = `
        <ul class="list-group">
            <li class="list-group-item my-1">
                <img src="/assets/icons/transmission.svg" alt="transmission type" height="20" data-toggle="tooltip" data-placement="left" title="Transmission Type">
                {{transmission}}
            </li>
            <li class="list-group-item my-1">
                <img src="/assets/icons/car.svg" alt="car class" height="20" data-toggle="tooltip" data-placement="left" title="Car Class">
                {{class}}
            </li>
            <li class="list-group-item my-1">
                <img src="/assets/icons/fuel.svg" alt="fuel type" height="20" data-toggle="tooltip" data-placement="left" title="Fuel Type">
                {{fuel}}
            </li>
            <li class="list-group-item my-1">
                <img src="/assets/icons/seat.svg" alt="seats" height="20" data-toggle="tooltip" data-placement="left" title="Seats">
                {{seat}} seats
            </li>
        </ul>
        <a href="/confirm">
            <button type="button" class="my-2 btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">
                Rent for
                <strong class="mx-1">{{price}}₺</strong>
                per day!
            </button>
        </a>
    `;
    $("#carDetails").html(fillTemplateWithCarInfo(template, carId));
});
