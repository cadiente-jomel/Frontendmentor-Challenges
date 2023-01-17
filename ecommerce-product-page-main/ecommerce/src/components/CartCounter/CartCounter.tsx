import * as S from './CartCounter.style';

interface Props {
    q: number
}

export default (props: Props) => {
    return  <S.Counter n={props.q}>{props.q}</S.Counter>
}