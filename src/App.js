import React from 'react';
import './App.css';
import * as firebase from 'firebase';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:"Sing up Free",
      user:'',
      email:'',
      password:'',
      repassword:''
    };
    this.handlePassword =this.handlePassword.bind(this);
    this.handleRepassword =this.handleRepassword.bind(this);
    this.handleEmail =this.handleEmail.bind(this);
    this.handleUser =this.handleUser.bind(this);
    this.onSubmit =this.onSubmit.bind(this);
  }
  //defau components lifele
  handlePassword(event){
       this.setState({password: event.target.value});
  }
  handleRepassword(event){
       this.setState({repassword: event.target.value});
  }
  handleUser(event){
      this.setState({user: event.target.value});
  }
 handleEmail(event){
       this.setState({email: event.target.value});
  }
 onSubmit(){
   if(this.state.password!==this.state.repassword&&this.state.user!==null) alert("Password is  not  math");
   else{
     alert("OH");
      const rootdb = firebase.database().ref().child('users');
      const save =rootdb.child(this.state.user);
      save.set({
        "username":this.state.user,
        "email":this.state.email,
        "password":this.state.password
    });
   }
 }
  componentDidMount(){
    const rootdb = firebase.database().ref().child('title');
    const query = rootdb.child('name');
    query.on('value',snap=>{
      this.setState({
         speed:snap.val()
      })
    })
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
         <form onSubmit={this.onSubmit}>
           <label/>User Name: 
           <input type='text' placeholder='User Name' onChange={this.handleUser}/><br/>
           <label/>Email:  
           <input type='email' placeholder='Email' onChange={this.handleEmail}/><br/>
           <label/>Password:
           <input type='password' placeholder='Password' onChange={this.handlePassword}/><br/>
           <label/>Repeat Password:
           <input type='password' placeholder='Repeat Password' onChange={this.handleRepassword}/><br/>
           <input type='submit' value='ceract account'/>
         </form>
      </div>
    );
  }
}
export default App;
