---
title: 数据科学入门
slug: data-science
date: 2026-04-21
tags: [Python，数据分析，pandas]
---

# 数据科学入门

数据科学是利用数据进行分析、建模和预测的科学。Python 是数据科学的首选语言。

## NumPy：数值计算基础

NumPy 提供了高效的数组运算：

```python
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])

# 数学运算
print(arr * 2)    # [2 4 6 8 10]
print(np.sqrt(arr))  # [1. 1.41 1.73 2. 2.24]

# 统计函数
print(arr.mean())      # 平均值
print(arr.sum())       # 总和
print(np.max(arr))     # 最大值
print(np.min(arr))     # 最小值
```

## Matplotlib：数据可视化

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 5, 3]

plt.figure(figsize=(8, 6))
plt.plot(x, y, marker='o', linewidth=2)
plt.title('示例折线图')
plt.xlabel('X 轴')
plt.ylabel('Y 轴')
plt.grid(True, alpha=0.3)
plt.show()
```

## Pandas：数据分析利器

### 创建 DataFrame

```python
import pandas as pd

# 从字典创建
data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [25, 28, 22],
    '城市': ['北京', '上海', '广州']
}
df = pd.DataFrame(data)

print(df)
```

### 数据筛选

```python
# 条件筛选
adults = df[df['年龄'] >= 25]
beijing = df[df['城市'] == '北京']

# 多条件筛选
selected = df[(df['年龄'] >= 25) & (df['城市'] == '北京')]
```

### 数据操作

```python
# 添加新列
df['薪资'] = [5000, 6000, 4500]

# 删除列
del df['城市']

# 新增行
new_row = {'姓名': '赵六', '年龄': 23, '城市': '深圳', '薪资': 5500}
df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
```

## Seaborn：高级可视化

```python
import seaborn as sns

# 设置样式
sns.set_theme(style="whitegrid")

# 绘制散点图
plt.figure(figsize=(8, 6))
sns.scatterplot(x='年龄', y='薪资', data=df, hue='城市')
plt.title('年龄与薪资关系')
plt.show()
```

## 实战案例：股票分析

```python
import pandas as pd
import matplotlib.pyplot as plt

# 创建示例数据
dates = pd.date_range(start='2024-01-01', periods=365, freq='D')
prices = [100 + (i % 50 - 25) for i in range(365)]

df = pd.DataFrame({'日期': dates, '价格': prices})

# 移动平均线
df['5 日平均'] = df['价格'].rolling(window=5).mean()
df['20 日平均'] = df['价格'].rolling(window=20).mean()

# 绘图
plt.figure(figsize=(14, 7))
plt.plot(df['日期'], df['价格'], label='价格', alpha=0.6)
plt.plot(df['日期'], df['5 日平均'], label='5 日均线', linewidth=2)
plt.plot(df['日期'], df['20 日平均'], label='20 日均线', linewidth=2, linestyle='--')
plt.title('股票价格与均线')
plt.xlabel('日期')
plt.ylabel('价格')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
```

## 常用库速查表

| 库 | 用途 | 安装命令 |
|----|------|---------|
| pandas | 数据分析 | `pip install pandas` |
| numpy | 数值计算 | `pip install numpy` |
| matplotlib | 绘图 | `pip install matplotlib` |
| seaborn | 统计绘图 | `pip install seaborn` |
| scipy | 科学计算 | `pip install scipy` |
| scikit-learn | 机器学习 | `pip install scikit-learn` |

## 小结

数据科学是一个庞大的领域，建议按照以下路径学习：

1. ✅ **NumPy** - 掌握数组运算
2. ✅ **Matplotlib/Seaborn** - 学会数据可视化
3. ✅ **Pandas** - 数据分析核心库
4. ⏭️ **Scikit-learn** - 机器学习算法
5. ⏭️ **TensorFlow/PyTorch** - 深度学习

```python
# 继续探索吧！🚀
print("数据科学之旅，现在开始！")
```
