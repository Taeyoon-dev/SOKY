import styled from "styled-components";

interface IconContainerProps {
  iconSrc: string;
  text: string;
}

const ICON_CONTAINER = ({ iconSrc, text }: IconContainerProps) => {
  return (
    <Container>
      <Icon src={iconSrc} alt={text} />
      <Text>{text}</Text>
    </Container>
  );
};

const Text = styled.span`
  color: white;
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  letter-spacing: 0.42px;
  word-wrap: break-word;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain; // PNG 이미지 비율 유지
`;

const Container = styled.div`
  width: 240px;
  height: 43px;
  padding: 9px 19px;
  background: linear-gradient(270deg, #201F26 0%, #201F26 98%, white 99%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export default ICON_CONTAINER;
