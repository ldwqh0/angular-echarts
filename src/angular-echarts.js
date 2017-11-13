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

ChartController.$inject = ['$window', '$element', '$scope']

function ChartController ($window, $element, $scope) {
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

  $scope.$watch('$ctrl.option', v => {
    if (v && ctrl.chat) {
      ctrl.chart.setOption(ctrl.option)
    }
  }, true)

  ctrl.$postLink = function () {
    $element.css('display', 'block')
    if (testVisable()) {
      createChart()
    }
    angular.element($window).on('resize', sizeChanged)
  }

  ctrl.$onDestroy = function () {
    angular.element($window).off('resize', sizeChanged)
    ctrl.chart.dispose()
  }

  //根据图表配置绘制图表·
  function createChart () {
    ctrl.chart = echarts.init($element[0])
    if (ctrl.option) {
      ctrl.chart.setOption(ctrl.option)
    }
    ctrl.onCreate({instance: ctrl.chart})
  }

  // 测试元素是否具有可以绘制的高宽。
  function testVisable () {
    return $element[0].offsetWidth > 0 && $element[0].offsetHeight > 0
  }

  function sizeChanged () {
    if (ctrl.chart) {
      ctrl.chart.resize()
    }
  }
}

module.component('echarts', component)

export default 'angular.echarts'
