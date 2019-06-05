import React from "react";
import { useConfirm } from "./useConfirm";

const UseConfirmPage = () => {
  const deleteWorld = () => console.log("Delete the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <h1>UseConfirmPage</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirmPage;
