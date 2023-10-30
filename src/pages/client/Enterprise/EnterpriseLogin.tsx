import { Row, Col, Form, Input } from "antd";
import { Container } from "src/components";
import type { Rule } from "antd/es/form";
import { Link } from "react-router-dom";

function EnterpriseLogin() {
  const validate: { [key: string]: Rule[] } = {
    email: [
      {
        required: true,
        message: "Please complete this field"
      }
    ],
    password: [
      {
        required: true,
        message: "Please complete this field"
      }
    ]
  };

  return (
    <Container className="text-text">
      <Row className="py-20 flex justify-center items-center">
        <Col span={24} className="max-w-[480px] rounded-sm bg-white shadow-md p-8">
          <h3 className="text-2xl font-bold">Log in to the Supplier Portal</h3>
          <Form name="basic" layout="vertical" className="mt-6" autoComplete="off">
            <label className="text-base font-bold mb-1">Email</label>
            <Form.Item rules={validate.email} name="email">
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>
            <label className="text-base font-bold mb-1 flex justify-between items-center">
              <span>Password</span>
              <span className="text-primary">Forgot password?</span>
            </label>
            <Form.Item rules={validate.password} name="password">
              <Input.Password placeholder="Enter your password" size="large" />
            </Form.Item>
            <Form.Item>
              <button
                type="submit"
                className="w-full py-2.5 px-20 text-white bg-primary rounded-full hover:bg-hoverPrimary text-base font-semibold mt-4"
              >
                Login
              </button>
            </Form.Item>
          </Form>
          <h5 className="text-base font-bold mt-6">
            Don’t have an account?{" "}
            <Link to="/enterprise/register" className="text-primary">
              Sign up now
            </Link>
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default EnterpriseLogin;
