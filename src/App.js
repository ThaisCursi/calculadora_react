import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === '0' ? num : prev + num));
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const difference = parseFloat(firstNumber) - parseFloat(currentNumber);
      setCurrentNumber(String(difference));
      setOperation('');
    }
  };

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const quotient = parseFloat(firstNumber) / parseFloat(currentNumber);
      setCurrentNumber(String(quotient));
      setOperation('');
    }
  };

  const handleMultiplicationNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = parseFloat(firstNumber) * parseFloat(currentNumber);
      setCurrentNumber(String(product));
      setOperation('');
    }
  };

  const handlePercentilNumbers = () => {
    if (operation === '+' || operation === '-') {
      // Se a operação pendente for adição ou subtração
      const percent = (parseFloat(firstNumber) * parseFloat(currentNumber)) / 100;
      let result;
  
      if (operation === '+') {
        result = parseFloat(firstNumber) + percent;
      } else {
        result = parseFloat(firstNumber) - percent;
      }
  
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
    } else if (operation === '*' || operation === '/') {
      // Se a operação pendente for multiplicação ou divisão
      const percent = parseFloat(currentNumber) / 100;
  
      if (operation === '*') {
        const result = parseFloat(firstNumber) * percent;
        setCurrentNumber(String(result));
      } else {
        const result = parseFloat(firstNumber) / percent;
        setCurrentNumber(String(result));
      }
  
      setOperation('');
    }
  };
  
  

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplicationNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
          case '%':
            handlePercentilNumbers();
            break;
        default:
          break;
      }
    }
  };




  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="c" onClick={handleOnClear} />
          <Button label="/" onClick={handleDivisionNumbers} />
          <Button label="%" onClick={handlePercentilNumbers} />
        </Row>
        <Row>
        <Button label="+" onClick={handleSumNumbers} />
        <Button label="-" onClick={handleMinusNumbers} />
        <Button label="x" onClick={handleMultiplicationNumbers} />
        </Row>  
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
