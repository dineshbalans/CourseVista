const Modal = ({children}) => {
  return (
    <div
      class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    >
      {children}
    </div>
  );
};

export default Modal;
