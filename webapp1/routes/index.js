exports.index = function(req,res) {
res.render('index', {title:'Express' });
res.render('about', {content:'hello' });
};