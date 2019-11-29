import $ from "jquery";
import mock from "../assets/mockData.json";

$(() => {
    reset();
    renderItems();
});

function validateLogin(username, password) {
    if (!username.length || !password.length) {
        return false;
    }
    return username === password;
}

function renderItems() {
    const itemsToRender = mock.result
        .map((it, i) => ({ ...it, index: i} ))
        .filter(({ index }) => !window.itemIndexesToFilterOut.includes(index));

    $("div#count").text(itemsToRender.length);

    $("ul#carList").html("");

    itemsToRender.forEach((car) => {
        const template = `
            <li class="list-group-item container">
                <div class="row">
                    <div class="col">
                        <strong>${car.car.brand}</strong>
                        ${car.car.name}
                    </div>
                    <div class="col text-right">
                        <button class="btn btn-primary" onclick="handleRemoveClick(${car.index})">Remove</button>                        
                    </div>
                </div>
            </li>
        `;

        $("ul#carList").append(template);
    });
}

window.handleRemoveClick = function(i) {
    if (window.itemIndexesToFilterOut.length === 0) {
        $("button#reset").toggleClass("d-none");
    }

    window.itemIndexesToFilterOut.push(i);
    renderItems();
};

window.reset = function() {
    $("button#reset").toggleClass("d-none");
    window.itemIndexesToFilterOut = [];
    renderItems();
};
