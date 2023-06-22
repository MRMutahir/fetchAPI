fetch('https://fakestoreapi.com/products').then(response => {
    return response.json()
}).then(data => {
    apis(data);
});

function apis(datas);