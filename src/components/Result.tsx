import {Card, CardBody, CardHeader, Heading, Highlight, Skeleton, Stack} from "@chakra-ui/react";
import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Result = () => {
    const {items, loading, error} = useTypedSelector(state => state.human)
    if(error) {
        return <Heading size='md'>{error}!</Heading>
    }
    return (
        <Skeleton isLoaded={!loading}>
            <Card>
                <CardHeader>
                    {items !== null && items.length === 0 ? (
                        <Heading size='md'>Никого ненашли!</Heading>
                    ) : (
                        <Heading size='md'>Всё что мы нашли!</Heading>
                    )}
                </CardHeader>
                <CardBody>
                    {items !== null ? items.map(item => (
                        <>
                            <Heading size='md'>Данные:</Heading>
                            <Stack>
                                {item && (
                                    <>
                                        <Highlight query={item.email} styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                                            {item.email}
                                        </Highlight>
                                        <Highlight query={item.number} styles={{ px: '1', py: '1', bg: 'pink.100' }}>
                                            {item.number}
                                        </Highlight>
                                    </>
                                )}
                            </Stack>
                        </>
                    )) : (
                        <Heading>Таких нет</Heading>
                    )}
                </CardBody>
            </Card>
        </Skeleton>
    )
}

export default Result