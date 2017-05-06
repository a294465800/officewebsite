/**
 * Created by Administrator on 2017/5/6.
 */
var express = require('express'),
	router = express.Router();

//渲染首页
router.get('/',function (req, res) {
	res.render('main/index');
});

module.exports = router;