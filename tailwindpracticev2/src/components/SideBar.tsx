import { FaAffiliatetheme,FaAndroid,FaApple,FaFacebookMessenger,FaFirefox, FaEdgeLegacy} from "react-icons/fa"
import SideBarIcons from "./SideBarIcons";



const SideBar:React.FC = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-between bg-primaryC shadow-lg">

            <div>
                <SideBarIcons icon={<FaAffiliatetheme size='32'/>} text={'Moon'}/>
                <SideBarIcons icon={<FaAndroid size='32'/>} text={'Android'}/>
                <SideBarIcons icon={<FaApple size='32'/>} text={'Apple'}/>
                <SideBarIcons icon={<FaFacebookMessenger size='32' />} text={'Messenger'}/>
                <SideBarIcons icon={<FaFirefox size='32'/>} text={'Firefox'}/>
            </div>
            <div>
                <SideBarIcons icon={<FaEdgeLegacy size='32'/>} text={'Firefox'}/>
            </div>
            
        </div>
    )
}

export default SideBar;