// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function VerifyEmployee() {
//     const { id } = useParams();
//     const [status, setStatus] = useState('Verifying...');

//     useEffect(() => {
//         axios
//             .put(`http://localhost:3000/employees/${id}`, { isActive: true })
//             .then(() => setStatus('Your account has been verified! You can now download the desktop app.'))
//             .catch(() => setStatus('Verification failed. Please contact support.'));
//     }, [id]);

//     return (
//         <div>
//             <h2 className="text-xl">{status}</h2>
//         </div>
//     );
// }

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function VerifyEmployee() {
    const { id } = useParams();
    const [status, setStatus] = useState('Verifying your account...');

    useEffect(() => {
        axios
            .put(`http://localhost:3000/employees/${id}`, { isActive: true })
            .then(() =>
                setStatus('Your account has been verified! You can now download the desktop app.')
            )
            .catch(() =>
                setStatus('Verification failed. Please contact support.')
            );
    }, [id]);

    return (
        <div>
            <h2>Account Verification</h2>
            <div className="status">{status}</div>
            {status.includes('verified') && (
                <a href="/" className="button" style={{ marginTop: '20px', display: 'inline-block' }}>
                    Go to Home
                </a>
            )}
        </div>
    );
}
