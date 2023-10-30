import { Col, Row } from "antd";
import Container from "../Container";
import Logo from "../Logo";
import SeachBar from "./SeachBar";
import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <nav className="bg-blur-top w-full py-3">
      <Container>
        <Row align={"middle"}>
          <Col xs={16} md={12}>
            <Row align={"middle"} wrap={false}>
              <Col>
                <Logo />
              </Col>
              <Col flex={1} className="pl-6 hidden sm:inline-block">
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
        <Row className="sm:hidden mt-8">
          <SeachBar />
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
