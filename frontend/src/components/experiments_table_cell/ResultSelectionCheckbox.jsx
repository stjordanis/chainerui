import React from 'react';
import PropTypes from 'prop-types';
import * as uiPropTypes from '../../store/uiPropTypes';
import Check from '../FormControl/Check';

const ResultSelectionCheckbox = (props) => {
  const resultStateList = props.targetResults.map((result) => props.resultsStatus[result.id] || {});
  const currentCheckState =
    resultStateList.every((item) => item.checked) && resultStateList.length > 0;

  return (
    <Check
      inline
      className="ml-2"
      type="checkbox"
      checked={currentCheckState}
      onChange={() =>
        props.onChange(
          props.project.id,
          props.targetResults.map((result) => ({
            id: result.id,
            checked: !currentCheckState,
          }))
        )
      }
    />
  );
};

ResultSelectionCheckbox.propTypes = {
  project: uiPropTypes.project.isRequired,
  targetResults: PropTypes.arrayOf(uiPropTypes.result).isRequired,
  resultsStatus: uiPropTypes.resultsStatus.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ResultSelectionCheckbox;
