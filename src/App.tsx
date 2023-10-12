import {Stack} from "@chakra-ui/react";
import Result from "./components/Result";
import Form from "./components/Form";

function App() {
    return (
        <Stack spacing='3rem'>
            <Form />
            <Result />
        </Stack>
    );
}

export default App;
