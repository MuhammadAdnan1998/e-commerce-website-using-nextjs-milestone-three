const ShippingPolicy = () => {
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Shipping Policy</h2>
        <p>All sale items are final!</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Free USA, Canada, and UK shipping on orders over $350.</li>
          <li>Free shipping across Pakistan.</li>
          <li>
            Free shipping in all other countries on orders over $500.
          </li>
          <li>
            Worldwide orders arrive in 7-10 business days after they are shipped.
          </li>
          <li>Orders in Pakistan arrive in 2-3 business days.</li>
          <li>We will notify you of any delays.</li>
        </ul>
        <p className="mt-4">
          For any further assistance, please contact:{" "}
          <a href="mailto:help@robiz.com" className="text-blue-500 underline">
            help@robiz.com
          </a>
        </p>
      </div>
    );
  };
  
  export default ShippingPolicy;
  