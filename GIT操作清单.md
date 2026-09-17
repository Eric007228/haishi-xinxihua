# Git 操作清单（海事信息化项目）

> 记录日期：2026-09-17　|　GitHub 用户名：Eric007228
> 每一步都写明：在哪里操作、命令的作用、成功的现象。

## 第 0 步：环境体检

- **位置**：命令行（终端）
- **做了什么**：检查 Git 是否安装、配置签名、找到项目文件夹
- **成功现象**：`git --version` 显示版本号（本机为 2.55.0）

## 第 1 步：配置 Git 签名（一次性，只做一次）

- **位置**：任意目录的命令行
- **命令与作用**：
  ```
  git config --global user.name "Eric007228"
  git config --global user.email "Eric007228@users.noreply.github.com"
  ```
  给每次提交盖"签名"，让 GitHub 能把提交记录算到你账上。邮箱用 GitHub 隐私格式，**不暴露真实邮箱**。
- **成功现象**：再次运行 `git config --global user.name` 能显示 `Eric007228`

## 第 2 步：写 `.gitignore`（敏感文件防护网）

- **位置**：项目文件夹 `C:\Users\ASUS\Desktop\海事信息化` 根目录
- **作用**：黑名单机制——列在里面的文件 Git 永远无视、不会上传。本项目的 PDF 课程资料和未来的密钥文件（.env、*.key 等）都在黑名单里。
- **成功现象**：文件存在，且第 4 步验证时看不到被忽略的文件

## 第 3 步：Git 初始化 + 第一次提交（保存第一个版本）

- **位置**：项目文件夹内打开命令行
- **命令与作用**：
  ```
  cd C:\Users\ASUS\Desktop\海事信息化   ← 进入项目文件夹
  git init                              ← 把这个文件夹变成 Git 仓库（生成隐藏的 .git 文件夹）
  git add .                             ← 把要保存的文件放进"暂存区"（待拍板清单）
  git status                            ← 检查一下：该传的在列，敏感的不在
  git commit -m "第一次提交：项目初始化"  ← 正式拍板，把暂存区内容存成第一个版本
  ```
- **成功现象**：
  - `git init` 显示 `Initialized empty Git repository`
  - `git status` 的文件列表里**只有** `.gitignore`、`README.md`、`GIT操作清单.md`，**没有任何 PDF**
  - `git commit` 显示类似 `2 files changed`（或 3 个文件）和一串版本号（如 `a1b2c3d`）

## 第 4 步：推送前安全自检（上传前最后一道关）

- **位置**：项目文件夹内
- **命令与作用**：
  ```
  git ls-files    ← 列出"确定会被上传"的所有文件
  ```
- **成功现象**：列表里**没有** `.pdf`、`.env`、`.key` 等任何敏感文件。如果出现，立即停下并检查 `.gitignore`。

## 第 5 步：在 GitHub 网页上建仓库

- **位置**：浏览器打开 https://github.com/new
- **操作**：
  1. Repository name 填 `haishi-xinxihua`
  2. 选 **Public**（公开）
  3. **不要**勾选 "Add a README"（本地已有，勾了会冲突）
  4. 点绿色按钮 `Create repository`
- **成功现象**：跳转到仓库页面，显示一串"推送到现有仓库"的命令提示

## 第 6 步：连接远程仓库并推送

- **位置**：项目文件夹内
- **命令与作用**：
  ```
  git remote add origin https://github.com/Eric007228/haishi-xinxihua.git
      ← 告诉本地仓库"你的云端备份在 GitHub 的这个地址"
  git push -u origin main
      ← 把本地第一个版本推送到 GitHub（-u 建立跟踪关系，以后只需 git push）
  ```
- **成功现象**：
  - 第一次推送会弹出 GitHub 登录窗口 → 登录你的账号并授权
  - 命令行显示 `Writing objects: 100%` 和 `Branch 'main' set up to track remote branch`
- **验证**：浏览器打开 https://github.com/Eric007228/haishi-xinxihua ，能看到 README 和清单文件，**搜不到任何 PDF**

## 日常使用口诀（保存版本三连）

```
git add .        ← 收集改动
git commit -m "说明这次改了啥"  ← 存版本
git push         ← 推上云端
```
