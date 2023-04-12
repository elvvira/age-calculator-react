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
					<span>{showInfo ? year : '00'}</span> years
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
	newDate(Number(setDay));
};

const changeMonth = (value, setMonth) => {
	setMonth(value);
	newDate(setMonth);
};

const changeYear = (value, setYear) => {
	setYear(value);
	newDate(setYear);
};

const newDate = (setDay, setMonth, setYear) => {
	const actualDate = new Date();
	const actualYear = Number(actualDate.getFullYear());
	const actualMonth = Number(actualDate.getMonth() + 1);
	const actualDay = Number(actualDate.getDate() + 1);
	const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (setDay > actualDay) {
		actualDay = actualDay + month[actualMonth - 1];
		actualMonth = actualMonth - 1;
	} else if (setMonth > actualMonth) {
		actualMonth = actualMonth + 12;
		actualYear = actualYear - 1;
	}
	let d = actualDay - setDay;
	let m = actualMonth - setMonth;
	let y = actualYear - setYear;

	return d, m, y;
};
export default Home;
