module.exports = {
  root: true,
  parser: 'babel-eslint',
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 修改缩进为4个空格
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    // 不强制检测行尾的分号
    'semi': ['warn', 'never']
  }
}