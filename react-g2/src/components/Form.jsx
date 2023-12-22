import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import dataQuestions from '../data/dataQuestions.json';

const Form = () => {
    

    const renderItem = item => {

        if (item.type === "RadioButton") {
            return (
                <div>
                    {item.answerOptions.map((value, index) => (
                        <div className='check' key={index}>
                            <input type="radio" name={item.id} value={value} />{value}
                        </div>
                    ))}
                </div>
            );
        } else if (item.type === "CheckBox") {
            return (
                <div>
                    {item.answerOptions.map((value, index) => (
                        <div className='check' key={index}>
                            <input type="checkbox" name={item.id} value={value} />{value}
                        </div>
                    ))}
                </div>
            );

        } else if (item.type === "Liste Deroulante") {
            return (

                <div className='text'>
                    <select>
                        {item.answerOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            );
        } else { // ShortText
            return <input type="text" />;
        }
    }

    return (
        <div>
            <Navbar />
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <h1>Mes formulaires</h1>
                    <div className="form">
                        <ul>
                            {dataQuestions.map((dataQuestion) => (
                                <li key={dataQuestion.id}>
                                    <p>{dataQuestion.content}</p>
                                    {renderItem(dataQuestion)}
                                </li>
                            ))}
                        </ul>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
