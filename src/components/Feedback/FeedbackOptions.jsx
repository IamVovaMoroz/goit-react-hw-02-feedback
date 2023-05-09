// FeedbackOptions.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Buttons } from './FeedbackOptions.styled';



export const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return (

<ButtonContainer>
			{options.map(option => {
				return (
					<Buttons type="button" key={option} value={option} onClick={onLeaveFeedback}>
						{option}
					</Buttons>
				);
			})}
		</ButtonContainer>

    )

}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string),
	onLeaveFeedback: PropTypes.func,
};