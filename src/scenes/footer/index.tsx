import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <h2>Fit N Life</h2>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© FitNLife All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">GYM Timings</h4>
          <p className="my-5">
            Monday to Friday
            <br />
            5.30am to 9.00am
            <br />
            4.30 to 9.00pm
          </p>
          <p className="my-5">
            Saturday
            <br />
            5.30am to 9.00 am
            <br />
            4.30 to 7.00 pm
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Manath Residency NGO Quarters, Kakkanad, near Old NGO Quarters, Ernakulam, Kerala 682021
          </p>
          <p>98470 33336</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
