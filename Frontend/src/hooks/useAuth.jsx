import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authReducer";


const useAuth=()=>{
const navigate=useNavigate()
const dispatch=useDispatch()


  const {register,handleSubmit,formState: { errors },} = useForm();

  const onLogin = async (e) => {
    console.log("data is",e)

    try{
      const res=await axiosInstance.post("/api/auth/login",e)
      console.log("response from Login:",res.data.user)
      dispatch(addUser(res.data.user))

    }catch(err){
        console.log("Error in Login",err)
    }



  };
  const onRegister = async(e) => {
    console.log("Data is",e)

       try{
        const res=await axiosInstance.post("/api/auth/register",e)

        console.log("response from register:",res)

    }catch(err){
        console.log("Error in Register",err)
    }

  };

  return {register,handleSubmit,errors,navigate,onLogin,onRegister}
}

export default useAuth