import $ from "jquery";
import mock from "../assets/mockData.json";

$(() => {
    renderItems();
});

function renderItems() {
    $("div#count").text(mock.countReservations);

    $("ul#reservationList").html("");

    mock.reservations.forEach((reservation, i) => {
        const reservedCar = mock.result[reservation.carId].car;
        const hoursAgo = Math.round((Date.now() - reservation.createdAt) / 3600000);
        const template = `
            <li class="list-group-item container p-4">
                <strong class="row mb-3 mr-2">
                    Reservation #${i + 1}
                </strong>
                <div class="row">
                    <strong class="col">Name</strong>
                    <span class="col text-right">${reservation.name}</span>
                </div>
                <div class="row">
                    <strong class="col">Car</strong>
                    <span class="col text-right">${reservedCar.brand} ${reservedCar.name}</span>
                </div>
                <div class="row">
                    <strong class="col">Reserved At</strong>
                    <span class="col text-right">${hoursAgo} hours ago</span>
                </div>
                <div class="row my-3">
                    <button class="btn btn-danger btn-sm ml-auto mr-1" onclick="alert('cancelled!')">Cancel</button>
                    <button class="btn btn-success btn-sm mr-2" onclick="alert('completed!')">Mark as Completed</button>
                </div>
                
            </li>
        `;

        $("ul#reservationList").append(template);
    });
}
