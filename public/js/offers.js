import{$ as t}from"./jquery-b1a81d34.js";import{q as a}from"./index-32107773.js";import{m as e}from"./mockData-1314687e.js";import{f as s}from"./fillTemplateWithCarInfo-69d6016f.js";t((function(){var n=a.parse(window.location.search.substring(1)),i=n.pickupLocation,c=n.pickUpDate,l=n.returnDate;t("#resultsTitle > span").text(i),t("#betweenDates > span").text("".concat(c," - ").concat(l)),e.result.forEach((function(a,e){return t("#car-listing").append(s('\n    <a href="/checkout?carId={{index}}" class="col-md-4 col-lg-3 car-list-item p-4 text-body text-decoration-none">\n        <img class="card-img-top" src="{{image}}" alt="{{name}}" aria-hidden="true" />\n        <div class="card-body text-left">\n            <h5 class="card-title">{{brand}} <strong>{{name}}</strong></h5>\n            <p class="card-text my-1">\n                <img src="/assets/icons/transmission.svg" alt="transmission type" height="20" data-toggle="tooltip" data-placement="left" title="Transmission Type">\n                {{transmission}}\n            </p>\n            <p class="card-text my-1">\n                <img src="/assets/icons/car.svg" alt="car class" height="20" data-toggle="tooltip" data-placement="left" title="Car Class">\n                {{class}}\n            </p>\n            <p class="card-text my-1">\n                <img src="/assets/icons/fuel.svg" alt="fuel type" height="20" data-toggle="tooltip" data-placement="left" title="Fuel Type">\n                {{fuel}}\n            </p>\n            <p class="card-text my-1">\n                <img src="/assets/icons/seat.svg" alt="seats" height="20" data-toggle="tooltip" data-placement="left" title="Seats">\n                {{seat}} seats\n            </p>\n            <p class="card-text my-1">\n                <img src="/assets/icons/price.svg" alt="price icon" height="20" data-toggle="tooltip" data-placement="left" title="Daily rent price">\n                <del class="mr-1 text-monospace text-danger">{{preDiscountPrice}}₺</del>\n                <br>\n                <strong class="mr-1 ml-4 text-monospace text-success">{{price}}₺</strong>\n                per day!\n            </p>\n        </div>\n    </a>\n',e))})),t('[data-toggle="tooltip"]').tooltip()}));
