---
title: Python 入门教程
slug: python-intro
date: 2026-04-20
tags: ["Python", "编程", "入门"]
---

# Python 入门教程

## 为什么 Python？

Python 是 Pythonic 的编程语言：

| 特点 | 说明 |
|------|------|
| 🚀 **简洁** | 代码比其他语言更短 |
| 📝 **可读** | 像伪代码，易理解 |
| 🖼️ **生态** | 丰富的库支持 |
| 🔗 **数据** | 科学计算标准工具 |

## Hello World

```python
print("Hello, World!")
```

## 变量与类型

```python
# 基本类型
name = "Python"      # str
age = 42            # int
price = 3.14        # float
active = True       # bool
```

## 控制结构

### If-Else

```python
if age > 40:
    print("资深开发者")
elif age > 20:
    print("中级开发者")
else:
    print("初学者")
```

### Loops

```python
# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 3:
    print(count)
    count += 1
```

## 函数定义

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Python"))           # Hello, Python!
print(greet("Python", "Hi"))     # Hi, Python!
```

## 列表与字典

```python
# List
fr = ["apple", "banana", "cat"]
fr.append("dog")

# Dict
person = {
    "name": "Python",
    "version": 3.14,
}
```

## 下一步

- [数据科学入门](../data-science/)
- [Astro 框架指南](../astro-guide/)
