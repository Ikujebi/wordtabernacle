import { FC, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { Modal } from "antd";

const LogoutButton: FC = () => {
  const router = useRouter(); // Call useRouter at the top level of the component
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    // Clear session storage
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userRole");
    }
    // Navigate to the login page
    router.replace("/"); // Call router.replace directly, not in a callback
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
