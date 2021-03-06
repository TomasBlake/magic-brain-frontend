import React, {Component} from 'react';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    onEmailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChangeHandler = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSigninHandler = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email, 
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.routeChange('mainpage');        
            } else {
                console.log('[ERROR]');
            }
        })
    }
    
    render () {
        const {routeChange} = this.props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor='email-adress'>Email</label>
                            <input onChange={this.onEmailChangeHandler} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChangeHandler} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                </fieldset>
                <div className="">
                    <input onClick={this.onSubmitSigninHandler} 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => routeChange('register')} 
                    className="f6 pointer link dim black db">
                    Register
                    </p>
                </div>
            </div>
        </main>
    </article>
    );
    }
}

export default Signin;