import { useState } from 'react';
import {
	FormContainer,
	HomeContainer,
	StyledAge,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledSpan
} from './styled';

const OtherHome = () => {
	const [day, setDay] = useState(0);
	const [month, setMonth] = useState(0);
	const [year, setYear] = useState(0);
	const [newAge, setNewAge] = useState({
		day: 0,
		month: 0,
		year: 0
	});
	const [showInfo, setShowInfo] = useState(false);
	return (
		<HomeContainer>
			<FormContainer>
				<StyledForm>
					<StyledLabel htmlFor=''>DAY</StyledLabel>
					<StyledInput
						onChange={e => changeDay(e.target.value, e.target.length, setDay)}
						type='text'
						placeholder='--'
						length='12'
					/>
				</StyledForm>
				<StyledForm>
					<StyledLabel htmlFor=''>MONTH</StyledLabel>
					<StyledInput
						onChange={e => changeMonth(e.target.value, setMonth)}
						type='text'
						placeholder='--'
					/>
				</StyledForm>{' '}
				<StyledForm>
					<StyledLabel htmlFor=''>YEAR</StyledLabel>
					<StyledInput
						onChange={e => changeYear(e.target.value, setYear)}
						type='text'
						placeholder='----'
					/>
				</StyledForm>
			</FormContainer>

			<img
				onClick={() => {
					setShowInfo(!showInfo);
					newDate(day, month, year, setDay, setMonth, setYear);
				}}
				src='images/arrow.svg'
				alt=''
			/>

			<div>
				<StyledAge>
					<StyledSpan>{showInfo ? year : '--'}</StyledSpan> years
				</StyledAge>
				<StyledAge>
					<StyledSpan>{showInfo ? month : '--'}</StyledSpan> months
				</StyledAge>
				<StyledAge>
					<StyledSpan>{showInfo ? day : '--'}</StyledSpan> days
				</StyledAge>
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

const newDate = (day, month, year, setDay, setMonth, setYear) => {
	const actualDate = new Date();
	let actualYear = Number(actualDate.getFullYear());
	let actualMonth = Number(actualDate.getMonth() + 1);
	let actualDay = Number(actualDate.getDate() + 1);
	const monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (day > actualDay) {
		actualDay = actualDay + monthArray[actualMonth - 1];
		actualMonth = actualMonth - 1;
	}

	if (month > actualMonth) {
		actualMonth = actualMonth + 12;
		actualYear = actualYear - 1;
	}

	let d = actualDay - day;
	let m = actualMonth - month;
	let y = actualYear - year;
	setDay(d);
	setMonth(m);
	setYear(y);
};
export default OtherHome;
