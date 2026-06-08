const express = require('express');
const path = require('path');
const pagesRouter = require('./routes/pages');

const app = express();
const PORT = process.env.PORT || 3000;

// 设置 EJS 模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', pagesRouter);

// 404 处理
app.use((req, res) => {
  res.status(404).render('404');
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🏰 天国拯救世界观网站已启动: http://localhost:${PORT}`);
});

