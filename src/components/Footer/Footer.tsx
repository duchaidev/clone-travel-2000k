import { Col, Row, Image } from "antd";
import { Container } from "..";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedin } from "react-icons/fa6";
import React from "react";

function ListItem({ label }: { label: string }) {
  return <li className="hover:underline font-medium pb-1">{label}</li>;
}

function ListItemIcon({ icon }: { icon: React.ReactNode }) {
  return <li className="text-lg px-4">{icon}</li>;
}

function Footer() {
  return (
    <footer className="bg-midNightBlue text-white py-8">
      <Container>
        <Row gutter={24}>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">Mobile</h5>
            <div>
              <Image height={50} width={150} src="/brand/app-store-badge-en-us.svg" preview={false} />
            </div>
            <div>
              <Image height={50} width={150} src="/brand/google-play-badge-en-us.svg" preview={false} />
            </div>
          </Col>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">Support</h5>
            <ul>
              <ListItem label="Contact" />
              <ListItem label="Legal Notice" />
              <ListItem label="Privacy Policy" />
              <ListItem label="Cookies and Marketing Preferences" />
              <ListItem label="General Terms and Conditions" />
              <ListItem label="Information according to the Digital Services Act" />
              <ListItem label="Sitemap" />
              <ListItem label="Do not Sell or Share my Personal Information" />
            </ul>
          </Col>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">Company</h5>
            <ul>
              <ListItem label="About Us" />
              <ListItem label="Careers" />
              <ListItem label="Blog" />
              <ListItem label="Press" />
              <ListItem label="Gift Cards" />
              <ListItem label="Magazine" />
              <ListItem label="Travel Guides" />
            </ul>
          </Col>
          <Col span={6}>
            <h5 className="text-lg font-semibold mb-2">Work With Us</h5>
            <ul>
              <ListItem label="As a Supply Partner" />
              <ListItem label="As a Content Creator" />
              <ListItem label="As an Affiliate Partner" />
            </ul>
          </Col>
        </Row>
        <Row className="mt-8">
          <Col span={12}>
            <h5 className="text-xs font-medium">© 2003 – 2023 GetYourGuide. Made in VietNam.</h5>
          </Col>
          <Col span={12}>
            <ul className="flex items-center w-full justify-end">
              <ListItemIcon icon={<FaFacebookF />} />
              <ListItemIcon icon={<FaInstagram />} />
              <ListItemIcon icon={<FaTwitter />} />
              <ListItemIcon icon={<FaPinterestP />} />
              <ListItemIcon icon={<FaLinkedin />} />
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
