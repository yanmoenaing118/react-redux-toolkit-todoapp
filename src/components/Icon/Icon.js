import { Icon } from "react-icons-kit";

const MyIcon = ({ icon, width = 24, height = 24, color = "black" }) => (
  <div style={{ width: width, height: height, color: color }}>
    <Icon size={"100%"} icon={icon} />
  </div>
);

export default MyIcon;
