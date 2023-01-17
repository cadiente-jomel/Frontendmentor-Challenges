import styled from 'styled-components';

interface Props {
    n: number
}

export const Counter = styled.div`
  display: ${(props: Props) => props.n ? "flex" : "none"};
  width: 2rem;
  height: 2rem;
  color: var(--white);
  border-radius: 50%;
  background-color: var(--color-primary-darker);
  position: absolute;
  right: 8rem;
  top: .6rem;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`