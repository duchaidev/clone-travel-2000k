import { Container } from "src/components";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from "@ant-design/icons";
import { Row, Col } from "antd";

function ListItem({ label }: { label: string }) {
  return <li className="hover:underline font-medium pb-1">{label}</li>;
}

function Footer() {
  return (
    <footer className="bg-midNightBlue text-white py-8">
      <Container>
        <Row gutter={24}>
          <Col span={6}>
            <ul>
              <ListItem label="© 2003–2023 GetYourGuide" />
              <li className="flex items-center gap-3">
                <span className="text-xl">
                  <FacebookFilled />
                </span>
                <span className="text-xl">
                  <TwitterSquareFilled />
                </span>
                <span className="text-xl">
                  <InstagramFilled />
                </span>
              </li>
            </ul>
          </Col>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">About Us</h5>
            <ul>
              <ListItem label="About GetYourGuide" />
              <ListItem label="Customer Website" />
              <ListItem label="Ticketing Solution" />
            </ul>
          </Col>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">Supplier Support</h5>
            <ul>
              <ListItem label="Contact" />
              <ListItem label="FAQs" />
              <ListItem label="Get Your Eco-Badge" />
              <ListItem label="Connectivity Partners" />
            </ul>
          </Col>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">Legal</h5>
            <ul>
              <ListItem label="Privacy Policy" />
              <ListItem label="Legal Notice" />
              <ListItem label="Supplier Terms and Conditions" />
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
