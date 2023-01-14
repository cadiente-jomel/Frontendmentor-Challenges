import * as S from './Menu.style';

export default (props: any) => (
    <S.Menu className={props.selected ? "selected" : ""}>
        {props.menuName}
    </S.Menu>
);