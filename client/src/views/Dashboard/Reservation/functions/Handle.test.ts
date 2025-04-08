import {handleHour, HandleInputs} from "./Handle.ts"
import React from "react";
import {vi} from "vitest";

const InputsTests =
    [           //Input Nom
        {   //Correct Name?
            correct: {
                target:{
                    name: "nom",
                    value: "DOE"
                },
                expect:{
                    value: "DOE",
                    error: false
                }
            },
            //Incorrect Name?
            error: {
                target:{
                    name: "nom",
                    value: "DOE123456"
                },
                expect:{
                    value: "DOE123456",
                    error: true
                }
            }
        },
        //Input Prenom
        {   //Correct Prenom?
            correct: {
                target:{
                    name: "prenom",
                    value: "John"
                },
                expect:{
                    value: "John",
                    error: false
                }
            },
            //Incorrect Prenom?
            error: {
                target:{
                    name: "prenom",
                    value: "John123456"
                },
                expect:{
                    value: "John123456",
                    error: true
                }
            }
        },
        //Input Email
        {   //Correct Email?
            correct: {
                target:{
                    name: "email",
                    value: "johnDoe@example.com"
                },
                expect:{
                    value: "johnDoe@example.com",
                    error: false
                }
            },
            //Incorrect Email?
            error: {
                target:{
                    name: "email",
                    value: "johnDoe-example.com"
                },
                expect:{
                    value: "johnDoe-example.com",
                    error: true
                }
            }
        },
    ]

describe("Handle functions", ():void=> {
    it('should call setState with the button value', ():void => {
        const mockSetState = vi.fn()
        const mockEvent = {
            preventDefault: vi.fn(),
            currentTarget: {value: '15:00'}
        } as unknown as React.MouseEvent<HTMLButtonElement>

        handleHour(mockEvent, mockSetState)

        expect(mockEvent.preventDefault).toHaveBeenCalled()
        expect(mockSetState).toHaveBeenCalledWith("15:00")
    });

    InputsTests.forEach(test => {

        it(`should call setState with the "${test.correct.target.name}" input`, ():void => {
            const mockSetState = vi.fn()
            const mockEvent = test.correct as unknown as React.ChangeEvent<HTMLInputElement>

            HandleInputs(mockEvent, mockSetState)
            expect(mockSetState).toHaveBeenCalledWith(test.correct.expect)
        });

        it(`should put error if "${test.correct.target.name}" is incorrect`, ():void => {
            const mockSetState = vi.fn()
            const mockEvent = test.error as unknown as React.ChangeEvent<HTMLInputElement>
            HandleInputs(mockEvent, mockSetState)
            expect(mockSetState).toHaveBeenCalledWith(test.error.expect)
        })
    })

})