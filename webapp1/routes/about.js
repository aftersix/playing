exports.about = function(req,res) {
res.render('about', {title:'about' });
res.render('about', {content:'hello' });
};