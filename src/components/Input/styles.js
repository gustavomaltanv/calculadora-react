import styled from 'styled-components';

export const InputContainer = styled.div`
   width: 100%;
   height: 5rem;
   padding: 2px;
   margin-bottom: .2rem;
   border-radius: .3rem;
   background-color: #49494B;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   font-size: 2rem;

   input {
      width: 100%;
      background-color: #49494B;
      border: none;

      text-align: right;
      font-size: 2rem;
      color: #FFF;

      padding: 0 1rem;
   }
`;