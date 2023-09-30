import { ButtonContainer } from './styles';
import React, { useEffect } from 'react';

const Button = ({ label, onClick }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      
      const keyPressed = event.key.toLowerCase(); // Converta a tecla pressionada para minúsculas para tratamento de maiúsculas/minúsculas

      // Verifique se10 a tecla pressionada corresponde a um dos botões específicos
      if ((keyPressed === label.toLowerCase() && label !== '=') || (keyPressed === 'enter' && label === '=')) {
        onClick(); // Chame a função de clique se a tecla pressionada corresponder ao rótulo do botão ou se a tecla for "Enter" e o rótulo for "="
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [label, onClick]);

  
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
    
  );
  
};



export default Button;
