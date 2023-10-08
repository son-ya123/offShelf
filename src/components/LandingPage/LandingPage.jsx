import React from 'react';
import {
 Button
} from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from '@carbon/icons-react';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
      <>
      <div className='content'>Reduce waste, save the planet!{/* Every year, one-third of all food produced for human consumption is wasted. That's over 1.3 billion tons of food. This waste occurs at all stages of the food supply chain, from production to processing to distribution to consumption.

Food waste has a number of negative consequences. It's a waste of resources, including water, land, and energy. It also contributes to climate change, as food waste that decomposes in landfills produces methane, a greenhouse gas that is 25 times more potent than carbon dioxide.

Food waste also has a social impact. While we're wasting food, millions of people around the world are going hungry. In fact, every 12 seconds, a child dies from hunger. 
We can all help to reduce food waste and make a difference for the environment and for the people who are hungry. */}</div>
      <Button className="main-btn" size='lg' renderIcon={ArrowRight} onClick={e=>{navigate("/form/new")}}>Start Here</Button>
      <div style={{display:'flex',flexDirection:'column', gap:'1rem', justifyContent:'center', alignItems:'center'}}>
      </div>
      <div className='landing-page' >
    </div>
    </>
    )
}
  

export default LandingPage;