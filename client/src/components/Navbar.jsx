import './Navbar.css'
import ConnectedAccount from "./ConnectedAccount";
const Navbar = () => {
    return (  
        <div id='nav' className=" w-full h-[80px] bg-red-300 flex justify-center items-center border-b-1 border-gray-700 ">
         <ConnectedAccount />
         <a href="/">
            <button class="Log_out_btn">
                <p>Connect Wallet</p>
            </button>
        </a>
        </div> 
    );
}
 
export default Navbar;