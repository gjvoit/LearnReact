var MyForm = React.createClass({
    render: function() {
      return (
        <div>
          <p> Hello from test.js </p>
        </div>
      )
    }
})

React.render(<MyForm />, document.getElementById('brandform'))