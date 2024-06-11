import React from 'react';
import { Box, Heading, Text, Input, Checkbox, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App">
      <header className="App-header">
        <Heading as="h1" className="title">
          Lista de Tarefas
        </Heading>
        <Text as="p" className="subtitle">
          <strong>Inserir nova tarefa</strong>
        </Text>
        <Box display="flex" alignItems="center" mb={4}>
          <Input type="text" className="task-input" placeholder="Digite o título da tarefa" mr={2} marginTop={-18}/>
          <Checkbox style={{ marginTop: '-18px' }}>Realizada?</Checkbox>
          <Button colorScheme="red" ml={2} marginTop={-18} color="white" bg="#B91C1C">Inserir</Button>
        </Box>
        <Box className="task-container">
          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={4}>
            <Text as="p" className="text">Tarefa 1</Text>
            <Box>
              <Button colorScheme="red" ml={10} mr={10} color="white" bg="#B91C1C">Pendente</Button>
              <Button colorScheme="red" color="white" bg="#B91C1C">Excluir</Button>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={4}>
            <Text as="p" className="text">Tarefa 2</Text>
            <Box>
              <Button colorScheme="red" ml={10} mr={10} color="white" bg="#B91C1C">Pendente</Button>
              <Button colorScheme="red" color="white" bg="#B91C1C">Excluir</Button>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={4}>
            <Text as="p" className="text">Tarefa 3</Text>
            <Box>
              <Button colorScheme="red" ml={10} mr={10} color="white" bg="#B91C1C">Pendente</Button>
              <Button colorScheme="red" color="white" bg="#B91C1C">Excluir</Button>
            </Box>
          </Box>
        </Box>
      </header>
    </Box>
  );
}

export default App;
