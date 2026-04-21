---
title: Python 入门教程
slug: python-intro
date: 2026-04-21
tags: [Python, 教程，入门]
---

# Python 入门教程

欢迎来到 Python 学习的世界！本文是 Python 基础知识的介绍。

## 为什么选择 Python？

Python 是一种**通用编程语言**，具有简单易懂的语法，被广泛应用于：

- 📊 **数据分析** - pandas, numpy
- 🤖 **人工智能** - tensorflow, pytorch
- 🐍 **自动化脚本** - web scraping, file management
- 🎮 **游戏开发** - pygame, unity python 插件

## 安装 Python

### Windows

1. 访问 https://www.python.org/downloads/
2. 下载最新版本的 Python
3. 勾选 **"Add Python to PATH"**（重要！）
4. 运行安装程序

验证安装：

```bash
python --version
# 应该输出：Python 3.x.x
```

## 第一个程序

创建文件 `hello.py`，写入以下内容：

```python
print("Hello, World!")
```

运行：

```bash
python hello.py
# 输出：Hello, World!
```

## 变量和数据类型

```python
# 字符串
name = "Python"
message = f"Hello, {name}!"

# 数字
age = 25
height = 1.75
pi = 3.14159

# 布尔值
is_learning = True
is_ready = False

# 列表
fruits = ["apple", "banana", "orange"]

# 字典
person = {
    "name": "张三",
    "age": 28,
    "hobbies": ["阅读", "编程", "运动"]
}
```

## 控制流程

### if 语句

```python
score = 85

if score >= 90:
    print("优秀！")
elif score >= 70:
    print("良好！")
else:
    print("继续努力！")
```

### for 循环

```python
# 遍历列表
for fruit in fruits:
    print(f"喜欢 {fruit}")

# range() 函数
for i in range(3):
    print(i)  # 输出：0, 1, 2
```

### while 循环

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## 函数

```python
def greet(name, age):
    """简单的问候函数"""
    return f"{name}，今年{age}岁"

message = greet("小明", 20)
print(message)  # 输出：小明，今年 20 岁
```

## 文件操作

读写文本文件：

```python
# 写入文件
with open("notes.txt", "w") as file:
    file.write("这是第一行\n")
    file.write("这是第二行\n")

# 读取文件
with open("notes.txt", "r") as file:
    content = file.read()
    print(content)
```

## 常用模块

### math - 数学运算

```python
import math

print(math.sqrt(16))     # 4.0
print(math.pi)           # 3.14159...
print(math.pow(2, 10))   # 1024
```

### random - 随机数

```python
import random

print(random.randint(1, 6))    # 1-6 的随机整数
print(random.choice(["a", "b", "c"]))  # 随机选择一个
```

## 图片显示（可选）

使用 `Pillow` 库查看和编辑图片：

```bash
pip install Pillow
```

```python
from PIL import Image

img = Image.open("image.png")
img.show()  # 弹出图片查看器
```

## 总结

恭喜你完成了 Python 入门教程！下一步可以学习：

1. ⭐ **面向对象编程** - class, inheritance
2. 📚 **第三方库** - pip, requirements.txt
3. 🐍 **数据结构** - list, dict, set, tuple
4. 📝 **文件处理** - CSV, JSON 读写

```python
# Happy Coding! 💻
```
