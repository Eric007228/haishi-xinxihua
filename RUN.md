# 运行说明（RUN.md）

> 写于 2026-09-23（Day 7）。这个网站是"纯静态"的：没有后端、不用安装任何东西，
> 只要起一个本地文件服务器，浏览器就能打开。

## 一、本地启动（今天已验证可跑）

**前提：** 电脑上装了 Python（WorkBuddy 自带的就行）。

**第 1 步：打开命令行，进入项目文件夹**

```
cd C:\Users\ASUS\Desktop\海事信息化
```

**第 2 步：启动本地文件服务器**

```
python -m http.server 8000
```

成功现象：命令行显示 `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...`，并且一直停在那里不退（它正在"值班"）。

**第 3 步：浏览器打开**

```
http://localhost:8000
```

应能看到：左侧"栏目 → 章节"目录，首页是项目说明，点章节进入笔记页，搜索框输入"港口"能搜到第 1 章。

**第 4 步：停止服务器**

在命令行按 `Ctrl + C`。

## 二、为什么不直接双击 index.html 打开？

双击打开时浏览器地址是 `file:///...` 开头。docsify 需要用 HTTP 请求去拉 `_sidebar.md` 和笔记文件，
而浏览器出于安全限制**禁止 file:// 页面发这类请求**——页面会一直卡在"正在加载"。
所以必须先起一个本地服务器（第 2 步的作用就是"在本机 8000 端口开了个小卖部"，浏览器去它那里拿文件）。

## 三、常见问题（排错口诀）

| 现象 | 原因与处理 |
|---|---|
| 页面一直"正在加载"或白屏 | 服务器没启动（先看第 2 步的命令行有没有在跑）；或 CDN 脚本没加载出来（见下一行） |
| 控制台（F12）报 docsify 脚本加载失败 | `index.html` 里 3 个 `cdn.staticfile.net` 链接换成国内备用源 `cdn.bootcdn.net/ajax/libs/docsify/4.13.1/...`（文件名不变） |
| 提示端口被占用（Address already in use） | 换个端口：`python -m http.server 8001`，浏览器也相应改成 8001 |
| 刚加的新笔记搜不到 | 搜索索引缓存 1 小时（`index.html` 里的 `maxAge`），等一下或清浏览器缓存后刷新 |
| 笔记改了但页面没变 | 按 `Ctrl + F5` 强制刷新（浏览器缓存了旧文件） |

## 四、上线到 GitHub Pages（下一步，需要你自己在网页上点）

1. 把本地改动 push 上 GitHub（本仓库日常三连：`git add .` → `git commit -m "..."` → `git push`）
2. 打开仓库页面 → **Settings → Pages** → Source 选 **Deploy from a branch**，分支 `main`、目录 `/ (root)`，保存
3. 等 1~2 分钟，用无痕窗口打开 `https://eric007228.github.io/haishi-xinxihua/` 验证
4. 仓库里已有 `.nojekyll` 空文件——它的作用是让 `_sidebar.md` 这种下划线开头的文件不被 GitHub 忽略（技术设计文档第 9 节第 2 条提前预警过的坑）

## 五、日常加一篇笔记的固定三步

1. 在 `notes/chapter-x/` 下新建 `.md` 文件（文件名用英文小写）
2. 在 `_sidebar.md` 里加一行链接（不加的话：页面上能打开，但目录和搜索里不会出现）
3. `git add .` → `git commit -m "说明"` → `git push`
