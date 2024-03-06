import { useEffect, useState } from "react";


import StageForm from '../components/StageForm';
import Payment from '../components/Payment';
import Map from "../assets/capturetest.PNG";




import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OSK1BCg4zAeNBqIURT4DMn9EKkliuFt0SbFqrHL41zQjoALS3kPIucZ0nrbGcrmULqeuIEbgS5E5qYF0IuHtE5m00KecrIlvu');






const StageReservation = () => {

  
  const [clientSecret, setClientSecret] = useState("");



  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);




  return (
    <div className="stage-reservation">
        <h1>Stage de récupération de points du lundi 17 et mardi 18 juillet 2023</h1>
        <div className="stage-reservation__content">
            <div>
              <img src={Map} alt="map-iledefrance" className="Map" />
            </div>
            <div className="stage-reservation__content__form">

              <StageForm />


              {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <Payment />
                </Elements>
              )}




              
            </div>
        </div>
    </div>
  );
};

export default StageReservation;