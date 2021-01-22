import { Auth } from "aws-amplify";

async function handleSendCodeClick(event) {
  event.preventDefault();

  setIsSendingCode(true);

  try {
    await Auth.forgotPassword(fields.email);
    setCodeSent(true);
  } catch (error) {
    onError(error);
    setIsSendingCode(false);
  }
}

async function handleConfirmClick(event) {
  event.preventDefault();

  setIsConfirming(true);

  try {
    await Auth.forgotPasswordSubmit(fields.email, fields.code, fields.password);
    setConfirmed(true);
  } catch (error) {
    onError(error);
    setIsConfirming(false);
  }
}
