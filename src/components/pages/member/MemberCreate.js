import React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';


const From = styled.form` 
    padding: 1%;
    max-width: 500px;
    margin: auto;
    background: #2b598c;

`;

const Div = styled.div`
    margin: 1%;
`;

const Label = styled.label`
   margin:0 2% 0 0;
   color:#ffff
`;

const Input = styled.input`
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 30px;
    width:90%
`;

const ErrorLabel = styled.div`
color:red;
`;

const DivButton = styled.div`

`;


const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export default function MemberCreate() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <From onSubmit={formik.handleSubmit}>
            <Div>
                <div>
                    <Label htmlFor="firstName">First Name</Label>
                </div>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
            </Div>
            <Div>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <ErrorLabel>{formik.errors.firstName}</ErrorLabel>
                ) : null}
            </Div>
            <Div>
                <div>
                    <Label htmlFor="lastName">Last Name</Label>
                </div>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
            </Div>
            <Div>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <ErrorLabel>{formik.errors.lastName}</ErrorLabel>
                ) : null}
            </Div>
            <Div>
                <div>
                    <Label htmlFor="email">Email Address</Label>
                </div>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </Div>
            <Div>
                {formik.touched.email && formik.errors.email ? (
                    <ErrorLabel>{formik.errors.email}</ErrorLabel>
                ) : null}
            </Div>

            <button type="submit">Submit</button>
        </From>
    );
};