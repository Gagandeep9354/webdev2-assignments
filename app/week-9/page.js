"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return(
        <div>
            <h1>Week 8</h1>
            <p>{user ? "Hi there" : "Please sign in"}</p>
            <p>{user ? user.email: ""}</p>
            {user && user.displayName}
            <p>
                {user ? (
                    <div>
                    <button onClick={firebaseSignOut}>Sign Out</button><br/>
                    <Link href="./secure/page.js">Secure Page</Link>
                    </div>) : 
                    (
                        <button onClick={gitHubSignIn}>Sign in with Github</button>
                    )
                }
            </p>
        </div>
    )
}