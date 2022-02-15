exports.computeTotalPrice = (products) => {
    const defaultPrice = 299;
    let totalPrice = 0;
    let discountLevels = [2, 3, 4, 5];
    let discountAmounts = [.05, .10, .20, .25];
  
    let bundleSizes = getBundleSizes(products);
    bundleSizes.forEach((size) => {
        let discount = size > 1 ? discountAmounts[discountLevels.indexOf(size)] : 0;
        totalPrice += size * defaultPrice * (1-discount);
    })

    return totalPrice
}

function getBundleSizes(products) {
    let bundleSizes = [];

    while (products.length) {
        var bundle = [...new Set(products)];
        bundleSizes.push(bundle.length);
        bundle.forEach((product) => {
            products.splice(products.indexOf(product), 1); 
        });    
    }

    return bundleSizes;
}
