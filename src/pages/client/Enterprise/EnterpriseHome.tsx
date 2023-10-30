import { Col, Row, Avatar } from "antd";
import { Container, FlexMiddle } from "src/components";

function EnterpriseHome() {
  return (
    <Container className="text-text">
      <Row className="pt-20" align="middle">
        <Col span={12}>
          <h2 className="text-5xl font-bold mb-10 leading-tight">
            You could earn <br /> <span className="text-primary"> €2136 per month</span> <br /> in Vietnam
          </h2>
          <h5 className="text-base font-normal">
            Expose your travel business to millions of worldwide travelers on GetYourGuide:
          </h5>
          <ul className="text-base font-normal list-disc pl-6">
            <li>No upfront costs or subscriptions</li>
            <li>Commission fees paid for successful bookings only</li>
            <li>Publish your activities in under 30 minutes</li>
          </ul>
          <button className="py-2.5 px-20 text-white bg-primary rounded-full hover:bg-hoverPrimary text-base font-semibold my-8">
            Get Started
          </button>
          <FlexMiddle className="gap-6">
            <Avatar.Group>
              <Avatar size={"large"} src="/src/assets/img/avartar/avartar1.jpg" />
              <Avatar size={"large"} src="/src/assets/img/avartar/avartar2.jpg" />
              <Avatar size={"large"} src="/src/assets/img/avartar/avartar3.jpg" />
              <Avatar size={"large"} src="/src/assets/img/avartar/avartar4.jpg" />
              <Avatar size={"large"} src="/src/assets/img/avartar/avartar5.jpg" />
            </Avatar.Group>
            <p className="text-base font-extralight">
              20,000+ suppliers <br />
              joined GetYourGuide
            </p>
          </FlexMiddle>
        </Col>
        <Col span={12}>
          <div className="flex justify-center bg-gray-100 rounded-t-full rounded-b-3xl pt-20">
            <img src="/src/assets/img/Sympolic/phone-enterprise.webp" className="h-[620px]" loading="lazy" />
          </div>
        </Col>
      </Row>
      <Row className="py-16">
        <Col span={6}>
          <h5 className="text-base font-bold">
            Connect seamlessly with your <br /> Booking Management System
          </h5>
          <p className="text-sm mt-6">
            See all connected systems <span className="text-primary">here</span>
          </p>
        </Col>
        <Col span={18}>
          <div className="h-[110px] grid grid-cols-10 grid-rows-1 items-center">
            <img className="max-w-[90%] col-span-2" src="/public/brand/brand1.png" loading="lazy" />
            <img className="max-w-[90%] col-span-2" src="/public/brand/brand2.svg" loading="lazy" />
            <img className="max-w-[90%] col-span-2" src="/public/brand/brand3.webp" loading="lazy" />
            <img className="max-w-[90%] col-span-2" src="/public/brand/brand4.svg" loading="lazy" />
            <img className="max-w-[90%] col-span-2" src="/public/brand/brand5.webp" loading="lazy" />
          </div>
        </Col>
      </Row>

      <Row className="mt-10">
        <Col span={24} className="text-center">
          <h3 className="font-bold text-4xl">Why sell on GetYourGuide</h3>
          <h5 className="text-base font-normal mt-6">
            Connect with travelers looking for exactly the kind of experience you offer by signing up today.
          </h5>
          <h5 className="text-base font-normal mt-6">
            You’ll receive access to our marketing channels, expansive blogger network, and in-house marketplace to take
            your reach even further.
          </h5>

          <Row className="bg-gray-100 rounded-2xl text-left p-12 my-16" gutter={12}>
            <Col span={8}>
              <h3 className="text-primary text-3xl font-bold">
                11,000,000+ <br />
                monthly travelers
              </h3>
              <p className="text-sm mt-6">
                Bring your travel business to millions of worldwide travelers visiting GetYourGuide each month.
              </p>
            </Col>
            <Col span={8}>
              <h3 className="text-primary text-3xl font-bold">
                Instant <br />
                application review
              </h3>
              <p className="text-sm mt-6">Upon signup, your application is instantly reviewed.</p>
              <p className="text-sm mt-6">
                You'll receive an instant email notification with your commission level if approved.
              </p>
            </Col>
            <Col span={8}>
              <h3 className="text-primary text-3xl font-bold">
                Streamlined <br />
                payments
              </h3>
              <p className="text-sm mt-6">
                Client payments are consolidated and disbursed to you monthly or bi-weekly by GetYourGuide.
              </p>
              <p className="text-sm mt-6">
                Focus on your business as we manage bookings and provide full customer support.
              </p>
            </Col>
          </Row>

          <button className="py-2.5 px-20 text-white bg-primary rounded-full hover:bg-hoverPrimary text-base font-semibold">
            Get Started
          </button>
          <ul className="flex items-center list-disc justify-center my-8">
            <li className="ml-6">No upfront payments</li>
            <li className="ml-6">Getting your activity online takes under 30 minutes</li>
            <li className="ml-6">Fixed commission on successful bookings</li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-20">
        <h3 className="font-bold text-4xl mb-8">Start selling your product in no time</h3>
        <div className="gap-6 grid grid-cols-9 grid-rows-1">
          <div className="col-span-3 rounded-3xl bg-gray-100 p-12 min-h-[465px]">
            <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white font-semibold text-xl mb-8 flex items-center justify-center">
              1
            </div>
            <h4 className="text-2xl font-bold">Register as a supply partner</h4>
            <p className="text-base font-normal mt-8">
              Getting started is easy. We’ll ask for some simple contact and company details, such as which travel
              experiences your business offers
            </p>
          </div>
          <div className="col-span-3 rounded-3xl bg-gray-100 p-12 min-h-[465px]">
            <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white font-semibold text-xl mb-8 flex items-center justify-center">
              2
            </div>
            <h4 className="text-2xl font-bold">Add your first activity</h4>
            <p className="text-base font-normal mt-8">
              Create and upload your first product listing with your content, availability, and reservation system
              connection
            </p>
          </div>
          <div className="col-span-3 rounded-3xl bg-gray-100 p-12 min-h-[465px]">
            <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white font-semibold text-xl mb-8 flex items-center justify-center">
              3
            </div>
            <h4 className="text-2xl font-bold">Share your business details</h4>
            <p className="text-base font-normal mt-8">
              Fill out your key legal and financial information while getting the first customers booking your activity
            </p>
          </div>
        </div>
        <Col span={24} className="flex flex-col items-center justify-center">
          <button className="py-2.5 px-20 text-white bg-primary rounded-full hover:bg-hoverPrimary text-base font-semibold mt-16">
            Get Started
          </button>
          <ul className="flex items-center list-disc justify-center my-8">
            <li className="ml-6">No upfront payments</li>
            <li className="ml-6">Getting your activity online takes under 30 minutes</li>
            <li className="ml-6">Fixed commission on successful bookings</li>
          </ul>
        </Col>
      </Row>

      <Row className="px-16 my-24">
        <Col span={24} className="p-16 rounded-3xl bg-gray-100 flex items-center flex-col">
          <h3 className="font-bold text-4xl mb-8">Ready to grow your travel business? Get started today.</h3>
          <button className="py-2.5 px-20 text-white bg-primary rounded-full hover:bg-hoverPrimary text-base font-semibold mt-8">
            Get Started
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default EnterpriseHome;
