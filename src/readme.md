# ECharts图表组件
## 使用方法
```html
<echarts option="$ctrl.option" on-create="$ctrl.onCreate(instance)"></echarts>
```
```javascript
ctrl.option={
  ...
}

ctrl.onCreate=function(instance) {
  console.log(instance)
}

```

##属性解析
 * option:图表配置项
 * onCreate:图标创建回调，可以通过instance获取echarts实例
