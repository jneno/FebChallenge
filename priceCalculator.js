exports.computeTotalPrice = (products) => {
    const defaultPrice = 299;
    let discountLevels = [2, 3, 4, 5];
    let discountAmounts = [.05, .10, .20, .25];

    let uniqueProductsCount = [...new Set(products)].length; 
    let discountPerUniqeProduct = uniqueProductsCount > 1 ? discountAmounts[discountLevels.indexOf(uniqueProductsCount)] : 0;

    let totalPrice = uniqueProductsCount * defaultPrice * (1-discountPerUniqeProduct);
    totalPrice += (products.length - uniqueProductsCount) * defaultPrice;

    return totalPrice
}
