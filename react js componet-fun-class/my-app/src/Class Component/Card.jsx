import React from 'react';
import { Component } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow
} from 'mdb-react-ui-kit';

class Card extends Component {
    render() { 
        return (
            <>
            <MDBRow>
            <MDBCard className='col-4'>
            <MDBCardImage src={this.props.img} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className='col-4'>
            <MDBCardImage src={this.props.img} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className='col-4'>
            <MDBCardImage src={this.props.img} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBRow>
          
          </>
        );
    }
}
 
export default Card;