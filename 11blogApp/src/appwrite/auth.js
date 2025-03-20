import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";

export class AuthService{
  client = new Client();
  account;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }
  async createAccount({email,password,name}){
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        return this.login({email,password})
      }
       return userAccount
    } catch (error) {
      throw error
    }
  }
  async login({ email, password }) {
    try {
      const session = await this.account.createSession(email, password);
      console.log("Login successful:", session);
      return session;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  }
  
  
  async getCurrentUser() {
    try {
      const session = await this.account.getSession("current");
      if (!session) {
        console.log("No active session found.");
        return null;
      }
      return await this.account.get(); // Fetch user details
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: ", error);
      return null;
    }
  }
  
  async logout(){
    try {
       await this.account.deleteSessions()
    } catch (error) {
      console.log("Appwrite service :: logout() :: ", error)      
    }
  }
}

const authService = new AuthService()

export default authService