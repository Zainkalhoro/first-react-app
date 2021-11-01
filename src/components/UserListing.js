import { useState } from "react";


const UserInfo = () => {
    const  [name,setName] = useState("Zain Ul Abidin");
    const [age, setAge] = useState(24);

}
return <div className="user">
    <p>{ name } is {age} 
    </p>

</div>