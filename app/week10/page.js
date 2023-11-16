"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        await gitHubSignIn();
    }
    
    async function handleSignOut() {
        await firebaseSignOut();
    }

    return (
        <div>
            <div>
                <h1>Welcome to Week 8!</h1>
                {!user && <h1>Sign in to View Week 8</h1>}
                {!user && <button onClick = {handleSignIn}>Sign In</button>}
            </div>
            <div>
                {user && <h1>Sign Out if You're a Loser!</h1>}
                {user && <button onClick = {handleSignOut}>Sign Out</button>}
            </div>
        </div>
    )
}
