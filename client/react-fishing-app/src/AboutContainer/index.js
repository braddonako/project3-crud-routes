import React from 'react'
import { Container } from 'semantic-ui-react'

const AboutContainer = () => (
  <Container>
    <main style={{
      background: 'LightSlateGray',
      backgroundSize: 'cover'
     }}>

    <h1 style={{
        fontWeight: 'bolder',
        textAlign: 'center',
        padding: '15px',
        textTransform: 'uppercase',
        fontSize: '3em',
        color: 'RoyalBlue'
    }}>About Foam is the Home</h1>
    
    <p style={{
        fontSize: 25,
        fontWeight: 'bolder',
        color: 'RoyalBlue'
    }}> 
  As a fisherman, the number one goal is to get to the river. However, every day the river is different - flow rate, water temperature, clarity, outdoor temperature, time of day, bugs in the air, flies in your flybox, amount of folks on the water, etc. 
  Also, it is known that being prepared both in terms of gear and expectations for conditions is critical. Only having a finite window to fish in a given day or weekend means that going into the excursion educated and ready for conditions is the first step to success. 
  With all these variables, being able to reflect on fishing reports is important. 
  Those are limited and oftentimes not available so you have to rely on your own tact. The purpose of our app is to give the fisherman an easy to use way to document his experiences and read on other fishermans experiences as it pertains to each river. 
  The value is the ability to have ready to digest information on past experiences to dial-in on the next excursion. Everyone casts differently, approaches waterways differently, and chooses flies differently. So, meet the fishermans best friend: Foam is the Home.
    </p>
    </main>
  
  </Container>
)

export default AboutContainer