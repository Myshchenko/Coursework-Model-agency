import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../DTOs/User";

export default class UserStore {

    currentUser: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    login = async (creds: UserFormValues) => {
        try {
            //const user = await agent.Account.login(creds);
            //runInAction(() => this.currentUser = user);
            //history.push('/findOpponent');
        }
        catch (error) {
            throw error;
        }
    }

    logout = () => {
        this.currentUser = null;
        //history.push('/');
    }

    register = async (creds: UserFormValues) => {
        try {
            //const user = await agent.Account.register(creds);
            //runInAction(() => this.currentUser = user);
            //history.push('/findOpponent');
        }
        catch (error) {
            throw error;
        }
    }
    
}