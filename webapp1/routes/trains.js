
var array = {
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


exports.trains = function(req,res) {
res.render('trains', {title:'trains' , array:array });

};