import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DoB } from './DoB'
import './Sign-Up.scss'

export function SignUp() {
    const [fields, handleFieldChange] = useFormFields({
        name: '',
        lastName: '',
        userName: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: null,
    })
    const nav = useNavigate()

    function validateForm() {
        return (
            fields.name.length > 0 &&
            fields.lastName.length > 0 &&
            fields.address.length > 0 &&
            fields.userName.length > 0 &&
            // validateEmail(fields.email) &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        )
    }

    async function handleSubmit(event) {
        event.preventDefault()
        nav('/dashboard')
    }

    function useFormFields(initialState) {
        const [fields, setValues] = useState(initialState)
        return [
            fields,
            function (event) {
                setValues({
                    ...fields,
                    [event.target.id]: event.target.value,
                })
            },
        ]
    }

    function renderForm() {
        return (
            <div className="SignUpStyle">
                <Form>
                    <Form.Group controlId="name" size="lg">
                        <Form.Label>Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="name"
                            value={fields.name}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="lastName" size="lg">
                        <Form.Label>Last Name </Form.Label>
                        <Form.Control
                            type="lastname"
                            value={fields.lastName}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="address" size="lg">
                        <Form.Label>Address </Form.Label>
                        <Form.Control
                            type="address"
                            value={fields.address}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <DoB />
                    <Form.Group>
                        <Form.Label>User name </Form.Label>
                        <Form.Control
                            type="username"
                            value={fields.userName}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                            type="password"
                            value={fields.password}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type="password"
                            value={fields.confirmPassword}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Button
                        block="true"
                        size="lg"
                        type="submit"
                        disabled={!validateForm()}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }

    return <div>{renderForm()}</div>
}

// function validateEmail(email)
