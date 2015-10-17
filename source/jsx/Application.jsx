var React = require('react');
//var TextInput = require('./TextInput.react')
var BasicInfo = require('./BasicInfo.jsx')
var TopArticle = require('./TopArticle.jsx')

var Application = React.createClass({
  getInitialState: function() {
    return {
      numTops: 0,
      numBottoms: 0
    }
  }
  , 
  createBoxes: function(numTops, numBottoms) {
    this.setState({
      numTops: numTops,
      numBottoms: numBottoms
    })
  }
  , render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p> Hello from left </p>
            <BasicInfo initSubmit={this.createBoxes}/>
            <TopArticle />
          </div>

          <div className="col-md-6">
            <p> Hello from right </p>
          </div>
        </div>
      </div> 
    );
  }

});

module.exports = Application;