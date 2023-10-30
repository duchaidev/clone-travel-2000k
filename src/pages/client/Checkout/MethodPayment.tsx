import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import PATH from "src/constants/path";
import Modal from "src/components/Modal";

interface Props {
  formValue: Object;
  setValid: Function;
  subTotal: number;
}

function MethodPayment({ formValue, setValid, subTotal }: Props) {
  const [payment, setPayment] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setRadio(e.target.value);
  };
  const handleBack = () => {
    setValid(false);
  };

  const handleConfirm = () => {
    navigate(PATH.home);
  };

  return (
    <>
      <div className="col-end-5 w-11/12 bg-[#f5f5f5] p-6 mt-5 rounded-xl">
        <div className="text-2xl font-semibold pb-2 border-textColor border-b ">Method payment</div>
        <div className="my-6">
          <PayPalScriptProvider
            options={{
              "client-id": "ATdIMK863PUHVxaIZlrr8WU2Gh3RZaFlzVPiWM6n8XjlGS_WSm3G5ySM4yDvpK9gX19MG3F1EHGCVQ9X"
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${subTotal}`,
                        currency_code: "USD"
                      }
                    }
                  ]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  console.log(details);
                  setPayment("ONLINE");
                });
              }}
              onCancel={(data) => {
                setOpen2(true);
              }}
              onError={(data) => {
                setOpen1(true);
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <button
        className="text-primary decoration-solid underline text-base font-medium italic mt-4"
        onClick={handleBack}
      >
        <div className="flex">Back to CheckOut</div>
      </button>
      <Modal open={open} className={"top-[-100px]"}>
        <div className="text-2xl font-semibold mb-4"> Order Successful</div>
        <div className="max-w-[350px] text-justify ">
          Thank you for choosing our products. This email serves as confirmation of your order and provides details
          regarding your purchase.
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={handleConfirm}
        >
          Back homepage
        </button>
      </Modal>
      <Modal open={open1} onClose={() => setOpen1(false)} className={"top-[-100px]"} close>
        <div className="text-2xl font-semibold mb-4"> Order error</div>
        <div className="max-w-[310px] text-justify text-[#707a8a]">
          We regret to inform you that your recent purchase attempt was unsuccessful. We apologize for any inconvenience
          caused.
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={() => setOpen1(false)}
        >
          OK
        </button>
      </Modal>
      <Modal open={open2} onClose={() => setOpen2(false)} className={"top-[-100px]"} close>
        <div className="text-2xl font-semibold mb-4"> Payment Cancellation</div>
        <div className="max-w-[310px] text-justify text-[#707a8a]">
          We regret to inform you that your payment has been canceled. We apologize for any inconvenience caused.
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={() => setOpen2(false)}
        >
          OK
        </button>
      </Modal>
    </>
  );
}

export default MethodPayment;
