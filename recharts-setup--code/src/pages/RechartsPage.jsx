import { Card, Col, Container, Row } from "react-bootstrap";
import LineChartRechart from "../components/LineChartRechart";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";
import ComposedChartComponent from "../components/ComposedChartComponent";
import ScatterChartComponent from "../components/ScatterChartComponent";
import RadarChartComponent from "../components/RadarChartComponent";
import RadialBarChartComponent from "../components/RadialBarChartComponent";

const RechartsPage = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Simple Line Chart</Card.Header>
            <Card.Body>
              <LineChartRechart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Bar Chart</Card.Header>
            <Card.Body>
              <BarChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Pie Chart</Card.Header>
            <Card.Body>
              <PieChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Area Chart</Card.Header>
            <Card.Body>
              <AreaChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Composed Chart</Card.Header>
            <Card.Body>
              <ComposedChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Scatter Chart</Card.Header>
            <Card.Body>
              <ScatterChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Radar Chart</Card.Header>
            <Card.Body>
              <RadarChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Card>
            <Card.Header>Radial Bar Chart</Card.Header>
            <Card.Body>
              <RadialBarChartComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RechartsPage;
