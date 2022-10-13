import React, { useState } from "react";
// import Modal from '../components/Modal'
import SignIn from "../components/SigninModal";

const signin = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <SignIn
        isvisible={modal}
        onClose={setModal}
      />
      {/* <Modal */}
    </>
  );
};

export default signin;
