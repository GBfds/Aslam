import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData={
    user: UserPros;
    isAuthenticated: boolean;
    loading: boolean;
    SignIn: ()=> Promise<void>;
    SignOut: ()=> Promise<void>;
}
type UserPros={
    id: string;
    name: string;
}

type AuthProviderProps={
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData)

export default function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserPros>({
        id: "",
        name: ""
    })

    const isAuthenticated = !!user.name
    const [loading, setLoading] = useState<boolean>(false)    

    async function GetUserLocalStorage(){
        const localUserData = await AsyncStorage.getItem("@userAuthData")
        let hasUser: UserPros = JSON.parse(localUserData || "{}")
        if(Object.keys(hasUser).length > 0){
            setUser({
                id: hasUser.id,
                name: hasUser.name
            })
        }
    }
    async function SignIn(){
        await AsyncStorage.setItem("@userAuthData", JSON.stringify({
            id: "123",
            name: "Gabriel",
        }))
        setUser({
            id: "123",
            name: "Gabriel"
        })
    }
    async function SignOut(){
        setUser({
            id: "",
            name: ""
        })
        await AsyncStorage.setItem("@userAuthData", "{}")
    }

    useEffect(()=>{
        setLoading(true)
        GetUserLocalStorage()
        setLoading(false)
    },[])

    return(
        <AuthContext.Provider value={{user, isAuthenticated, loading, SignIn, SignOut}}>
            {children}
        </AuthContext.Provider>
    )
}