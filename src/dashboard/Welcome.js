import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import { translate } from 'admin-on-rest';

const styles = {
    welcome: {
        padding: '40px'
    }
};

export default translate(({ style, translate }) => (
    <Card style={style}>
        <CardHeader style={styles.welcome}
            title={translate('pos.dashboard.welcome.title')}
            subtitle={translate('pos.dashboard.welcome.subtitle')}
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
    </Card>
));
