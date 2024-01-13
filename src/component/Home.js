import React from 'react';
import DesignOne from '../images/design1.png';
import DesignTwo from '../images/design2.png';
import DesignThree from '../images/design3.png';
import { FlexDiv } from '../styles/shares';
import styled from 'styled-components';
import { Button } from '../styles/shares';

const FlexText = styled.div`
    flex: 1;
    padding: 30px;

    a {
        color: #fff;
    }
    h4 {
        margin-top: 10px;
    }
    margin: 10px 0;
`
const FlexImage = styled.div`
    flex: 1;
    margin: 10px 0;
`

export default function Home() {
  return (
    <div style={{marginTop: 80, marginBottom: 80 }}>
        <FlexDiv>
            <FlexText>
                <h1>Hotel Website Design</h1>
                <h4>Lorem consectetur adipisicing elit</h4>
                <Button><a href='https://www.figma.com/file/V8LB6EY2RUonVanamrAIin/Untitled?type=design&node-id=0%3A1&mode=design&t=ouPjtubP3nQdXNqD-1'>See in Figma</a></Button>
            </FlexText>
            <FlexImage>
                <img src={DesignOne} width="100%" alt='ads'/>
            </FlexImage>
        </FlexDiv>
        <FlexDiv>
            <FlexImage>
                <img src={DesignTwo} width="100%" alt='ads'/>
            </FlexImage>
            <FlexText >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus sapiente laudantium quas omnis sequi nostrum quam harum, eos nemo eum rem fugit ducimus inventore eius quos? Magni, temporibus adipisci. Saepe consequatur, nam itaque repellat laborum unde a ex minus reiciendis atque ad quas et incidunt. Sed quod hic ipsum.</p>
            </FlexText>
        </FlexDiv>
        <FlexDiv>
            <FlexText >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus sapiente laudantium quas omnis sequi nostrum quam harum, eos nemo eum rem fugit ducimus inventore eius quos? Magni, temporibus adipisci. Saepe consequatur, nam itaque repellat laborum unde a ex minus reiciendis atque ad quas et incidunt. Sed quod hic ipsum.</p>
            </FlexText>
            <FlexImage>
                <img src={DesignThree} width="100%" alt='ads'/>
            </FlexImage>
        </FlexDiv>
    </div>
  )
}
