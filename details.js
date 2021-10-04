window.onload = function () {
    let start = location.href.lastIndexOf("=");
    let index = location.href.substring(start + 1);
    console.log(index);
    detailsProduct(index);

}
function detailsProduct(i) {
    document.getElementById("imgDetails").innerHTML = `<img src="images/${products[i].picture}" class = "imgDetails">`;
    document.getElementById("priceDetails").innerHTML = `${formatCurrency(products[i].price)}`;
    document.getElementById("detailsPro").innerHTML = `<table>
                                                        <tr>
                                                            <td>${products[i].motorcycleLine}</td>
                                                            <td>${products[i].year}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>${products[i].color}</td>
                                                            <td>${products[i].km}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">${products[i].address}</td>
                                                        </tr>
                                                    </table>`;
    document.getElementById("contact").innerHTML = `Liên hệ: ${products[i].sellerName} - ${products[i].phoneNumber}`;
    document.getElementById("textareaDetails").innerHTML = `<tr><th>Mô tả xe:</th></tr>
                                                            <tr><td>${products[i].details}</td></tr>`;

}
function formatCurrency(number) {
    return number.toLocaleString('vi', {
        style: 'currency',
        currency: 'vnd',
    });
}
init();