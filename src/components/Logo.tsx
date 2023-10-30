import { Image } from "antd";
import { Link } from "react-router-dom";
import PATH from "src/constants/path";

interface Props {
  size?: "small" | "medium" | "large";
  white?: boolean;
}

const listSize = {
  small: 46,
  medium: 56,
  large: 80
};

function Logo(props: Props) {
  const { size = "medium", white = true } = props;
  return (
    <Link to={PATH.home}>
      <Image
        src={
          white
            ? "https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo-white.svg"
            : "https://cdn.getyourguide.com/supplier-portal/assets/header_logo-bcddec0c.svg"
        }
        width={listSize[size]}
        height={listSize[size]}
        preview={false}
      />
    </Link>
  );
}

export default Logo;
