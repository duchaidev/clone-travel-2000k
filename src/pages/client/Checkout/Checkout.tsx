import FormCheckOut from "./FormCheckOut";
import MethodPayment from "./MethodPayment";
import { useState } from "react";
import InformationOrder from "./InformationOrder";
import { Container } from "src/components";

function CheckOut() {
  const [formValue, setFormValue] = useState({});
  const [valid, setValid] = useState(false);
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     const fectchApi = async () => {
  //       try {
  //         const response = await api.get(API_CART);
  //         setCarts(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fectchApi();
  //   }, []);
  return (
    <Container>
      <div className="flex flex-col pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode  text-textColor dark:text-textDarkMode ">
        <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
          <div className="mx-auto my-10 text-3xl font-semibold uppercase italic tracking-wider">GetYourTour</div>

          <div className="grid grid-cols-2">
            <div className="col-start border-r border-textColor ">
              {!valid ? (
                <FormCheckOut setFormValue={setFormValue} formValue={formValue} setValid={setValid} />
              ) : (
                <MethodPayment formValue={formValue} setValid={setValid} subTotal={subTotal} />
              )}
            </div>
            <div className="col-end ml-12 ">
              <InformationOrder data={carts} setSubTotal={setSubTotal} subTotal={subTotal} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CheckOut;
