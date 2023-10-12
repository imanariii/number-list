import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader, Code,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack
} from "@chakra-ui/react";
import React, {ChangeEventHandler, useState} from "react";
import {useActions} from "../hooks/useActions";

const Form = () => {
    const [number, setNumber] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const domen = '@gmail.com';
    const isTrue = email.includes(domen) && email.length > 12 && email.endsWith(domen);
    const {fetchHuman} = useActions()


    const handleChangeNumber: ChangeEventHandler<HTMLInputElement> = (event) => {
        if(number.length === 8) {
            setNumber(prevState => prevState)
        } else {
            if(number.length === 2 ||
                number.length === 5) {
                setNumber(prevState => prevState+'-'+event.target.value.slice(-1))
            } else {
                setNumber(event.target.value)
            }
        }
    }

    const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value)
    }

    const submitButton = () => {
        const data = {
            email: email,
            number: number === '' ? null : number
        }
        fetchHuman(data)
    }
    return (
        <Card width="50vw">
            <CardHeader>
                <Heading size='md'>Вход</Heading>
            </CardHeader>
            <CardBody>
                <Stack spacing='1.6rem'>
                <FormControl isInvalid={isTrue}>
                    <FormLabel>Email address</FormLabel>
                    <Input value={email} type='email' onChange={handleChangeEmail} />
                    {isTrue ? (
                        <FormHelperText color='green'>
                            Все хорошо
                        </FormHelperText>
                    ) : (
                        <FormHelperText color="red">Email обязателен! <br/>
                    <Code colorScheme='yellow' children='Пример: ivanivanov@gmail.com' />
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl>
                    <FormLabel>Номер</FormLabel>
                    <Stack>
                        <Input type="text" value={number} onChange={handleChangeNumber} />
                        <Button onClick={()=>setNumber('')}>Очистить поле</Button>
                    </Stack>
                    <FormHelperText>Должен содержать цифры!</FormHelperText>
                </FormControl>
            </Stack>
            </CardBody>
            <CardFooter>
                <Button colorScheme='teal' style={{width: '100%'}} onClick={submitButton}>Отправить</Button>
            </CardFooter>
        </Card>
    )
}

export default Form;