import react, { Component } from 'react';

class AuthForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="row">
                <form action="" className="col s4">
                    <div className="input-field">
                        <label>Email</label>
                        <input
                            value={this.state.email}
                            onChange={e => this.state({email: e.target.value})}
                            type="text" />
                    </div>
                    <div className='input-field'>
                        <label>Password</label>
                        <input
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                            type="text"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default AuthForm