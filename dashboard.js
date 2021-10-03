class Product {
    constructor(id, motorcycleLine, year, color, kmTraveled, price, details, address, phoneNumber, sellerName, picture) {
        this.productId = id,
            this.motorcycleLine = motorcycleLine,
            this.year = year,
            this.color = color,
            this.kmTraveled = kmTraveled,
            this.price = price,
            this.details = details,
            this.address = address,
            this.phoneNumber = phoneNumber,
            this.sellerName = sellerName,
            this.picture = picture
    }
};

let products = [];

function init() {
    if (getStoreRoom("motorcycleMarket") == null) {
        // // // Khởi tạo kho mẫu
        products = [
            new Product(
                productId = 1,
                motorcycleLine = "Honda Wave Alpha",
                year = 2017,
                color = "Trắng",
                kmTraveled = "10,000-20,000 km",
                price = 8500000,
                details = "Xe nữ đi, chăm sóc thường xuyên",
                address = "Phong Điền",
                phoneNumber = 0984453445,
                sellerName = "Thành",
                picture = "images/hondaWaveAlpha.jpg"
            ),
            new Product(
                productId = 2,
                motorcycleLine = "Honda Dream",
                color = "Trắng-đen",
                year = 2010,
                kmTraveled = "> 50,000 km",
                price = 8500000,
                details = "Xe nữ đi, chăm sóc thường xuyên",
                address = "Phong Điền",
                phoneNumber = 0984453445,
                sellerName = "Thành",
                picture = "dream.jpg"
            ),
            new Product(
                productId = 3,
                motorcycleLine = "Honda SH",
                color = "Đỏ",
                year = 2015,
                kmTraveled = "10000-20000 km",
                price = 26500000,
                details = "Xe nữ đi, chăm sóc thường xuyên",
                address = "Tp.Huế",
                phoneNumber = 0936453445,
                sellerName = "Trang",
                picture = "hondaShRed.jpg"
            ),
            new Product(
                productId = 4,
                motorcycleLine = "Honda Future 125",
                year = 2014,
                color = "Nâu",
                kmTraveled = "20000-50000 km",
                price = 19500000,
                details = "Xe nữ đi, chăm sóc thường xuyên",
                address = "Hương Thủy",
                phoneNumber = 0984453535,
                sellerName = "Công",
                picture = "future125.jpg"
            ),
            new Product(
                productId = 5,
                motorcycleLine = "Suzuki Gn125",
                color = "Đen",
                year = 2012,
                kmTraveled = "> 50,000 km",
                details = "Xe nữ đi, chăm sóc thường xuyên",
                price = 23500000,
                address = "Tp.Huế",
                phoneNumber = 0984455365,
                sellerName = "Nam",
                picture = "suzukiGn125.jpg"
            ), new Product(
                productId = 6,
                motorcycleLine = "Suzuki Satria",
                color = "Đen",
                year = 2017,
                kmTraveled = "10000-20000 km",
                price = 21500000,
                details = "Xe nữ đi, chăm sóc thường xuyên",
                address = "Phú Lộc",
                phoneNumber = 0976497445,
                sellerName = "Thành",
                picture = "suzukiSatria.jpg"
            ), new Product(
                productId = 7,
                motorcycleLine = "Yamaha Nouvo",
                year = 2014,
                color = "Trắng-đỏ",
                kmTraveled = "20000-50000 km",
                price = 12500000,
                details = "Xe nữ đi, chăm sóc thường xuyên",
                address = "Phong Điền",
                phoneNumber = 0984418945,
                sellerName = "Lan",
                picture = "yamahaNouvo.jpg"
            ), new Product(
                productId = 8,
                motorcycleLine = "Yamaha Exciter 135",
                color = "Đỏ-đen",
                year = 2012,
                kmTraveled = "> 50,000 km",
                details = "Xe nữ đi, chăm sóc thường xuyên",
                price = 17500000,
                address = "Tp.Huế",
                phoneNumber = 0984489445,
                sellerName = "Hải",
                picture = "yamahaEx135.jpg"
            )
        ];
        saveStoreRoom("motorcycleMarket", products);
    } else {
        products = getStoreRoom("motorcycleMarket");
    }
}

function getStoreRoom(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

function saveStoreRoom(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

// // // Hiển thị danh sách sản phẩm
function showProduct() {

    let tbProduct = document.getElementById("tbProduct");
    tbProduct.children[1].innerHTML = "<tr>";

    // // class="picture"
    for (let i = products.length - 1; i >= 0; i--) {
        tbProduct.children[1].innerHTML += `<td id="td_${products[i].productId}" style = "width: 20%; background-color: white;">
                                                    <img src="images/${products[i].picture}">
                                                    <h4> ${products[i].motorcycleLine} ${products[i].year} ${products[i].color} </h4>
                                                    <p> ${formatCurrency(products[i].price)} </p>
                                                    <p> ${products[i].address} </p>
                                            </td>`
    //     // 5 sản phẩm / dòng.
    //     if (i % 5 == 0) {
    //         tbProduct.children[1].innerHTML += `</tr> <tr>`;
    //     }
    }
    tbProduct.children[1].innerHTML += "</tr>";
}

function formatCurrency(number) {
    return number.toLocaleString('vi', {
        style: 'currency',
        currency: 'vnd',
    });
}

// Khởi tạo
function ready() {
    init();
    showProduct();
}

ready();