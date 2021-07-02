import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 280px;
  background-color: #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  .o_card_image {
    width: 100%;
  }
  .o_card_body {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 50px 10px;
    text-align: justify;
  }
`;
