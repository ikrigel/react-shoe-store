import { authStore } from './../Redux/Store';
import axios from "axios";
import UserModel from "../Models/UserModel";
import config from "../Utils/Config";
import { loginAction, logoutAction, registerAction } from '../Redux/AuthState';
import CredentialsModel from '../Models/CredentialsModel';
import { Navigate } from 'react-router-dom';
import notifyService from './NotifyService';


class AuthService {

    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(config.urls.register, user);
        const token = response.data;
        authStore.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(config.urls.login, credentials);
        const token = response.data;
        authStore.dispatch(loginAction(token));
    }

    public logout(): void {
        authStore.dispatch(logoutAction());
    }

    public doesUserLoggedIn(): void{
        const loggedIn = authStore.getState().user;
        // alert(loggedIn.username +' logged in');
        if (loggedIn === null) {
            notifyService.success("user isn't logged into the system");
            // <Redirect to="/employees" />
               window.location.href = "/employees/";
        }
        // alert(loggedIn);
    }
    public isLoggedIn(): boolean {
        return authStore.getState().token !== null;
    }

}


const authService = new AuthService();

export default authService;