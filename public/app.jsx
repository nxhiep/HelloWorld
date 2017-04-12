var  GreeterMess = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Some H1</h1>
        <h5>Some paragraph</h5>
      </div>
    );
  }
});

var GreeterFrom = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;

    if(typeof name == "string" && name.length > 0){
      nameRef.value = "";
      this.props.newName(name);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Hiep'
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      mess: "Mess"
    };
  },
  handlerNewName: function(name){
    this.setState({
      name: name
    });
  },
  render: function(){
    var name = this.state.name;
    var mess = this.props.mess;
    return (
      <div>
        <h1>Hello {name}!</h1>

        <GreeterMess />
        <GreeterFrom newName={this.handlerNewName}/>
      </div>
    );
  }
});

var name = "nxhiep";

ReactDOM.render(
  <Greeter name={name} mess="message from prop!"/>,
  document.getElementById('app')
);
