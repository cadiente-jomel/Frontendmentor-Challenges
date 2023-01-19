import styled from 'styled-components';

interface QuantityComponentProps {
    counter: number,
    setCounter: Function
}

const S = {
   CounterContainer: styled.div` 
     font-size: 1.6rem;
     background-color: var(--grayish-blue);
     border-radius: 5px;
     display: flex;
     padding: 2rem;
     width: 40%;
     justify-content: space-between;

     @media all and (max-width: 770px) {
        width: 100%;
     }
   `,
   CounterBtn: styled.span``,
   QuantityCounter: styled.span``,
   CounterBtnIcon: styled.img``,
}

const Quantiy = (props: QuantityComponentProps) => {
    return (

        <S.CounterContainer>
            <S.CounterBtn>
                <S.CounterBtnIcon src="/assets/images/icon-minus.svg" alt="icon-minus" onClick={() => {
                    if (props.counter > 0) {
                        props.setCounter((prevCounter: number) => prevCounter - 1);
                    }
                }} />
            </S.CounterBtn>
            <S.QuantityCounter>{props.counter}</S.QuantityCounter>
            <S.CounterBtn>
                <S.CounterBtnIcon src="/assets/images/icon-plus.svg" alt="icon-plus" onClick={() => {
                    props.setCounter((prevCounter: number) => prevCounter + 1);
                }}/>
            </S.CounterBtn>
        </S.CounterContainer>
    )
}

export default Quantiy;