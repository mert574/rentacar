import data from "../public/assets/mockData.json";

export default function fillTemplateWithCarInfo(template, mockDataCarListingIndex) {
    const listing = data.result[mockDataCarListingIndex];

    return template
        .replace(/{{index}}/ig, mockDataCarListingIndex)
        .replace(/{{image}}/ig, listing.car.image)
        .replace(/{{name}}/ig, listing.car.name)
        .replace(/{{brand}}/ig, listing.car.brand)
        .replace(/{{preDiscountPrice}}/ig, listing.preDiscountPrice)
        .replace(/{{price}}/ig, listing.price)
        .replace(/{{transmission}}/ig, listing.car.transmission)
        .replace(/{{class}}/ig, listing.car.class)
        .replace(/{{fuel}}/ig, listing.car.fuel)
        .replace(/{{seat}}/ig, listing.car.seats);
}
