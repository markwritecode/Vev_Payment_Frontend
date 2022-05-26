import { useState } from 'react'
import StepOne from '../components/SignUp/StepOne'
import StepTwo from '../components/SignUp/StepTwo'

const SignUp = () => {

    const [step, setStep] = useState('verify')
    const [responseData, setResponseData] = useState({})

    const incrementStep = () => setStep('create')

    const renderPage = () => {
        if (step === 'verify') return <StepOne incrementStep={incrementStep} setResponseData={setResponseData} />
        else if (step === 'create') return <StepTwo responseData={responseData} />
        else return <StepOne />
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-white'>
            {renderPage()}
        </div>
    )
}

export default SignUp