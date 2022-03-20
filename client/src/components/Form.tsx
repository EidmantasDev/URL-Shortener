import axios from 'axios';
import React, { useState } from 'react';
import { Button, Box, Input, InputGroup } from "@chakra-ui/react";
import {SERVER_ENDPOINT} from '../config';

function Form(){
    const [urlToTransform, setUrlToTransform] = useState<{id: string} | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    setUrlToTransform(null);
        const result = await axios
            .post(`${SERVER_ENDPOINT}/api/url`, {
                urlToTransform,
            })
            .then((res) => res.data);

        setUrlToTransform(result);
    }

    return <Box pos="relative">
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <Input onChange={(e: any) =>  setUrlToTransform(e.target.value)}/>
                <Button type="submit">Make Short</Button>
            </InputGroup>
        </form>
        {urlToTransform?.id && <a href={`${SERVER_ENDPOINT}/${urlToTransform?.id}`}>{`${SERVER_ENDPOINT}/${urlToTransform?.id}`}</a>}
    </Box>
}

export default Form;