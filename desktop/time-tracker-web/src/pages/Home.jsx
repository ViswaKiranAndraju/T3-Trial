// export default function Home() {
//     return (
//         <div>
//             <h2 className="text-xl">Welcome to Mercor Time Tracker</h2>
//             <p>Once your account is verified, download the desktop app:</p>
//             <a
//                 href="/downloads/time-tracker-app.zip"
//                 className="bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block"
//             >
//                 Download Desktop App
//             </a>
//         </div>
//     );
// }

export default function Home() {
    return (
        <div>
            <h2>Welcome to Mercor Time Tracker</h2>
            <p>
                Please verify your account first. Once verified, you can download our
                desktop time tracking app to start logging your work.
            </p>
            <a
                href="/downloads/time-tracker-app.zip"
                className="button"
            >
                Download Desktop App
            </a>
        </div>
    );
}
