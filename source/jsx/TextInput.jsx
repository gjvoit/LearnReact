var React = require('react');

var textInputStyle = {
  
}

var TextInput = React.createClass({

	render: function() {
    return (
      <div>
        <p className="text">
          <label htmlFor={this.props.id} className="col-sm-4">{this.props.label}</label>
          <input type="text" name={this.props.name} label={this.props.label} placeholder={this.props.placeholder} value={this.props.value} />
        </p>
      </div>

      )
  }

	, renderField: function(id, label, field) {
    return <div>
      <label htmlFor={id} className="col-sm-6 control-label">{label}</label>
      <div className="col-sm-6">
        {field}
      </div>
    </div>
  }
  , getInitialState: function() {
   return {errors: {}}
  }
})

var trim = function() {
  var TRIM_RE = /^\s+|\s+$/g
  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}()

function $c(staticClassName, conditionalClassNames) {
  var classNames = []
  if (typeof conditionalClassNames == 'undefined') {
    conditionalClassNames = staticClassName
  }
  else {
    classNames.push(staticClassName)
  }
  for (var className in conditionalClassNames) {
    if (!!conditionalClassNames[className]) {
      classNames.push(className)
    }
  }
  return classNames.join(' ')
}

module.exports = TextInput