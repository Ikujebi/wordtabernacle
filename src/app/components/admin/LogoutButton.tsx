import  {FC, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const LogoutButton: FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");
    navigate("/", {
      replace: true,
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const logoutHandler = () => {
    showModal();
  };

  return (
    <div className="flex items-center">
      <button
        className="flex items-center justify-center gap-4 p-4 text-slate-400 text-xl"
        onClick={logoutHandler}
      >
        <BiLogOut />
        <p className="hidden md:block">Log Out</p>
      </button>
      <Modal
        title="Logout"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
};

export default LogoutButton;
