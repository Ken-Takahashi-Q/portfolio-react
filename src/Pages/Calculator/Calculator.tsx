import './calculator.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Calculator() {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const root = document.querySelector(':root');
	
	const selectMode = () => {
		setIsDarkMode(!isDarkMode);
		root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
	};

	useEffect(() => {
		root.dataset.theme = 'dark';
	}, []);

	// For calculation
	const [calc, setCalc] = useState("");
	const ops = ['/', '*', '+', '-', '.'];

	const updateCalc = (value) => {
		// Don't calculate when equation not completed
		if (
			(ops.includes(value) && calc === "") ||
			(ops.includes(value) && ops.includes(calc.slice(-1)))
		) {
			return;
		}
		setCalc(calc + value);
	};

	const calculate = () => {
		setCalc(eval(calc).toString());
	};

	const allClear = () => {
		setCalc("")
	};

	const deleteLast = () => {
		if (calc === "") {
			return;
		}

		const value = calc.slice(0, -1);
		setCalc(value);
	};
	
	return (
		<div className="calculator-app">
			<div className="mode_box">
				<span style={{ visibility: isDarkMode ? 'hidden' : 'visible', transition: "0s" }}>
					<p style={{transition: "0s"}}>Dark Mode</p></span>

				<div className="mode">
					<input type="checkbox" id="switch" isOn={isDarkMode} onChange={selectMode}/>
					<label for="switch"></label>
				</div>

				<span>
					<p style={{transition: "0s"}} >Light Mode</p>
				</span>
			</div>
			
			<div className="calculator">
				<div className="display">
					{ calc || "0" }
				</div>

				<div className="numpad">
					<div className="cell_11">
						<button style={{width: "100%"}} className="tool" onClick={allClear}>AC</button>
					</div>

					<div className="cell_13">
						<button className="tool" onClick={deleteLast}><FontAwesomeIcon icon={faDeleteLeft} /></button>
					</div>

					<div className="cell_14">
						<button className="operant" onClick={() => updateCalc('/')}>/</button>
					</div>

					{[1, 2, 3, 4].map((value) => {
						return (
							<div className={`cell_2${value}`}>
								<button onClick={() => updateCalc(String(value+6))}>{value+6}</button>
							</div>
						)
					})}
					<div className="cell_24">
						<button className="operant" onClick={() => updateCalc('*')}>*</button>
					</div>

					{[1, 2, 3].map((value) => {
						return (
							<div className={`cell_3${value}`}>
								<button onClick={() => updateCalc(String(value+3))}>{value+3}</button>
							</div>
						)
					})}
					<div className="cell_34">
						<button className="operant" onClick={() => updateCalc('-')}>-</button>
					</div>

					{[1, 2, 3].map((value) => {
						return (
							<div className={`cell_4${value}`}>
								<button onClick={() => updateCalc(String(value))}>{value}</button>
							</div>
						)
					})}
					<div className="cell_44">
						<button className="operant" onClick={() => updateCalc('+')}>+</button>
					</div>

					<div className="cell_51">
						<button style={{width: "100%"}} onClick={() => updateCalc('0')}>0</button>
					</div>

					<div className="cell_53">
						<button onClick={() => updateCalc('.')}>.</button>
					</div>

					<div className="cell_54">
						<button className="operant" onClick={calculate}>=</button>
					</div>
				</div>
			</div>
		</div>
	);
}
