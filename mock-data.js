// ============================================================
// mock-data.js —— 本地假数据（Day 8 主任务用，Day 8 晚补齐 PRD 字段）
// 作用：在还没接真实后端之前，先扮演"数据库"。
// 页面上的笔记卡片列表读的就是这个文件里的 MOCK_NOTES 数组。
// 第 3 周接真实 API 时，只需要把"读这个数组"换成"发请求拿数据"，
// 页面代码不用大改——这就是 mock 数据的意义。
//
// 字段规范对齐 PRD 第 5 节"数据字段"：
//   title    笔记标题（目录条目、搜索结果显示）
//   chapter  所属章节（目录分组、搜索结果标注位置）
//   category 所属栏目（本期固定为"海事信息化课程"，为扩栏目预留）
//   file     内容文件路径（渲染笔记页的内容来源）
//   summary  一句话摘要（大白话，方便扫一眼就知道讲什么）
//   link     卡片点击跳转地址（#/ 开头是 docsify 的站内路径）
//   updated  最后更新日期（目录条目辅助信息，让读者知道内容新旧）
//   demo     是否为演示用的假笔记（true = 占位卡片，还不能点进真内容）
// ============================================================

window.MOCK_NOTES = [
  {
    title: '海事信息化建设',
    chapter: '第 1 章',
    category: '海事信息化课程',
    file: 'notes/chapter-1/haishi-informatization.md',
    summary: '海事信息化是什么、建什么、怎么建：一张图看懂课程主线。',
    link: '#/notes/chapter-1/haishi-informatization',
    updated: '2026-09-23',
    demo: false
  },
  {
    title: '现代信息技术',
    chapter: '第 2 章',
    category: '海事信息化课程',
    file: 'notes/chapter-2/modern-it.md',
    summary: '物联网、大数据、AI 在海事场景里各自扮演什么角色。',
    link: '#/notes/chapter-2/modern-it',
    updated: '2026-09-24',
    demo: false
  },
  {
    title: '海事数据集',
    chapter: '第 3 章',
    category: '海事信息化课程',
    file: 'notes/chapter-3/maritime-data-set.md',
    summary: 'AIS 船位、气象水文……海事数据从哪来、长什么样。',
    link: '#/notes/chapter-3/maritime-data-set',
    updated: '2026-09-27',
    demo: false
  },
  {
    title: '数据管理基础',
    chapter: '第 4 章',
    category: '海事信息化课程',
    file: 'notes/chapter-4/data-management-basics.md',
    summary: '数据怎么存、怎么管、怎么保证又快又准又不丢。',
    link: '#/notes/chapter-4/data-management-basics',
    updated: '2026-09-27',
    demo: false
  },
  {
    title: '电子航道图入门',
    chapter: '演示卡片',
    category: '演示占位',
    file: '',
    summary: '（假数据）电子海图和纸质海图的区别，为什么航道要"电子化"。',
    link: 'javascript:void(0)',
    updated: '2026-09-28',
    demo: true
  },
  {
    title: 'VTS 交通管理系统',
    chapter: '演示卡片',
    category: '演示占位',
    file: '',
    summary: '（假数据）港口的"空中交警"：VTS 怎么盯着一片海域的船。',
    link: 'javascript:void(0)',
    updated: '2026-09-28',
    demo: true
  },
  {
    title: '智慧港口案例',
    chapter: '演示卡片',
    category: '演示占位',
    file: '',
    summary: '（假数据）自动化码头长什么样：无人桥吊、无人集卡、远程操控。',
    link: 'javascript:void(0)',
    updated: '2026-09-28',
    demo: true
  },
  {
    title: '航海英语术语',
    chapter: '演示卡片',
    category: '演示占位',
    file: '',
    summary: '（假数据）AIS、VTS、ECDIS 这些缩写到底都是啥的英文全称。',
    link: 'javascript:void(0)',
    updated: '2026-09-28',
    demo: true
  }
];
