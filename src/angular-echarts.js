// import './style.less'
import echarts from 'echarts'
import angular from 'angular'

let module = angular.module('angular.echarts', [])
let component = {
  controller: ChartController,
  bindings: {
    option: '<',
    onCreate: '&'
  }
}

ChartController.$inject = ['$window', '$element', "$scope"]

function ChartController($window, $element, $scope) {
  let ctrl = this
  $scope.$watch(testVisable, function (v) {
    if (v) {
      if (ctrl.chart) {
        ctrl.chart.resize()
      } else {
        createChart()
      }
    }
  }, true)

  ctrl.$postLink = function () {
    $element.css("display", "block")
    if (testVisable()) {
      createChart()
    }
  }

  ctrl.$onDestroy = function () {
    ctrl.chart.dispose()
  }

  ctrl.$onChanges = function (objects) {
    if (objects.option && ctrl.chart) {
      ctrl.chart.setOption(ctrl.option)
    }
  }

  //根据图表配置绘制图表·
  function createChart() {
    ctrl.chart = echarts.init($element[0])
    if (ctrl.option) {
      ctrl.chart.setOption(ctrl.option)
    }
    ctrl.onCreate({instance: ctrl.chart})
  }

  // 测试元素是否具有可以绘制的高宽。
  function testVisable() {
    return $element[0].offsetWidth > 0 && $element[0].offsetHeight > 0
  }

}

module.component('echarts', component)

export default 'angular.echarts'
