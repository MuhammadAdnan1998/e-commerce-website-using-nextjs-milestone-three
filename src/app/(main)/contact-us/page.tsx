import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] })

const ContactUs = () => {
  return (
    <div className={`${montserrat.className} py-10 md:mx-20 mx-5 space-y-4 font-medium`}>
      <h2 className="flex justify-center sm:text-[35px] text-[30px] font-semibold uppercase">Contact Us</h2>
      <p className="sm:text-[32px] text-[30px] font-semibold uppercase py-6">Get in touch</p>
      <p>Thank you for taking the time to reach out to us. Please see the options below and email us at the address that applies to you. We will get back to you as soon as possible.</p>

     <div>
     <h3 className="font-semibold">Order Support, Returns and Exchanges</h3>
      <p>Please review our Return/Exchange Policy prior to reaching out to us.</p>
      <p>
        <a href="mailto:adnanshaikh84482@gmail.com">adnanshaikh84482@gmail.com</a>
      </p>
     </div>

      <div>
      <h3 className="font-semibold">For showroom pulls and styling requests</h3>
      <p>
        <a href="mailto:adnanshaikh84482@gmail.com">adnanshaikh84482@gmail.com</a>
      </p>
      </div>

     <div>
     <h3 className="font-semibold">Press, Media and Partnerships</h3>
      <p>
        <a href="mailto:adnanshaikh84482@gmail.com">adnanshaikh84482@gmail.com</a>
      </p>
     </div>
    </div>
  );
};

export default ContactUs;
