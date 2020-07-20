import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`

const Content = (props) => {
    let date = new Date()
    date = date.toLocaleDateString()
    const buttons = [
        {
            label: (
                <>
                  {<i class="material-icons">comment</i>}  0 Comments
                </>
            )
        },
        {
            label: (
                <>
                  {<i class="material-icons">thumb_up_alt</i>}  247 Likes
                </>
            )
        },
        {
            label: (
                <>
                  {<i class="material-icons">visibility</i>}  700 Views
                </>
            )
        }
    ]

    return (
        <StyledRoot>
            <StyledContainer>
                <Card
                    title="The Benefits of Green Apples"
                    date={date}
                    description="Green apples have a high fiber content which helps in increasing the
                                body's metabolism. While consuming an apple, make sure that you're not
                                tossing the peel in the trash. Consuming apple with its peel improves
                                the overall health. Due to its high fiber content, apple helps in
                                detoxification process. It keeps the liver and digestive system away
                                from harmful elements."
                    actions={buttons}
                />
            </StyledContainer>
        </StyledRoot>
    );
}
 
export default Content;