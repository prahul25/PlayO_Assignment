import React from "react";

function ValidationMessage( {errorMessage} ) {
  return errorMessage ? <div className="error-message">{errorMessage(errorMessage)}</div> : null
}

export default ValidationMessage;
