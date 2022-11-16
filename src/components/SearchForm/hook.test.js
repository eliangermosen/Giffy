import { act, renderHook } from "@testing-library/react";
import useForm from "./hook";

const setup = (params) => 
    renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup()

    // act: simula como react se comporta en un navegador
    // la sincronia del state que tiene la controla
    act(() => {
        // current es un objeto que va guardando las diferentes
        //ejecuciones del hook
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should use initial value', () => {
    const { result } = setup({
        initialKeyword: 'matrix'
    })

    expect(result.current.keyword).toBe('matrix')
})

test('should update correctly times when used twice', () => {
    const { result } = setup({
        initialKeyword: 'matrix'
    })

    act(() => {
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })

    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2)
})