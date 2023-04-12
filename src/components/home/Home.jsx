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

import { useNewAge } from '../../hooks/useNewAge';

const Home = () => {
	const {
		newAge,
		setNewAge,
		changeDay,
		changeMonth,
		changeYear,
		newDate,
		showInfo,
		setShowInfo
	} = useNewAge();
	return (
		<HomeContainer>
			<FormContainer>
				<StyledForm>
					<StyledLabel htmlFor=''>DAY</StyledLabel>
					<StyledInput
						onChange={e => changeDay(e.target.value, newAge, setNewAge)}
						type='text'
						placeholder='--'
						maxLength='2'
					/>
				</StyledForm>
				<StyledForm>
					<StyledLabel htmlFor=''>MONTH</StyledLabel>
					<StyledInput
						onChange={e => changeMonth(e.target.value, newAge, setNewAge)}
						type='text'
						placeholder='--'
						maxLength='2'
					/>
				</StyledForm>{' '}
				<StyledForm>
					<StyledLabel htmlFor=''>YEAR</StyledLabel>
					<StyledInput
						onChange={e => changeYear(e.target.value, newAge, setNewAge)}
						type='text'
						placeholder='----'
						maxLength='4'
					/>
				</StyledForm>
			</FormContainer>

			<img
				onClick={() => {
					setShowInfo(!showInfo);
					newDate(newAge, setNewAge);
				}}
				src='images/arrow.svg'
				alt=''
			/>

			<div>
				<StyledAge>
					<StyledSpan>{showInfo ? newAge.year : '--'}</StyledSpan> years
				</StyledAge>
				<StyledAge>
					<StyledSpan>{showInfo ? newAge.month : '--'}</StyledSpan> months
				</StyledAge>
				<StyledAge>
					<StyledSpan>{showInfo ? newAge.day : '--'}</StyledSpan> days
				</StyledAge>
			</div>
		</HomeContainer>
	);
};

export default Home;
