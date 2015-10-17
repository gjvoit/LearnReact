var React = require('react');
var ReactDOM = require('react-dom');
var TextInput = require('./TextInput.jsx');

var TopArticle = React.createClass({

/*  getInitialState: function() {

  }
*/
  handleSubmit: function() {

  }

, renderMyInput: function(name, placeholder, label ) {
  return (
    <TextInput required placeholder={placeholder} label={label} ref={name} name={name} id={name} />
    )
  }

, render: function() {
    return (
      <div>
        <h1>Top Article</h1>
        <TextInput required placeholder="19.99" label="Price:" name="price" ref="price" id="price"/>
        <TextInput required placeholder="www.amazon.com/myproduct" label="Weblink: " name="weblink" id="weblink" ref="weblink" />
        <TextInput required placeholder="Cotton" label="Fabric Type: " ref="fabric" name="fabric" id="fabric"/>
        <TextInput required placeholder="Business casual" label="Dress Code: " ref="dressCode" name="dressCode" id="dressCode"/>
        <TextInput required placeholder="Machine washable" label="Garment care: " ref="garmentCare" name="garmentCare" id="garmentCare" />
        <TextInput required placeholder="The hottest v neck" label="Description: " ref="description" name="description" id="description" />
        <TextInput required placeholder="S, M, L" label="Basic size: " ref="basicSize" name="basicSize" id="basicSize" />
        <TextInput placeholder="34" label="Chest Circumference: " ref="chestCircumference" name="chestCircumference" id="chestCircumference" />
        <TextInput required placeholder="16" label="Neck: " ref="neckCircumference" name="neckCircumference" id="neckCircumference" />
        {this.renderMyInput("bodyType", "Slim, Regular", "Body Fit: " )}
      </div>
    );
  }
, componentDidMount: function() {
  
}
});

module.exports = TopArticle