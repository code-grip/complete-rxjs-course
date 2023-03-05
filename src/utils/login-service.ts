import { delay, Observable, of, tap } from "rxjs";
import type { ILoginData, IUser } from "./interfaces";

export class LoginService {
    loggedInUserToken: string;

    /**
     * fake login function, to demonstrate {@link tap} use case
     * @param the user {@link IUser} which we want to login and create a login token for
     * @returns the loginData {@link ILoginData}
     */
    loginUser(user: IUser): Observable<ILoginData> {
        const randomToken = this.generateToken();

        // problem:
        // We only want to subscribe to this Observable<ILoginData> 
        // when the "loginUser" function is called somewhere else.
        // But in this case we also want to use the data from this subscription
        // to update the "loggedInUserToken" variable

        // solution:
        // The tap operator gives us the opportunity to predefine
        // which variable we want to update in this class 
        // before the loginUser function is called to create a new subscription

        // "of" operator simulates the response of a login HTTP request
        return of({ userName: user.name, token: randomToken }).pipe(
            // simulates execution time
            delay(Math.random() * 1500),

            // We're using the tap operator to update the local variable "tokenLoggedInUser"
            // before we subscribe somewhere else
            tap((loginData: ILoginData) => {
                // console.log(
                //     `(loginUser) I created a login token & stored it in the LoginService class`
                // );
                this.loggedInUserToken = loginData.token;
            }),
        )
    }

    /** Don't use this token generator in real life, use JWT or something else that is more secure & useful */
    private generateToken() {
        let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        let characters = [];
        for (let i = 0; i < 32; i++) {
            let j = (Math.random() * (a.length - 1)).toFixed(0);
            characters.push(a[j]);
        }
        return characters.join("");
    }
}

