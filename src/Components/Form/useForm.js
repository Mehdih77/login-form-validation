import { useEffect, useState } from 'react'

export default function useForm(submitForm,validateInfo) {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password:'',
        password2:''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validateInfo(values))
        //console.log(setErrors(validateInfo(values)));
        setIsSubmitting(true)
    }
    
    useEffect(() => {
        //console.log(Object.keys(errors).length);
       if (Object.keys(errors).length === 0 && isSubmitting) {
        submitForm();
       }
    }, [errors,isSubmitting,submitForm])

    return {values, handleChange, handleSubmit, errors}
}
