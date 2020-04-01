import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import {cyan500} from 'material-ui/styles/colors';
import Visibility from 'material-ui/svg-icons/action/visibility';

const EyeButton = ({ basePath = '', record = {} }) => (
    <IconButton
        containerElement={<Link to={`${basePath}/${record.id}`} />}
        style={{ overflow: 'inherit' }}
    >
        <Visibility color={cyan500} />
    </IconButton>
);

EyeButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

EyeButton.defaultProps = {
    style: { padding: 0 },
};

export default EyeButton;
