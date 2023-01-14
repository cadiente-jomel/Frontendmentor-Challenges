import * as S from './CartCounter.style';

export default (props: any) => {
    return  <S.Counter n={props.q}>{props.q}</S.Counter>
}