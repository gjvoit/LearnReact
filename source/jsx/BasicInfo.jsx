var React = require('react');
var ReactDOM = require('react-dom');
var TextInput = require('./TextInput.jsx');
var buttonStyle = {

}

var BasicInfo = React.createClass({

  getInitialState: function() {
    return {
      numTops: 0,
      numBottoms: 0
    }
  }

, handleClick: function(event) {
  console.log(this.props.numTops)
}

, render: function() {

    return (
      <form>
        <h1>Basic Brand Info</h1>
        <TextInput required placeholder="Fall Collection 2015" label="Collection Name:" name="collectionName" ref="collectionName" id="collectionName"/>
        <TextInput required placeholder="0, 1, 2" label="Brand ID: " name="brandid" id="brandid" ref="brandid" />
        <TextInput required placeholder="0, 1, ..., 20" label="Number of Tops: " ref="numTops" name="numTops" id="numTops"/>
        <TextInput required placeholder="0, 1, ..., 20" label="Number of Bottoms: " ref="numBottoms" name="numBottoms" id="numBottoms"/>
        <div style={buttonStyle}>
        <input type="submit" onClick={this.props.initSubmit(1, 2)} value="Generate Form"/>
        </div>
      </form>
    );
  }
, componentDidMount: function() {
}
});

module.exports = BasicInfo