export default function({store,redirect}){
    if(!store.state.user){
        console.log("In Middleware")
        redirect("/signin")
    }
}