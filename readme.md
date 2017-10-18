# ECharts图表组件

## 组件需求
  如果需要编译组件，需要node 6.10.xx +  
  组件基于angularjs 1.5+ 编写，不适用于1.5-版本，也不适用于angular2.0+版本  
  echarts版本至少3.0+
## 使用方法
完整的使用示例请参考sample/index.html
```html
<echarts option="option" on-create="onCreate(instance)"></echarts>
```
```javascript
$scope.option={
  ...
}

$scope.onCreate=function(instance) {
  console.log(instance)
}

```

##属性解析
 * option:图表配置项
 * onCreate:图标创建回调，可以通过instance获取echarts实例
 
 ## 项目的编译与测试
 * git clone https://github.com/ldwqh0/angular-echarts.git 到本地
 * 运行npm install 安装依赖项
 * npm run build 执行编译。
 * 运行simple中的index.html 可以看到使用效果
 
 
 ## 相关资料
 echarts: http://echarts.baidu.com/#  
 angularjs: https://angularjs.org/  
 
