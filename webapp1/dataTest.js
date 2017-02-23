var jsonObject = {
    "sync_contact_list": [
        {
            "name": "c",
            "number": "c1",
            "email": "@c"
        },
        {
            "name": "b",
            "number": "b1",
            "email": "@b"
        },
        {
            "name": "a",
            "number": "a1",
            "email": "@a"
        }
    ]
};

// show result

console.log(jsonObject);

for (var i=0; i<jsonObject['sync_contact_list'].length; i++){
    var bit = jsonObject['sync_contact_list'][i];
    console.log(bit['name']);
	console.log(bit['number']);
	console.log(bit['email']);
};
