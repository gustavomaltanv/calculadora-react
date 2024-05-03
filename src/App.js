import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import React, { useState } from 'react';

const App = () => {
   const [equationType, setEquationType] = useState('');
   const [currentNumber, setCurrentNumber] = useState('0');
   const [previousNumber, setPreviousNumber] = useState('0');

   const handleClear = () => setCurrentNumber(() => '');

   const handleAddNumber = (number) => {
      if (number === '.') {
         if (currentNumber === '0') {
            setCurrentNumber('0.');
         } else if (!currentNumber.includes('.')) {
            setCurrentNumber(prev => `${prev}${number}`);
         }
      } else {
         setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
      }
   };

   const handleEquationType = (operation) => {
      if (currentNumber !== '') {
         setEquationType(operation);
         setPreviousNumber(currentNumber);
         setCurrentNumber('');
      }
   };

   const handleResult = () => {
      let result;
      if (equationType === 'sum') {
         result = parseFloat(previousNumber) + parseFloat(currentNumber);
      } if (equationType === 'sub') {
         result = parseFloat(previousNumber) - parseFloat(currentNumber);
      } if (equationType === 'mult') {
         result = parseFloat(previousNumber) * parseFloat(currentNumber);
      } if (equationType === 'div') {
         result = parseFloat(previousNumber) / parseFloat(currentNumber);
      }
      setCurrentNumber(`${result}`);
   };

   const handleInv = (number) => setCurrentNumber(`${number === '' ? '' : 1 / parseFloat(number)}`);
   const handleSquare = (number) => setCurrentNumber(`${number === '' ? '' : parseFloat(number) * parseFloat(number)}`);
   const handleSquareRoot = (number) => setCurrentNumber(`${number === '' ? '' : Math.sqrt(parseFloat(number))}`);

   return (
      <Container>
         <Content>
            <Input value={[currentNumber]} />
            <Row>
               <Button label="1/x" onClick={() => handleInv(currentNumber)} />
               <Button label="x&#x00B2;" onClick={() => handleSquare(currentNumber)} />
               <Button label="&radic;" onClick={() => handleSquareRoot(currentNumber)} />
               <Button label="C" onClick={() => handleClear()} Root />
            </Row>
            <Row>
               <Button label="7" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="8" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="9" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="÷" onClick={() => handleEquationType(`div`)} />
            </Row>
            <Row>
               <Button label="4" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="5" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="6" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="×" onClick={() => handleEquationType(`mult`)} />
            </Row>
            <Row>
               <Button label="1" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="2" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="3" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="-" onClick={() => handleEquationType(`sub`)} />
            </Row>
            <Row>
               <Button label="0" onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="." onClick={(e) => handleAddNumber(e.target.innerText)} />
               <Button label="=" onClick={() => handleResult()} />
               <Button label="+" onClick={() => handleEquationType(`sum`)} />
            </Row>

         </Content>
      </Container>
   );
}

export default App;
