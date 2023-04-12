import styled from 'styled-components';

const HomeContainer = styled.div`
	position: relative;
	top: 80px;
	width: 343px;
	height: 486px;
	margin-right: auto;
	margin-left: auto;
	border-radius: 24px 24px 100px 24px;
	padding: 38px 14px;
	background-color: white;
`;
const FormContainer = styled.div`
	display: flex;
	width: 295px;
	gap: 1rem;
	margin-bottom: 2rem;
`;
const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledLabel = styled.label`
	font-size: 12px;
	font-weight: 700;
	color: #716f6f;
	letter-spacing: 0.25em;
`;
const StyledInput = styled.input`
	width: 88px;
	height: 54px;
	border: 1px solid #dcdcdc;
	border-radius: 8px;
	font-size: 2rem;
`;
const StyledAge = styled.p`
	font-weight: 800;
	font-size: 56px;
	letter-spacing: -0.02em;
`;
const StyledSpan = styled.span`
	color: #854dff;
	font-style: italic;
`;
export {
	HomeContainer,
	FormContainer,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledAge,
	StyledSpan
};
