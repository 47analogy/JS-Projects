import React from 'react'
import styled from 'styled-components'

//const StyledContainer = styled.div`
//   border: ${(props) => `1px solid ${props.theme.border.cool}`};
//   padding: 25px 12px 18px;
//   background: ${(props) => `linear-gradient(
//     45deg, ${props.theme.primary.main}, ${props.theme.secondary.main}
//   )`};
//`

const StyledContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 25px 12px 18px;
  background: 
`

const Title = styled.h2`
  color: '#fff';
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
        

const Date = styled.div`
    color: '#ccc';
    font-weight: 300;
    margin: 6px 0;
    @media (max-width: 500px) {
        font-size: 0.8rem;
      }
`
const Description = styled.p`
    color: '#fff',
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 0.75rem;
      }
`

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`

// const Action = styled.button`
//     height: 40px;
//     width: 120px;
//     margin: 0 5px;
//     padding: 8px 14 px;
//     background: rgba(155, 155, 155, 0.2);
//     color: '#fff';
//     cursor: pointer;
//     border: 1 px solid #fff;
//     outline: 0;
//     font-weight: 300;
//     :hover {
//         opacity: 0.8;
//     }
//     :active {
//         background: ${(props) => props.theme.primary.main};
//       }
// `

const Action = styled.button`
    height: 40px;
    width: 120px;
    margin: 0 5px;
    padding: 8px 14 px;
    background: rgba(155, 155, 155, 0.2);
    color: '#fff';
    cursor: pointer;
    border: 1 px solid #fff;
    outline: 0;
    font-weight: 300;
    :hover {
        opacity: 0.8;
    }
    :active {
        background: red;
      }
`

// const StyledPhoto = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border: ${(props) => `1px solid ${props.theme.border.cool}`};
// `

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 5px solid black;
`


const Card = ({ title, date, description, comments, likes, views, actions }) => (
    <StyledContainer>
      <StyledPhoto src="https://letsgetittraining.com/wp-content/uploads/2019/01/Green-Apples-1.jpg" />
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>{description}</Description>
      <Actions>
        {actions.map(({ label }) => (
          <Action>{label}</Action>
        ))}
      </Actions>
    </StyledContainer>
  )
    
 
export default Card;