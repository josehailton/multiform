// Context, Reducer, Provider, Hook
import { ReactNode, createContext, useContext, useReducer } from 'react';

type State = {
    currentStep: number,
    name: string,
    level: 0 | 1;
    email: string;
    github: string;
}

type Action = {
    type: FormActions;
    payload: any;
};

type ContextType = {
    state: State,
    dispatch: (action: Action) => void
}

const initialData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

type FormProviderProps = {
    children: ReactNode
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch }
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}