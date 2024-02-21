import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from "./img1.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  return (
    <Container id="About">
        <Card style={{ width: 'auto',margin:'auto', marginTop:100 }}>
      <Row>
       <Col md={6} xs={12}><Card.Img variant="top" src={pic} /></Col>
       <Col md={6} xs={12}><Card.Body>
        
        <Card.Text>
          <h1 style={{textAlign:'center'}}>Pinch of Yum</h1>
          <p style={{marginTop:50}}>A recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a foodservice operation.</p>
          <p style={{marginTop:30}}>A recipe may be simple to complex based on the requirements of the operation and the intended user. For example, an experienced chef may need a recipe with only a few details, while a beginner cook may need more information about ingredients, preparation steps, cooking times and temperatures, visual cues, and equipment requirements. </p>
          <Button variant="outline-info" size="lg" style={{marginLeft:180}} >READ MORE</Button>{' '}

        </Card.Text>
        
      </Card.Body></Col>
      </Row>
      </Card>

    </Container>
    
  );  
  }

export default BasicExample;