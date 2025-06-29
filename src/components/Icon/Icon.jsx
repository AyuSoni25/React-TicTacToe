import {FaTimes, FaRegCircle, FaPen} from 'react-icons/fa';
import './Icon.css';

function Icon({iconName}){
    let icon;
    if(iconName == 'X'){
        icon = <FaTimes/>;
    } else if(iconName == 'O'){
        icon = <FaRegCircle/>;
    } else {
        icon = <FaPen/>;
    }

    return <div className='icon'>
        {icon}
    </div>
}

export default Icon;