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

ChartController.$inject = ['$window', '$element']

function ChartController($window, $element) {
  let ctrl = this

  ctrl.$postLink = function () {
    $element.css('display', 'block')
    // 优先判断是否有width属性
    $element.css('width', '100%')
    ctrl.chart = echarts.init($element[0])
    if (ctrl.option) {
      ctrl.chart.setOption(ctrl.option)
    }
    ctrl.onCreate({instance: ctrl.chart})
    angular.element($window).on('resize', sizeChanged)
  }

  ctrl.$onDestroy = function () {
    ctrl.chart.dispose()
    angular.element($window).off('resize', sizeChanged)
  }

  ctrl.$onChanges = function (objects) {
    if (objects.option && ctrl.chart) {
      ctrl.chart.setOption(ctrl.option)
    }
  }

  function sizeChanged() {
    ctrl.chart.resize()
  }
}

module.component('echarts', component)

export default 'angular.echarts'
