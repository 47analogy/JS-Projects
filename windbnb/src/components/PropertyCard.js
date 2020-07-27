import React from 'react';
import styled from 'styled-components'

// {
//     "id": 1,
//     "city": "Helsinki",
//     "country": "Finland",
//     "superHost": false,
//     "title": "Stylist apartment in center of the city",
//     "rating": 4.4,
//     "maxGuests": 3,
//     "type": "Entire apartment",
//     "beds": 2,
//     "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
//   }

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap
    //width: 100%;
    //border: 1px solid green;
`

const Card = styled.div`
    //   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //   transition: 0.3s;
    //   padding: 25px 12px 18px;
    //   background:
    height: 350px; 
    flex-basis: 33.333333%
    //border: 3px solid green;
`

const Photo = styled.img`
    width: 395px;
    height: 269px;
    left: 94px;
    top: 209px;
    //background: url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
    border-radius: 24px
    //background-size: 300px 100px;
`

const ContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 375px;
`

const Host = styled.div`
    width: 81px;
    height: 15px;
    left: 104px;
    top: 500px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    text-transform: uppercase;
    color: #4F4F4F; 
    width: 100px;
    height: 28px;
    left: 94px;
    top: 493px;
    border: 1px solid #4F4F4F;
    box-sizing: border-box;
    border-radius: 12px;
`

const Type = styled.div`
    width: 181px;
    height: 17px;
    left: 205px;
    top: 499px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    /* Gray 3 */
    color: #828282;
`

const Rating = styled.div`
    width: 32px;
    height: 17px;
    left: 456px;
    top: 499px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F;
`
const RatingStar = styled.div`
    left: 17.17%;
    right: 17.17%;
    top: 10.2%;
    bottom: 23.63%;
    //background: rgba(235, 87, 87, 0.72);
`
const Title = styled.div`
    width: 250px;
    height: 17px;
    //left: 94px;
    // margin-right: 290px;
    //top: 533px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    text-align: right;
    color: #000000;
`

    
const PropertyCard = ({ properties }) => {
    console.log("card", properties)
    return (
          <Container> 
                {properties ? properties.map((property) => <Card key={property.id}>
                    <Photo src={property.photo}></Photo>
                            <ContainerBottom>
                                <Host>{property.superHost ? 'Super Host' : null}</Host>
                                <Type>{property.type}</Type>
                                <RatingStar>*</RatingStar>
                                <Rating>{property.rating}</Rating>
                            </ContainerBottom>
                         <Title>{property.title}</Title>
                </Card>) : null}
          </Container>

    );
}
 
export default PropertyCard;