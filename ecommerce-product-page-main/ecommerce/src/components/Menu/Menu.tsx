import * as S from './Menu.style';

interface Props {
    menuName: string,
    selected?: boolean
}


export default (props: Props) => (
    <S.Menu className={props.selected ? "selected" : ""}>
        {props.menuName}
    </S.Menu>
);