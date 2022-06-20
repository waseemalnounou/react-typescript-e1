import React from 'react';
import { render, screen } from '@testing-library/react';
import Async from './async';

describe("Async component",()=>{
    test("render Async component",async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:"p1",title:"title"}]
        });
        render(<Async/>);
        const listitemelements=await screen.findAllByRole('listitem');
        expect(listitemelements).not.toHaveLength(0);
    });
})