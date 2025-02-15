const ReturnPolicy = () => {
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Return & Exchange Policy</h2>
        <p>ITEMS PURCHASED ON SALE ARE NOT ELIGIBLE FOR RETURN OR REFUND.</p>
  
        <h3 className="text-md font-semibold mt-4">Return/Exchange Duration and Eligibility</h3>
        <p>
          Our return/exchange window is 14 days. To be eligible for the 14-day return and
          exchange criteria, <strong>YOU MUST</strong> send out the package back to us
          within this timeframe. This time begins from the <strong>MOMENT</strong> your
          order has been delivered to you. If a chargeback is issued outside this policy, we
          will present our shipping and return policy to your bank.
        </p>
  
        <h3 className="text-md font-semibold mt-4">Return & Exchange Conditions</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Items must be shipped back in the original packaging with tags intact and
            without any damage to the clothing.
          </li>
          <li>
            Your return or exchange will only be processed once these items have been
            received and inspected by our team.
          </li>
        </ul>
  
        <h3 className="text-md font-semibold mt-4">How to Initiate a Return or Exchange</h3>
        <p>
          Start your return or exchange process by contacting us via our contact page or
          directly at{" "}
          <a href="mailto:help@robiz.com" className="text-blue-500 underline">
            help@robiz.com
          </a>
          . Our team will guide you through the necessary steps.
        </p>
  
        <h3 className="text-md font-semibold mt-4">Return Shipping Details</h3>
        <p>
          We provide return shipping labels only for the USA. For customers in other
          countries, the responsibility for covering return shipping costs lies with the
          customer.
        </p>
  
        <h3 className="text-md font-semibold mt-4">Refund Policy</h3>
        <p>
          Upon successful receipt and inspection of a returned item, your refund will be
          processed. The amount will be credited back to the original payment method. It may
          take a few business days for the refund to reflect in your account.
        </p>
  
        <h3 className="text-md font-semibold mt-4">Exchange Policy</h3>
        <p>
          If you&apos;re looking to exchange an item, please get in touch within the 14-day
          window. After we receive and review the product you wish to exchange, we&apos;ll send
          out the replacement item.
        </p>
      </div>
    );
  };
  
  export default ReturnPolicy;
  