/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadStripe } from "@stripe/stripe-js";
import React, {  useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import { useCreatePaymentIntentMutation, useGetStripePublishablekeyQuery } from "@/redux/features/orders/ordersApi";


type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  console.log(id);
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  const { data: config } = useGetStripePublishablekeyQuery({});
  const [createPaymentIntent, { data: paymentIntentData }] =
    useCreatePaymentIntentMutation();
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (config) {
      const publishablekey = config?.publishablekey;
      setStripePromise(loadStripe(publishablekey));
    }
    if (data ) {
      const amount = Math.round(data.course.price * 100);
      createPaymentIntent(amount);
    }
  }, [config, data]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.client_secret);
    }
  }, [paymentIntentData]);

return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
              <Heading
                title={data?.course?.name + " - EduClarity"}
                description={
                  "EduClarity is a programming community which is developed by Aryan Hedaoo for helping programmers"
                }
                keywords={data?.course?.tags}
              />
              <Header
                route={route}
                setRoute={setRoute}
                open={open}
                setOpen={setOpen}
                activeItem={1}
              />
               {stripePromise && (
            <CourseDetails
              data={data.course}
              stripePromise={stripePromise}
              clientSecret={clientSecret}
              setRoute={setRoute}
              setOpen={setOpen}
            />
          )}
              
          <Footer />
        </div>
      )}
    </>
  );
  };
export default CourseDetailsPage;

