/**
 * @note   setOnline 线上接口 配置
 * @param  name  本地接口名
 *         type  接口类型
 *         url   线上接口地址
 */
var setOnline = [
  { //
    name: 'save',
    type: 'delete',
    url: '/admin/del'
  }

]
var fs = require('fs')

// 输出配置项
exports.setOnline = setOnline

// 遍历输出json数据
for (var i = 0, len = setOnline.length; i < len; i++) {
  (function (i) {
    var name = setOnline[i].name
    exports[name] = function (req, res) {
      fs.readFile('./mock/admin/' + name + '.json', function (err, data) {
        if (err) throw err
        res.json(JSON.parse(data))
      })
    }
  })(i)
}

