//a tạo obj :)))
let nguoi = {
    name: "Ngocdtrai",
    age: 14,
    address: "nhà ở mindX"
};


// b truy suất thuộc tính
function getInfo(obj) {
    return "Tên: " + obj.name + ", Tuổi: " + obj.age;
}
console.log(getInfo(nguoi));

//c thêm và xóa thuộc tính
function addProperty(obj, propName, propValue) {
    obj[propName] = propValue;
}

function deleteProperty(obj, propName) {
    delete obj[propName];
}

addProperty(nguoi, "job", "Developer");
console.log(nguoi);

deleteProperty(nguoi, "address");
console.log(nguoi);


// đối tượng lồng nhau
let nuoc = {
    name: "Vietnam",
    danso: 1000,
    thudo: {
        name: "Hanoi",
        danso: 800
    }
};

//Liệt kê thuộc tính
function listProperties(obj) {
    for (let prop in obj) {
        console.log(prop + ": " + obj[prop]);
    }
}

listProperties(country);
