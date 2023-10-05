import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
          navigate('/');
        } else {
          dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
          });
        }
      }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            navigate('/step4');
        } else {
            alert('Preencha todo os campos');
        }
        
    }

    const hadleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const hadleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 - {state.name}</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus dados de contato.</p>

                <hr/>

                <label>
                    Qual seu email?
                    <input 
                        type="email"
                        value={state.email}
                        onChange={hadleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input 
                        type="url"
                        value={state.github}
                        onChange={hadleGitHubChange}
                    />
                </label>

                <Link to='/step2' className='backButton' >Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>   
    );
}