var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{author: 'Chay', title:'Ngon'});
});

/* GET home page. */
router.get('/chitiet/*.:idsanpham', function(req, res, next) {
  var idsp = req.params.idsanpham;
  if(!req.session.sanphamdaxem){
    req.session.sanphamdaxem = [];
  }

  if(req.session.sanphamdaxem.indexOf(idsp) == -1){
    req.session.sanphamdaxem.push(idsp);
  }
  res.render('chitiet',{idsanpham: req.params.idsanpham, author: 'Chay', title:'Ngon'});
});
/* GET home page. */
router.get('/ds', function(req, res, next) {
  res.render('ds',{danhsach: req.session.sanphamdaxem });
});
module.exports = router;
