const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// 辅助函数：读取 JSON 数据
function loadData(filename) {
  try {
    const filePath = path.join(__dirname, '..', 'data', filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (err) {
    console.error(`读取数据文件 ${filename} 失败:`, err.message);
    return { title: '', items: [] };
  }
}

// 首页
router.get('/', (req, res) => {
  res.render('index', {
    title: '天国拯救 · 世界',
    currentPage: 'home'
  });
});

// 世界观
router.get('/world', (req, res) => {
  const data = loadData('world.json');
  res.render('world', {
    title: '世界观',
    currentPage: 'world',
    data
  });
});

// 角色
router.get('/characters', (req, res) => {
  const data = loadData('characters.json');
  res.render('characters', {
    title: '主要角色',
    currentPage: 'characters',
    data
  });
});

// 地点
router.get('/locations', (req, res) => {
  const data = loadData('locations.json');
  res.render('locations', {
    title: '重要地点',
    currentPage: 'locations',
    data
  });
});

// 时间线
router.get('/timeline', (req, res) => {
  const data = loadData('timeline.json');
  res.render('timeline', {
    title: '时间线',
    currentPage: 'timeline',
    data
  });
});

// 历史
router.get('/history', (req, res) => {
  const data = loadData('history.json');
  res.render('history', {
    title: '历史背景',
    currentPage: 'history',
    data
  });
});

module.exports = router;
