import React from 'react';

const Form = ({ dataQuestions }) => {

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
            // Remplacer cette logique par la logique appropriée pour Liste Deroulante
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
            return <input type="text"/>;
        }
    }

    return (
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
    )
}

export default Form;
