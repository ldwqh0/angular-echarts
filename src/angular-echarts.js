import './style.less'

let module = angular.module('angular.echarts', [])
let component = {
  template: '<div>aaa</div>',
  controller: ChartController,
  bindings: {
    option: '<',
    onCreate: '&'
  }
}

ChartController.$inject = ['$window', '$element']
function ChartController($window, $element) {
  let ctrl = this
  ctrl.chart = echarts.init($element.find('div')[0])

  ctrl.$onInit = function () {
    ctrl.onCreate({instance: ctrl.chart})
  }

  ctrl.$postLink = function () {
    angular.element($window).on('resize', sizeChanged)
  }

  ctrl.$onDestroy = function () {
    angular.element($window).off('resize', sizeChanged)
  }

  ctrl.$onChanges = function (objects) {
    if (objects.option.currentValue) {
      let option_ = objects.option.currentValue
      ctrl.chart.setOption(option_)
    }
  }

  function sizeChanged() {
    ctrl.chart.resize()
  }
}

module.component('echarts', component)

export default 'angular.echarts'
