import { Col, Row } from "antd";
import Container from "../Container";
import Logo from "../Logo";
import SeachBar from "./SeachBar";
import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <nav className="w-full py-3 bg-blur-top">
      <Container>
        <Row align={"middle"}>
          <Col xs={16} md={12}>
            <Row align={"middle"} wrap={false}>
              <Col>
                <Logo />
              </Col>
              <Col flex={1} className="hidden pl-6 sm:inline-block">
                <Row justify={"end"}>
                  <SeachBar />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={8} md={12}>
            <Row justify={"end"}>
              <NavMenu />
            </Row>
          </Col>
        </Row>
        <Row className="mt-8 sm:hidden">
          <SeachBar />
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
