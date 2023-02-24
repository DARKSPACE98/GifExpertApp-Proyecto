import { GifItem } from "../../src/components/GifItem";
import React, { Component } from 'react';
import { render } from "@testing-library/react";

describe('Pruebas en el GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Titulo debe ser obligatorio', () => {
        
        const { container } = render(<GifItem title={title} />)
        expect(container).toMatchSnapshot();
     })

     test('Url debe ser obligatorio', () => {
        
        const { container } = render(<GifItem url={url} />)
        expect(container).toMatchSnapshot();
     })
     
 })