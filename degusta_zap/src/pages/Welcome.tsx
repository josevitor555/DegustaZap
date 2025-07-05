// import React from 'react'

// Import Left Col Component
import LeftCol from '../components/LeftCol';

// Import Right Col Component
import RightCol from '../components/RightCol';

// Login Page
const Login = () => {
    return (
        <div className='grid grid-cols-2 min-h-screen w-screen'>

            {/* Left Col */}
            <div className="flex-1 flex items-center justify-center">
                <LeftCol />
            </div>

            {/* Right Col */}
            <div className="flex-1 flex items-center justify-center">
                <RightCol />
            </div>
        </div>
    );
}

export default Login;
