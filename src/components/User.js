import React from 'react';
import {Link,Route} from 'react-router-dom';
import InitTable from './initTable';
import MyTable from './MyTable';
import AboutTable from './AboutTable';
class User extends React.Component {
constructor(){
    super();
    this.state={
        tab1:'is-active',
        tab2:'',
        tab3:'',
    }
    this.tab1_onclick =this.tab1_onclick.bind(this);
    this.tab2_onclick =this.tab2_onclick.bind(this);
    this.tab3_onclick =this.tab3_onclick.bind(this);
}
tab1_onclick(){
   this.setState({tab1:"is-active",
                   tab2:'',
                   tab3:'',
      });
}
tab2_onclick(){
   this.setState({tab2:"is-active",
                 tab1:'',
                 tab3:'',
});
}
tab3_onclick(){
   this.setState({tab3:"is-active",
                    tab1:'',
                   tab2:'',});
}
    render() {
        return (
            <div>
                <div className="tabs is-centered is-boxed">
                    <ul>
                        <li className={this.state.tab1} onClick={this.tab1_onclick}><Link to='/user/table'>MyTable</Link></li>
                        <li className={this.state.tab2} onClick={this.tab2_onclick} ><Link to='/user/init'>Init</Link></li>
                        <li className={this.state.tab3} onClick={this.tab3_onclick} ><Link to='/user/about'>About</Link></li>
                    </ul>
                </div>
                <Route path='/user/table' component={MyTable}/>
                <Route path='/user/init' component={InitTable}/>
                <Route path='/user/about' component={AboutTable}/>
            </div>
        );
    }
}
export default User;