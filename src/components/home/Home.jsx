import { useState } from 'react';
import {
	FormContainer,
	HomeContainer,
	StyledForm,
	StyledInput,
	StyledLabel
} from './styled';

const Home = () => {
	const [day, setDay] = useState(0);
	const [month, setMonth] = useState(0);
	const [year, setYear] = useState(0);
	const [showInfo, setShowInfo] = useState(false);
	return (
		<HomeContainer>
			<FormContainer>
				<StyledForm>
					<StyledLabel htmlFor=''>DAY</StyledLabel>
					<StyledInput
						onChange={e => changeDay(e.target.value, setDay)}
						type='text'
					/>
				</StyledForm>
				<StyledForm>
					<StyledLabel htmlFor=''>MONTH</StyledLabel>
					<StyledInput
						onChange={e => changeMonth(e.target.value, setMonth)}
						type='text'
					/>
				</StyledForm>{' '}
				<StyledForm>
					<StyledLabel htmlFor=''>YEAR</StyledLabel>
					<StyledInput
						onChange={e => changeYear(e.target.value, setYear)}
						type='text'
					/>
				</StyledForm>
			</FormContainer>

			<img
				onClick={() => setShowInfo(!showInfo)}
				src='images/arrow.svg'
				alt=''
			/>

			<div>
				<p>
					<span>{showInfo ? day : '00'}</span> years
				</p>
				<p>
					<span>{showInfo ? day : '00'}</span> months
				</p>
				<p>
					<span>{showInfo ? day : '00'}</span> days
				</p>
			</div>
		</HomeContainer>
	);
};

const changeDay = (value, setDay) => {
	setDay(value);
};

const changeMonth = (value, setMonth) => {
	setMonth(value);
};

const changeYear = (value, setYear) => {
	setYear(value);
};

const newDate = (setDay, setMonth, setYear) => {};

export default Home;
