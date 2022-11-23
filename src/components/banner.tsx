import { FunctionComponent } from "react";
import bell from '../images/bell.png';
import '../t42bootstrap.bundle.css';
import '../App.css';

interface BannerProps {
    visible: boolean;
}
export const Banner: FunctionComponent<BannerProps> = ({ visible, children }) => {
    return (
        <div className="t42-caption-bar-button-notifications">
            <a hidden={!visible} className="nav-link" href="#">
                <i className="icon-bell-alt mx-2"></i>
                <span id="notifications-count" className="circle-index text-white">{children}</span>
            </a>
        </div>
    );
};
