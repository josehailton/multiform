import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Resume</p>
        <h1>Confira seus Dados</h1>
        <p>
          Caso os dados precisem de ajustes, retorne as páginas anteriores e
          faça as devidas modificações
        </p>

        <hr />

        <label>
          <h3>{state.name}</h3>
        </label>

        <label>
          {state.level === 0 && (
            <>
              <C.LevelArea>
                <C.Icon>🥳</C.Icon>
                <C.Title>Sou iniciante</C.Title>
                <C.Description>
                  Comecei a programar há menos de 2 anos
                </C.Description>
              </C.LevelArea>
            </>
          )}

          {state.level === 1 && (
            <>
              <C.LevelArea>
                <C.Icon>👨‍💻</C.Icon>
                <C.Title>Sou programador</C.Title>
                <C.Description>Já programo há 2 anos ou mais</C.Description>
              </C.LevelArea>
            </>
          )}
        </label>

        <label>
          <C.ContactArea>
            <text>{state.email}</text>
            <text>{state.github}</text>
          </C.ContactArea>
        </label>

        <Link to="/step3" className="backButton">
          Voltar
        </Link>
      </C.Container>
    </Theme>
  );
};
