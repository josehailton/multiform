import styled from 'styled-components';

export const Container = styled.div`

    p {
        font-size: 13px;
        color: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;
    }

    text {
        margin-bottom: 15px;
    }

    .backButton {
        display: flex;
        font-size: 16px;
        text-decoration: none;
        padding: 10px 40px;
        color: #FFF;
        margin: 30px 0;
        width: 40px;
        border:  1px solid;
        border-radius: 40px;

        &:hover {    
            background-color: #25CD89;
            border-radius: 40px;
        }
    }
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #191A59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const LevelArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ContactArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

