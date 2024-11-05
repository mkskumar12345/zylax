import React from "react";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, onClose,  children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center">
          <div></div>
        
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}


          <div>Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
