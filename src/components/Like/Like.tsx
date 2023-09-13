import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart size={20} color="#ff6b81" onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
