import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';

const LoginGoogle = () => {
    const responseGoogle = response => {
        // console.log(response);
        const tokenId = response.tokenId;
        const user = { tokenId };

        loginWithGoogle(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 'Dealer') {
                        Router.push(`/dealer`);
                    } else if (isAuth() && isAuth().role === 'Shopper') {
                        Router.push(`/shopper`);
                    } else if (isAuth() && isAuth().role === 'Customer') {
                        Router.push(`/customer`);
                    }
                });
            }
        });
    };

    return (
        <div className="pb-3">
            <GoogleLogin
                clientId={`${GOOGLE_CLIENT_ID}`}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                theme="dark"
            />
        </div>
    );
};

export default LoginGoogle; 