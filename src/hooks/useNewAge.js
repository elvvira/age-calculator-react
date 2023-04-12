import { useState } from 'react';

export const useNewAge = () => {
	const [newAge, setNewAge] = useState({
		day: 0,
		month: 0,
		year: 0
	});
	const [showInfo, setShowInfo] = useState(false);

	const changeDay = (value, newAge, setNewAge) => {
		setNewAge({ ...newAge, day: value });
	};

	const changeMonth = (value, newAge, setNewAge) => {
		setNewAge({ ...newAge, month: value });
	};

	const changeYear = (value, newAge, setNewAge) => {
		setNewAge({ ...newAge, year: value });
	};

	const newDate = (newAge, setNewAge) => {
		const { day, month, year } = newAge;
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

		setNewAge({
			day: d,
			month: m,
			year: y
		});
	};
	return {
		newAge,
		setNewAge,
		changeDay,
		changeMonth,
		changeYear,
		newDate,
		showInfo,
		setShowInfo
	};
};
